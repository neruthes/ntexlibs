#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p45.$suffix.svg"
    node js/p45.js > "$svg"
    rsvg-convert "$svg" -z3 -o "$svg.png"
    rsvg-convert "$svg" -z2 --format=pdf -o "$svg.pdf"
    realpath "_dist/p45"*
}

makeitem '000000' 'black'
# makeitem 'EEEEEE' 'EEEEEE'
# makeitem 'DDDDDD' 'DDDDDD'
