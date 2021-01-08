import React from 'react'

// import from material ui 
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { animated, useSpring, config } from 'react-spring';

// import components 
import MyDescription from '../Sections/MyDescription.js';
import AnimateTimeline from '../Components/AnimatedTimeline.js';
import AnimatedGrid from '../Components/AnimatedGrid.js';
import NetworkAni from '../Components/NetworkAni.js';
import { NavBar, Introduction, AboutMe, SideIcons, Contact, ToTop, Picture, AboutMeSecond, SecondPicture, LineDescription } from '../Sections/Introduction.js';
import Projects from './Projects';
import Experience from './Experience.js';
import About from './About.js';

// import styles
import '../Styles/resumeStyle.css';

import { useWheel } from 'react-use-gesture';

import Scrollbar from 'react-smooth-scrollbar';

import { Transition, Spring } from 'react-spring/renderprops'

// Themes/Color schemes 
const themes = [
    {
        //EDF6FF
        darkestColor: "#010A26",
        darkColor: "#011640",
        lightColor: "#B6D6F2",
        lightestColor: "#FFFFFF",
        stdColor: "#E83338"
    },
    {
        //EDF6FF
        darkestColor: "#030F28",
        darkColor: "#081B41",
        lightColor: "#A5A5A5",
        lightestColor: "#FFFFFF",
        stdColor: "#B5111B"
    },
    {
        //EDF6FF
        darkestColor: "#261320",
        darkColor: "#2C7BBF",
        lightColor: "#2C87BF",
        lightestColor: "#F2F2F2",
        stdColor: "#D92938"
    },
    {
        //EDF6FF
        darkestColor: "#232426",
        darkColor: "#35528C",
        lightColor: "#4162A6",
        lightestColor: "#D9D9D9",
        stdColor: "#F28379"
    },
    {
        //EDF6FF
        darkestColor: "#0B0E26",
        darkColor: "#02AEF1",
        lightColor: "#EF96AB",
        lightestColor: "#FAFFFA",
        stdColor: "#E61C66"
    },
    {
        //EDF6FF
        darkestColor: "#30618C",
        darkColor: "#9CC1D9",
        lightColor: "#8C5E35",
        lightestColor: "#D9AE5F",
        stdColor: "#4B8CA6"
    },
]
const phi = 1.6180339887498948482;

const Home = React.memo(props => {

    const boxShadow = "0 2px 6px rgba(60,64,67,.15), 0 1px 2px rgba(60,64,67,.3)";

    let scroll = React.useRef(null);
    let expContainerRef = React.useRef(null);
    let aboutContainerRef = React.useRef(null);
    let contactContainerRef = React.useRef(null);
    // condition that changes parallax size depending on the window size
    // if its 1500px or higher, then keep layout size at 4 
    const lgUp = useMediaQuery('(min-width:1440px)');
    const theme = useTheme();
    let mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [showDesc, setShowDesc] = React.useState(true);
    const [colorScheme, setTheme] = React.useState(themes[0]);
    const [clientWidth, setClientWidth] = React.useState(window.innerWidth);
    // animation timing based on scroll position
    const [landingArrow, setLandingArrow] = React.useState(false);
    const [first, setFirst] = React.useState(false)
    const [second, setSecond] = React.useState(false);
    const [third, setThird] = React.useState(false);
    const [forth, setForth] = React.useState(false);
    const [fith, setFith] = React.useState(false);
    const [expPos, setExpPos] = React.useState(window.innerHeight);
    const [projPos, setProjPos] = React.useState(window.innerHeight);
    const [aboutMePos, setAboutMePos] = React.useState(window.innerHeight);
    const [contactPos, setContactPos] = React.useState(3.6);
    const [landing, setLanding] = React.useState(true);
    const [show, setShow] = React.useState(false);

    // Handle change of theme event 
    const handleThemeChange = (index) => {
        setTheme(themes[index])
    }

    const [navHover, setNavHover] = React.useState(0);
    const [navIndex, setNavIndex] = React.useState(0);

    const handleSetActive = (e) => {
        setNavIndex(e)
    }

    const handleExpClick = () => {
        scroller.scrollTo('experience', {
            duration: 1500,
            delay: 100,
            smooth: true,
        })
    }

    const handleProjClick = () => {
        scroller.scrollTo('projects', {
            duration: 1500,
            delay: 100,
            smooth: true,
        })
    }

    // Handle when button on the nav menu is clicked 
    const handleNavClick = (index) => {
        switch (index) {
            case 0:
                scroller.scrollTo('introduction', {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                })
                break;
            case 1:
                scroller.scrollTo('description', {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                })
                break;
            case 2:
                scroller.scrollTo('experience', {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                })
                break;
            case 3:
                scroller.scrollTo('projects', {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                })
                break;
            case 4:
                scroller.scrollTo('aboutme', {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                })
                break;
            case 5:
                scroller.scrollTo('contact', {
                    duration: 1500,
                    delay: 100,
                    smooth: true,
                })
                break;
        }
    }

    const [initial, setInitial] = React.useState(true);

    /* Introduction section handlers */
    // Function used for the introduction callback 
    const handleInitialChange = (state) => {
        setInitial(state);
    }

    // Function triggered once the last transition finishes 
    const handleIntroLeave = () => {
        setLanding(false);
        setFirst(true);
        setSecond(true);
    }

    /* Description section handlers */
    const handleDescriptionLeave = () => {
        setLanding(true);
        setInitial(true);
    }

    const [direction, setDirection] = React.useState(false);

    const bind = useWheel(({ wheeling, direction }) => {
        if (wheeling && direction[1] === 1) {
            setInitial(false);
        }
    })

    const gRatioA = window.innerWidth / phi;
    const gRatioB = window.innerWidth - gRatioA;

    // Transition from introduction to scrolling body, each step is aysnc and waits for the prev to finish
    // 1. when (first) is set to true => body transitions in 
    // 2. handleTransitionRest is called upon completion of 1., if first is true, then 
    //    setOpen is set to true
    // 3. open transitions the "About" typography on completion calls handleDescriptionRest()
    // 4. descriptionopen is set to true, this animates the typo "expericned ....", on completion calls handleDescRest()
    // 5. valuesopen is set to true, this animates the 4 icons, on completion calls handleDescRest()
    // 6. barsOpen is set to true, this animates the experience level bars 
    const [hideAbout, setHideAbout] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [descriptionOpen, setDescriptionOpen] = React.useState(false);
    const [descriptionOpenSecond, setDescriptionOpenSecond] = React.useState(false);
    const [showNav, setShowNav] = React.useState(false);
    const [contactShow, setContactShow] = React.useState(false);

    const handleTransitionRest = () => {
        if (first) {
            setOpen(true)
        } else {
            handleDescriptionLeave();
        }
    }

    const handleDescriptionRest = () => {
        if (open) { setDescriptionOpen(true); setDescriptionOpenSecond(true); setTimeout(() => { setShowNav(true) }, 2000) }
    }

    React.useEffect(() => {
        if (scroll.current !== null) {
            scroll.current.scrollbar.offset.y = 10;
            scroll.current.scrollbar.addListener((s) => {
                if (s.offset.y > window.innerHeight * 0.2) { setSecond(false) } else { setSecond(true) }
                if (s.offset.y > window.innerHeight * 0.25) { setThird(true) } else { setThird(false) }
                if (s.offset.y > window.innerHeight * 1) { setHideAbout(true) } else { setHideAbout(false) }
                if (s.offset.y > window.innerHeight * 1.7) { setForth(true) } else { setForth(false) }
                if (s.offset.y > contactContainerRef.current.offsetTop - window.innerHeight) { setContactShow(true) } else { setContactShow(false) }
                if (s.offset.y === 0) {
                    setFirst(false); setSecond(false);
                }
            })
        } else {
            return () => scroll.current.scrollbar.removeListener()
        }
    }, [landing]);

    const handleScroll = (type) => {
        if (scroll.current !== null) {
            if (type === "about") {
                scroll.current.scrollbar.scrollTo(0, 10, 800);
            } else if (type === "experience") {
                scroll.current.scrollbar.scrollTo(0, aboutContainerRef.current.offsetTop - `${window.innerHeight * 0.025}`, 800);
            } else if (type === "projects") {
                scroll.current.scrollbar.scrollTo(0, expContainerRef.current.offsetTop, 800);
            } else if (type === "contact") {
                scroll.current.scrollbar.scrollTo(0, contactContainerRef.current.offsetTop, 800);
            }
        }
    }

    const navSpring = useSpring({
        opacity: showNav ? 1 : 0,
        transform: showNav ? 'translate3d(0, 0px, 0)' : 'translate3d(0, -100px, 0)'
    })

    const aboutSpring = useSpring({
        width: navHover === 2 ? "2rem" : (!hideAbout) ? "2rem" : "0rem",
        opacity: navHover === 2 ? 1 : (!hideAbout) ? 1 : 0
    })

    const expSpring = useSpring({
        width: navHover === 3 ? "4rem" : (hideAbout && !forth) ? "4rem" : "0rem",
        opacity: navHover === 3 ? 1 : (hideAbout && !forth) ? 1 : 0
    })

    const projSpring = useSpring({
        width: navHover === 4 ? "3rem" : (forth && !contactShow) ? "3rem" : "0rem",
        opacity: navHover === 4 ? 1 : (forth && !contactShow) ? 1 : 0
    })

    const contactSpring = useSpring({
        width: navHover === 6 ? "3rem" : contactShow ? "3rem" : "0rem",
        opacity: navHover === 6 ? 1 : contactShow ? 1 : 0
    })

    return (
        <div {...bind()} style={{ background: `${colorScheme.lightColor}66` }}>
            { landing ?
                <Introduction
                    mobile={mobile}
                    initial={initial}
                    theme={colorScheme}
                    handleIntroLeave={() => handleIntroLeave()}
                    handleInitialChange={(state) => handleInitialChange(state)}
                />
                :
                <div>
                    <animated.div
                        style={{
                            ...navSpring, height: "54px", display: "flex", backgroundColor: "transparent", top: "0px", width: "100%", position: "fixed", zIndex: 2, marginTop: "1.1vmax"
                        }}>
                        {/* <Link onMouseEnter={() => setNavHover(1)} onMouseLeave={() => setNavHover(0)} onSetActive={() => handleSetActive(0)}
                            activeClass="active" className="introduction" to="introduction" spy={true} smooth={true} duration={500} style={{ cursor: "pointer", marginLeft: "6.6vmax", textDecoration: "none" }} >
                            <Typography style={{ fontSize: "14px", lineHeight: "24px", color: navHover === 1 ? colorScheme.stdColor : navIndex === 0 ? colorScheme.stdColor : "rgba(183,180,176,0.9)", fontFamily: "'Assistant', sans-serif", fontWeight: "500", margin: "1rem" }}>
                                HOME
                    </Typography>
                        </Link> */}
                        <a onMouseEnter={() => setNavHover(2)} onMouseLeave={() => setNavHover(0)} onClick={() => handleScroll("about")}
                            style={{ cursor: "pointer", textDecoration: "none", marginLeft: "6.6vmax", display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <Typography style={{
                                fontSize: "11px", lineHeight: "19px", color: navHover === 2 ? colorScheme.stdColor : (!hideAbout) ?
                                    colorScheme.stdColor : "rgba(183,180,176,0.9)", fontFamily: "'Assistant', sans-serif",
                                fontWeight: "500", margin: "1rem", marginBottom: "4px"
                            }}>
                                ABOUT
                            </Typography>
                            <animated.div style={aboutSpring}>
                                <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                            </animated.div>
                        </a>
                        <a onMouseEnter={() => setNavHover(3)} onMouseLeave={() => setNavHover(0)} onClick={() => handleScroll("experience")}
                            style={{ cursor: "pointer", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <Typography style={{
                                fontSize: "11px", lineHeight: "19px", color: navHover === 3 ? colorScheme.stdColor : (hideAbout && !forth) ? colorScheme.stdColor : "rgba(183,180,176,0.9)",
                                fontFamily: "'Assistant', sans-serif", fontWeight: "500", margin: "1rem", marginBottom: "4px"
                            }}>
                                EXPERIENCE
                            </Typography>
                            <animated.div style={expSpring}>
                                <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                            </animated.div>
                        </a>
                        <a onMouseEnter={() => setNavHover(4)} onMouseLeave={() => setNavHover(0)} onClick={() => handleScroll("projects")}
                            style={{ cursor: "pointer", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <Typography style={{
                                fontSize: "11px", lineHeight: "19px", color: navHover === 4 ? colorScheme.stdColor : (forth && !contactShow)  ? colorScheme.stdColor : "rgba(183,180,176,0.9)",
                                fontFamily: "'Assistant', sans-serif", fontWeight: "500", margin: "1rem", marginBottom: "4px"
                            }}>
                                PROJECTS
                            </Typography>
                            <animated.div style={projSpring}>
                                <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                            </animated.div>
                        </a>
                        <a onMouseEnter={() => setNavHover(6)} onMouseLeave={() => setNavHover(0)} onClick={() => handleScroll("contact")}
                            style={{ cursor: "pointer", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <Typography style={{
                                fontSize: "11px", lineHeight: "19px", color: navHover === 6 ? colorScheme.stdColor : contactShow ? colorScheme.stdColor : "rgba(183,180,176,0.9)",
                                fontFamily: "'Assistant', sans-serif", fontWeight: "500", margin: "1rem", marginBottom: "4px"
                            }}>
                                CONTACT
                            </Typography>
                            <animated.div style={contactSpring}>
                                <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                            </animated.div>
                        </a>
                    </animated.div>
                    <Spring
                        to={{
                            width: third ? `${window.innerWidth}px` : first ? `${gRatioB}px` : hideAbout ? `${gRatioB}px` : `0px`,
                            marginLeft: hideAbout ? `${gRatioA}px` : `0px`
                        }}
                        from={{ position: "fixed", width: third ? `${gRatioB}px` : `0px`, marginLeft: "0px" }}
                        onRest={() => handleTransitionRest()}
                    >
                        {prop => (<animated.div style={{
                            ...prop, background: colorScheme.darkestColor, height: "100vh"
                        }}>
                            <About
                                theme={colorScheme}
                                open={open}
                                hideAbout={hideAbout}
                                descriptionOpen={descriptionOpen}
                                handleDescriptionRest={() => handleDescriptionRest()}
                            />
                        </animated.div>)}
                    </Spring>
                    <Scrollbar
                        ref={scroll}
                        style={{ width: "100vw", height: "100vh", overflow: "auto" }}
                        damping={0.05}
                    >
                        <MyDescription
                            theme={colorScheme}
                            render={second}
                            descriptionOpen={descriptionOpenSecond}
                        />
                        <div style={{ height: "50vh" }} />
                        <div>
                            <Spring
                                to={{ opacity: 1, }}
                                from={{ opacity: 1, width: "100vw", height: "95vh", }}
                            >
                                {prop => (
                                    <animated.div ref={aboutContainerRef} style={{
                                        ...prop,
                                        background: `rgb(86,33,48)`,
                                        overflow: "hidden",
                                    }}
                                    >
                                        <Experience
                                            mobile={mobile}
                                            theme={colorScheme}
                                            render={true}
                                        />
                                    </animated.div>
                                )}
                            </Spring>
                            <Spring
                                to={{ opacity: forth ? 1 : 0, width: forth ? `90vw` : "0vw", height: "95%", marginTop: "5%" }}
                                from={{ opacity: 0, width: "0vw", height: "0%" }}
                            >
                                {prop => (
                                    <animated.div ref={expContainerRef} style={{ ...prop }}>
                                        <Projects
                                            render={true}
                                            mobile={mobile}
                                            theme={colorScheme}
                                        />
                                    </animated.div>
                                )}
                            </Spring>
                        </div>
                        <div ref={contactContainerRef}>
                            <Contact
                                mobile={mobile}
                                theme={colorScheme}
                                themes={themes}
                                handleThemeChange={(index) => handleThemeChange(index)}
                            />
                        </div>
                    </Scrollbar>
                </div>
            }
        </div >
    )
})


export default React.memo(Home); 