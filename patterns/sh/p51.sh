#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p51.$suffix.svg"
    node js/p51.js > "$svg"
    rsvg-convert "$svg" -z6 -o "$svg.png"
    # rsvg-convert "$svg" -z2 --format=pdf -o "$svg.pdf" # Really necessary?
    realpath "$svg"*
}

# makeitem '000000' 'black'
makeitem 'FFFFFF' 'white'

magick _dist/p51.white.svg.png -channel RGB -negate _dist/p51.black_null.svg.png

magick _dist/p51.white.svg.png -channel A -negate _dist/p51.invert.svg.png


magick -size 4200x4200 xc:black .tmp/black_background.png
magick composite -geometry +0+0 _dist/p51.white.svg.png .tmp/black_background.png _dist/p51.white_solid.svg.png


