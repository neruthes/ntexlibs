const svgplotlib = require("../utils/jslib/svgplotlib.js");

let mycornershape7 = '';
for (let offset = -11; offset <= 17; offset += 1) {
    mycornershape7 += svgplotlib.drawpolarcircle({
        func: function (theta_rad) {
            const vertCount = 4;
            let SECTION = (theta_rad % (2 * Math.PI / vertCount)) / (2 * Math.PI / vertCount); // range(0,1) repeating vertCount times
            let DOWNUP = Math.abs((SECTION - 0.5) * 2); // range(1,0,1)
            let APT = DOWNUP - 0.25;
            return (80 * 0.7 - offset * 1) + (80 * 0.3 + offset * 1) * APT + offset*5.5;
        },
        attrs: { stroke: '#DEADBF', 'stroke-linejoin': 'round' }
    });
};



console.log(`<svg width="1000" height="auto" viewBox="-300 -300 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    </defs>
    <rect x="-444" y="-700" width="888" height="1400" fill="white" opacity="1" stroke="#DEADBF" stroke-width="1.00" />
    ${mycornershape7}
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
