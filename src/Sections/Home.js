import React from 'react'

import { Link } from 'react-router-dom';
// import from material ui 
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TocRoundedIcon from '@material-ui/icons/TocRounded';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';

import { animated, useSpring } from 'react-spring';

// import components 
import MyDescription from '../Sections/MyDescription.js';
import { Introduction, Contact } from '../Sections/Introduction.js';
import Projects from './Projects';
import Experience from './Experience.js';
import About from './About.js';
import Timeline from './Timeline.js';

// import styles
import '../Styles/resumeStyle.css';

import { useWheel } from 'react-use-gesture';

import Scrollbar from 'react-smooth-scrollbar';

import { Spring } from 'react-spring/renderprops';
import { Navbar } from 'react-bootstrap';

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
    let scroll = React.useRef(null);
    let aboutContainerRef = React.useRef(null);
    let contactContainerRef = React.useRef(null);
    // condition that changes parallax size depending on the window size
    // if its 1500px or higher, then keep layout size at 4 
    const theme = useTheme();
    let mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [colorScheme, setTheme] = React.useState(themes[0]);
    // animation timing based on scroll position
    const [first, setFirst] = React.useState(props.first)
    const [second, setSecond] = React.useState(props.second);
    const [third, setThird] = React.useState(false);
    const [hideAbout, setHideAbout] = React.useState(false);
    const [forth, setForth] = React.useState(false);
    const [fith, setFith] = React.useState(false);
    const [landing, setLanding] = React.useState(props.landing);
    const [initial, setInitial] = React.useState(props.initial);
    const [initRender, setInitRender] = React.useState(true);

    // about transition first, second, 
    // experience trnasition third, hideabout

    // Handle change of theme event 
    const handleThemeChange = (index) => {
        setTheme(themes[index])
    }

    const [navHover, setNavHover] = React.useState(0);

    /* Introduction section handlers */
    // Function used for the introduction callback 
    const handleInitialChange = (state) => {
        setInitial(state);
    }

    // Function triggered once the last transition finishes 
    const handleIntroLeave = () => {
        setLanding(false);
        scroll.current.scrollbar.scrollTo(0, 10, 800);
        setFirst(true);
        setSecond(true);
    }

    /* Description section handlers */
    const handleDescriptionLeave = () => {
        window.history.pushState("landing", "Landing", "/");
        setLanding(true);
        setInitial(true);
    }

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
    const [open, setOpen] = React.useState(false);
    const [descriptionOpen, setDescriptionOpen] = React.useState(false);
    const [descriptionOpenSecond, setDescriptionOpenSecond] = React.useState(false);
    const [showNav, setShowNav] = React.useState(false);
    const [contactShow, setContactShow] = React.useState(false);
    const [mobileModalOpen, setMobileModalOpen] = React.useState(false);
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const bind = useWheel(({ wheeling, direction }) => {
        if (wheeling && direction[1] === 1) {
            setInitial(false);
        }
    })

    const handleTransitionRest = () => {
        if (first) {
            setOpen(true)
        } else {
            handleDescriptionLeave();
        }
    }

    const handleDescriptionRest = () => {
        if (open) { setDescriptionOpen(true); setDescriptionOpenSecond(true); setTimeout(() => { setShowNav(true) }, 1500) }
    }

    React.useEffect(() => {
        if (!initRender) {
            if (scroll.current !== null) {
                scroll.current.scrollbar.addListener((s) => {
                    if (s.offset.y > window.innerHeight * 0.4) { setSecond(false) } else { setSecond(true) }
                    if (s.offset.y > window.innerHeight * 0.4) { setThird(true) } else { setThird(false) }
                    if (s.offset.y > window.innerHeight * 0.5) { setHideAbout(true); } else { setHideAbout(false); }
                    if (s.offset.y > aboutContainerRef.current.offsetTop + (window.innerHeight * 0.6)) { setForth(true) } else { setForth(false) }
                    if (s.offset.y > aboutContainerRef.current.offsetTop + (window.innerHeight * 0.5)) { setFith(true); } else { setFith(false); }
                    if (s.offset.y > contactContainerRef.current.offsetTop - window.innerHeight) { setContactShow(true); } else { setContactShow(false); }
                    if (s.offset.y === 0) {
                        setFirst(false); setSecond(false);
                    }
                })
                if (!landing) {
                    switch (props.view) {
                        case "about":
                            handleScroll("about")
                            break;
                        case "experience":
                            handleScroll("experience")
                            break;
                        case "projects":
                            handleScroll("projects")
                            break;
                        case "contact":
                            handleScroll("contact")
                            break;
                    }
                }
            }
        }
    }, [initRender, landing]);

    const handleScroll = (type) => {
        if (scroll.current !== null) {
            if (type === "about") {
                scroll.current.scrollbar.scrollTo(0, 10, 800);
            } else if (type === "experience") {
                scroll.current.scrollbar.scrollTo(0, window.innerHeight * 0.72, 800);
            } else if (type === "projects") {
                scroll.current.scrollbar.scrollTo(0, window.innerHeight * 1.72, 800);
            } else if (type === "contact") {
                scroll.current.scrollbar.scrollTo(0, window.innerHeight * 1.72, 800);
                setTimeout(() => { scroll.current.scrollbar.scrollTo(0, contactContainerRef.current.offsetTop, 800) }, 300);
            }
        }
    }

    React.useEffect(() => {
        if (initRender) {
            setInitRender(false);
        }
    }, []);

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

    const mobileModalSpring = useSpring({
        width: mobileModalOpen ? `${window.innerWidth - 56}px` : "0px"
    })

    const handleMobileButton = (type) => {
        switch (type) {
            case 0:
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileModalOpen(false);
                break;
            case 1:
                window.scrollTo({ top: mobileIntroRef.current.offsetHeight - 54, behavior: 'smooth' });
                setMobileModalOpen(false);
                break;
            case 2:
                window.scrollTo({ top: mobileExperienceRef.current.offsetHeight - 54, behavior: 'smooth' });
                setMobileModalOpen(false);
                break;
            case 3:
                window.scrollTo({ top: document.body.clientHeight - (window.innerHeight * 3), behavior: 'smooth' });
                setMobileModalOpen(false);
                break;
            case 4:
                window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' });
                setMobileModalOpen(false);
                break;
        }
    }

    let mobileIntroRef = React.useRef(null);
    let mobileExperienceRef = React.useRef(null);
    let mobileDocRef = React.useRef(null);

    React.useEffect(() => {
        if (landing) { } else if (!initRender) {
            if (!hideAbout) {
                window.history.pushState("portfolio", "About", "/portfolio/about");
            } else if (hideAbout && !forth) {
                window.history.pushState("portfolio", "Experience", "/portfolio/experience");
            } else if (forth && !contactShow) {
                window.history.pushState("portfolio", "Projects", "/portfolio/projects");
            } else if (contactShow) {
                window.history.pushState("portfolio", "Contact", "/portfolio/contact");
            }
        }
    }, [hideAbout, forth, contactShow, landing])

    return (
        matches ?
            <div {...bind()} style={{ background: `${colorScheme.lightColor}66` }}>
                {
                    landing ?
                        <Introduction
                            mobile={mobile}
                            initial={initial}
                            theme={colorScheme}
                            handleIntroLeave={() => handleIntroLeave()}
                            handleInitialChange={(state) => handleInitialChange(state)}
                        />
                        :
                        <div>
                            {/* NavBar  */}
                            <animated.div
                                style={{
                                    ...navSpring, height: "54px", display: "flex", backgroundColor: "transparent", top: "0px", width: "100%", position: "fixed", zIndex: 2, marginTop: "1.1vmax"
                                }}>
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
                                        fontSize: "11px", lineHeight: "19px", color: navHover === 4 ? colorScheme.stdColor : (forth && !contactShow) ? colorScheme.stdColor : "rgba(183,180,176,0.9)",
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
                            {/* <Spring
                                to={{
                                    opacity: showNav ? 1 : 0,
                                }}
                                from={{ position: "fixed", opacity: 0, transform: "rotate(-90deg)", zIndex: 2 }}
                            >
                                {prop => (<div style={prop}>
                                    <Timeline />
                                </div>)}
                            </Spring> */}
                            <Spring
                                to={{
                                    width: third ? `${0}px` : first ? `${gRatioB}px` : hideAbout ? `${gRatioB}px` : `0px`,
                                }}
                                from={{ position: "fixed", width: third ? `${gRatioB}px` : `0px` }}
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
                            <MyDescription
                                theme={colorScheme}
                                render={second}
                                descriptionOpen={descriptionOpenSecond}
                            />
                            <Scrollbar
                                ref={scroll}
                                style={{ width: "100vw", height: "100vh" }}
                                damping={0.05}
                            >
                                <div style={{ height: "75vh" }} />
                                <Spring
                                    to={{
                                        transform: forth ? `translateY(-50%) scale3d(0.4, 0.4,0)` :
                                            hideAbout ? `translateY(0%) scale3d(1, 1, 2)` : `translateY(50%) scale3d(0.5, 0.5,0) `
                                    }}
                                    from={{ transform: `translateY(50%) scale3d(0.5, 0.5,0) ` }}
                                >
                                    {prop => (
                                        <animated.div ref={aboutContainerRef} style={{
                                            ...prop,
                                            background: `rgb(86,33,48)`,
                                            overflow: "hidden", position: "relative", zIndex: 3
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
                                <div>
                                    <Projects
                                        render={fith}
                                        mobile={mobile}
                                        theme={colorScheme}
                                    />
                                </div>
                                <div ref={contactContainerRef} style={{ zIndex: 0 }}>
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
            :
            <div ref={mobileDocRef}>
                <nav style={{
                    position: "fixed", height: "56px", backgroundColor: `${colorScheme.lightColor}E6`, width: "100vw", zIndex: 4
                    , display: "flex", alignItems: "center", justifyContent: "flex-end",
                }}>
                    <IconButton style={{ marginRight: "4px" }} onClick={() => setMobileModalOpen(true)}>
                        <TocRoundedIcon style={{ color: colorScheme.stdColor }} />
                    </IconButton>
                </nav>
                <div ref={mobileIntroRef}>
                    <Introduction
                        mobile={!matches}
                        theme={colorScheme}
                    />
                </div>
                <About
                    theme={colorScheme}
                    mobile={!matches}
                    handleDescriptionRest={() => handleDescriptionRest()}
                />
                <MyDescription
                    theme={colorScheme}
                    render={second}
                    descriptionOpen={descriptionOpenSecond}
                    mobile={!matches}
                />
                <Experience
                    mobile={!matches}
                    theme={colorScheme}
                    render={true}
                />
                <div ref={mobileExperienceRef}>
                    <Projects
                        render={true}
                        mobile={!matches}
                        theme={colorScheme}
                    />
                </div>
                <Contact
                    mobile={!matches}
                    theme={colorScheme}
                    themes={themes}
                    handleThemeChange={(index) => handleThemeChange(index)}
                />
                <Modal
                    open={mobileModalOpen}
                    onClose={() => setMobileModalOpen(false)}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <animated.div style={{
                        ...mobileModalSpring, position: "fixed", background: "white", height: "100vh", top: "0px", right: "0px",
                        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", padding: "16px"
                    }}>
                        <Button onClick={() => handleMobileButton(0)}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4px" }}>
                                <Typography style={{
                                    fontSize: "20px", lineHeight: "34px", color: colorScheme.stdColor, fontFamily: "'Assistant', sans-serif",
                                    fontWeight: "500", margin: "1rem", marginBottom: "4px"
                                }}>
                                    HOME
                            </Typography>
                                <animated.div style={{ width: "2rem" }}>
                                    <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                                </animated.div>
                            </div>
                        </Button>
                        <Button onClick={() => handleMobileButton(1)}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4px" }}>
                                <Typography style={{
                                    fontSize: "20px", lineHeight: "34px", color: colorScheme.stdColor, fontFamily: "'Assistant', sans-serif",
                                    fontWeight: "500", margin: "1rem", marginBottom: "4px"
                                }}>
                                    ABOUT
                            </Typography>
                                <animated.div style={{ width: "2rem" }}>
                                    <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                                </animated.div>
                            </div>
                        </Button>
                        <Button onClick={() => handleMobileButton(2)}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4px" }}>
                                <Typography style={{
                                    fontSize: "20px", lineHeight: "34px", color: colorScheme.stdColor, fontFamily: "'Assistant', sans-serif",
                                    fontWeight: "500", margin: "1rem", marginBottom: "4px"
                                }}>
                                    EXPERIENCE
                            </Typography>
                                <animated.div style={{ width: "5rem" }}>
                                    <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                                </animated.div>
                            </div>
                        </Button>
                        <Button onClick={() => handleMobileButton(3)}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4px" }}>
                                <Typography style={{
                                    fontSize: "20px", lineHeight: "34px", color: colorScheme.stdColor, fontFamily: "'Assistant', sans-serif",
                                    fontWeight: "500", margin: "1rem", marginBottom: "4px"
                                }}>
                                    PROJECTS
                            </Typography>
                                <animated.div style={{ width: "4rem" }}>
                                    <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                                </animated.div>
                            </div>
                        </Button>
                        <Button onClick={() => handleMobileButton(4)}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4px" }}>
                                <Typography style={{
                                    fontSize: "20px", lineHeight: "34px", color: colorScheme.stdColor, fontFamily: "'Assistant', sans-serif",
                                    fontWeight: "500", margin: "1rem", marginBottom: "4px"
                                }}>
                                    CONTACT
                            </Typography>
                                <animated.div style={{ width: "2rem" }}>
                                    <Divider style={{ height: "2px", backgroundColor: colorScheme.stdColor, width: "100%" }} />
                                </animated.div>
                            </div>
                        </Button>
                    </animated.div>
                </Modal>
            </div >
    )
})

export default React.memo(Home); 