// P46 is a victorian frame


let shape_rowH = ''
for (let index = -21; index <= 22; index += 1) {
    shape_rowH += `<use x="${index*20-10}" y="690" href="#fc1" />`
};

let shape_rowV = ''
for (let index = -34; index <= 34; index += 1) {
    shape_rowV += `<use transform="rotate(90)" y="440" x="${index*20}" href="#fc1" />`
};






console.log(`<svg width="1000" height="auto" viewBox="-800 -800 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <rect id="fc1" x="-10" y="0" width="20" height="40" mask="url(#fc1-mask)" fill="#DEADBF" />
        <mask id="fc1-mask">
            <use x="0" y="0" href="#fc1-side" transform="scale(1,1)" />
            <use x="0" y="0" href="#fc1-side" transform="scale(-1,1)" />
        </mask>
        <g id="fc1-side">
            <path d="M 0,0.5 Q 6,7 8.5,26 Q 8.5,34 5.2,38.5 Q 1.5,34 1.5,26
                Q 1.5,19.25 10,19.25
                M 1.5,26 Q 1.5,17 4,17 l 0.75,-0.5 Q 0,7 -10,7" stroke="white" stroke-width="1.00" stroke-linejoin="round" />
        </g>

        <rect id="corner" x="0" y="0" width="600" height="900" mask="url(#corner-mask)" fill="#DEADBF" />
        <mask id="corner-mask">
            <!-- circle cx="0" cy="0" r="920" fill="none" / -->
            <use x="440" y="690" href="#corner-side" transform="scale(1,1)" />
            <use x="690" y="440" href="#corner-side" transform="scale(-1,1) rotate(90)" />
        </mask>
        <g id="corner-side">
            <path d="M 0,19.25 Q 8.5,19.25 8.5,26 Q 8.5,34 4.8,38.5 Q 1.5,34 1.5,26 Q 4,7 7.5,7.5
                M 0,7 Q 27,7 18,35 Q 38,37.5 39,39 Q 33,31.5 13,27 L 27,27" stroke="white" stroke-width="1.00" stroke-linejoin="round" mask="url(#corner-side-mask)" />
        </g>
        <mask id="corner-side-mask" >
            <path d="M 0,0 l 0,60 l 60,0 l 0,-60 Z" fill="white" />
        </mask>
    </defs>
    <rect x="-440" y="-690" width="880" height="1380" fill="none" opacity="1" stroke="#DEADBF" stroke-width="1.00" />
    <use href="#corner" transform="scale(1,1)" />
    <use href="#corner" transform="scale(1,-1)" />
    <use href="#corner" transform="scale(-1,1)" />
    <use href="#corner" transform="scale(-1,-1)" />
    <g>
        ${shape_rowH}
    </g>
    <g transform="scale(1,-1)">
        ${shape_rowH}
    </g>
    <g>
        ${shape_rowV}
    </g>
    <g transform="scale(-1,1)">
        ${shape_rowV}
    </g>
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
