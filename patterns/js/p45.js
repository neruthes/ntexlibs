// P45 is a corner decoration group


// wing1
const deg2cos = function (deg, density) {
    return Math.cos(density * deg / 360 * 2 * Math.PI);
}
let shape_wing1 = ''
const STEP = 1;
let index = 0;
for (let pdeg = -17; pdeg <= 17; pdeg += STEP) {
    let sx = 1;
    let sy = 1;
    let cx = 0;
    let cy = 200;
    let tx = 440-100;
    let ty = 690-100;
    const MID = -45;
    const SHIFT = 0 + 0.2 * Math.abs(pdeg);
    cy += -6 * Math.abs(pdeg);
    sx += 0.01 * Math.abs(pdeg);
    tx += pdeg < 0 ? SHIFT * pdeg : -Math.pow(Math.abs(pdeg), 1.6)/Math.pow(17, 1.6) * 30;
    ty += pdeg > 0 ? -SHIFT * pdeg : -Math.pow(Math.abs(pdeg), 1.6)/Math.pow(17, 1.6) * 30;
    if (pdeg === 0) {
        tx += -2;
        ty += -2;
    };
    // final
    let realdeg = 0 + MID;
    realdeg = -4 * pdeg + MID;
    // realdeg = pdeg * 1 * (1 + Math.pow(Math.abs(pdeg), 1) / Math.pow(35, 1)) + MID;
    sx = Math.floor(sx * 25) / 25;
    sy = Math.floor(sy * 25) / 25;
    // realdeg = Math.floor(realdeg * 25) / 25;
    shape_wing1 += `<path d="M 0,${cy} q 46,-1 33,-122 M 0,${cy} q -46,-1 -33,-122" stroke="#DEADBF" stroke-width="1.0" transform="translate(${tx},${ty}) rotate(${realdeg}) scale(${sx},${sy})" />`;
};





console.log(`<svg width="1000" height="auto" viewBox="-800 -800 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <mask id="outer-boxsize">
            <rect x="-3000" y="-3000" width="6000" height="6000" fill="white" />
            <rect x="-440" y="-690" width="880" height="1380" fill="black" />
        </mask>
        <g id="corner">
            ${shape_wing1}
        </g>
    </defs>
    <g id="realbody" mask="url(#outer-boxsize)">
        <use href="#corner" transform="scale(1,1)" />
        <use href="#corner" transform="scale(1,-1)" />
        <use href="#corner" transform="scale(-1,1)" />
        <use href="#corner" transform="scale(-1,-1)" />
    </g>
    <rect x="-440" y="-690" width="880" height="1380" fill="none" opacity="0.9" stroke="#DEADBF" stroke-width="1.00" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
