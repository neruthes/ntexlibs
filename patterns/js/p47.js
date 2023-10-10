// shape_tile1
let shape_tile1 = ''
const tile1_linetmpl = ` c 29 0 31 8.25 60 8.25 c 29 0 31 -8.25 60 -8.25 `;
const maketile1line = function (XX, YY) {
    let strength = 0;
    let APT = Math.pow((Math.cos(YY / 80 * 2 * Math.PI) + 1) / 2, 0.9);
    strength += 7.000 * 8.20 * APT;
    strength = 7.000 * 8.20 * 1;
    const major = tile1_linetmpl.replace(/8\.25 /g, strength + ' ').replace(/--/g, '');
    let CX = XX * 120;
    let CY = YY * 7.000;
    CY += -0.5 * 7.000 * 8.20 * APT;
    let SX = 1;
    SX += 0.04 * Math.cos(YY / 160 * 2 * Math.PI);
    SX *= 3.5;
    return `<path d="M ${CX} ${CY} ${major}" stroke="white" stroke-width="1.00" stroke-linejoin="round" transform="scale(${SX},1)" />`;
};
for (let XX = -55; XX <= 55; XX += 1) {
    for (let YY = -190; YY <= 190; YY += 1) {
        shape_tile1 += maketile1line(XX, YY);
    };
};





console.log(`<svg width="1000" height="auto" viewBox="-800 -800 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <mask id="tile1-mask">
            ${shape_tile1}
        </mask>
    </defs>
    <rect x="-3000" y="-3000" width="6000" height="6000" fill="#DEADBF" mask="url(#tile1-mask)" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
