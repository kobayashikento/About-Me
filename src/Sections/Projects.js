import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import UAssist from '../Assets/Pictures/UAssist.png';
import sample1 from '../Assets/Pictures/sample1.png';
import shopifyImg from '../Assets/Pictures/myhealthy.png';

import { useTrail, animated, useTransition, useChain } from 'react-spring';

import { Spring } from 'react-spring/renderprops'

const phi = 1.6180339887498948482;

const Projects = React.memo(props => {

    const open = props.render;
    const theme = props.theme
    const headerRef = React.useRef(null);
    const firstProjectRef = React.useRef(null);
    const firstImgRef = React.useRef(null);
    const secondProjectRef = React.useRef(null);
    const secondImgRef = React.useRef(null);
    const mobile = props.mobile

    const headerItems = [
        {
            content: <Typography
                style={{
                    fontSize: "36px", width: "max-content", color: props.theme.darkestColor, fontWeight: "bold", fontFamily: "'Merriweather', serif",
                }}>
                Projects
            </Typography>,
            type: 0,
        },
        {
            content: <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "5rem", backgroundColor: props.theme.darkestColor }} />,
            type: 0
        }
    ]

    const shopifyProject = [
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", paddingLeft: props.mobile ? "" : "1rem",
                color: props.theme.priColor, fontWeight: "bold", fontSize: "19px", lineHeight: "32px"
            }}>MyHealthyFamily</Typography>,
            key: 0
        },
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", fontSize: "15px", lineHeight: "26px",
                paddingLeft: props.mobile ? "" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, fontWeight: "400"
            }}>Shopify Project</Typography>,
            key: 1
        },
        {
            content:
                <div style={{
                    background: `${theme.lightColor}CC`, borderRadius: "3px",
                    transform: props.mobile ? "" : "translate(1rem)", width: "100%"
                }}>
                    <Typography align="left" style={{
                        padding: "1.2vmax", color: props.theme.priTxtColor, fontFamily: "'Assistant', sans-serif", fontSize: "14px",
                        fontWeight: "400", lineHeight: "24px"
                    }}>
                        Added more functionalities to the already existing limitations on the Shopify service. Made some minor changes such as layout size, location, font size, and color to major changes that required knowledge in JavaScript such as implementing the on hover navigation drop down and scroll bar that changes the color of the lighted mirrors instead of the 3 static pictures.
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
                    Liquid
                </Typography>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    JavaScript
                </Typography>
                <Typography variant="body2" style={{ paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, }}>
                    Shopify
                </Typography>
            </div>,
            key: 3
        },
        {
            content: <div style={{ display: "flex", paddingLeft: props.mobile ? "" : "1rem" }}>
                <IconButton disabled={true} style={{ padding: "4px" }} onClick={() => { window.open("https://github.com/kobayashikento/UAssist") }}>
                    <GitHubIcon style={{ color: "grey" }} />
                </IconButton>
                <Tooltip title="Open MyHealthyFamily Website">
                    <IconButton style={{ padding: "4px", marginLeft: "1rem" }} onClick={() => { window.open("https://myhealthy.family/") }}>
                        <OpenInNewIcon style={{ color: props.theme.stdColor }} />
                    </IconButton>
                </Tooltip>
            </div>,
            key: 4
        },
    ]

    const firstProject = [
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", paddingLeft: mobile ? "" : "1rem",
                color: props.theme.priColor, fontWeight: "bold", fontSize: "19px", lineHeight: "32px"
            }}>UAssist</Typography>,
            key: 0
        },
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", fontSize: "15px", lineHeight: "26px",
                paddingLeft: mobile ? "" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, fontWeight: "400"
            }}>CSC309 Project</Typography>,
            key: 1
        },
        {
            content:
                <div style={{ background: `${theme.lightColor}CC`, borderRadius: "3px", transform: mobile ? "" : "translate(1rem)", width: "100%" }}>
                    <Typography align="left" style={{
                        padding: "1.2vmax", color: props.theme.priTxtColor, fontFamily: "'Assistant', sans-serif", fontSize: "14px",
                        fontWeight: "400", lineHeight: "24px"
                    }}>
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
            content: <div style={{ display: "flex", paddingLeft: mobile ? "" : "1rem" }}>
                <Tooltip title="View Github Repository">
                    <IconButton style={{ padding: "4px" }} onClick={() => { window.open("https://github.com/kobayashikento/UAssist") }}>
                        <GitHubIcon style={{ color: props.theme.stdColor }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Open Website">
                    <IconButton style={{ padding: "4px", marginLeft: "1rem" }} onClick={() => { window.open("http://aqueous-reef-85157.herokuapp.com/") }}>
                        <OpenInNewIcon style={{ color: props.theme.stdColor }} />
                    </IconButton>
                </Tooltip>
            </div>,
            key: 4
        },
    ]

    const secondProject = [
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", paddingLeft: mobile ? "" : "1rem",
                color: props.theme.priColor, fontWeight: "bold", fontSize: "19px", lineHeight: "32px"
            }}>Routine Recorder</Typography>,
            key: 0
        },
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", fontSize: "15px", lineHeight: "26px",
                paddingLeft: mobile ? "" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, fontWeight: "400"
            }}>Personal Project</Typography>,
            key: 1
        },
        {
            content:
                <div style={{ background: `${theme.lightColor}CC`, borderRadius: "3px", width: "100%", transform: mobile ? "" : "translate(1rem)" }}>
                    <Typography align="left" style={{
                        padding: "1.2vmax", color: props.theme.priTxtColor, fontFamily: "'Assistant', sans-serif", fontSize: "14px",
                        fontWeight: "400", lineHeight: "24px"
                    }}>
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
                    Firebase/Firestore
                </Typography>
            </div>,
            key: 3
        },
        {
            content: <div style={{ display: "flex", paddingLeft: mobile ? "" : "1rem" }}>
                <Tooltip title="View Github Code">
                    <IconButton style={{ padding: "4px" }} onClick={() => { window.open("https://github.com/kobayashikento/personal-event-tracker") }}>
                        <GitHubIcon style={{ color: props.theme.stdColor }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Open Website">
                    <IconButton style={{ padding: "4px", marginLeft: "1rem" }} onClick={() => { window.open("https://life-tracker-7fb87.web.app/") }}>
                        <OpenInNewIcon style={{ color: props.theme.stdColor }} />
                    </IconButton>
                </Tooltip>
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

    const shopTrans = useTransition(open ? shopifyProject : [], item => item.key, {
        from: { opacity: 0, transform: 'translate3d(-100px,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0px,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-100px,0,0)' },
    })

    const firstTrans = useTransition(open ? firstProject : [], item => item.key, {
        from: { opacity: 0, transform: 'translate3d(-100px,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0px,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-100px,0,0)' },
        ref: firstProjectRef
    })

    const firstImgTrans = useTransition(open, null, {
        from: { transform: 'translate3d(100px,0,0)', opacity: 0 },
        enter: { transform: 'translate3d(0px,0,0)', opacity: 1 },
        leave: { transform: 'translate3d(100px,0,0)', opacity: 0 },
        ref: firstImgRef
    })

    const secondTrans = useTransition(open ? secondProject : [], item => item.key, {
        from: { transform: 'translate3d(100px,0,0)', opacity: 0 },
        enter: { transform: 'translate3d(0px,0,0)', opacity: 1 },
        leave: { transform: 'translate3d(100px,0,0)', opacity: 0 },
        ref: secondProjectRef
    })

    const secondImgTrans = useTransition(open, null, {
        from: { transform: 'translate3d(-100px,0,0)', opacity: 0 },
        enter: { transform: 'translate3d(0px,0,0)', opacity: 1 },
        leave: { transform: 'translate3d(-100px,0,0)', opacity: 0 },
        ref: secondImgRef
    })

    useChain([headerRef, firstProjectRef, firstImgRef, secondProjectRef, secondImgRef], [0, 0.5, 0.5, 1, 1])

    const gRatioA = window.innerWidth / phi;
    const gRatioB = window.innerWidth - gRatioA;

    return (
        props.mobile ?
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "3.3vmax",
             flexDirection: "column", overflow: "hidden", paddingBottom: "3.3vmax" }}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    {headerItems.map((prop, index) => {
                        return (
                            headerItems[index].content
                        )
                    })}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: props.mobile ? "center" : "flex-start", zIndex: "1",
                        width: "90vw", margin: "4.4vmax", paddingTop: "3.3vmax"
                    }}>
                        {shopTrans.map(({ item, props, key }) =>
                            <animated.div key={`projectTrans1${key}`} style={props}>{item.content}</animated.div>
                        )}
                    </div>
                    <div style={{ zIndex: 1, display: "flex", justifyContent: "center" }}>
                        <img src={shopifyImg} style={{
                            width: "300px", height: "180px", borderRadius: "5px"
                        }} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: props.mobile ? "center" : "flex-start", zIndex: "1",
                        width: "90vw", margin: "4.4vmax", paddingTop: "3.3vmax"
                    }}>
                        {secondTrans.map(({ item, props, key }) =>
                            <animated.div key={`projectTrans2${key}`} style={props}>{item.content}</animated.div>
                        )}
                    </div>
                    <div style={{ zIndex: 1, display: "flex", justifyContent: "center" }}>
                        <img src={sample1} style={{
                            width: "330px", height: "180px", borderRadius: "5px",
                        }} />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: props.mobile ? "center" : "flex-start", zIndex: "1",
                        width: "90vw", margin: "4.4vmax", paddingTop: "3.3vmax"
                    }}>
                        {firstTrans.map(({ item, props, key }) =>
                            <animated.div key={`projectTrans1${key}`} style={props}>{item.content}</animated.div>
                        )}
                    </div>
                    <div style={{ zIndex: 1, display: "flex", justifyContent: "center" }}>
                        <img src={UAssist} style={{
                            width: "327px", height: "180px", borderRadius: "5px",
                        }} />
                    </div>
                </div>
            </div>
            :
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{
                    background: "transparent", margin: "0px",
                    overflow: "hidden", width: "100%", position: "relative"
                }}
                spacing={5}
            >
                <Spring
                    to={{ width: props.render ? `${gRatioB}px` : "0px" }}
                    from={{ position: "absolute", opacity: 1, width: "0px", left: "0px", height: "100%", top: "0px" }}
                >
                    {prop => (<animated.div style={{ ...prop, background: props.theme.lightestColor }} />)}
                </Spring>
                <Spring
                    to={{ width: props.render ? `${gRatioA}px` : "0px", }}
                    from={{ position: "absolute", opacity: 1, width: "0px", right: "0px", height: "100%", top: "5vh" }}
                >
                    {prop => (<animated.div style={{ ...prop, background: props.theme.darkestColor }}>
                    </animated.div>)}
                </Spring>
                <Grid item sm={1} style={{
                    margin: props.mobile ? "" : "1rem", display: "flex", justifyContent: "flex-start", width: "100vw",
                    maxWidth: "100%", padding: "0", margin: "0"
                }}>
                    <div style={{
                        width: gRatioB, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", zIndex: 1
                        , paddingTop: "6.6vmax"
                    }}>
                        {headerTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                {headerItems[index].content}
                            </animated.div>))}
                    </div>
                </Grid>
                <Grid item sm={7} style={{
                    maxWidth: "100%", margin: props.mobile ? "" : "2rem", margin: 0, padding: 0, display: "flex", alignItems: "center"
                }} >
                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: props.mobile ? "center" : "flex-start", zIndex: "1",
                        width: gRatioB, margin: "4.4vmax", paddingTop: "3.3vmax"
                    }}>
                        {shopTrans.map(({ item, props, key }) =>
                            <animated.div key={`projectTrans1${key}`} style={props}>{item.content}</animated.div>
                        )}
                    </div>
                    <div style={{ zIndex: 1, display: "flex", justifyContent: "space-between" }}>
                        {firstImgTrans.map(({ item, props, key }) => item &&
                            <animated.div key={`firstImgTrans${key}`} style={props}>
                                <img src={shopifyImg} style={{
                                    width: mobile ? "100%" : "650px", borderRadius: "5px"
                                }} />
                            </animated.div>
                        )}
                    </div>
                </Grid>
                <Grid item sm={7} style={{ maxWidth: "100%", margin: props.mobile ? "" : "2rem", margin: 0, padding: 0, display: "flex", alignItems: "center" }}>
                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: props.mobile ? "center" : "flex-start", zIndex: "1",
                        width: gRatioB, margin: "4.4vmax", paddingTop: "3.3vmax"
                    }}>
                        {secondTrans.map(({ item, props, key }) =>
                            <animated.div key={`projectTrans2${key}`} style={props}>{item.content}</animated.div>
                        )}
                    </div>
                    <div style={{ width: gRatioA, zIndex: 1, display: "flex", justifyContent: "space-between" }}>
                        {secondImgTrans.map(({ item, props, key }) => item &&
                            <animated.div key={`secondImgTrans${key}`} style={props}>
                                <img src={sample1} style={{
                                    width: "700px", borderRadius: "5px",
                                }} />
                            </animated.div>
                        )}
                    </div>
                </Grid>
                <Grid item sm={7} style={{ maxWidth: "100%", margin: props.mobile ? "" : "2rem", margin: 0, padding: 0, display: "flex", alignItems: "center" }} >
                    <div style={{
                        display: "flex", flexDirection: "column", alignItems: props.mobile ? "center" : "flex-start", zIndex: "1",
                        width: gRatioB, margin: "4.4vmax", paddingTop: "3.3vmax"
                    }}>
                        {firstTrans.map(({ item, props, key }) =>
                            <animated.div key={`projectTrans1${key}`} style={props}>{item.content}</animated.div>
                        )}
                    </div>
                    <div style={{ width: gRatioA, zIndex: 1, display: "flex", justifyContent: "space-between" }}>
                        {firstImgTrans.map(({ item, props, key }) => item &&
                            <animated.div key={`firstImgTrans${key}`} style={props}>
                                <img src={UAssist} style={{
                                    width: mobile ? "100%" : "600px", borderRadius: "5px",
                                }} />
                            </animated.div>
                        )}
                    </div>
                </Grid>
            </Grid>
    )
})

export default React.memo(Projects)