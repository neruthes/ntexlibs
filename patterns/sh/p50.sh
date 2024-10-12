#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p50.$suffix.svg"
    node js/p50.js > "$svg"
    rsvg-convert "$svg" -z6 -o "$svg.png"
    # rsvg-convert "$svg" -z2 --format=pdf -o "$svg.pdf"
    realpath "$svg"*
}

makeitem '000000' 'black'
# makeitem 'EEEEEE' 'EEEEEE'
# makeitem 'DDDDDD' 'DDDDDD'
