
build:
    hugo build

serve:
    python3 -m http.server 8000 --bind 127.0.0.1 --directory public

watch:
    hugo serve
