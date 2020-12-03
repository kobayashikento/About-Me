import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { useTrail, animated, useTransition } from 'react-spring';

const Project = (props) => {

    const open = props.render;
    
    const headerItems = [{
        content: <Divider style={{ marginLeft: props.mobile ? "1rem" : "3rem", width: props.mobile ? "3rem" : "13rem", backgroundColor: props.theme.priTxtColor }} />,
        type: 0
    },
    {
        content: <Typography variant={props.mobile ? "h6" : "h4"} style={{ paddingLeft: props.mobile ? "1rem" : "3rem", color: props.theme.priColor, fontWeight: "bold" }}>Projects</Typography>,
        type: 0,
    },
    {
        content: <Divider style={{ marginLeft: props.mobile ? "1rem" : "3rem", width: props.mobile ? "3rem" : "13rem", backgroundColor: props.theme.priTxtColor }} />,
        type: 0,
    }]

    const headerTrail = useTrail(headerItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <Container maxWidth="md" style={{ position: "absolute", top: "10%", left: "50%", transform: "translate(-50%, -10%)" }}>
            <Grid
                container
                direction={props.mobile ? "column" : "row"}
                justify="space-between"
                alignItems="center"
                style={{ padding: "1rem" }}
            >
                <Grid item xs={12}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: props.mobile ? "2rem" : "5rem", justifyContent: "center" }}>
                        {headerTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                {headerItems[index].content}
                            </animated.div>))}
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default React.memo(Project)