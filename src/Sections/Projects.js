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
import shopifyImg from '../Assets/Pictures/myhealthy.png';

import { useTrail, animated, useTransition, useChain } from 'react-spring';

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
                paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, fontWeight: "400"
            }}>Shopify Project</Typography>,
            key: 1
        },
        {
            content:
                <div style={{
                    background: `${theme.lightColor}CC`, borderRadius: "3px",
                    transform: mobile ? "" : "translate(1rem)", width: props.mobile ? "" : "90%"
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
            content: <div style={{ display: "flex", paddingLeft: "1rem" }}>
                <IconButton disabled={true} style={{ padding: "4px" }} onClick={() => { window.open("https://github.com/kobayashikento/UAssist") }}>
                    <GitHubIcon style={{ color: props.theme.stdColor }} />
                </IconButton>
                <IconButton style={{ padding: "4px", marginLeft: "1rem" }} onClick={() => { window.open("https://myhealthy.family/") }}>
                    <OpenInNewIcon style={{ color: props.theme.stdColor }} />
                </IconButton>
            </div>,
            key: 4
        },
    ]

    const firstProject = [
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", paddingLeft: props.mobile ? "" : "1rem",
                color: props.theme.priColor, fontWeight: "bold", fontSize: "19px", lineHeight: "32px"
            }}>UAssist</Typography>,
            key: 0
        },
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", fontSize: "15px", lineHeight: "26px",
                paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, fontWeight: "400"
            }}>CSC309 Project</Typography>,
            key: 1
        },
        {
            content:
                <div style={{ background: `${theme.lightColor}CC`, borderRadius: "3px", transform: props.mobile ? "" : "translate(1rem)", width: props.mobile ? "" : "90%" }}>
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
            content: <div style={{ display: "flex", paddingLeft: "1rem" }}>
                <IconButton style={{ padding: "4px" }} onClick={() => { window.open("https://github.com/kobayashikento/UAssist") }}>
                    <GitHubIcon style={{ color: props.theme.stdColor }} />
                </IconButton>
                <IconButton style={{ padding: "4px", marginLeft: "1rem" }} onClick={() => { window.open("http://aqueous-reef-85157.herokuapp.com/") }}>
                    <OpenInNewIcon style={{ color: props.theme.stdColor }} />
                </IconButton>
            </div>,
            key: 4
        },
    ]

    const secondProject = [
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", paddingLeft: props.mobile ? "" : "1rem",
                color: props.theme.priColor, fontWeight: "bold", fontSize: "19px", lineHeight: "32px"
            }}>Routine Recorder</Typography>,
            key: 0
        },
        {
            content: <Typography style={{
                fontFamily: "'Assistant', sans-serif", fontSize: "15px", lineHeight: "26px",
                paddingLeft: props.mobile ? "1rem" : "1rem", paddingBottom: "1rem", color: props.theme.secColor, fontWeight: "400"
            }}>Personal Project</Typography>,
            key: 1
        },
        {
            content:
                <div style={{ background: `${theme.lightColor}CC`, borderRadius: "3px", width: props.mobile ? "100%" : "80%", float: props.mobile ? "left" : "right" }}>
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
            content: <div style={{ display: "flex", paddingLeft: "1rem" }}>
                <IconButton style={{ padding: "4px" }} onClick={() => { window.open("https://github.com/kobayashikento/personal-event-tracker") }}>
                    <GitHubIcon style={{ color: props.theme.stdColor }} />
                </IconButton>
                <IconButton style={{ padding: "4px", marginLeft: "1rem" }} onClick={() => { window.open("https://life-tracker-7fb87.web.app/") }}>
                    <OpenInNewIcon style={{ color: props.theme.stdColor }} />
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
        from: { transform: 'translate3d(100px,0,0)' },
        enter: { transform: 'translate3d(0px,0,0)' },
        leave: { transform: 'translate3d(100px,0,0)' },
        ref: firstImgRef
    })

    const secondTrans = useTransition(open ? secondProject : [], item => item.key, {
        from: { transform: 'translate3d(100px,0,0)' },
        enter: { transform: 'translate3d(0px,0,0)' },
        leave: { transform: 'translate3d(100px,0,0)' },
        ref: secondProjectRef
    })

    const secondImgTrans = useTransition(open, null, {
        from: { transform: 'translate3d(-100px,0,0)' },
        enter: { transform: 'translate3d(0px,0,0)' },
        leave: { transform: 'translate3d(-100px,0,0)' },
        ref: secondImgRef
    })

    useChain([headerRef, firstProjectRef, firstImgRef, secondProjectRef, secondImgRef], [0, 0.5, 0.5, 1, 1])

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{
                background: props.theme.lightestColor, minHeight: "100vh", margin: "0px", 
                overflow: "hidden", width: "100%",
                paddingTop: "3.3vmax",
            }}
            spacing={5}
        >
            <Grid item sm={1} style={{ margin: props.mobile ? "" : "1rem", transform: `translate3d(3vw, 0,0)`}}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    {headerTrail.map(({ x, height, ...rest }, index) => (
                        <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                            {headerItems[index].content}
                        </animated.div>))}
                </div>
            </Grid>
            <Grid item sm={5} xs={5} style={{ maxWidth: props.mobile ? "100%" : "80%", margin: props.mobile ? "" : "2rem",
        transform: `translate3d(3vw, 0,0)` }} >
                <Grid
                    container
                    alignItems="center"
                    direction="row"
                    spacing={3}
                >
                    <Grid item sm={7} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: props.mobile ? "center" : "flex-start", zIndex: "1" }}>
                        {shopTrans.map(({ item, props, key }) =>
                            <animated.div key={`projectTrans1${key}`} style={props}>{item.content}</animated.div>
                        )}
                    </Grid>
                    <Grid item sm={5} xs={12} style={{ display: "flex", justifyContent: props.mobile ? "center" : "flex-end" }}>
                        {firstImgTrans.map(({ item, props, key }) => item &&
                            <animated.div key={`firstImgTrans${key}`} style={props}>
                                <img src={shopifyImg} style={{
                                    width: mobile ? "100%" : "500px", borderRadius: "5px"
                                }} />
                            </animated.div>
                        )}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={5} xs={5} style={{ maxWidth: props.mobile ? "100%" : "80%", margin: props.mobile ? "" : "2rem",transform: `translate3d(3vw, 0,0)` }}>
                {
                    mobile ?
                        <Grid
                            container
                            alignItems="center"
                            direction="row"
                            spacing={3}
                        >
                            <Grid item sm={8} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: "1" }}>
                                {secondTrans.map(({ item, props, key }) =>
                                    <animated.div key={`projectTrans2${key}`} style={props}>{item.content}</animated.div>
                                )}
                            </Grid>
                            <Grid item sm={4} xs={12} style={{ display: "flex", justifyContent: "flex-start" }}>
                                {secondImgTrans.map(({ item, props, key }) => item &&
                                    <animated.div key={`secondImgTrans${key}`} style={props}>
                                        <img src={sample1} style={{
                                            width: "100%", borderRadius: "5px"
                                        }} />
                                    </animated.div>
                                )}
                            </Grid>
                        </Grid>
                        :
                        <Grid
                            container
                            alignItems="center"
                            direction="row"
                            spacing={3}
                        >
                            <Grid item sm={4} xs={12} style={{ display: "flex", justifyContent: "flex-start" }}>
                                {secondImgTrans.map(({ item, props, key }) => item &&
                                    <animated.div key={`secondImgTrans${key}`} style={props}>
                                        <img src={sample1} style={{
                                            width: "500px", borderRadius: "5px", marginLeft: "1rem",
                                        }} />
                                    </animated.div>
                                )}
                            </Grid>
                            <Grid item sm={8} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", zIndex: "1" }}>
                                {secondTrans.map(({ item, props, key }) =>
                                    <animated.div key={`projectTrans2${key}`} style={props}>{item.content}</animated.div>
                                )}
                            </Grid>
                        </Grid>
                }
            </Grid>
            <Grid item sm={5} xs={5} style={{ maxWidth: props.mobile ? "100%" : "80%", margin: props.mobile ? "" : "2rem", transform: `translate3d(3vw, 0,0)` }} >
                <Grid
                    container
                    alignItems="center"
                    direction="row"
                    spacing={3}
                >
                    <Grid item sm={7} xs={12} style={{ display: "flex", flexDirection: "column", alignItems: props.mobile ? "center" : "flex-start", zIndex: "1" }}>
                        {firstTrans.map(({ item, props, key }) =>
                            <animated.div key={`projectTrans1${key}`} style={props}>{item.content}</animated.div>
                        )}
                    </Grid>
                    <Grid item sm={5} xs={12} style={{ display: "flex", justifyContent: "flex-end" }}>
                        {firstImgTrans.map(({ item, props, key }) => item &&
                            <animated.div key={`firstImgTrans${key}`} style={props}>
                                <img src={UAssist} style={{
                                    width: mobile ? "100%" : "500px", borderRadius: "5px",
                                }} />
                            </animated.div>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
})

export default React.memo(Projects)