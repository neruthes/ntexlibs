const svgplotlib = require("../utils/jslib/svgplotlib.js");

let outer_ring = ``;
for (let itr = 0; itr < 4; itr += 1) {
    const path = `
M 0 270 c 10 -48 18 -79 34 -106 s 45 -6 35 13 c -5 9 -12 12 -20 12
`;
    [1,-1].forEach(function (mirror) {
        outer_ring += `<path transform="scale(${mirror},1) rotate(${itr * 90})" stroke-linejoin="round" stroke-linecap="round"
            stroke="#DEADBF" stroke-width="13.00" d="${path}"  />\n`;
    });
};


let outer_ring_alt = ``;
for (let itr = 0; itr < 4; itr += 1) {
    const path = `
M 0 272 c 24 -104 26 -115 43 -121
`;
    [1,-1].forEach(function (mirror) {
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



let middle_ing = ``;
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
    middle_ing += `<path fill-rule="nonzero"
            transform="scale(1,1) rotate(${itr * 90 + 45})" stroke-linejoin="round" stroke-linecap="round"
            stroke="#DEADBF" fill="none" stroke-width="8.00" d="${path}"  />\n`;
};


console.log(`<svg width="700" height="auto" viewBox="-300 -300 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    </defs>
    <rect x="-444" y="-700" width="888" height="1400" fill="white" opacity="1" stroke="#DEADBF" stroke-width="1.00" />
    ${outer_ring}
    ${outer_ring_alt}
    ${out_sharp_deco}
    ${out_sharp_deco_alt}

    ${middle_ing}

    <circle cx="0" cy="0" r="115" fill="#DEADBF" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
