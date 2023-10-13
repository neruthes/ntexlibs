#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p47.$suffix.svg"
    node js/p47.js > "$svg"
    rsvg-convert "$svg" -z4 -o "$svg.png"
    realpath "_dist/p47"*
}

makeitem '000000' 'black'
makeitem 'C7E9D8' 'green20'
# makeitem 'DDDDDD' 'DDDDDD'
