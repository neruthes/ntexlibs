// P49 is a modern frame with border tiling


// wing1
const deg2cos = function (deg, density) {
    return Math.cos(density * deg / 360 * 2 * Math.PI);
}
let shape_wing1 = ''
for (let ii = -7; ii <= 8; ii += 1) {
    // for (let ii = -1; ii <= 1; ii += 1) {
    let cornerWidth = 430 - 5 * ii;
    let cornerHeight = 700 - 2.5 * ii;
    const DRAW = `M 0,${725 + 6.25 * ii}
        c ${75 - 6 * ii} 0          ${111 - 3 * ii} ${-20 - 10 * ii}        ${164 - 4 * ii} ${-20 - 12.5 * ii}
        S ${260 - 6 * ii} ${740 + 18 * ii}      ${cornerWidth} ${cornerHeight}
        S ${433 + 7 * ii} ${510 -0.5 * ii}      ${433 + 4.5 * ii} ${410 + 2 * ii}
        S ${475 - 0.5 * ii} ${320 + 6 * ii}     ${475 - 4.5 * ii} ${260 + 3.5 * ii}
        S ${447 + 0.5 * ii} ${160 - 5.5 * ii}     ${447 + 4.5 * ii} ${110 - 4.5 * ii}
        S 410 35 ${415 + 6*ii} 0
        `;
    shape_wing1 += `<path d="${DRAW}" stroke="#DEADBF" stroke-linecap="rounded" stroke-width="1.0" />`;
};





console.log(`<svg width="1000" height="auto" viewBox="-800 -800 1600 1600" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <mask id="outer-boxsize">
            <rect x="-3000" y="-3000" width="6000" height="6000" fill="white" />
            <rect x="-400" y="-640" width="800" height="1280" fill="black" />
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
    <rect x="-400" y="-640" width="800" height="1280" fill="none" opacity="1" stroke="#DEADBF" stroke-width="1.00" />
`.replace(/DEADBF/g, process.env.color));









console.log(`</svg>`);
