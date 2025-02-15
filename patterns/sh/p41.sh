#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p41.$suffix.svg"
    node js/p41.js > "$svg"
    rsvg-convert "$svg" -z3 -o "$svg.png"
    rsvg-convert "$svg" -z2 --format=pdf -o "$svg.pdf"
    realpath "_dist/p41"*
}

makeitem '000000' 'black'
makeitem 'EEEEEE' 'EEEEEE'
makeitem 'DDDDDD' 'DDDDDD'
