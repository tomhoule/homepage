
build:
    cargo run -p generator -- public

check:
    cargo test -p generator
    rm -rf target/site-check
    cargo run -p generator -- target/site-check
    python3 scripts/check_site.py target/site-check

serve:
    python3 -m http.server 8000 --bind 127.0.0.1 --directory public

watch:
    watchexec -w generator/src -w generator/static -w generator/templates -w content/blog cargo run
