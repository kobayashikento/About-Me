import React from 'react'

// import material ui components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// import material ui icons 
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import DescriptionIcon from '@material-ui/icons/Description';

import { useSpring, animated, useTransition, useTrail } from 'react-spring';
import { Transition } from 'react-spring/renderprops';

import { useMove } from 'react-use-gesture';

import { withStyles } from '@material-ui/core/styles';

// import typing animation
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

// import paintbrush animation
import DesignerAni from '../Components/DesignerAni.js';

// import background animation, i.e. network and fog
import BIRDS from 'vanta/dist/vanta.birds.min';
import GLOBE from 'vanta/dist/vanta.globe.min';

// import pictures for description section
import face from '../Assets/Pictures/chicagome.jpg';
import montrealme from '../Assets/Pictures/montrealme.jpg';

import resume from '../Assets/Kento Kobayashi Resume.pdf';

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const CoderIntro = React.memo(props => {
    const [vantaEffect, setVantaEffect] = React.useState(0);
    const myRef = React.useRef(null);
    const title = "<Developer/>";
    const theme = props.theme;

    React.useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(GLOBE({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: true,
                height: 200.00,
                width: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: props.theme.lightColor,
                color2: props.theme.darkColor,
                size: 1.20,
                backgroundColor: props.theme.lightestColor
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    const trail = useTrail(1, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: props.startTrail ? 1 : 0,
        x: props.startTrail ? 0 : 20,
        height: props.startTrail ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 500
    })

    return (
        props.mobile ?
            <React.Fragment>
                <div style={{
                    width: "100vw", zIndex: "-1", overflow: "hidden"
                }}>
                    <div style={{
                        display: "flex", flexDirection: "column", color: props.theme.darkestColor, lineHeight: "68px",
                        fontWeight: "400", fontFamily: "'Roboto Mono', monospace", fontSize: "40px", position: "absolute", justifyContent: "center",
                        opacity: `1`, alignItems: "center", height: "50vh", width: "100vw", zIndex: 2
                    }}>
                        <Typist avgTypingDelay={150}>
                            {title}
                        </Typist>
                        <Typography align="center" style={{
                            fontSize: "15px", lineHeight: "25px",
                            width: "340px", fontFamily: "'Roboto Mono', monospace", display: "flex",
                            marginLeft: "auto", marginRight: "auto",
                            color: theme.darkestColor, paddingTop: "16px", fontWeight: "400"
                        }}>
                            Front End Developer who specializes in React, Node.JS, and MongoDB.
                    </Typography>
                    </div>
                    <div ref={myRef} style={{ height: "50vh" }} />
                </div>
            </React.Fragment >
            :
            <React.Fragment>
                <div style={{
                    width: `${(window.innerWidth / 3) * 2}px`, zIndex: "-1", overflow: "hidden"
                }}>
                    <div ref={myRef} style={{ height: "100vh" }} />
                </div>
                <div style={{
                    display: "flex", flexDirection: "column", color: props.theme.darkestColor, lineHeight: "82px",
                    fontWeight: "400", fontFamily: "'Roboto Mono', monospace", fontSize: "50px", position: "absolute",
                    top: "50%", transform: `translate(${(props.typoDistance * 1.2) + 44}px,-50%)`, opacity: `1`
                }}>
                    {props.open ?
                        <Typist avgTypingDelay={150} onTypingDone={() => props.handleStartTrail()}>
                            {title}
                        </Typist>
                        : null
                    }
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div key={`introContent${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                            <Typography align="center" style={{
                                fontSize: "15px", lineHeight: "25px",
                                width: "340px", fontFamily: "'Roboto Mono', monospace", display: "flex",
                                marginLeft: "auto", marginRight: "auto",
                                color: theme.darkestColor, paddingTop: props.mobile ? "8rem" : "1rem", fontWeight: "400"
                            }}>
                                Front End Developer who specializes in React, Node.JS, and MongoDB.
</Typography>
                        </animated.div>
                    ))}
                </div>
            </React.Fragment >
    )
})

//Fog
const DesignIntro = React.memo(props => {
    const [vantaEffect, setVantaEffect] = React.useState(0);
    const myRef = React.useRef(null);

    React.useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                width: 200.00,
                height: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                quantity: 4.00,
                birdSize: 0.80,
                wingSpan: 21.00,
                colorMode: "lerpGradient",
                backgroundColor: props.theme.darkestColor,
                color1: props.theme.darkColor,
                color2: props.theme.lightColor
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    const trail = useTrail(1, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: props.startTrail ? 1 : 0,
        x: props.startTrail ? 0 : 20,
        height: props.startTrail ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 500,
    })

    //Fog
    return (
        props.mobile ?
            <React.Fragment>
                <div ref={myRef} style={{
                    width: window.innerWidth, zIndex: "0", height: "50vh", position: "absolute"
                }}>
                    <div style={{ display: "flex", height: "50vh", alignItems: "center" }} />
                </div>
                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100vw",
                    position: "absolute", zIndex: "1", opacity: `1`, height: "50vh", top: "0px"
                }}>
                    <DesignerAni theme={props.theme} />
                    {
                        <Typography align="center" style={{
                            width: "340px", fontFamily: "'Merriweather Sans', sans-serif",
                            fontSize: "16px", lineHeight: "27px", display: "flex", marginRight: "auto", marginLeft: "auto",
                            color: props.theme.lightestColor, paddingTop: "16px", fontWeight: "400"
                        }}>
                            Aspiring Designer with a passion for designing beautiful user experiences.
                        </Typography>
                    }
                </div>
            </React.Fragment>
            :
            <React.Fragment>
                <div ref={myRef} style={{
                    width: `${(window.innerWidth / 3) * 2}px`, zIndex: "0", height: "100vh", position: "absolute"
                }}>
                    <div style={{ display: "flex", height: "100vh", alignItems: "center" }} />
                </div>
                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    position: "absolute", top: "50%", right: `${props.typoDistance}px`,
                    transform: `translateY(-50%)`, zIndex: "1", opacity: `1`
                }}>
                    {props.open ?
                        <DesignerAni
                            theme={props.theme}
                        /> : null
                    }
                    {
                        trail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`introContent${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                <Typography align="center" style={{
                                    width: "340px", fontFamily: "'Merriweather Sans', sans-serif",
                                    fontSize: "16px", lineHeight: "27px", display: "flex", marginRight: "auto", marginLeft: "auto",
                                    color: props.theme.lightestColor, paddingTop: props.mobile ? "8rem" : "1rem", fontWeight: "400"
                                }}>
                                    Aspiring Designer with a passion for designing beautiful user experiences.
         </Typography>
                            </animated.div>
                        ))
                    }
                </div>
                {/* <div style={{
                    fontSize: "1rem", display: "flex", flexDirection: "column", position: "absolute", paddingTop: "3rem", zIndex: "2",
                    alignItems: "center", left: `${props.clientWidth / 2}px`, top: "50%", transform: "translate(120px, -50%)", opacity: `${(props.opacity - (props.clientWidth / 4)) / (props.clientWidth / 2)}`
                }}
                >
                    <Typography variant="body1" style={{ fontWeight: "bold", color: props.theme.lightestColor, fontFamily: "'proxima nova light', 'Helvetica Neue', Helvetica, Arial, Sans-serif" }}>
                        See My Projects
                        </Typography>
                    <DoubleArrowIcon className="bounce" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => props.handleProjClick()}
                        style={{ margin: "1rem", color: hover ? props.theme.stdColor : props.theme.lightestColor }} />
                </div> */}
            </React.Fragment>
    )
})

const Introduction = React.memo(props => {
    const blockSize = 280;
    const [titleAnimation, setTitleAnimation] = React.useState(false);
    const [startTrail, setStartTrail] = React.useState(false);
    const [bottomNav, setBottomNav] = React.useState(false);
    // for UX purposes need to make it so left and right amout moved to get to the end must be reduced 
    // step 1: divide the total screen by 4 => section 2, 3 is the range where the scroll will move and past section the 
    // mousemove is at max 
    // step 2: map the movement in section 2 and 3 using sqrt to make it so your scroll less towards the end 
    // step 3: convert it into ratios, ratio between the width of the two sections and the width of section 2 and 3. 

    const handleLandingChange = () => {
        if (!props.initial) {
            props.handleIntroLeave(false);
        }
    }

    React.useEffect(() => {
        if (!props.initial) {
            setBottomNav(false);
            setTitleAnimation(false);
        }
    }, [props.initial])

    const handleStartTrail = () => {
        setStartTrail(true);
        setTimeout(() => {
            setBottomNav(true);
        }, 1500)
    }

    const arrowSpring = useSpring({
        opacity: bottomNav ? 1 : 0,
        width: bottomNav ? "5rem" : "0rem",
    })

    const iconSpring = useSpring({
        opacity: bottomNav ? 1 : 0,
        transform: bottomNav ? "translate3d(0, 0px, 0)" : "translate3d(0, -100px, 0)"
    })

    const thirds = (window.innerWidth / 2) - (window.innerWidth / 3)
    const designCenter = -((window.innerWidth / 2) - (window.innerWidth / 3));
    const typoLength = 350;
    const typoDistance = ((window.innerWidth / 3) - typoLength) / 2;

    const [scrollX, setScrollX] = React.useState(0);
    // 0 = left, 1 = right side
    const { dX } = useSpring({
        dX: scrollX, config: {
            mass: 20,
            tension: 401,
            friction: 180
        }
    })

    const bind = useMove(({ xy }) =>
        setTimeout(() => {
            if (bottomNav) {
                const center = window.innerWidth / 2;
                //left side 
                if (xy[1] > window.innerHeight * 0.15) {
                    if (xy[0] < center) {
                        setScrollX(-(center - xy[0]));
                    } else {
                        // right side
                        setScrollX(xy[0] - center);
                    }
                }
            }
        }, 66)
    )

    const designPos = dX.interpolate({
        range: [-250, 250],
        output: [`scale(1.16) translate3d(${thirds - thirds * 0.16}px,0,0)`, `scale(0.84) translate3d(${-thirds + thirds * 0.16}px,0,0)`],
        extrapolate: 'clamp'
    })

    const coderPos = dX.interpolate({
        range: [-250, 250],
        output: [` scale(0.84) translate3d(${thirds - thirds * 0.16}px,0,0)`, `scale(1.16) translate3d(${-thirds + thirds * 0.16}px,0,0)`],
        extrapolate: 'clamp'
    })

    const designIndex = dX.interpolate({
        range: [-50, 0],
        output: [0, 1],
        extrapolate: 'clamp'
    })

    const coderIndex = dX.interpolate({
        range: [0, 50],
        output: [1, 0],
        extrapolate: 'clamp'
    })

    const designHeight = dX.interpolate({
        range: [0, 250],
        output: [window.innerHeight, (window.innerHeight / 3) + (window.innerHeight * 0.4)],
        extrapolate: 'clamp'
    })

    const designMargin = dX.interpolate({
        range: [0, 250],
        output: [0, (window.innerHeight / 2) - ((window.innerHeight / 3) + (window.innerHeight * 0.4)) / 2],
        extrapolate: 'clamp'
    })

    const coderHeight = dX.interpolate({
        range: [-250, 0],
        output: [(window.innerHeight / 3) + (window.innerHeight * 0.4), window.innerHeight],
        extrapolate: 'clamp'
    })

    const coderMargin = dX.interpolate({
        range: [-250, 0],
        output: [(window.innerHeight / 2) - ((window.innerHeight / 3) + (window.innerHeight * 0.4)) / 2, 0],
        extrapolate: 'clamp'
    })

    // the order of animation 
    // 1. nothing -> initial transition left and right 
    // 2. setOpen -> opens typist 
    // 3. handleStarttTrail -> start the description trail 
    // 4. 1500 ms timeout 
    // 5. setBottom Nav -> which queues the transition for the icons 
    // * 3 active transitions, 4 animated divs where the last aniamted div listens to mouseover (left or right)

    // transform: `translate(${-((window.innerWidth / 3) * 2)}px, 0px)`,
    // transform: `translate(${designCenter}px, 0px)`

    return (
        props.mobile ?
            <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
                <div style={{ height: "50vh", width: "100vw" }}>
                    <DesignIntro
                        theme={props.theme}
                        mobile={props.mobile}
                    />
                </div>
                <div style={{ height: "50vh", width: "100vw" }}>
                    <CoderIntro
                        theme={props.theme}
                        mobile={props.mobile}
                    />
                </div>
            </div>
            :
            <div {...bind()} style={{
                height: "100vh", width: "100vw", overflow: "hidden", position: "relative"
            }}>
                <Transition
                    items={props.initial}
                    from={{ position: 'absolute', width: "0px", zIndex: 0 }}
                    enter={{ width: `${(window.innerWidth / 3) * 2}px`, zIndex: 1 }}
                    leave={{ width: "0px", zIndex: 0 }}
                    onRest={() => setTitleAnimation(true)}
                    onDestroyed={() => handleLandingChange()}
                >
                    {initial => initial && (prop => <animated.div style={{ ...prop, zIndex: designIndex, transform: `translate(${designCenter}px, 0px)` }}>
                        <animated.div style={{
                            transform: designPos, height: designHeight, width: "100%",
                            overflow: "hidden", marginTop: designMargin, boxShadow: shadow
                        }}>
                            <DesignIntro
                                typoDistance={typoDistance}
                                theme={props.theme}
                                open={titleAnimation}
                                startTrail={startTrail}
                                mobile={props.mobile}
                                handleProjClick={() => props.handleProjClick()}
                            />
                        </animated.div>
                    </animated.div>
                    )}
                </Transition>
                <Transition
                    items={props.initial}
                    from={{ position: 'absolute', width: "0px" }}
                    enter={{ width: `${((window.innerWidth / 3) * 2)}px` }}
                    leave={{ width: "0px" }}
                >
                    {initial => initial && (prop => <animated.div style={{
                        ...prop, zIndex: coderIndex,
                        transform: `translate(${((window.innerWidth / 3) * 2) - (window.innerWidth / 2)}px, 0px)`, right: "0px"
                    }}>
                        <animated.div style={{
                            transform: coderPos, height: coderHeight, position: "absolute", marginTop: coderMargin,
                            width: "100%", overflow: "hidden", boxShadow: shadow,
                        }}>
                            <CoderIntro
                                typoDistance={typoDistance}
                                theme={props.theme}
                                open={titleAnimation}
                                startTrail={startTrail}
                                mobile={props.mobile}
                                handleStartTrail={() => handleStartTrail()}
                                handleExpClick={() => props.handleExpClick()}
                                mobile={props.mobile}
                            />
                        </animated.div>
                    </animated.div>)}
                </Transition>
                <animated.div style={{ ...arrowSpring, position: "absolute", bottom: "3rem", width: `100vw`, zIndex: "2" }}>
                    <Tooltip title="Scroll or Click to view Portfolio" placement="bottom">
                        <div onClick={() => props.handleInitialChange(false)} style={{
                            display: "flex", marginRight: "auto", marginLeft: "auto", borderRadius: "3px", cursor: "pointer", width: "56px"
                        }} >
                            <KeyboardArrowDownIcon style={{ fontSize: "3.5rem" }} />
                        </div>
                    </Tooltip>
                </animated.div>
                <animated.div style={{
                    ...iconSpring, marginLeft: "auto", display: "flex", alignItems: "center", justifyContent: "flex-start", overflow: "hidden",
                    position: "absolute", top: "0", left: "0", paddingLeft: "3.3vmax", paddingTop: "1.2vmax", zIndex: "2", width: "100%",
                }}>
                    <Tooltip title="To Github Profile">
                        <div style={{ margin: "1.1vmax", cursor: "pointer" }} onClick={() => { window.open("https://github.com/kobayashikento") }} >
                            <GitHubIcon style={{ borderRadius: "50%", }} />
                        </div>
                    </Tooltip>
                    <Tooltip title="To LinkedIn Profile">
                        <div style={{ margin: "1.1vmax", cursor: "pointer" }} onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} >
                            <LinkedInIcon />
                        </div>
                    </Tooltip>
                    <Tooltip title="Open Email">
                        <div style={{ margin: "1.1vmax", cursor: "pointer" }} onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                            <MailIcon />
                        </div>
                    </Tooltip>
                    <div style={{ marginLeft: "auto", display: "flex", paddingRight: "3.3vmax" }}>
                        <Tooltip title="View Resume">
                            <div style={{ margin: "1.1vmax", cursor: "pointer" }} onClick={() => window.open(resume)} >
                                <DescriptionIcon />
                            </div>
                        </Tooltip>
                        <Tooltip title="Reload Website">
                            <div style={{ margin: "1.1vmax", cursor: "pointer" }} onClick={() => { window.location.reload(false) }} >
                                <ReplayRoundedIcon />
                            </div>
                        </Tooltip>
                    </div>
                </animated.div>
            </div >
    )
})

const Contact = React.memo(props => {

    return (
        props.mobile ?
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ paddingTop: "6.6vmax", margin: "0px", backgroundColor: props.theme.darkestColor, overflow: "hidden", width: '100vw', height: "100vh" }}
                spacing={5}
            >
                <Grid item sm={1} style={{ display: "flex", justifyContent: "center", maxWidth: "fit-content", maxWidth: "100%", }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: props.mobile ? "1rem" : "3rem", flexDirection: "column" }}>
                        <Typography style={{
                            color: props.theme.lightestColor, fontWeight: "bold",
                            lineHeight: "61px", fontSize: "36px", fontFamily: "'Merriweather', serif"
                        }}>
                            GET IN TOUCH
                 </Typography>
                        <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "15rem", backgroundColor: props.theme.lightestColor }} />
                    </div>
                </Grid>
                <Grid item sm={2} style={{ maxWidth: "70vw" }}>
                    <Typography align={props.mobile ? "justify" : "center"} style={{
                        color: props.theme.lightestColor,
                        fontFamily: "'Assistant', sans-serif", fontSize: "14px", lineHeight: "26px"
                    }}>
                        If you have any suggestions whether it's the design, animation, color scheme, etc... I am always eager to make improvements so leave me a message.
    </Typography>
                </Grid>
                <Grid item sm={2}>
                    <div style={{ marginLeft: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Tooltip title="To Github Profile">
                            <IconButton onClick={() => { window.open("https://github.com/kobayashikento") }} >
                                <GitHubIcon style={{ borderRadius: "50%", color: props.theme.stdColor }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="To LinkedIn Profile">
                            <IconButton onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} >
                                <LinkedInIcon style={{ color: props.theme.stdColor }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Open Email">
                            <IconButton onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                                <MailIcon style={{ color: props.theme.stdColor }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
                <Grid item sm={1} style={{ maxWidth: "fit-content", maxWidth: "100%" }}>
                    <Typography variant="body2" align="center" style={{ color: props.theme.lightestColor }}>
                        Based in Toronto, Fueled by coffee :)
    </Typography>
                </Grid>
            </Grid >
            :
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ paddingTop: "6.6vmax", margin: "0px", backgroundColor: props.theme.darkestColor, overflow: "hidden", width: '100vw', height: "100vh" }}
                spacing={5}
            >
                <Grid item sm={1} style={{ display: "flex", justifyContent: "center", maxWidth: "fit-content", maxWidth: "100%", }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: props.mobile ? "1rem" : "3rem", flexDirection: "column" }}>
                        <Typography style={{
                            color: props.theme.lightestColor, fontWeight: "bold",
                            lineHeight: "61px", fontSize: "36px", fontFamily: "'Merriweather', serif"
                        }}>
                            GET IN TOUCH
                         </Typography>
                        <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "15rem", backgroundColor: props.theme.lightestColor }} />
                    </div>
                </Grid>
                <Grid item sm={2} style={{ maxWidth: "35%" }}>
                    <Typography align={props.mobile ? "justify" : "center"} style={{
                        color: props.theme.lightestColor,
                        fontFamily: "'Assistant', sans-serif", fontSize: "14px", lineHeight: "26px"
                    }}>
                        If you have any suggestions whether it's the design, animation, color scheme, etc... I am always eager to make improvements so leave me a message.
            </Typography>
                </Grid>
                <Grid item sm={2}>
                    <div style={{ marginLeft: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                        <Tooltip title="To Github Profile">
                            <IconButton onClick={() => { window.open("https://github.com/kobayashikento") }} >
                                <GitHubIcon style={{ borderRadius: "50%", color: props.theme.stdColor }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="To LinkedIn Profile">
                            <IconButton onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} >
                                <LinkedInIcon style={{ color: props.theme.stdColor }} />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Open Email">
                            <IconButton onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                                <MailIcon style={{ color: props.theme.stdColor }} />
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
                <Grid item sm={1} style={{ maxWidth: "fit-content", maxWidth: "100%" }}>
                    <Typography variant="body2" align="center" style={{ color: props.theme.lightestColor }}>
                        Based in Toronto, Fueled by coffee :)
            </Typography>
                </Grid>
            </Grid >
    )
})

const AboutMe = React.memo(props => {

    const open = props.render

    const headerItems = [
        {
            content: <Typography variant={props.mobile ? "h6" : "h4"} style={{ color: props.theme.lightestColor, fontWeight: "bold", fontFamily: "'Comfortaa', sans-serif" }}>ABOUT ME</Typography>,
            type: 0,
        },
        {
            content: <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "8rem", backgroundColor: props.theme.lightestColor }} />,
            type: 0,
        }
    ]

    const contentItems = [
        {
            content: <Typography variant="body1" style={{ display: "block", color: props.theme.lightestColor, textIndent: "1rem", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}> I am Developer based in Toronto, Ontario with a mild addiction to coffee. </Typography>,
            paddingLeft: "1rem", marginBottom: "1rem", textIndent: "1rem",
        },
        {
            content: <Typography variant="body1" style={{ display: "inline", paddingLeft: "1rem", color: props.theme.lightestColor, fontFamily: "'Poppins', sans-serif" }}>I recently obtained my </Typography>,
            paddingLeft: "1rem", marginBottom: "inherit", textIndent: "1rem"
        },
        {
            content: <Typography variant="body1" style={{ display: "inline", boxDecorationBreak: "clone", color: props.theme.lightestColor, fontFamily: "'Poppins', sans-serif" }}> Bachelors of Science in Mathematics, Statistics, and Philosophy from the University of Toronto. </Typography>
            , paddingLeft: "1rem", marginBottom: "inherit", textIndent: "0"
        },
        {
            content: <Typography variant="body1" style={{ display: "inline", boxDecorationBreak: "clone", color: props.theme.lightestColor, fontFamily: "'Poppins', sans-serif" }}> I put pride in making functional and beautiful products by focusing on every single detail, from the animations to the color schemes.  </Typography>
            , paddingLeft: "1rem", marginBottom: "inherit", textIndent: "0"
        },
    ]

    const secondContentItems = [
        {
            content: <Typography variant="body1" style={{ paddingTop: "1rem", display: "block", color: props.theme.lightestColor, textIndent: "1rem", marginBottom: "1rem", fontFamily: "'Poppins', sans-serif" }}>
                After completing my third year at U of T, I got the opportunity to work in Chicago where I worked as an Application Developer at Kroger to build an app that would manage and notify the user of any close to expiry products. After which, I came back to finish my bachelor's degree.
            </Typography>,
            paddingLeft: "1rem", marginBottom: "1rem", textIndent: "1rem"
        },
    ]


    const headerTrail = useTrail(headerItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    const contentTrail = useTrail(contentItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 500
    })

    const secondContentTrail = useTrail(secondContentItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 800
    })

    const firstTrans = useTransition(open, null, {
        from: { transform: 'translate3d(100px,0,0)' },
        enter: { transform: 'translate3d(0px,0,0)' },
        leave: { transform: 'translate3d(100px,0,0)' },
    })

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ margin: "0px", backgroundColor: props.theme.darkColor, overflow: "hidden", width: "-webkit-fill-available", paddingTop: "6.6vmax", paddingBottom: "6.6vmax" }}
            spacing={5}
        >
            <Grid item sm={2}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                    {headerTrail.map(({ x, height, ...rest }, index) => (
                        <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                            {headerItems[index].content}
                        </animated.div>))}
                </div>
            </Grid>
            <Grid item sm={5} style={{ margin: "0px", maxWidth: props.mobile ? "100%" : "70%", paddingTop: props.mobile ? "2rem" : "4rem" }}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={5}
                >
                    <Grid item sm={7} style={{ paddingLeft: props.mobile ? "" : "3rem" }}>
                        {contentTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`aboutContent${index}`} style={{
                                ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`), display: index === 0 ? "block" : "inline",
                            }}>
                                {contentItems[index].content}
                            </animated.div>))}
                        {secondContentTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`aboutContent${index}`} style={{
                                ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`), display: index === 0 ? "block" : "inline",
                            }}>
                                {secondContentItems[index].content}
                            </animated.div>))}
                    </Grid>
                    <Grid item sm={5} style={{ display: "flex", justifyContent: "center" }}>
                        {firstTrans.map(({ item, props, key }) => item &&
                            <animated.div key={`firstImgTrans${key}`} style={props}>
                                <img src={face} style={{
                                    width: "290px", height: "300px", borderRadius: "5px",
                                }} />
                            </animated.div>
                        )}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sm={5} style={{ margin: "0px", maxWidth: props.mobile ? "100%" : "70%", paddingTop: props.mobile ? "2rem" : "ƒ4rem" }}>
                <AboutMeSecond
                    mobile={props.mobile}
                    render={open}
                    theme={props.theme}
                />
            </Grid>
        </Grid >
    )
})

const AboutMeSecond = (props) => {

    const open = props.render
    const items = [
        {
            content: <Typography variant="body1" align={props.mobile ? "left" : "right"} style={{ color: props.theme.lightestColor, paddingLeft: props.mobile ? "" : "1rem", textIndent: "1rem", marginBottom: props.mobile ? "" : "1rem", fontFamily: "'Poppins', sans-serif" }}>
                When I am not coding I enjoy playing video games, playing the piano, and occasionally check myself out while working out.
</Typography>
        },
        {
            content: <Typography variant="body1" align={props.mobile ? "left " : "right"} style={{ color: props.theme.lightestColor, paddingLeft: props.mobile ? "" : "1rem", textIndent: "1rem", fontFamily: "'Poppins', sans-serif" }}>
                I enjoy playing all kinds of pieces on the piano from Ghibli films, to Chopin's Waltz, and Jazz music, while carefully making sure that I don't annoy my neighbors.
</Typography>
        },
    ]

    const contentTrail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 500
    })

    const firstTrans = useTransition(open, null, {
        from: { transform: 'translate3d(-100px,0,0)' },
        enter: { transform: 'translate3d(0px,0,0)' },
        leave: { transform: 'translate3d(-100px,0,0)' },
    })

    return (
        <div style={{ backgroundColor: props.theme.darkColor, display: "flex", justifyContent: "center" }}>
            {props.mobile ?
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ margin: "0px" }}
                    spacing={5}
                >
                    <Grid item xs={12} sm={7}>
                        {contentTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`aboutSec${index}`} style={{
                                ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`)
                            }}>
                                {items[index].content}
                            </animated.div>
                        ))}
                    </Grid>
                    <Grid item xs={12} sm={5} >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {firstTrans.map(({ item, props, key }) => item &&
                                <animated.div key={`firstImgTrans${key}`} style={props}>
                                    <img src={montrealme} style={{
                                        width: "330px", height: "272px", borderRadius: "5px",
                                    }} />
                                </animated.div>
                            )}
                        </div>
                    </Grid>
                </Grid>
                :
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{ margin: "0px" }}
                    spacing={5}
                >
                    <Grid item xs={12} sm={5} >
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            {firstTrans.map(({ item, props, key }) => item &&
                                <animated.div key={`firstImgTrans${key}`} style={props}>
                                    <img src={montrealme} style={{
                                        width: "330px", height: "272px", borderRadius: "5px",
                                    }} />
                                </animated.div>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={7} style={{ paddingRight: "3rem" }}>
                        {contentTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`aboutSec${index}`} style={{
                                ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`)
                            }}>
                                {items[index].content}
                            </animated.div>
                        ))}
                    </Grid>
                </Grid>
            }
        </div>
    )
}

export default React.memo(Introduction);
export { Introduction, AboutMe, Contact };
