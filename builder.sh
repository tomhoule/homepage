# This is used to build the website as a nix derivation. See flake.nix.

declare -xp
set +x

export PATH="$hugo/bin:$coreutils/bin"

BUILDDIR=$TMPDIR/src

# Unfortunately, hugo can't build without mutating the build directory.
# see https://discourse.gohugo.io/t/error-failed-to-create-file-caches-from-configuration/16964/5
cp -r $src $BUILDDIR
chmod +rw -R $BUILDDIR 

hugo \
    --ignoreCache \
    --source $BUILDDIR \
    --forceSyncStatic \
    --destination $out \
    --verbose
