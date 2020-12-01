import React from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import { useTrail, animated } from 'react-spring'

const ResumeParallax = (props) => {

    const open = props.render
    const items = [{
        content: <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
            <Typography variant="h5" style={{ color: props.theme.priColor, fontWeight: "bold" }}>2.</Typography>
            <Typography variant="h4" style={{ color: props.theme.priColor, paddingLeft: "1rem", fontWeight: "bold" }}>
                My Experiences
         </Typography>
            <Divider style={{ marginLeft: "3rem", width: "13rem", backgroundColor: props.theme.priTxtColor }} />
        </div>
    }, {
        content:
            <Typography variant="body1" style={{ color: props.theme.priTxtColor, textIndent: "1rem", paddingLeft: "1rem", marginBottom: "1rem" }}>
                Throughout my undergraduate years and my work in Chicago, I have acquired the knowledge which I intend show through using the interactive cards below. The cards are animated using React-Spring
        </Typography>
    }]

    const contentTrail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <React.Fragment>
            <Container maxWidth="md" style={{ paddingTop: "2%", display: "flex", flexDirection: "column", paddingBottom: "1rem" }}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={2} style={{ display: "flex", justifyContent: "center" }}>
                    </Grid>
                    <Grid item xs={9}>
                        {contentTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`resume${index}`} style={{
                                ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`)
                            }}>
                                {items[index].content}
                            </animated.div>
                        ))}
                    </Grid>
                    <Grid item xs={1} style={{ display: "flex", justifyContent: "center" }}>
                    </Grid>
                </Grid>
            </Container >
        </React.Fragment>
    )
}

export default React.memo(ResumeParallax)