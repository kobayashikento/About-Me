import React from 'react';

const phi = 1.61803398875;

const gA = (window.innerWidth / phi) - 4;
const gB = (phi * gA) - gA - 2;
const gC = gB / phi;
const gD = (phi * gC) - gC - 2;
const gE = gD / phi;
const gF = (phi * gE) - gE - 2;
const gG = gF / phi;
const gH = (phi * gG) - gG - 2;

const spiralGridStyle = theme => (
    {
    conatiner: {
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative"
    },
});

export default spiralGridStyle;