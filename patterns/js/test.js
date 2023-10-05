// wing1
const massageCurve = function (inputNum, strength) {
    let output = Math.pow(Math.abs(inputNum), strength);
    if (inputNum < 0) {
        output *= -1;
    };
    return output
};
const deg2cos = function (deg, density) {
    return Math.cos(density * deg / 360 * 2 * Math.PI);
}
const deg2cos_alt = function (deg, density, massage) {
    const factor = 1 * Math.abs(Math.cos(1 * density * deg / 360 * 2 * Math.PI) + 1);
    return Math.pow(Math.cos(density * deg / 360 * 2 * Math.PI) + 1, 1) * Math.pow(factor, massage);
}
let shape_wing1 = ''
for (let deg = 0; deg < 360; deg += 0.8) {
    let rx = 65;
    let ry = 126;
    let cy = 355;
    rx += deg2cos_alt(deg, 12, 1) * -6;

    ry = ry * (deg2cos_alt(deg, 24, 0.5) + 11) / 11;
    ry = ry * (deg2cos(deg, 2) + 5) / 5;

    ry += deg2cos_alt(deg + 30, 2, 1) * 26;
    ry += deg2cos_alt(deg - 30, 2, 1) * 26;
    
    ry += deg2cos_alt(deg, 2, 0.5) * 2;

    cy += deg2cos_alt(deg, 2, 1) * 15;
    cy += deg2cos_alt(deg+30, 12, 2.22) * -1.33;
    cy += deg2cos_alt(deg+30, 2, 2.22) * 6.33;
    cy += deg2cos_alt(deg-30, 2, 2.22) * 6.33;
    // final
    rx = Math.floor(rx * 25) / 25;
    ry = Math.floor(ry * 25) / 25;
    shape_wing1 += `<ellipse cx="0" cy="${cy}" rx="${rx}" ry="${ry}" stroke="blue" stroke-width="1.0" transform="rotate(${deg})" />`;
};



console.log(`<svg width="1000" height="auto" viewBox="-800 -800 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    </defs>
    ${shape_wing1}
    <rect x="-444" y="-700" width="888" height="1400" fill="white" opacity="1" stroke="#DEADBF" stroke-width="1.00" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
