
build:
    hugo build

serve:
    python3 -m http.server 8000 --bind 127.0.0.1 --directory public

watch:
    watchexec -w generator/src -w generator/static -w generator/templates cargo run
