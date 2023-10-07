// P45 is a corner decoration group


// wing1
const deg2cos = function (deg, density) {
    return Math.cos(density * deg / 360 * 2 * Math.PI);
}
let shape_wing1 = ''
const STEP = 0.5;
const dSTEP = 0.015;
let index = 0;
for (let deg = 32.00; deg < 50; deg += STEP) {
    deg += dSTEP * index;
    let rx = 60;
    let ry = 355;
    let cy = 505;
    rx += 2.5 * Math.abs(deg - 32.00);
    ry *= (-Math.abs(Math.pow(Math.abs(deg - 32.00), 1.1)) + 44) / 44;

    cy *= (-Math.abs(Math.pow(Math.abs(deg - 32.00), 1.1)) + 99) / 99;
    cy += 34 * (-Math.abs(Math.pow(Math.abs(deg - 32.00), 1.1)) + 99) / 99;
    // final
    rx = Math.floor(rx * 25) / 25;
    ry = Math.floor(ry * 25) / 25;
    shape_wing1 += `<ellipse cx="0" cy="${cy}" rx="${rx}" ry="${ry}" stroke="#DEADBF" stroke-width="1.0" transform="rotate(${deg})" />`;
    index += 1;

};
index = 0;
for (let deg = 32.00-STEP; deg > 5; deg -= STEP) {
    deg -= dSTEP * index;
    let rx = 60;
    let ry = 355;
    let cy = 505;
    rx += 2.5 * Math.abs(deg - 32.00);
    ry *= (-Math.abs(Math.pow(Math.abs(deg - 32.00), 0.9)) + 44) / 44;

    cy += 34 * (-Math.abs(Math.pow(Math.abs(deg - 32.00), 1.1)) + 22) / 22;
    // final
    rx = Math.floor(rx * 25) / 25;
    ry = Math.floor(ry * 25) / 25;
    shape_wing1 += `<ellipse cx="0" cy="${cy}" rx="${rx}" ry="${ry}" stroke="#DEADBF" stroke-width="1.0" transform="rotate(${deg})" />`;
    index += 1;
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
    <rect x="-440" y="-690" width="880" height="1380" fill="white" opacity="0.9" stroke="#DEADBF" stroke-width="1.00" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
