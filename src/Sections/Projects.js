import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';

import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import UAssist from '../Assets/Pictures/UAssist.png';
import sample1 from '../Assets/Pictures/sample1.png';

import { useTrail, animated, useTransition, useChain } from 'react-spring';

const Projects = (props) => {

    const open = props.render;
    const theme = props.theme
    const headerRef = React.useRef();
    const firstProjectRef = React.useRef();
    const secondProjectRef = React.useRef();

    const headerItems = [{
        content: <Divider style={{ marginLeft: props.mobile ? "1rem" : "1rem", width: props.mobile ? "3rem" : "13rem", backgroundColor: props.theme.priTxtColor }} />,
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

    const firstProject = [
        {
            content: <Typography variant={props.mobile ? "body1" : "h5"} style={{ marginTop: props.mobile ? "2rem" : "", paddingLeft: props.mobile ? "1rem" : "1rem", color: props.theme.priColor, fontWeight: "bold" }}>UAssist</Typography>,
            key: 0
        },
        {
            content: <Typography variant={"body2"} style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, fontWeight: "bold" }}>CSC309 Project</Typography>,
            key: 1
        },
        {
            content:
                <div style={{ background: `${theme.priBack}`, borderRadius: "3px", transform: "translate(1rem)", width: props.mobile ? "95%" : "90%" }}>
                    <Typography variant={"body1"} align="left" style={{ padding: "1rem", color: props.theme.priTxtColor }}>
                        Website that provides a user interface for course selections and provides schedule recommendations such as least amount of time spent on campus, time between each course, and travel time between courses.
</Typography>
                </div>,
            key: 2
        },
        {
            content: <div style={{ display: "flex", paddingTop: "1rem" }}>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    HTML/CSS
                </Typography>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    Bootstrap
                </Typography>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    NodeJS
                </Typography>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    MongoDB
                </Typography>
            </div>,
            key: 3
        },
        {
            content: <div style={{ display: "flex", paddingLeft: "1rem" }}>
                <IconButton style={{ padding: "4px" }} onClick={() => { window.open("https://github.com/kobayashikento/UAssist") }}>
                    <GitHubIcon style={{ color: props.theme.priColor }} />
                </IconButton>
                <IconButton style={{ padding: "4px", marginLeft: "1rem" }} onClick={() => { window.open("http://aqueous-reef-85157.herokuapp.com/") }}>
                    <OpenInNewIcon style={{ color: props.theme.priColor }} />
                </IconButton>
            </div>,
            key: 4
        },
    ]

    const secondProject = [
        {
            content: <Typography variant={props.mobile ? "body1" : "h5"} style={{ paddingLeft: props.mobile ? "1rem" : "1rem", color: props.theme.priColor, fontWeight: "bold" }}>Routine Recorder</Typography>,
            key: 0
        },
        {
            content: <Typography variant={"body2"} style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, fontWeight: "bold" }}>Personal Project</Typography>,
            key: 1
        },
        {
            content:
                <div style={{ background: `${theme.priBack}CC`, borderRadius: "3px", width: props.mobile ? "100%" : "80%", float: props.mobile ? "left" : "right" }}>
                    <Typography variant={"body1"} align={props.mobile ? "left" : "right"} style={{ padding: "1rem", color: props.theme.priTxtColor }}>
                        Website that manages my gym progress and displays it in a graph that can be used to see progress overtime. This website was built with the intent to learn React, Redux, and data management on Firestore.
</Typography>
                </div>,
            key: 2
        },
        {
            content: <div style={{ display: "flex", paddingTop: "1rem" }}>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    HTML/CSS
                </Typography>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    React
                </Typography>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    Redux
                </Typography>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    Firebase / Firestore
                </Typography>
            </div>,
            key: 3
        },
        {
            content: <div style={{ display: "flex", paddingLeft: "1rem" }}>
                <IconButton style={{ padding: "4px" }} onClick={() => { window.open("https://github.com/kobayashikento/personal-event-tracker") }}>
                    <GitHubIcon style={{ color: props.theme.priColor }} />
                </IconButton>
                <IconButton style={{ padding: "4px", marginLeft: "1rem" }} onClick={() => { window.open("https://life-tracker-7fb87.web.app/") }}>
                    <OpenInNewIcon style={{ color: props.theme.priColor }} />
                </IconButton>
            </div>,
            key: 4
        },
    ]

    const headerTrail = useTrail(headerItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        ref: headerRef
    })

    const firstTrans = useTransition(firstProject, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
        ref: firstProjectRef
    })

    const secondTrans = useTransition(secondProject, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
        ref: secondProjectRef
    })

    useChain([headerRef, firstProjectRef, secondProjectRef], [0, 0.5, 1])

    return (
        <Container maxWidth="md">
            {props.mobile ?
                <Grid
                    container
                    direction={props.mobile ? "column" : "row"}
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: props.mobile ? "2rem" : "3rem", justifyContent: "center" }}>
                            {headerTrail.map(({ x, height, ...rest }, index) => (
                                <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                    {headerItems[index].content}
                                </animated.div>))}
                        </div>
                    </Grid>
                    <Grid
                        container
                        direction={props.mobile ? "column" : "row"}
                        alignItems="center"
                    >
                        <Grid item sm={7} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", zIndex: "1" }}>
                            {firstTrans.map(({ item, props, key }) =>
                                <animated.div key={`projectTrans1${key}`} style={props}>{item.content}</animated.div>
                            )}
                        </Grid>
                        <Grid item sm={5} xs={12} style={{ display: "flex", justifyContent: "center" }}>
                            <img src={UAssist} style={{
                                width: "318px", height: "200px", borderRadius: "5px",
                                boxShadow: `0 9px 12px 1px ${props.theme.priColor}33, 0 3px 16px 2px ${props.theme.priColor}26, 0 5px 6px -3px ${props.theme.priColor}33`
                            }} />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction={props.mobile ? "column" : "row"}
                        style={{ marginTop: "7rem" }}
                        alignItems="center"
                    >
                        <Grid item sm={8} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", zIndex: "1" }}>
                            {secondTrans.map(({ item, props, key }) =>
                                <animated.div key={`projectTrans2${key}`} style={props}>{item.content}</animated.div>
                            )}
                        </Grid>
                        <Grid item sm={4} xs={12} style={{ display: "flex", justifyContent: "center" }}>
                            <img src={sample1} style={{
                                width: "337px", height: "169px", borderRadius: "5px", marginLeft: "1rem",
                                boxShadow: `0 9px 12px 1px ${props.theme.priColor}33, 0 3px 16px 2px ${props.theme.priColor}26, 0 5px 6px -3px ${props.theme.priColor}33`
                            }} />
                        </Grid>
                    </Grid>
                </Grid>
                :
                <Grid
                    container
                    direction={props.mobile ? "column" : "row"}
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: props.mobile ? "2rem" : "3rem", justifyContent: "center" }}>
                            {headerTrail.map(({ x, height, ...rest }, index) => (
                                <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                    {headerItems[index].content}
                                </animated.div>))}
                        </div>
                    </Grid>
                    <Grid
                        container
                        direction={props.mobile ? "column" : "row"}
                        alignItems="center"
                    >
                        <Grid item sm={7} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", zIndex: "1" }}>
                            {firstTrans.map(({ item, props, key }) =>
                                <animated.div key={`projectTrans1${key}`} style={props}>{item.content}</animated.div>
                            )}
                        </Grid>
                        <Grid item sm={5} xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                            <img src={UAssist} style={{
                                width: "500px", borderRadius: "5px",
                                boxShadow: `0 9px 12px 1px ${props.theme.priColor}33, 0 3px 16px 2px ${props.theme.priColor}26, 0 5px 6px -3px ${props.theme.priColor}33`
                            }} />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction={props.mobile ? "column" : "row"}
                        style={{ marginTop: "7rem" }}
                        alignItems="center"
                    >
                        <Grid item sm={4} xs={12} style={{ display: "flex", justifyContent: "flex-start" }}>
                            <img src={sample1} style={{
                                width: "500px", borderRadius: "5px", marginLeft: "1rem",
                                boxShadow: `0 9px 12px 1px ${props.theme.priColor}33, 0 3px 16px 2px ${props.theme.priColor}26, 0 5px 6px -3px ${props.theme.priColor}33`
                            }} />
                        </Grid>
                        <Grid item sm={8} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", zIndex: "1" }}>
                            {secondTrans.map(({ item, props, key }) =>
                                <animated.div key={`projectTrans2${key}`} style={props}>{item.content}</animated.div>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Container >
    )
}

export default React.memo(Projects)