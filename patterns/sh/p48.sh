#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p48.$suffix.svg"
    node js/p48.js > "$svg"
    rsvg-convert "$svg" -z4 --format=pdf -o "$svg.pdf"
    rsvg-convert "$svg" -z4 -o "$svg.png"
    realpath "_dist/p48"*
}

makeitem '000000' 'black'
makeitem '555555' '555555'
makeitem '777777' '777777'


bash utils/colorize.sh _dist/p48.777777.svg.png '#224499-#008811' _dist/p48.gradient.blue-green.png
