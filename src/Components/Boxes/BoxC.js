import React from 'react';

import styles from '../Assets/CSS/GoldenBoxStyle';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Spring } from 'react-spring/renderprops';
import { animated, useSpring } from 'react-spring';

/* 
 Change the width and height depening on the index of box 
 What can be seen on the screen is 6 boxes, so render the boxes if currIndex - 6 
 is within its specified range.
 Note: unlike last project focus more on seperated css files instead of coding 
 everything with inline css
*/

const phi = 1.61803398875;
const useStyles = makeStyles(styles);

const GoldenBox = (props) => {
    const classes = useStyles();
    const theme = useTheme(styles);
    //    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [width, setWidth] = React.useState(window.innerWidth);
    const [left, setLeft] = React.useState(0);
    const [top, setTop] = React.useState(0);

    const gA = (width / phi) - 8;
    const gB = (phi * gA) - gA;
    const gC = gB / phi;
    const gD = (phi * gC) - gC;
    const gE = gD / phi;
    const gF = (phi * gE) - gE;
    const gG = gF / phi;
    const gH = (phi * gG) - gG;

    const [grow, setGrow] = React.useState({ start: gA, end: gA });

    const pos = props.index - props.currIndex

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    const { dAngle } = useSpring({
        dAngle: props.currIndex, config: {
            tension: 120, friction: 14
        }
    })

    const size = dAngle.interpolate({
        range: [0, 7],
        output: [`${grow.start}px`, `${grow.end}px`],
        extrapolate: 'clamp'
    })

    const margins = dAngle.interpolate({
        range: [0, 7],
        output: [`${2}px 0px 0px ${2}px `, `0px 0px 0px 0px`],
        extrapolate: 'clamp'
    })

    return (
        <div>
            <animated.div style={{ position: "absolute", width: pos === 1 ? gA : gB, height: pos === 1 ? gA : gB, background: "rgba(255,255,255, 0.9)", 
            top: `${4}px`, left: pos === 1 ? `${4}px` : `${gA + 8}px`,
         }} >
            </animated.div>
        </div >
    )
}

export default React.memo(GoldenBox);