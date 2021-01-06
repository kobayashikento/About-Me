import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { useTrail, animated } from 'react-spring'

const ResumeParallax = (props) => {

    const open = props.render
    const items = [{
        content: <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <Typography style={{ lineHeight: "51px", fontSize: "30px", color: props.theme.lightestColor, fontWeight: "bold", fontFamily: "'Merriweather', serif" }}>
                Experience
         </Typography>
            <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "9em", backgroundColor: props.theme.lightestColor }} />
        </div>
    }]

    const contentTrail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <Container maxWidth={props.mobile ? "xs" : "md"} style={{ display: "flex", flexDirection: "column" }}>
            {contentTrail.map(({ x, height, ...rest }, index) => (
                <animated.div key={`resume${index}`} style={{
                    ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`)
                }}>
                    {items[index].content}
                </animated.div>
            ))}
        </Container >
    )
}

export default React.memo(ResumeParallax)