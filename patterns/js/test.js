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
for (let deg = 0; deg < 360; deg += 1.5) {
    let rx = 22;
    let ry = 60;
    let cy = 120;
    // rx += deg2cos(deg, 8) * 5;

    ry = ry * (deg2cos(deg, 8) + 66) / 66;
    
    ry += deg2cos(deg, 8) * 7;
    ry += -7;

    cy += deg2cos(deg, 8) * 12;
    // final
    rx = Math.floor(rx * 25) / 25;
    ry = Math.floor(ry * 25) / 25;
    let realdeg = deg;
    // let realdeg = deg + Math.floor(3 * deg2cos(deg+90/4, 4) * 100) / 100;
    shape_wing1 += `<ellipse cx="0" cy="${cy}" rx="${rx}" ry="${ry}" stroke="blue" stroke-width="1.0" transform="rotate(${realdeg})" />`;
};



console.log(`<svg width="1000" height="auto" viewBox="-300 -300 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    </defs>
    ${shape_wing1}
    <rect x="-444" y="-700" width="888" height="1400" fill="white" opacity="0" stroke="#DEADBF" stroke-width="1.00" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
