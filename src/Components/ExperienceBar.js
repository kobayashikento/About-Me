import React from 'react';

import Typography from '@material-ui/core/Typography';

import { useSpring, useChain, useTrail, animated, useTransition, config } from 'react-spring';

const ExpereinceBar = (props) => {
    // props i need, 1. theme  2. name 3. experience in %
    // specs 531x28 total and 110x28 for name field, adjust accordingly 
    const theme = props.theme;
    const show = props.render;
    const delay = props.delay;
    const barLength = (props.percentage) / 10 * 42;
    const perc = props.percentage;

    const transitions = useTransition(show, null, {
        from: { position: 'absolute', opacity: 0, width: "0px" },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, delay));
            await next({ opacity: 1, width: `${barLength}px` })
        },
        leave: { opacity: 0, width: "0px" },
        config: { mass: 1, tension: 170, friction: 26 }
    })

    const transPerc = useTransition(show, null, {
        from: { position: 'absolute', },
        enter: { opacity: 1, },
        leave: { opacity: 0, },
    })

    return (
        <div style={{ width: "565px", height: "28px", display: "flex", marginBottom: "1rem" }}>
            <div style={{ width: "110px", height: "28px", backgroundColor: props.theme.lightColor, borderRadius: "3px" }}>
                <Typography  align="center" style={{ fontFamily: "'Quicksand', sans-serif", paddingTop: "3px", fontWeight: "500" }} >
                    {props.name}
                </Typography>
            </div>
            {transitions.map(({ item, key, props }) =>
                item && <animated.div key={key} style={{ ...props, backgroundColor: theme.darkColor, height: "28px", marginLeft: "110px", zIndex: "1", borderRadius: "3px" }}></animated.div>
            )}
            {transPerc.map(({ item, key, props }) =>
                item && <animated.div key={key} style={{ ...props, backgroundColor: "rgb(235,235,235)", height: "28px", marginLeft: "110px", width: "451px", paddingRight: "8px", borderRadius: "3px" }}>
                    <Typography variant="body1" align="right" style={{ fontFamily: "'Quicksand', sans-serif", paddingTop: "3px", fontWeight: "500" }} >
                        {perc === 90 ? "Expert" : perc === 67.5 ? "Advanced" : perc === 45 ? "Intermediate" : "Novice"}
                    </Typography>
                </animated.div>
            )}
        </div>
    )
}

export default React.memo(ExpereinceBar)