import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import '../Styles/descriptionStyle.css';

import scarfme from '../Assets/Pictures/scarfme.png';

import { useSpring, useChain, useTrail, animated, useTransition } from 'react-spring';

const MyDescription = (props) => {
    const open = props.render;
    //props.render;

    const headerItems = [
        {
            content: <Typography variant={props.mobile ? "h6" : "h4"} style={{
                width: "max-content", color: props.theme.darkestColor, fontWeight: "400", fontFamily: "'Montserrat', sans-serif",
            }}>ABOUT</Typography>,
            type: 0,
        },
        {
            content: <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "5rem", backgroundColor: props.theme.darkestColor }} />,
            type: 0
        },
    ]

    const headerTrail = useTrail(headerItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        props.mobile ?
            <Container>

            </Container>
            :
            <Container maxWidth="md">
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid item sm={2}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            {headerTrail.map(({ x, height, ...rest }, index) => (
                                <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                    {headerItems[index].content}
                                </animated.div>))}
                        </div>
                    </Grid>
                    <Grid item sm={10}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item sm={5}>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                    spacing={3}
                                >
                                    <Grid item xs={7}>
                                        <img src={scarfme} style={{ height: "250px", width: "280px" }} />
                                    </Grid>
                                    <Grid item xs={5}>
                                       
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
    )
}

export default React.memo(MyDescription)