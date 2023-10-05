// ring1
let shape_ring1 = ''
for (let shift = 0; shift < 360; shift += 4) {
    let prog = shift / 360 * 2 * Math.PI;
    if (Math.cos(6 * prog) > -0.88) {
        shape_ring1 += `<use href="#ring1-obj1" transform="rotate(${shift})" fill="none" stroke="white" stroke-width="1.00" />`;
    }
};

// ring2
let shape_ring2 = ''
for (let shift = 0; shift < 360; shift += 3) {
    shape_ring2 += `<use href="#ring2-obj1" transform="rotate(${shift})" fill="none" stroke="white" stroke-width="1.00" />`;
};

// shape_tile1
let shape_tile1 = ''
for (let shift_x = -40; shift_x <= 40; shift_x += 1) {
    for (let shift_y = -40; shift_y <= 40; shift_y += 1) {
        const width = 64;
        const height = 96;
        let xx = width * shift_x;
        let yy = height * shift_y;
        if (shift_y % 2 == 0) {
            xx += width * 0.5;
        };
        shape_tile1 += `<use href="#tile1-inner" transform="translate(${xx},${yy})" />`;
    };
};




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
    let rx = 51;
    let ry = 126;
    let cy = 355;
    rx += deg2cos_alt(deg, 10, 1) * 2;

    ry = ry * (deg2cos_alt(deg, 24, 0.5) + 11) / 11;
    // ry = ry * (deg2cos_alt(deg, 2, 0.67) + 55) / 55;
    ry = ry * (deg2cos(deg, 2) + 5) / 5;

    ry += deg2cos_alt(deg + 30, 2, 1) * 26;
    ry += deg2cos_alt(deg - 30, 2, 1) * 26;

    ry += deg2cos_alt(deg, 2, 0.5) * 2;

    cy += deg2cos_alt(deg, 2, 1) * 15;
    cy += deg2cos_alt(deg + 30, 12, 2.22) * -1.33;
    cy += deg2cos_alt(deg + 30, 2, 2.22) * 6.33;
    cy += deg2cos_alt(deg - 30, 2, 2.22) * 6.33;
    // final
    rx = Math.floor(rx * 25) / 25;
    ry = Math.floor(ry * 25) / 25;
    shape_wing1 += `<ellipse cx="0" cy="${cy}" rx="${rx}" ry="${ry}" stroke="#DEADBF" stroke-width="1.0" transform="rotate(${deg})" />`;
};





console.log(`<svg width="1000" height="auto" viewBox="-800 -800 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <ellipse id="ring1-obj1" cx="0" cy="90" rx="90" ry="110" />
        <ellipse id="ring2-obj1" cx="0" cy="150" rx="94" ry="106" />
        <g id="tile1-obj1">
            <path d="M 0,2.00 L 2.00,2.00 2.00,0
                M 0,6.00 L 6.00,6.00 6.00,0
                M 0,10.00 L 10.00,10.00 10.00,0
                M 0,14.00 L 14.00,14.00 14.00,0
                M 0,18.00 L 14.00,18.00 14.00,34.00 18.00,34.00 18.00,2.00 32.00,2.00
                M 0,22.00 L 10.00,22.00 10.00,38.00 22.00,38.00 22.00,6.00 32.00,6.00
                M 0,26.00 L 6.00,26.00 6.00,42.00 26.00,42.00 26.00,10.00 32.00,10.00
                M 0,30.00 L 2.00,30.00 2.00,46.00 30.00,46.00 30.00,14.00 32.00,14.00
            " stroke="white" stroke-width="1.0" stroke-linejoin="round" />
        </g>
        <g id="tile1-inner">
            <use href="#tile1-obj1" transform="scale(1,1)" />
            <use href="#tile1-obj1" transform="scale(1,-1)" />
            <use href="#tile1-obj1" transform="scale(-1,1)" />
            <use href="#tile1-obj1" transform="scale(-1,-1)" />
        </g>
        <mask id="tile1-mask">
            ${shape_tile1}
            <circle cx="0" cy="0" r="250" fill="black" stroke="white" stroke-width="1.00" />
        </mask>

        <mask id="ring1-mask">
            ${shape_ring1}
            <circle cx="0" cy="0" r="54" fill="black" stroke="white" stroke-width="1.00" />
        </mask>
        <mask id="ring2-mask1">
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="white"  />
            <circle cx="0" cy="0" r="240" fill="black" stroke="white" stroke-width="1.00" />
        </mask>
        <mask id="ring2-mask">
            ${shape_ring2}
            <circle cx="0" cy="0" r="210" fill="black" stroke="white" stroke-width="1.00" />
            <rect x="-3000" y="-3000" width="6000" height="6000" fill="black" mask="url(#ring2-mask1)" />
            <circle cx="0" cy="0" r="240" stroke="white" stroke-width="1.00" />
        </mask>
        <mask id="inner-boxsize">
            <rect x="-3000" y="-3000" width="6000" height="6000" fill="black" />
            <rect x="-424" y="-680" width="848" height="1360" fill="white" />
        </mask>
        <mask id="outer-boxsize">
            <rect x="-3000" y="-3000" width="6000" height="6000" fill="white" />
            <rect x="-439" y="-695" width="878" height="1390" fill="black" />
        </mask>
    </defs>
    <g mask="url(#outer-boxsize)">
        ${shape_wing1}
    </g>
    <g mask="url(#inner-boxsize)">
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="none" />
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="#DEADBF" mask="url(#tile1-mask)" />
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="#DEADBF" mask="url(#ring2-mask)" />
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="#DEADBF" mask="url(#ring1-mask)" />
    </g>
    <rect x="-424" y="-680" width="848" height="1360" stroke="#DEADBF" stroke-width="1.00" />
    <rect x="-439" y="-695" width="878" height="1390" fill="none" opacity="1" stroke="#DEADBF" stroke-width="1.00" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
