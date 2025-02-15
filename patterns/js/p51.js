const svgplotlib = require("../utils/jslib/svgplotlib.js");


const make_range = function (n1, n2) {
    let arr = [];
    for (let ptr = n1; ptr < n2; ptr += 1) {
        arr.push(ptr);
    };
    return arr;
};



let outer_ring = ``;
for (let itr = 0; itr < 4; itr += 1) {
    const path = `
M 0 270 c 10 -48 18 -79 34 -106 s 45 -6 35 13 c -5 9 -12 12 -20 12
`;
    [1, -1].forEach(function (mirror) {
        outer_ring += `<path transform="scale(${mirror},1) rotate(${itr * 90})" stroke-linejoin="round" stroke-linecap="round"
            stroke="#DEADBF" stroke-width="13.00" d="${path}"  />\n`;
    });
};


let outer_ring_alt = ``;
for (let itr = 0; itr < 4; itr += 1) {
    const path = `
M 0 272 c 24 -104 26 -115 43 -121
`;
    [1, -1].forEach(function (mirror) {
        outer_ring_alt += `<path transform="scale(${mirror},1) rotate(${itr * 90 + 45})" stroke-linejoin="round" stroke-linecap="round"
            stroke="#DEADBF" stroke-width="10.00" d="${path}"  />\n`;
    });
};




let out_sharp_deco = ``;
for (let itr = 0; itr < 4; itr += 1) {
    const path = `
M 0 190 l 17 -34 -17 25 -17 -25 Z
M 0 127 l 17 12 -17 -9 -17 9 Z
`; // Lower anchor Y used to be 144, for closing
    out_sharp_deco += `<path fill-rule="nonzero"
        transform="rotate(${itr * 90 + 0})" stroke-linejoin="round" stroke-linecap="round"
        stroke="#DEADBF" fill="#DEADBF" stroke-width="8.00" d="${path}"  />\n`;
};

let out_sharp_deco_alt = ``;
for (let itr = 0; itr < 4; itr += 1) {
    const path = `
M 0 183 l 12 -46 -12 0 -12 -0 Z
`;
    out_sharp_deco_alt += `<path fill-rule="nonzero"
        transform="rotate(${itr * 90 + 45})" stroke-linejoin="round" stroke-linecap="round"
        stroke="#DEADBF" fill="#DEADBF" stroke-width="8.00" d="${path}"  />\n`;
};



let middle_ring = ``;
for (let itr = 0; itr < 4; itr += 1) {
    let path = ``;
    let points = [];
    for (let deg = -30; deg <= 30; deg += 1) {
        const radius = 136;
        const deg_rad = deg / 360 * 2 * Math.PI;
        let xx = radius * Math.cos(deg_rad);
        let yy = radius * Math.sin(deg_rad);
        points.push(`${xx},${yy}`);
    };
    path = `M ` + points.join(' L ');
    middle_ring += `<path fill-rule="nonzero"
            transform="scale(1,1) rotate(${itr * 90 + 45})" stroke-linejoin="round" stroke-linecap="round"
            stroke="#DEADBF" fill="none" stroke-width="8.00" d="${path}"  />\n`;
};


let beams_mask_inner = '';


let top_letters = (function () {
    let tmpstr = '';
    // let letters = 'SEMES'.split('');
    const inner_func = function (letter, index, polarity) {
        const attr_transform = `rotate(${((index - 2) * 2 / 40 * 360 * -polarity)})`;
        const shared_attrs = `x="0" y="${(420 * polarity + 27)}"
            font-size="78" font-family="Noto Sans Display" text-anchor="middle"
            stroke-linejoin="round"
            transform="${attr_transform} scale(0.85,1)"`;
        beams_mask_inner += `<path d="M 0,${360 * polarity} l 0,${120 * polarity}"
            stroke="black" stroke-width="40" transform="${attr_transform}" />\n`;
        return `
            <text fill="#DEADBF" stroke="#DEADBF" stroke-width="2.5" ${shared_attrs}>${letter}</text>
        `;
    };
    return 'ΕΙΛΑΜ'.split('').map(function (letter, index) {
        return inner_func(letter, index, 1);
    }).join('\n') + 'ΣΕΜΕΣ'.split('').map(function (letter, index) {
        return inner_func(letter, index, -1);
    }).join('\n');
})();





console.log(`<svg width="700" height="auto" viewBox="-600 -600 ${2 * 600} ${2 * 600}" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="soleil_clip-1">
            <rect x="-200" y="${245+85}" width="400" height="1000" />
        </clipPath>
        <clipPath id="soleil_clip-2">
            <rect x="-200" y="${245+42}" width="400" height="1000" />
        </clipPath>
        <clipPath id="soleil_clip-3">
            <rect x="-200" y="${245}" width="400" height="1000" />
        </clipPath>

        <mask id="beams_mask">
            <rect x="-2000" y="-2000" width="4000" height="4000" fill="white" opacity="1" stroke="none" />
            ${beams_mask_inner}
        </mask>

        <polygon id="solarbeamitem" points="0,-110 21,2800 -21,2800" fill="#DEADBF"  />
    </defs>

    <!-- Background for debugging -->
    <rect x="-2000" y="-2000" width="4000" height="4000" fill="black" opacity="0" stroke="none" />


    ${outer_ring}
    ${outer_ring_alt}
    ${out_sharp_deco}
    ${out_sharp_deco_alt}

    ${middle_ring}

    <circle cx="0" cy="0" r="34" fill="#DEADBF" />

    <path id="middlehiveitem" d="M 0,72 l 29,15 -29,15 -29,-15 Z " fill="#DEADBF" stroke="#DEADBF" stroke-width="5.00" stroke-linejoin="round" />
    <use href="#middlehiveitem" transform="rotate(60)" />
    <use href="#middlehiveitem" transform="rotate(120)" />
    <use href="#middlehiveitem" transform="rotate(180)" />
    <use href="#middlehiveitem" transform="rotate(240)" />
    <use href="#middlehiveitem" transform="rotate(300)" />

    <g mask="url(#beams_mask)">
    ${ make_range(0, 40).map(function (counter) {
        let deg = counter / 40 * 360;
        let remnant = counter % 5;
        let clip_level = 1;
        if (remnant === 1 || remnant === 4) {
            clip_level = 2;
        };
        if (remnant === 2 || remnant === 3) {
            clip_level = 3;
        };
        return `<use href="#solarbeamitem" clip-path="url(#soleil_clip-${clip_level})" transform="rotate(${deg})" />`;
    }).join('\n') }
    </g>


    ${top_letters}
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
