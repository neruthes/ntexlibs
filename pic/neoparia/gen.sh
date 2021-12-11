### Colorize
# convert N-PageBorder.eps -colorize 0,25,55 N-PageBorder.blue.eps
#   blue        0,25,55
#   green       0,45,15
#   yellow      55,47,0

### Tiling
# convert -size 9600x9600 tile:EP6-black.png EP6-black.tile.png

function makePageBorder() {
    BORDER_COLOR_NAME="$1"
    BORDER_COLOR_CODE="$2"
    convert N-PageBorder.eps -colorize "$BORDER_COLOR_CODE" "N-PageBorder.$BORDER_COLOR_NAME.eps"
    convert N-PageBorder.eps -colorize "$BORDER_COLOR_CODE" "N-PageBorder.$BORDER_COLOR_NAME.png"
}

case $1 in
    PageBorder)
        make$1 $2 $3
        ;;
    *)
        echo 'ERROR: Class ($1) must be PageBorder'
        ;;
esac