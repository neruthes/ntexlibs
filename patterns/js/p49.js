// P49 is a modern frame with border tiling

const svgplotlib = require("../utils/jslib/svgplotlib.js");


const corner_circle_radius = 5 + 22.0 + 51.0 * (2.100 + 1) / 2.100;
let mycornershape1 = `<circle x="0" y="0" r="${corner_circle_radius}" fill="black" stroke="white" stroke-width="1.0" />`;
for (let deg = -16; deg <= 16; deg += 4) {
    mycornershape1 += svgplotlib.drawpolarcircle({
        func: function (theta_rad) {
            return 22.0 + (Math.cos(8 * (theta_rad + deg / 360 * 2 * Math.PI)) + 2.100) / 2.100 * 51.0;
        },
        attrs: { stroke: 'white', 'stroke-linejoin': 'round' }
    });
};



let mycornershape7 = '';
for (let offset = -11; offset <= -3; offset += 1) {
    mycornershape7 += svgplotlib.drawpolarcircle({
        func: function (theta_rad) {
            const vertCount = 4;
            let SECTION = (theta_rad % (2 * Math.PI / vertCount)) / (2 * Math.PI / vertCount); // range(0,1) repeating vertCount times
            let DOWNUP = Math.abs((SECTION - 0.5) * 2); // range(1,0,1)
            let APT = DOWNUP - 0.25;
            return (80 * 0.75 - offset * 1) + (80 * 0.25 + offset * 1) * APT + offset * 5.75;
        },
        attrs: { stroke: 'white', 'stroke-linejoin': 'round' }
    });
};





let shape_wing1 = '';
for (let ii = -6; ii <= 6; ii += 1) {
    const ii2 = (ii >= -2) ? 4 - ii : ii;
    let APT = Math.floor(1 * Math.cos(ii / 13 * 2 * Math.PI) * 100) / 100;
    let MY = 7 * APT;
    let DX = -46;
    let DY = 87;
    const startX = 405 + DX + 5.5 * ii;
    const startY = 645 + DY + 1.75 * MY;
    const destX = 400 - 5 + 4 * ii;
    const destY = 640 - 5 + 4 * ii;
    let DRAW = '';
    DRAW = `M ${startX},${startY}
        Q ${(startX + destX) / 2},${startY}
        ${destX},${destY}
    `;
    shape_wing1 += `<path d="${DRAW}" stroke="white" stroke-width="1" />`;
    const mirrorpoint = function (x1, y1) {
        const dy = 640 - 400;
        const x2 = y1 - dy;
        const y2 = x1 + dy;
        return `${x2},${y2}`;
    };
    DRAW = `M ${mirrorpoint(startX, startY)}
        Q ${mirrorpoint((startX + destX) / 2, startY)}
        ${destX},${destY}
    `;
    shape_wing1 += `<path d="${DRAW}" stroke="white" stroke-width="1" />`;
};

let shape_bc1_core1_side = '';
for (let ii = -6; ii <= 6; ii += 1) {
    let APT = Math.floor(1 * Math.cos(ii / 13 * 2 * Math.PI) * 100) / 100;
    let MY = 7 * APT;
    let DRAW = `M ${0 + 5.5 * ii},${5 - 1 * MY}
        c ${22 - 0 * ii} 0 ${22 - 0 * ii} ${82 + 2.75 * MY} 40 ${82 + 2.75 * MY}
    `;
    // let SY = (Math.cos(ii * 6 / 80 * 2 * Math.PI) + 11) / 11;
    let SY = 1;
    shape_bc1_core1_side += `<path d="${DRAW}" transform="scale(1,${SY})" stroke="white" stroke-width="1.0" />`
    shape_bc1_core1_side += `<path d="${DRAW}" transform="scale(-1,${SY})" stroke="white" stroke-width="1.0" />`
};

let shape_rowH = '';
for (let ii = -4; ii <= 4; ii += 1) {
    shape_rowH += `<use href="#bc1-core1" x="${80 * ii}" y="645" />`
};
let shape_rowV = '';
for (let ii = -7; ii <= 7; ii += 1) {
    shape_rowV += `<use href="#bc1-core1" transform="rotate(90)" x="${80 * ii}" y="405" />`
};





//<path d="M 0,0 L 5,15" stroke="#DEADBF" stroke-width="1.0" />
console.log(`<svg width="auto" height="100vh" viewBox="-800 -800 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <g id="corner1-inner">
            ${shape_wing1}
        </g>
        <g id="corner1">
            <use href="#corner1-inner" transform="rotate(0)" />
        </g>
        <g id="corner2-inner">
            ${mycornershape1}
        </g>
        <g id="corner2">
            <use href="#corner2-inner" transform="translate(430,670)" />
        </g>
        <g id="corner7-inner" clip-path="url(#myClipFor7)">
            ${mycornershape7}
        </g>
        <g id="corner7">
            <use href="#corner7-inner" transform="translate(430,670)" />
        </g>
        <g id="bc1-core1-side">
            ${shape_bc1_core1_side}
        </g>
        <g id="bc1-core1">
            <use href="#bc1-core1-side" transform="scale(1,1)" />
        </g>
        <g id="toprow">
            ${shape_rowH}
            ${shape_rowV}
        </g>
        <clipPath id="myClipFor7">
            <circle cx="0" cy="0" r="49" />
        </clipPath>
        <mask id="realbody">
            <use href="#toprow" transform="rotate(0)" />
            <use href="#toprow" transform="rotate(180)" />

            <use href="#corner1" transform="scale(1,1)" />
            <use href="#corner1" transform="scale(1,-1)" />
            <use href="#corner1" transform="scale(-1,1)" />
            <use href="#corner1" transform="scale(-1,-1)" />

            <use href="#corner2" transform="scale(1,1)" />
            <use href="#corner2" transform="scale(1,-1)" />
            <use href="#corner2" transform="scale(-1,1)" />
            <use href="#corner2" transform="scale(-1,-1)" />

            <use href="#corner7" transform="scale(1,1)" />
            <use href="#corner7" transform="scale(1,-1)" />
            <use href="#corner7" transform="scale(-1,1)" />
            <use href="#corner7" transform="scale(-1,-1)" />
        </mask>
    </defs>
    <rect x="-400" y="-640" width="800" height="1280" fill="none" opacity="0" stroke="#DEADBF" stroke-width="1.00" />
    <rect x="-3000" y="-3000" width="6000" height="6000" fill="#DEADBF" mask="url(#realbody)" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
