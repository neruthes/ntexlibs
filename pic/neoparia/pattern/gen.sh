#!/bin/bash

# function colorize() {
#     INFN=$1
#     OUTFN=$2
#     COLORSPEC=$3
# }

function makeClass() {
    MYCLASS=$1
    TILESIZE=$2
    convert $MYCLASS-black.png -colorize 0,25,55 $MYCLASS-blue.png
    convert $MYCLASS-black.png -colorize 55,47,0 $MYCLASS-yellow.png
    convert $MYCLASS-black_20p.png -colorize 0,25,55 $MYCLASS-blue_20p.png
    convert $MYCLASS-black_20p.png -colorize 55,47,0 $MYCLASS-yellow_20p.png
    for MyColor in black black_20p blue blue_20p yellow yellow_20p; do
        echo "Making $MYCLASS-$MyColor.tile.png"
        convert -size $TILESIZE tile:$MYCLASS-$MyColor.png $MYCLASS-$MyColor.tile.png
    done
}

TARGET=$1
case $TARGET in
    EP6)
        makeClass EP6 9600x9600
        ;;
    EP9)
        makeClass EP9 9600x9728
        ;;
    *)
        echo "Please specify a TARGET"
        ;;
esac
