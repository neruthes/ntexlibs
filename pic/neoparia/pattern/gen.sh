#!/bin/bash

# function colorize() {
#     
# }

function _colorizeImage() {
    INFN="$1"
    COLOR_CODE="$2"
    OUTFN="$3"
    convert "$INFN" -colorize "$COLOR_CODE" "$OUTFN"
}
function makeClass() {
    MYCLASS=$1
    TILESIZE=$2

    ### Normal
    # _colorizeImage $MYCLASS-black.png 0,25,55 $MYCLASS-blue.png
    # _colorizeImage $MYCLASS-black.png 55,47,0 $MYCLASS-yellow.png
    _colorizeImage $MYCLASS-black.png 0,45,15 $MYCLASS-green.png

    ### Opacity 20%
    # _colorizeImage $MYCLASS-black_20p.png 0,25,55 $MYCLASS-blue_20p.png
    # _colorizeImage $MYCLASS-black_20p.png 55,47,0 $MYCLASS-yellow_20p.png
    _colorizeImage $MYCLASS-black_20p.png 0,45,15 $MYCLASS-green_20p.png
    
    # for MyColor in black black_20p blue blue_20p yellow yellow_20p green green_20p; do
    for MyColor in green green_20p; do
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
