/*
    File name: svgplotlib.js
    Copyright (c) 2023 Neruthes.
    This file is released with the MIT license.
*/

function drawstar(opt) {
    let myshape_POINTS = [];
    const VERTEX_QTY = opt.vert;
    for (let itr = 0; itr < VERTEX_QTY; itr += 1) {
        const vertexDistance = (itr % 2 === 0) ? opt.long : opt.short;
        const theta_rad = Math.PI * 2 / VERTEX_QTY * itr;
        const x1 = Math.floor(100 * vertexDistance * Math.sin(theta_rad)) / 100;
        const y1 = Math.floor(100 * vertexDistance * Math.cos(theta_rad)) / 100;
        myshape_POINTS.push(x1, y1);
    };
    let attrs = ''
    if (opt.attrs) {
        attrs = Object.keys(opt.attrs).map(function (attrname) {
            return `  ${attrname}="${opt.attrs[attrname]}"  `;
        }).join(' ');
    };
    let tmpnode = `<polygon ${attrs} stroke-width="1.00" points="${myshape_POINTS.join(' ')}" />`;
    return tmpnode;
};

function drawpolarcircle(opt) {
    let myshape_POINTS = [];
    for (let itr = 0; itr < 360; itr += opt.step || 1) {
        const theta_rad = itr / 360 * Math.PI * 2;
        const vertexDistance = opt.func(theta_rad);
        const x1 = Math.floor(100 * vertexDistance * Math.sin(theta_rad)) / 100;
        const y1 = Math.floor(100 * vertexDistance * Math.cos(theta_rad)) / 100;
        myshape_POINTS.push(x1, y1);
    };
    let attrs = ''
    if (opt.attrs) {
        attrs = Object.keys(opt.attrs).map(function (attrname) {
            return `  ${attrname}="${opt.attrs[attrname]}"  `;
        }).join(' ');
    };
    let tmpnode = `<polygon ${attrs} stroke-width="1.00" points="${myshape_POINTS.join(' ')}" />`;
    return tmpnode;
};

module.exports = { drawstar, drawpolarcircle };
