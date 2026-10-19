# tomhoule.com

The source for [tomhoule.com](https://www.tomhoule.com).

## Build and preview

`just build` generates the site in `public/`; `just serve` serves it locally.
`just check` builds into a clean directory and checks links, sitemap, and feeds.
`nix build` builds and validates the site with the toolchain pinned in `flake.lock`.

## Release

GitHub Pages is hosted from `tomhoule/homepage`, with the custom domain
`www.tomhoule.com`. Pushes and pull requests to `main` run build checks only.
There are no preview deployments or automatic production releases.

After the desired changes are on GitHub's `main` branch, run `just deploy`
with an authenticated GitHub CLI, or select **Run workflow** on **Build and
publish site** in GitHub Actions and choose `main`. The workflow builds and
checks the site with Nix, then deploys that exact artifact using the
`github-pages` environment. A manual run on any other branch only checks the
build; it cannot publish.

`just deploy` releases **remote `main`**, not the local checkout. It does not
push local changes. The workflow must first be present on `main`.
The command only submits the release: check the resulting Actions run and
confirm deployment succeeded before considering the site published.
