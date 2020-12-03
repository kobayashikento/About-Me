import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { useTrail, animated } from 'react-spring'

const ResumeParallax = (props) => {

    const open = props.render
    const items = [{
        content: <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
            <Divider style={{ marginLeft: props.mobile ? "1rem" : "3rem", width: props.mobile ? "3em" : "12rem", backgroundColor: props.theme.priTxtColor }} />
            <Typography variant={props.mobile ? "h6" : "h4"} style={{ color: props.theme.priColor, paddingLeft: props.mobile ? "1rem" : "3rem", fontWeight: "bold" }}>
                My Experiences
         </Typography>
            <Divider style={{ marginLeft: props.mobile ? "1rem" : "3rem", width: props.mobile ? "3rem" : "12rem", backgroundColor: props.theme.priTxtColor }} />
        </div>
    }, {
        content:
            <div style={{ width: props.mobile ? "100%" : "80%", display: "flex", justifyContent: "center", marginRight: "auto", marginLeft: "auto", paddingLeft: props.mobile ? "1rem" : "3rem" }}>
                <Typography variant="body1" style={{ color: props.theme.priTxtColor, textIndent: "1rem", marginBottom: "1rem" }}>
                    Throughout my undergraduate years and my work in Chicago, I have acquired the knowledge which I intend to show through using the interactive cards below. The cards are animated using React-Spring.
        </Typography>
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
        <Container maxWidth={props.mobile ? "xs" : "md"} style={{ paddingTop: "3rem", display: "flex", flexDirection: "column", paddingBottom: "1rem" }}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ padding: props.mobile ? "1rem" : "" }}
            >
                <Grid item xs={12}>
                    {contentTrail.map(({ x, height, ...rest }, index) => (
                        <animated.div key={`resume${index}`} style={{
                            ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`)
                        }}>
                            {items[index].content}
                        </animated.div>
                    ))}
                </Grid>
            </Grid>
        </Container >
    )
}

export default React.memo(ResumeParallax)