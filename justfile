
build:
    cargo run -p generator -- public

check:
    cargo test -p generator
    rm -rf target/site-check
    cargo run -p generator -- target/site-check
    python3 scripts/check_site.py target/site-check

deploy:
    npm ci --no-audit --no-fund
    SITE_OUTPUT_DIR="$(nix build --no-link --print-out-paths .#default)" CLOUDFLARE_ACCOUNT_ID=2f2f566d50ccc9fe3ffc4af0fb475f23 npm exec -- cf build
    CLOUDFLARE_ACCOUNT_ID=2f2f566d50ccc9fe3ffc4af0fb475f23 npm exec -- cf deploy --prebuilt

serve:
    python3 -m http.server 8000 --bind 127.0.0.1 --directory public

watch:
    watchexec -w generator/src -w generator/static -w generator/templates -w content/blog cargo run
