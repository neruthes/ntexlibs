#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p46.$suffix.svg"
    node js/p46.js > "$svg"
    rsvg-convert "$svg" -z5 -o "$svg.png"
    rsvg-convert "$svg" -z2 --format=eps -o "$svg.eps"
    realpath "$svg"*
}

makeitem '000000' 'black'
# makeitem 'EEEEEE' 'EEEEEE'
# makeitem 'DDDDDD' 'DDDDDD'