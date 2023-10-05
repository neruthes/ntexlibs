// wing1
let shape_wing1 = ''
for (let deg = 0; deg < 360; deg += 1.5) {
    let rx = 100;
    let ry = 400;
    ry += Math.floor(Math.cos(4 * deg / 360 * 2 * Math.PI) * -50);
    shape_wing1 += `<ellipse cx="0" cy="300" rx="${rx}" ry="${ry}" stroke="blue" stroke-width="1.0" transform="rotate(${deg})" />`;
};



console.log(`<svg width="1000" height="auto" viewBox="-800 -800 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    </defs>
    ${shape_wing1}
    <rect x="-444" y="-700" width="888" height="1400" fill="white" opacity="0.9" stroke="#DEADBF" stroke-width="1.00" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
