#!/bin/bash

INPUT="$1" # input.png
GRADIENT="$2" # blue-green

OUTPUT="$3"
[[ -z "$OUTPUT" ]] && OUTPUT="$1.$(sed "s/#//g" <<< "$GRADIENT").png"

# Convert the input image to grayscale and extract alpha channel
convert "$INPUT" -colorspace Gray -alpha extract alpha.png
convert "$INPUT" -colorspace Gray -alpha off gray.png

# Create a gradient image with the same dimensions as the input image
size=$(identify -format "%wx%h" "$INPUT")
convert -size $size gradient:"$GRADIENT" -rotate 0 gradient.png

# Apply the gradient to the grayscale image
convert gradient.png gray.png -compose Overlay -composite temp.png

# Reapply the alpha channel
convert temp.png alpha.png -compose CopyOpacity -composite "$OUTPUT"

# Clean up intermediate files
rm alpha.png gray.png gradient.png temp.png

realpath "$OUTPUT"
