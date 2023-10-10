#!/bin/bash

function makeitem() {
    export color="$1"
    suffix="$2"
    svg="_dist/p49.$suffix.svg"
    node js/p49.js > "$svg"
    rsvg-convert "$svg" -z4 --format=pdf -o "$svg.pdf"
    rsvg-convert "$svg" -z4 -o "$svg.png"
    realpath "$svg"*
}

makeitem '000000' 'black'
