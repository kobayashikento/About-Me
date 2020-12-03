import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Slide from 'react-reveal';

import { useSpring, useTransition, animated } from 'react-spring'

const Preload = (props) => {

    const theme = props.theme;

    const springFirst = useSpring({
        to: async (next, cancel) => {
            await next({ width: "38px", transform: "translate(-38px, 0px)", paddingLeft: "0px", })
            await next({ width: "38px", transform: "translate(-38px, -30px)" })
            await next({ width: "165px", transform: "translate(-165px, -30px)" })
            await next({ width: "165px", transform: "translate(-173px, 0px)" })
        },
        from: { position: "absolute", width: "0px", overflow: "hidden", float: "right", height: "77px", paddingLeft: "36px", transform: "translate(-38px, 0px)" },
    })
    const springLast = useSpring({
        to: async (next, cancel) => {
            await next({ width: "38px", transform: "translate( 0px, 0px)" })
            await next({ width: "38px", transform: "translate( -38px, 30px)" })
            await next({ width: "290px", transform: "translate( -38px, 30px)" })
            await next({ width: "290px", transform: "translate( 8px, 0px)" })
        },
        from: { position: "absolute", width: "0px", overflow: "hidden", height: "77px", transform: "translate(0px, 0px)" },
    })
    const springFirstMobile = useSpring({
        to: async (next, cancel) => {
            await next({ width: "22px", transform: "translate(-22px, 0px)", paddingLeft: "0px", })
            await next({ width: "22px", transform: "translate(-22px, -15px)" })
            await next({ width: "94px", transform: "translate(-94px,-15px)" })
            await next({ width: "94px", transform: "translate(-102px, 0px)" })
        },
        from: { position: "absolute", width: "0px", overflow: "hidden", float: "right", height: "44px", paddingLeft: "22px", transform: "translate(-22px, 0px)" },
    })
    const springLastMobile = useSpring({
        to: async (next, cancel) => {
            await next({ width: "22px", transform: "translate( 0px, 0px)" })
            await next({ width: "22px", transform: "translate( -22px, 15px)" })
            await next({ width: "290px", transform: "translate( -22px, 15px)" })
            await next({ width: "290px", transform: "translate( 8px, 0px)" })
        },
        from: { position: "absolute", width: "0px", overflow: "hidden", height: "44px", transform: "translate(0px, 0px)" },
    })

    return (
        props.mobile ?
            <div style={{ height: "100vh", display: "flex", alignItems: "center", position: "absolute", left: "42%", paddingBottom: "9rem" }}>
                <animated.div style={springFirstMobile}>
                    <Typography variant={"h4"} style={{ width: "fit-content", opacity: "0.9", fontWeight: "bold", color: theme.priColor }}>
                        Kento
        </Typography>
                </animated.div>
                <animated.div style={springLastMobile}>
                    <Typography variant={"h4"} style={{ width: "fit-content", height: "fit-content", opacity: "0.9", fontWeight: "bold", color: theme.priColor }}>
                        Kobayashi
        </Typography>
                </animated.div>
            </div> :
            <div style={{ height: "100vh", display: "flex", alignItems: "center", position: "absolute", left: "46%", paddingBottom: "6rem" }}>
                <animated.div style={springFirst}>
                    <Typography variant={"h2"} style={{ width: "fit-content", opacity: "0.9", fontWeight: "bold", color: theme.priColor }}>
                        Kento
        </Typography>
                </animated.div>
                <animated.div style={springLast}>
                    <Typography variant={"h2"} style={{ width: "fit-content", height: "fit-content", opacity: "0.9", fontWeight: "bold", color: theme.priColor }}>
                        Kobayashi
        </Typography>
                </animated.div>
            </div>
    )
}

export default React.memo(Preload)