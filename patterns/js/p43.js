// P43 is the core body of P42

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
            <rect x="-430" y="-680" width="860" height="1360" fill="white" />
        </mask>
        <mask id="outer-boxsize">
            <rect x="-3000" y="-3000" width="6000" height="6000" fill="white" />
            <rect x="-440" y="-690" width="880" height="1380" fill="black" />
        </mask>
    </defs>
    <g mask="url(#inner-boxsize)">
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="none" />
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="#DEADBF" mask="url(#tile1-mask)" />
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="#DEADBF" mask="url(#ring2-mask)" />
        <rect x="-3000" y="-3000" width="6000" height="6000" fill="#DEADBF" mask="url(#ring1-mask)" />
    </g>
    <rect x="-430" y="-680" width="860" height="1360" stroke="#DEADBF" stroke-width="1.00" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
