import React from 'react'

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ListIcon from '@material-ui/icons/List';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

import { useSpring, useChain, useTrail, animated, useTransition } from 'react-spring';
import { Transition, Spring } from 'react-spring/renderprops';

import { withStyles } from '@material-ui/core/styles';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import DesignerAni from '../Components/DesignerAni.js';

import NET from 'vanta/dist/vanta.net.min';
import BIRDS from 'vanta/dist/vanta.birds.min';
import FOG from 'vanta/dist/vanta.fog.min';

import face from '../Assets/Pictures/chicagome.jpg';
import montrealme from '../Assets/Pictures/montrealme.jpg';

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const CoderIntro = React.memo(props => {
    const title = "<Developer/>";
    const open = true;
    const [vantaEffect, setVantaEffect] = React.useState(0);
    const myRef = React.useRef(null);

    React.useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: props.mobile ? 200 : window.innerHeight,
                minWidth: props.mobile ? window.innerWidth : window.innerWidth / 2,
                scale: 1.00,
                scaleMobile: 1.00,
                color: props.theme.lightColor,
                backgroundColor: props.theme.lightestColor,
                points: 16.00,
                maxDistance: 17.00,
                spacing: 14.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    const trail = useTrail(1, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 1500,
    })

    const [hover, setHover] = React.useState(false)

    return (
        props.mobile ?
            <div ref={myRef}>
                <div style={{ alignItems: "center", justifyContent: "center", width: `100vw`, height: "50vh", display: "flex", flexDirection: "column", color: props.theme.darkestColor, fontWeight: "400", fontFamily: "'Roboto Mono', monospace", fontSize: "1.5rem", }}>
                    <Typist
                        startDelay={1000}
                        avgTypingDelay={150}
                    >
                        {title}
                    </Typist>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div key={`introContent${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`), paddingTop: "2.2vmax" }}>
                            <Typography variant={"body1"} align="center" style={{
                                width: "340px",
                                color: "#010A26", paddingTop: "1rem", fontWeight: "400", opacity: "1"
                            }}>
                                Front End Developer who focuses on writing clean, elegant and efficient code.
</Typography>
                        </animated.div>
                    ))}
                </div>
                <div style={{ zIndex: "2", marginTop: "1rem", fontSize: "1rem", color: props.theme.darkestColor, display: "flex", flexDirection: "column", fontWeight: "400", fontFamily: "'Poppins', sans-serif", alignItems: "center" }}>
                    <Typist
                        startDelay={1000}
                        avgTypingDelay={150}
                    >
                        See My Experiences
                        </Typist>
                    <DoubleArrowIcon className="bounce" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => props.handleExpClick()}
                        style={{ margin: "1rem", color: hover ? props.theme.stdColor : props.theme.darkestColor }} />
                </div>
            </div>
            :
            <div ref={myRef} style={{ overflowX: "hidden", transform: `translate3d(${props.pos}px, 0, 0)`, willChange: "transform", }}>
                <div style={{
                    width: `${window.innerWidth - props.blockSize}px`, display: "flex", height: "100vh", alignItems: "center"
                }}>
                    <div style={{ paddingLeft: "5rem", display: "flex", flexDirection: "column", color: props.theme.darkestColor, fontWeight: "400", fontFamily: "'Roboto Mono', monospace", fontSize: "3rem", }}>
                        <Typist
                            startDelay={1000}
                            avgTypingDelay={150}
                        >
                            {title}
                        </Typist>
                        {trail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`introContent${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                <Typography variant={props.mobile ? "h6" : "body1"} align="center" style={{
                                    width: "340px",
                                    color: "#010A26", paddingTop: props.mobile ? "8rem" : "1rem", fontWeight: "400", opacity: "1"
                                }}>
                                    Front End Developer who focuses on writing clean, elegant and efficient code.
</Typography>
                            </animated.div>
                        ))}
                    </div>
                    <div style={{ marginTop: "1rem", fontSize: "1rem", color: props.theme.darkestColor, display: "flex", flexDirection: "column", fontWeight: "400", fontFamily: "'Poppins', sans-serif", marginLeft: "auto", paddingRight: "3rem", alignItems: "center" }}>
                        <Typist
                            startDelay={1000}
                            avgTypingDelay={150}
                        >
                            See My Experiences
                        </Typist>
                        <DoubleArrowIcon className="bounce" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => props.handleExpClick()}
                            style={{ margin: "1rem", color: hover ? props.theme.stdColor : props.theme.darkestColor }} />
                    </div>
                </div>
            </div>
    )
})

const DesignIntro = React.memo(props => {
    const open = true;
    const [vantaEffect, setVantaEffect] = React.useState(0);
    const myRef = React.useRef(null);

    React.useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(FOG({
                el: myRef.current,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: props.mobile ? 200 : window.innerHeight,
                minWidth: props.mobile ? window.innerWidth : window.innerWidth / 2,
                highlightColor: props.theme.lightColor,
                midtoneColor: props.theme.darkColor,
                lowlightColor: props.theme.darkestColor,
                baseColor: "#000",
                blurFactor: 0.25,
                zoom: 0.40
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    const trail = useTrail(1, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 1500,
    })

    const [hover, setHover] = React.useState(false)

    return (
        props.mobile ?
            <div
                ref={myRef} style={{ height: "50vh" }}
            >
                < div style={{
                    width: `100vw`, display: "flex", height: "50vh", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden"
                }}
                >
                    <Typography variant="h5" style={{ fontWeight: "bold", color: props.theme.lightestColor, fontFamily: "'Poppins', sans-serif", zIndex: 2, paddingBottom: "2.2vmax" }}>
                        Designer
                </Typography>
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div key={`introContent${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                            <Typography variant={"body1"} align="center" style={{
                                width: "340px", fontFamily: "'Poppins', sans-serif",
                                color: "#FFFFFF", paddingTop: "1rem", fontWeight: props.mobile ? "400" : "bold", opacity: "1"
                            }}>
                                Aspiring Designer with a passion for designing beautiful user experiences.
              </Typography>
                        </animated.div>
                    ))}
                    <div style={{ fontSize: "1rem", color: props.theme.darkestColor, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography variant="body1" style={{ fontWeight: "bold", color: props.theme.lightestColor, fontFamily: "'Poppins', sans-serif" }}>
                            See My Projects
                </Typography>
                        <DoubleArrowIcon className="bounce" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => props.handleProjClick()}
                            style={{ color: hover ? props.theme.stdColor : props.theme.lightestColor }} />
                    </div>
                </div >
            </div>
            :
            <div style={{ overflowX: "hidden", transform: `translate3d(${props.pos}px,0,0)`, position: "absolute", willChange: "transform" }}>
                <div
                    ref={myRef} style={{ height: "100vh" }}
                >
                    < div style={{
                        width: `${window.innerWidth - props.blockSize}px`, display: "flex", height: "100vh", alignItems: "center", justifyContent: "flex-end", overflow: "hidden"
                    }}
                    >
                        <div style={{ marginTop: "1rem", fontSize: "1rem", color: props.theme.darkestColor, display: "flex", flexDirection: "column", marginRight: "auto", paddingLeft: "3rem", alignItems: "center" }}>
                            <Typography variant="body1" style={{ fontWeight: "bold", color: props.theme.lightestColor, fontFamily: "'Poppins', sans-serif" }}>
                                See My Projects
                        </Typography>
                            <DoubleArrowIcon className="bounce" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => props.handleProjClick()}
                                style={{ margin: "1rem", color: hover ? props.theme.stdColor : props.theme.lightestColor }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", paddingRight: "5rem", justifyContent: "center" }}>
                            <DesignerAni
                                theme={props.theme}
                            />
                            {
                                trail.map(({ x, height, ...rest }, index) => (
                                    <animated.div key={`introContent${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                        <Typography variant={props.mobile ? "h6" : "body1"} align="center" style={{
                                            width: "340px", fontFamily: "'Poppins', sans-serif",
                                            color: "#FFFFFF", paddingTop: props.mobile ? "8rem" : "1rem", fontWeight: "bold", opacity: "1"
                                        }}>
                                            Aspiring Designer with a passion for designing beautiful user experiences.
                      </Typography>
                                    </animated.div>
                                ))
                            }
                        </div>
                    </div >
                </div>
            </div>
    )
})

const Introduction = React.memo(props => {
    const theme = props.theme
    const centerX = window.innerWidth / 2
    const blockSize = 450;
    const [mouseDesign, setMouseDesign] = React.useState(-((window.innerWidth - blockSize) - centerX));
    const [mouseCoder, setMouseCoder] = React.useState(((window.innerWidth - blockSize) - centerX));

    // for UX purposes need to make it so left and right amout moved to get to the end must be reduced 
    // step 1: divide the total screen by 4 => section 2, 3 is the range where the scroll will move and past section the 
    // mousemove is at max 
    // step 2: map the movement in section 2 and 3 using sqrt to make it so your scroll less towards the end 
    // step 3: convert it into ratios, ratio between the width of the two sections and the width of section 2 and 3. 

    const updateMousePosition = ev => {
        setTimeout(function () {
            if (ev.clientY < window.innerHeight && props.navIndex === 0) {
                if (window.innerWidth / 2 > blockSize) {
                    // mouse towards right
                    if (ev.clientX > centerX) {
                        const sec3end = (window.innerWidth * 0.55);
                        // if mouse is further than the end of section 3
                        if (ev.clientX > (sec3end)) {
                            setMouseDesign(-(((window.innerWidth - blockSize) - centerX) + ((window.innerWidth - blockSize) - centerX)))
                            setMouseCoder(0);
                        } else {
                            const sec3 = sec3end - window.innerWidth / 2
                            const mousepos = ev.clientX - window.innerWidth / 2
                            const perc = mousepos / sec3;
                            setMouseDesign(-(((window.innerWidth - blockSize) - centerX) + (((window.innerWidth - blockSize) - centerX) * perc)))
                            setMouseCoder(((window.innerWidth - blockSize) - centerX) - (((window.innerWidth - blockSize) - centerX) * perc));
                        }
                        // mouse towards left
                    } else if (ev.clientX < centerX) {
                        const sec2beg = (window.innerWidth * 0.45);
                        if (ev.clientX < sec2beg) {
                            setMouseDesign(0);
                            setMouseCoder((((window.innerWidth - blockSize) - centerX) + ((window.innerWidth - blockSize) - centerX)));
                        } else {
                            const sec2 = window.innerWidth / 2 - (sec2beg)
                            const mousepos = window.innerWidth / 2 - (ev.clientX)
                            const perc = mousepos / sec2;
                            setMouseDesign(-(((window.innerWidth - blockSize) - centerX) - (((window.innerWidth - blockSize) - centerX) * perc)));
                            setMouseCoder((((window.innerWidth - blockSize) - centerX) + (((window.innerWidth - blockSize) - centerX) * perc)));
                        }
                    }
                }
            } else {
                setMouseDesign(-((window.innerWidth - blockSize) - centerX));
                setMouseCoder(((window.innerWidth - blockSize) - centerX));
            }
        }, 280)
    };

    React.useEffect(() => {
        setTimeout(() => {
            window.addEventListener("mousemove", updateMousePosition)
        }, 2800)
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    React.useEffect(() => {
        if (props.navIndex !== 0) {
            setMouseDesign(-((window.innerWidth - blockSize) - centerX));
            setMouseCoder(((window.innerWidth - blockSize) - centerX));
        }
    }, [props.navIndex])

    return (
        props.mobile ?
            <div style={{ display: "flex", flexDirection: "column", maxHeight: "100vh", overflow: "hidden" }}>
                <div style={{ height: "50vh", width: "100vw" }}>
                    <DesignIntro
                        theme={theme}
                        mobile={props.mobile}
                        pos={0}
                        blockSize={blockSize}
                        handleProjClick={() => props.handleProjClick()}
                    />
                </div>
                <div style={{ height: "50vh", width: "100vw" }}>
                    <CoderIntro
                        theme={theme}
                        pos={0}
                        mobile={props.mobile}
                        blockSize={blockSize}
                        handleExpClick={() => props.handleExpClick()}
                    />
                </div>
            </div>
            :
            <div style={{ height: "100vh", overflowX: "hidden", width: '-webkit-fill-available', position: "relative" }}>
                <div style={{ overflow: "hidden" }}>
                    <DesignIntro
                        theme={theme}
                        pos={mouseDesign}
                        mobile={props.mobile}
                        blockSize={blockSize}
                        handleProjClick={() => props.handleProjClick()}
                    />
                </div>
                <div style={{ overflow: "hidden", float: "right" }}>
                    <CoderIntro
                        theme={theme}
                        pos={mouseCoder}
                        mobile={props.mobile}
                        blockSize={blockSize}
                        handleExpClick={() => props.handleExpClick()}
                        mobile={props.mobiel}
                    />
                </div>
            </div >
    )
})

const NavBar = (props) => {

    const navItems = ["Home", "About", "Experience", "Projects", "Personal", "Contact"];

    // Drawer
    const anchor = 'right'
    const [rightOpen, setRightOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setRightOpen(open)
    };

    const list = (
        <div
            style={{ width: "250px", display: "flex", flexDirection: "column", alignItems: "center", height: "100%" }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List style={{ position: "absolute", top: "15%" }}>
                {navItems.map((text, index) => (
                    <ListItem button key={text} style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Button style={{ width: "fit-content" }} onClick={() => props.handleNavClick(index)}>
                                <Typography variant="body1" align="justify" style={{ fontWeight: "bold", opacity: "0.8" }}>
                                    {navItems[index]}
                                </Typography>
                            </Button>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div style={{ position: "fixed", zIndex: "1", width: "100%", height: "56px", background: props.firstRender ? "transparent" : `${props.theme.lightestColor}` }}>
            <React.Fragment key={anchor}>
                <IconButton onClick={toggleDrawer(true)} style={{ position: "absolute", top: "0px", right: "0px" }}>
                    <ListIcon fontSize="large"/>
                </IconButton>
                <SwipeableDrawer
                    anchor={anchor}
                    open={rightOpen}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                >
                    {list}
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    )
}

const ToTop = (props) => {

    const mobile = props.mobile
    const color = props.theme.secColor
    const transitions = useTransition(!props.showNav, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const handleTopClick = () => {
        props.handleTopClick()
    }

    return (
        transitions.map(({ item, key, props }, index) => (
            item && <animated.div key={key} style={{
                ...props, display: "flex", position: "absolute", flexDirection: "column",
                justifyContent: "center", padding: mobile ? "8px" : "32px", paddingBottom: mobile ? "8px" : "40px", bottom: "0px", right: "0px", zIndex: "1"
            }}>
                <Button style={{ backgroundColor: "transparent", width: "fit-content" }} onClick={() => handleTopClick()} >
                    <ArrowUpwardIcon style={{ color: color }} />
                </Button>
            </animated.div >
        ))
    )
}

const SideIcons = (props) => {
    const [hover, setHover] = React.useState(0);

    const iconItems = [{
        content:
            <div className="button" onClick={() => { window.open("https://github.com/kobayashikento") }} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
                <GitHubIcon className="icon" style={{ borderRadius: "50%", color: hover === 1 ? props.theme.stdColor : props.theme.stdColor }} />
            </div>,
        key: 0
    },
    {
        content: <div className="button" onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)}>
            <LinkedInIcon className="icon" style={{ color: hover === 2 ? props.theme.stdColor : props.theme.stdColor }} />
        </div>,
        key: 1
    },
    {
        content: <div className="button" onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)}>
            <MailIcon className="icon" style={{ color: hover === 3 ? props.theme.stdColor : props.theme.stdColor }} />
        </div>,
        key: 2
    }];

    return (
        !props.mobile ?
            <Transition
                items={iconItems} keys={item => item.key}
                from={{ opacity: 0, transform: `translate3d(0,0px,0)`, height: "0px" }}
                enter={{ opacity: 1, transform: 'translate3d(0,0px,0)', height: "30px" }}
                leave={{ opacity: 0, transform: 'translate3d(0,0px,0)', height: "0px" }}
                config={{ mass: 5, tension: 2000, friction: 200, delay: 4000 }}
            >
                {item => props =>
                    <div style={props}>
                        {item.content}
                    </div>
                }
            </Transition>
            : props.side ? iconItems.map((item, index) => {
                return (
                    <div key={`mobileSideIcon${index}`} style={{ margin: "32px" }}>
                        {item.content}
                    </div>
                )
            }) : null
    )
}

const Contact = React.memo(props => {
    const handleClick = (index) => {
        props.handleThemeChange(index)
    }

    const StyledButton = withStyles({
        root: {
            borderRadius: 0,
            border: `2px solid ${props.theme.stdColor}`,
            '&:hover': {
                background: props.theme.stdColor,
            },
        },
    })(Button);

    return (
        props.mobile ?
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                style={{ paddingTop: "6.6vmax", margin: "0px", minHeight: "100vh", backgroundColor: props.theme.lightestColor, overflow: "hidden", width: '-webkit-fill-available' }}
                spacing={5}
            >
                <Grid item sm={1} style={{ display: "flex", justifyContent: "center", maxWidth: "fit-content" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: props.mobile ? "1rem" : "3rem", flexDirection: "column" }}>
                        <Typography variant={props.mobile ? "h6" : "h4"} style={{ color: props.theme.darkestColor, fontWeight: "bold", fontFamily: "'Poppins', sans serif" }}>
                            GET IN TOUCH
                     </Typography>
                        <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "9rem", backgroundColor: props.theme.darkestColor }} />
                    </div>
                </Grid>
                <Grid item sm={2} style={{ maxWidth: "90%" }}>
                    <Typography variant="body1" align={props.mobile ? "justify" : "center"} style={{ color: props.theme.darkestColor }}>
                        If you have any suggestions whether it's the design, animation, color scheme, etc... I am always eager to make improvements so leave me a message.
        </Typography>
                </Grid>
                <Grid item sm={2}>
                    <StyledButton onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                        <Typography variant="body1" align="center" style={{ color: props.theme.darkestColor }}>
                            Leave A Message
                </Typography>
                    </StyledButton>
                </Grid>
                <Grid item sm={2} style={{ maxWidth: "fit-content" }}>
                    <Typography variant="body1" align="center" style={{ color: props.theme.darkestColor }}>
                        These are some potential themes I was considering...
                </Typography>
                </Grid>
                <Grid item sm={2} style={{ maxWidth: "fit-content" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", height: "40px" }}>
                        {props.themes.map((theme, index) => {
                            return (
                                <Button key={`theme${index}`} style={{ marginRight: "1rem", color: theme.stdColor, borderRadius: 0, border: `2px solid ${theme.stdColor}` }} onClick={() => handleClick(index)}>
                                    {`${theme.stdColor}`}
                                </Button>
                            )
                        })}
                    </div>
                </Grid>
                <Grid item sm={1} style={{ maxWidth: "fit-content" }}>
                    <Typography variant="body2" align="center" style={{ color: props.theme.darkestColor }}>
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
                style={{ margin: "0px", minHeight: "100vh", backgroundColor: props.theme.lightestColor, overflow: "hidden", width: '-webkit-fill-available' }}
                spacing={5}
            >
                <Grid item sm={1} style={{ display: "flex", justifyContent: "center", maxWidth: "fit-content" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: props.mobile ? "1rem" : "3rem", flexDirection: "column" }}>
                        <Typography variant={props.mobile ? "h6" : "h4"} style={{ color: props.theme.darkestColor, fontWeight: "bold", fontFamily: "'Poppins', sans serif" }}>
                            GET IN TOUCH
                         </Typography>
                        <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "9rem", backgroundColor: props.theme.darkestColor }} />
                    </div>
                </Grid>
                <Grid item sm={2} style={{ maxWidth: "35%" }}>
                    <Typography variant="body1" align={props.mobile ? "justify" : "center"} style={{ color: props.theme.darkestColor }}>
                        If you have any suggestions whether it's the design, animation, color scheme, etc... I am always eager to make improvements so leave me a message.
            </Typography>
                </Grid>
                <Grid item sm={2}>
                    <StyledButton onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                        <Typography variant="body1" align="center" style={{ color: props.theme.darkestColor }}>
                            Leave A Message
                    </Typography>
                    </StyledButton>
                </Grid>
                <Grid item sm={2} style={{ maxWidth: "fit-content" }}>
                    <Typography variant="body1" align="center" style={{ color: props.theme.darkestColor }}>
                        These are some potential themes I was considering...
                    </Typography>
                </Grid>
                <Grid item sm={2} style={{ maxWidth: "fit-content" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", height: "40px" }}>
                        {props.themes.map((theme, index) => {
                            return (
                                <Button key={`theme${index}`} style={{ marginRight: "1rem", color: theme.stdColor, borderRadius: 0, border: `2px solid ${theme.stdColor}` }} onClick={() => handleClick(index)}>
                                    {`${theme.stdColor}`}
                                </Button>
                            )
                        })}
                    </div>
                </Grid>
                <Grid item sm={1} style={{ maxWidth: "fit-content" }}>
                    <Typography variant="body2" align="center" style={{ color: props.theme.darkestColor }}>
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

const MenuButton = (prop) => {
    const [hover, setHover] = React.useState({
        resume: false, aboutMe: false, port: false
    })
    return (
        <Container style={{ marginTop: "1rem" }} maxWidth="sm">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
            >
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.resume ? "1" : "0.9", boxShadow: shadow }}>
                        <Link to="/resume" style={{ textDecoration: "none", color: "black" }}>
                            <CardActionArea onMouseEnter={() => setHover({ ...hover, resume: true })} onMouseLeave={() => setHover({ ...hover, resume: false })}>
                                <CardContent>
                                    <Typography variant="body1" style={{ textAlign: "center" }}>Resume</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.aboutMe ? "1" : "0.9", boxShadow: shadow }}>
                        <CardActionArea onClick={() => prop.handleAboutMeClick()} onMouseEnter={() => setHover({ ...hover, aboutMe: true })} onMouseLeave={() => setHover({ ...hover, aboutMe: false })}>
                            <CardContent>
                                <Typography variant="body1" style={{ textAlign: "center" }}>About Me</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.port ? "1" : "0.9", boxShadow: shadow }}>
                        <CardActionArea onMouseEnter={() => setHover({ ...hover, port: true })} onMouseLeave={() => setHover({ ...hover, port: false })}>
                            <CardContent>
                                <Typography variant="body1" style={{ textAlign: "center" }}>Portfolio</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

const BottomMenu = (prop) => {
    const [hover, setHover] = React.useState({
        resume: false, port: false
    })
    return (
        <Container style={{ marginTop: "1rem" }} maxWidth="sm">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
            >
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.resume ? "1" : "0.9", boxShadow: shadow }}>
                        <Link to={"/resume"} style={{ textDecoration: "none", color: "black" }}>
                            <CardActionArea onMouseEnter={() => setHover({ ...hover, resume: true })} onMouseLeave={() => setHover({ ...hover, resume: false })}>
                                <CardContent>
                                    <Typography variant="body1" style={{ textAlign: "center" }}>Resume</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.port ? "1" : "0.9", boxShadow: shadow }}>
                        <CardActionArea onMouseEnter={() => setHover({ ...hover, port: true })} onMouseLeave={() => setHover({ ...hover, port: false })}>
                            <CardContent>
                                <Typography variant="body1" style={{ textAlign: "center" }}>Portfolio</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

const LineDescription = (props) => {

    const open = props.render;

    const items = [{
        content: <div style={{ display: "flex", alignItems: "center", marginRight: "auto", marginLeft: "auto", justifyContent: "center", width: "fit-content" }}>
            <Divider style={{ marginRight: "1rem", width: "2rem", backgroundColor: props.theme.priTxtColor }} />
            <Typography variant="body2" align="justify" style={{ color: props.theme.priTxtColor, fontWeight: "400", width: "fit-content" }}>
                About The Lines
        </Typography>
            <Divider style={{ marginLeft: "1rem", width: "2rem", backgroundColor: props.theme.priTxtColor }} />
        </div>
    }, {
        content: <Typography variant="subtitle2" align="center" style={{ color: props.theme.priTxtColor, marginLeft: props.mobile ? "2rem" : "", marginRight: props.mobile ? "2rem" : "", paddingTop: "1rem", paddingLeft: "1rem", fontWeight: "400", width: "fit-content" }}>
            The number of dots and lines present on the canvas is set to be within the limit of 17000 pixels.
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
        <Container maxWidth="xs" style={{ display: "flex", flexDirection: "column", position: "absolute", top: "30%", left: props.mobile ? "50%" : "50%", display: "flex", transform: "translate(-50%, -20%)" }}>
            {contentTrail.map(({ x, height, ...rest }, index) => (
                <animated.div key={`lineDes${index}`} style={{
                    ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`)
                }}>
                    {items[index].content}
                </animated.div>
            ))}
        </Container>
    )
}

export default React.memo(Introduction);
export { MenuButton, BottomMenu, Introduction, AboutMe, NavBar, SideIcons, Contact, ToTop, AboutMeSecond, LineDescription };
