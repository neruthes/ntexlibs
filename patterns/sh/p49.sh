#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p49.$suffix.svg"
    node js/p49.js > "$svg"
    rsvg-convert "$svg" -z3 --format=pdf -o "$svg.pdf"
    rsvg-convert "$svg" -z3 -o "$svg.png"
    realpath "_dist/p49"*
}

makeitem '000000' 'black'
makeitem '777777' '777777'


bash utils/colorize.sh _dist/p49.777777.svg.png '#224499-#008811' _dist/p49.gradient.224499-008811.png
bash utils/colorize.sh _dist/p49.777777.svg.png '#F7E6C4-#F1C376' _dist/p49.gradient.F7E6C4-F1C376.png
