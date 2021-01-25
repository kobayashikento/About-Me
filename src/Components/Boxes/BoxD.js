import React from 'react';

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

const GoldenBox = (props) => {
    //    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [width, setWidth] = React.useState(window.innerWidth);

    const gA = (width / phi) - 8;
    const gB = (phi * gA) - gA;
    const gC = gB / phi;
    const gD = (phi * gC) - gC;
    const gE = gD / phi;
    const gF = (phi * gE) - gE;
    const gG = gF / phi;
    const gH = (phi * gG) - gG;

    const [grow, setGrow] = React.useState({ start: gD, end: gA });

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

    const getPos = (angle) => {
        return [Math.E ^ (0.30635 * angle) * Math.cos(angle), Math.E ^ (0.30635 * angle) * Math.sin(angle)];
    }

    const position = dAngle.interpolate({
        range: [0, 7],
        output: [`translate(0px, 1px)`, `translate(${getPos(props.angle)[0]}px, ${getPos(props.angle)[1]}px)`],
        extrapolate: 'clamp'
    })

    return (
        <div>
            <Spring
                to={{
                    opacity: true ? 1 : 0,
                    transform: true ? `transformY(0px)` : "translateY(-100px)"
                }}
                from={{ position: "absolute", opacity: 1, transform: "translateY(100px)" }}
            >
                {prop => (
                    <animated.div style={{
                        ...prop, position: "absolute", width: size, height: size, background: "rgba(255,255,255, 0.9)", transform: position
                    }} >
                    </animated.div>
                )}
            </Spring>
        </div >
    )
}

export default React.memo(GoldenBox);