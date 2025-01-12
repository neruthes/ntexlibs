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
# makeitem 'EEEEEE' 'EEEEEE'
# makeitem 'DDDDDD' 'DDDDDD'
