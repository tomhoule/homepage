#!/usr/bin/env python3
"""Check that a clean generator output is internally navigable."""

import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import parse_qsl, unquote, urlsplit
import xml.etree.ElementTree as ET


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = []
        self.ids = set()
        self.redirect = False

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if tag == "meta" and attributes.get("http-equiv", "").lower() == "refresh":
            self.redirect = True
        self.ids.update(
            value for name, value in attrs if name == "id" or (tag == "a" and name == "name")
        )
        for name in ("href", "src"):
            if name in attributes:
                self.urls.append(attributes[name])


def check(root: Path):
    errors = []
    pages = sorted(root.rglob("*.html"))
    if not pages or not (root / "index.html").is_file():
        errors.append("No homepage found")

    documents = {}
    for page in pages:
        links = Links()
        content = page.read_text(encoding="utf-8")
        links.feed(content)
        documents[page] = links
        if (
            page == root / "index.html" or page.parent.parent == root
        ) and '<meta http-equiv="refresh"' not in content:
            if '<html lang="en">' not in content or 'href="#main"' not in content:
                errors.append(f"{page.relative_to(root)}: missing language or skip link")

    for page, links in documents.items():
        for url in links.urls:
            parsed = urlsplit(url)
            if parsed.netloc == "www.youtube.com" and any(
                name.startswith("amp;") for name, _ in parse_qsl(parsed.query)
            ):
                errors.append(f"{page.relative_to(root)}: double-escaped embed URL")
            if parsed.scheme or parsed.netloc:
                continue
            target = page
            if parsed.path:
                target = (root if parsed.path.startswith("/") else page.parent) / unquote(
                    parsed.path.lstrip("/") if parsed.path.startswith("/") else parsed.path
                )
            if not target.is_file() and not (target / "index.html").is_file():
                errors.append(f"{page.relative_to(root)}: missing {url}")
                continue
            document = target / "index.html" if target.is_dir() else target
            if document in documents and documents[document].redirect:
                errors.append(f"{page.relative_to(root)}: link points to redirect {url}")
            if parsed.fragment and document in documents:
                fragment = unquote(parsed.fragment)
                if fragment not in documents[document].ids:
                    errors.append(f"{page.relative_to(root)}: missing fragment {url}")

    namespace = "{http://www.sitemaps.org/schemas/sitemap/0.9}"
    sitemap = ET.parse(root / "sitemap.xml")
    locations = [node.text for node in sitemap.iter(f"{namespace}loc")]
    if len(locations) != len(set(locations)):
        errors.append("Duplicate sitemap URLs")
    if len(locations) < 2:
        errors.append("Sitemap has no posts")
    for location in locations:
        path = urlsplit(location).path
        if not ((root / path.lstrip("/")) / "index.html").is_file():
            errors.append(f"Sitemap target missing: {location}")

    for feed in ("index.xml", "blog/index.xml"):
        channel = ET.parse(root / feed).getroot().find("channel")
        items = channel.findall("item")
        if not items:
            errors.append(f"{feed} has no items")
        for item in items:
            location = item.findtext("link")
            if not ((root / urlsplit(location).path.lstrip("/")) / "index.html").is_file():
                errors.append(f"{feed}: item target missing: {location}")

    return errors, len(pages)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path, help="Fresh generator output directory")
    args = parser.parse_args()
    errors, count = check(args.output)
    for error in errors:
        print(error)
    if errors:
        raise SystemExit(1)
    print(f"Checked {count} HTML pages, local links, sitemap, and RSS feeds")


if __name__ == "__main__":
    main()
