import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { useSpring, useChain, useTrail, animated, useTransition } from 'react-spring';

const MyDescription = (props) => {
    const open = true;
    //props.render;

    const headerItems = [
        {
            content: <Typography variant={props.mobile ? "h6" : "h4"} style={{ width: "max-content", paddingLeft: props.mobile ? "1rem" : "3rem", color: props.theme.darkestColor, fontWeight: "bold" }}>About Me </Typography>,
            type: 0,
        },
        {
            content: <Divider style={{ height: "4px", marginLeft: props.mobile ? "" : "3rem", width: props.mobile ? "3rem" : "8rem", backgroundColor: props.theme.priTxtColor }} />,
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
            <Container maxWidth="md" style={{ height: "100vh" }}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item sm={2}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            {headerTrail.map(({ x, height, ...rest }, index) => (
                                <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                    {headerItems[index].content}
                                </animated.div>))}
                        </div>
                    </Grid>
                    <Grid>

                    </Grid>
                    <Grid>

                    </Grid>
                </Grid>
            </Container>
    )
}

export default React.memo(MyDescription)