#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/test.$suffix.svg"
    node js/test.js > "$svg"
    # rsvg-convert "$svg" -z3 -o "$svg.png"
    # rsvg-convert "$svg" -z2 --format=pdf -o "$svg.pdf"
    realpath "$svg"*
}

makeitem '000000' 'black'
# makeitem 'EEEEEE' 'EEEEEE'
# makeitem 'DDDDDD' 'DDDDDD'
