import React from 'react';

import styles from '../Assets/CSS/SpiralGridStyle';

import { makeStyles, useTheme } from '@material-ui/core/styles';

import GoldenBox from '../Components/GoldenBox';

import BoxD from '../Components/Boxes/BoxD';
import BoxH from '../Components/Boxes/BoxH';

import { useScroll, useWheel } from 'react-use-gesture';
import { animated, useSpring } from 'react-spring';

const useStyles = makeStyles(styles);

const phi = 1.61803398875;

const SpiralGrid = () => {
    const classes = useStyles();
    const yThresh = 500;
    const boundaries = 100;
    const [width, setWidth] = React.useState(window.innerWidth);
    const [currIndex, setCurrIndex] = React.useState(0);
    const [angle, setAngle] = React.useState(0);

    const bind = useWheel(({ xy, offset }) => {
        const adjustAngle = 90 / yThresh;
        setAngle((360 / yThresh * xy[1]) * (Math.PI / 180));
        console.log((360 / yThresh * xy[1]))
        setCurrIndex((adjustAngle * xy[1]) / 90);
    })

    const { dAngle } = useSpring({
        dAngle: currIndex, config: {
            tension: 280, friction: 60
        }
    })

    const gA = (width / phi) - 16;
    const gB = (phi * gA) - gA;
    const gC = gB / phi;
    const gD = (phi * gC) - gC;
    const gE = gD / phi;
    const gF = (phi * gE) - gE;
    const gG = gF / phi;
    const gH = (phi * gG) - gG;

    const handleWindowResize = () => {
        setWidth(window.innerWidth);
    }

    const rotation = dAngle.interpolate({
        range: [0, 7],
        output: [`rotate(${0}deg)`, `rotate(${-360 * 7}deg)`],
        extrapolate: 'clamp'
    })

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <div {...bind()} className={classes.conatiner} style={{ background: "#010326" }}>
            <animated.div>
                {/* <GoldenBox
                    currIndex={currIndex}
                    index={1}
                /> */}
                {/* <GoldenBox
                    currIndex={currIndex}
                    index={1}
                />
                <GoldenBox
                    currIndex={currIndex}
                    index={2}
                /> */}
                
                {/* <BoxH
                    currIndex={currIndex}
                    angle={angle}
                /> */}
            </animated.div>
        </div>
    )
}

export default React.memo(SpiralGrid);