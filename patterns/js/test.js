const svgplotlib = require("../utils/jslib/svgplotlib.js");



let middle_content = '';
for (let group_id = 7; group_id >= 0; group_id--) {
    let tmpstr1 = '';
    let tmpstr2 = '';
    const major_repeats = 6 + 4 * Math.floor(group_id / 2);
    // Certain shakes per 360deg
    const shakes = 16*3 + 16 * Math.floor(group_id); // Every 1 group, increase by 12 shakes
    console.error('shakes');
    console.error(shakes);
    let semitotal = 1;
    let step_density = 8;
    if (group_id > 3) { step_density = 32; };
    if (group_id > 4) { step_density = 64; };
    for (let counter = -semitotal; counter <= semitotal; counter++) {
        let myfunc = function (theta_rad) {
            // Shaking has a constant aptitude
            let apt = 25 + 2 * group_id;
            // Shaking uses certain input frequency
            let input_freq = theta_rad * shakes;
            const shaking_now = apt * Math.cos(input_freq);
            const base_length = (140 + 1.3 * apt * group_id);
            // Fluctuate a few times
            const grand_fluctuating = (1 + Math.cos(major_repeats * theta_rad)) * 0.66 * apt;
            return base_length + shaking_now + grand_fluctuating;
        };
        let rotate_deg = (group_id % 2) * 90;
        rotate_deg += 360 / shakes / (semitotal * 2 + 1) * counter;
        tmpstr1 += svgplotlib.drawpolarcircle({
            step: 1 / step_density,
            attrs: {
                'transform': `rotate(${rotate_deg})`,
                'fill': "white",
                'stroke': "white",
                'stroke-width': "5",
                'stroke-linejoin': "round",
            },
            func: myfunc
        }) + '\n\n';
        tmpstr2 += svgplotlib.drawpolarcircle({
            step: 1 / step_density,
            attrs: {
                'transform': `rotate(${rotate_deg})`,
                'stroke': "#AAAAAA",
                'stroke-width': "1",
                'stroke-linejoin': "round",
            },
            func: myfunc
        }) + '\n\n';
    }
    middle_content += tmpstr1 + tmpstr2;
}




console.log(`<svg width="700" height="auto" viewBox="-1000 -1000 2000 2000" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    </defs>
    <rect x="-444" y="-700" width="888" height="1400" fill="white" opacity="1" stroke="#DEADBF" stroke-width="1.00" />

    ${middle_content}

`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
