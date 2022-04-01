# This is used to build the website as a nix derivation. See flake.nix.

declare -xp
set +euxo pipefail

mkdir -p $TMPDIR/cache

# Unfortunately, hugo can't build without mutating the build directory.
# see https://discourse.gohugo.io/t/error-failed-to-create-file-caches-from-configuration/16964/5
cp -r --no-preserve=ownership,mode $src $TMPDIR/src

hugo \
    --ignoreCache=true \
    --cacheDir=$TMPDIR/cache \
    --source $TMPDIR/src \
    --destination $out \
    --verbose
