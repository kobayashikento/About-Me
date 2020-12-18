import React from 'react'

// import from react-spring
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import { Transition } from 'react-spring/renderprops'

// import from material ui 
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Grid from '@material-ui/core/Grid';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { animated, useTransition } from 'react-spring';

// import components 
import MyDescription from '../Sections/MyDescription.js';
import AnimateTimeline from '../Components/AnimatedTimeline.js';
import AnimatedGrid from '../Components/AnimatedGrid.js';
import NetworkAni from '../Components/NetworkAni.js';
import ResumeDetails from '../Components/ResumeDetails.js';
import { NavBar, Introduction, AboutMe, SideIcons, Contact, ToTop, Picture, AboutMeSecond, SecondPicture, LineDescription } from '../Sections/Introduction.js';
import Projects from './Projects';
import Experience from './Experience.js';

// import styles
import '../Styles/resumeStyle.css';
import { Typography } from '@material-ui/core';
const emptyShadow = "0 9px 12px 1px rgba(0,0,0,0), 0 3px 16px 2px rgba(0,0,0,0), 0 5px 6px -3px rgba(0,0,0,0)";

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
        darkestColor: "#000000",
        darkColor: "#193441",
        lightColor: "#3E606F",
        lightestColor: "#F7FFEF",
        stdColor: "#C0383E"
    },
    {
        //EDF6FF
        darkestColor: "#020B26",
        darkColor: "#031240",
        lightColor: "#032059",
        lightestColor: "#6380A6",
        stdColor: "#6FBFBF"
    },
]

const Home = React.memo(props => {
    const navBarHeight = 120;
    let desRef = React.useRef(null);
    let expRef = React.useRef(null);
    let projRef = React.useRef(null);
    let aboutRef = React.useRef(null);
    let body = React.useRef(null);
    // condition that changes parallax size depending on the window size
    // if its 1500px or higher, then keep layout size at 4 
    const lgUp = useMediaQuery('(min-width:1440px)');
    const theme = useTheme();
    let mobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = React.useState(true);
    const [cardIndex, setCardIndex] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);
    const [showNav, setShowNav] = React.useState(false);
    const [firstRender, setFirstRender] = React.useState(true);
    const [colorScheme, setTheme] = React.useState(themes[0]);
    const [clientWidth, setClientWidth] = React.useState(window.innerWidth);
    // animation timing based on scroll position
    const [first, setFirst] = React.useState(false)
    const [second, setSecond] = React.useState(false);
    const [third, setThird] = React.useState(false);
    const [forth, setForth] = React.useState(false);
    const [fith, setFith] = React.useState(false);
    const [activeCard, setActiveCard] = React.useState(null);
    const [showDetails, setShowDetails] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [expPos, setExpPos] = React.useState(window.innerHeight);
    const [projPos, setProjPos] = React.useState(window.innerHeight);
    const [aboutMePos, setAboutMePos] = React.useState(window.innerHeight);
    const [contactPos, setContactPos] = React.useState(3.6);

    // Calculate layout height 
    // about me 1 : 462, 2: 385, grid: 1097 card 815, project 800, contact 552
    // space betweeen each section is 0.2 of the innerHeight and between each about me section 0.1 
    React.useEffect(() => {
        // total layout size is (section1 height) + (section2 height) + .... + (window.innerHeight * 0.2)*5(spaces) 
        // landing page always takes window.innerHeight as height 
        // set position of exp section 
        setExpPos(desRef.current.childBindings.domNode.clientHeight);
        // set proj position 

        setAboutMePos(projRef.current.childBindings.domNode.clientHeight);
        // set contact post
        setContactPos(aboutRef.current.childBindings.domNode.clientHeight);
    }, [activePage, desRef, projRef, aboutRef, lgUp, mobile, window.innerHeight])

    React.useEffect(() => {
        setProjPos(expRef.current.childBindings.domNode.clientHeight);
        // set about me position
    }, [expRef])

    React.useEffect(() => {
        setClientWidth(body.current.clientWidth)
        // set about me position
    }, [body])

    // Detect esc button
    React.useEffect(() => {
        var lastScrollTop = 0;
        window.addEventListener("scroll", function () {
            var st = window.scrollTop || document.documentElement.scrollTop;
            if (window.innerHeight * 0.7 < st) {
                //about
                setFirst(true)
            }
            if (window.innerHeight * 0.8 < st) {
                // job values 
                setSecond(true)
            }
            if (window.innerHeight + (expPos * 0.8) < st) {
                // exp pos
                setThird(true)
            }
            if (window.innerHeight + expPos + (projPos * 0.8) < st) {
                // proj pos
                setForth(true)
            }
            if (window.innerHeight + expPos + projPos + (aboutMePos * 0.8) < st) {
                // about me pos
                setFith(true)
            }

            if (st === 0) {
                setSecond(false)
                setThird(false)
                setFirst(false)
                setFirstRender(true)
                setForth(false)
                setFith(false)
            }
            if (st > lastScrollTop) {
                // downscroll code
                setShowNav(false);
                setFirstRender(false);
            } else {
                // upscroll code
                setShowNav(true);
            }
            lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        }, false);
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    // Detect esc buttton to close modal 
    const escFunction = React.useCallback((event) => {
        if (event.keyCode === 27) {
            setShowModal(false);
            setTimeout(() => {
                setShowDetails(false);
                setActiveCard(null);
            }, 500)
        }
    }, []);

    // Handle change of theme event 
    const handleThemeChange = (index) => {
        setTheme(themes[index])
    }

    // Handle timeline click on the experience section
    const handleTimeClick = (index) => {
        setActivePage(index);
        setCardIndex(0);
    }

    // Handle the right and left clicks when viewing cards 
    const handleArrowClick = (direction) => {
        if (direction === "left") {
            setCardIndex(cardIndex - 1);
        } else if (direction === "right") {
            setCardIndex(cardIndex + 1);
        }
    }

    // Handle card open event
    const handleCardClick = (index) => {
        if (index !== 0) {
            setShowDetails(true);
            setShowModal(true);
        }
    }

    // Change the active card and send it as an object
    const handleActiveCard = (item) => {
        setActiveCard(item);
    }

    // Handle card click 
    const handleDetailsChange = () => {
        setShowModal(false);
        setTimeout(() => {
            setShowDetails(false);
            setActiveCard(null);
        }, 300)
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

    return (
        <div ref={body} style={{ overflow: "hidden" }}>
            {mobile ?
                <NavBar
                    theme={colorScheme}
                    handleNavClick={(index) => handleNavClick(index)}
                />
                :
                < Transition
                    items={showNav}
                    config={{ duration: 500 }}
                    from={{ position: "fixed", opacity: 0, transform: "translate(0, -100px)", zIndex: 0 }}
                    enter={{ opacity: 1, transform: "translate(0, 0px)", zIndex: 20 }}
                    leave={i => async (next, cancel) => {
                        await next({ opacity: 0, transform: "translate(0, -100px)", zIndex: 20 })
                        await next({ opacity: 0, transform: "translate(0, 0px)", zIndex: 0 })
                    }}
                >
                    {showNav => showNav && (prop =>
                        <animated.div onMouseEnter={() => setShowNav(true)} onMouseLeave={() => setShowNav(false)}
                            style={{
                                ...prop, height: "54px", display: "flex", backgroundColor: colorScheme.lightestColor, top: "0px", width: "-webkit-fill-available",
                            }}>
                            <Link onMouseEnter={() => setNavHover(1)} onMouseLeave={() => setNavHover(0)} onSetActive={() => handleSetActive(0)}
                                activeClass="active" className="introduction" to="introduction" spy={true} smooth={true} duration={500} style={{ cursor: "pointer", marginLeft: "1rem", textDecoration: "none" }} >
                                <Typography variant="body1" style={{ color: navHover === 1 ? colorScheme.stdColor : navIndex === 0 ? colorScheme.stdColor : colorScheme.darkColor, fontFamily: "'Montserrat', sans-serif", fontWeight: "500", margin: "1rem" }}>
                                    HOME
                    </Typography>
                            </Link>
                            <Link onMouseEnter={() => setNavHover(2)} onMouseLeave={() => setNavHover(0)} onSetActive={() => handleSetActive(1)}
                                activeClass="active" className="description" to="description" spy={true} smooth={true} duration={500} style={{ cursor: "pointer", textDecoration: "none" }} >
                                <Typography variant="body1" style={{ color: navHover === 2 ? colorScheme.stdColor : navIndex === 1 ? colorScheme.stdColor : colorScheme.darkColor, fontFamily: "'Montserrat', sans-serif", fontWeight: "500", margin: "1rem" }}>
                                    ABOUT
                    </Typography>
                            </Link>
                            <Link onMouseEnter={() => setNavHover(3)} onMouseLeave={() => setNavHover(0)} onSetActive={() => handleSetActive(2)}
                                activeClass="active" className="experience" to="experience" spy={true} smooth={true} duration={500} style={{ cursor: "pointer", textDecoration: "none" }} >
                                <Typography variant="body1" style={{ color: navHover === 3 ? colorScheme.stdColor : navIndex === 2 ? colorScheme.stdColor : colorScheme.darkColor, fontFamily: "'Montserrat', sans-serif", fontWeight: "500", margin: "1rem" }}>
                                    EXPERIENCE
                    </Typography>
                            </Link>
                            <Link onMouseEnter={() => setNavHover(4)} onMouseLeave={() => setNavHover(0)} onSetActive={() => handleSetActive(3)}
                                activeClass="active" className="projects" to="projects" spy={true} smooth={true} duration={500} style={{ cursor: "pointer", textDecoration: "none" }} >
                                <Typography variant="body1" style={{ color: navHover === 4 ? colorScheme.stdColor : navIndex === 3 ? colorScheme.stdColor : colorScheme.darkColor, fontFamily: "'Montserrat', sans-serif", fontWeight: "500", margin: "1rem" }}>
                                    PROJECTS
                    </Typography>
                            </Link>
                            <Link onMouseEnter={() => setNavHover(5)} onMouseLeave={() => setNavHover(0)} onSetActive={() => handleSetActive(4)}
                                activeClass="active" className="aboutme" to="aboutme" spy={true} smooth={true} duration={500} style={{ cursor: "pointer", textDecoration: "none" }} >
                                <Typography variant="body1" style={{ color: navHover === 5 ? colorScheme.stdColor : navIndex === 4 ? colorScheme.stdColor : colorScheme.darkColor, fontFamily: "'Montserrat', sans-serif", fontWeight: "500", margin: "1rem" }}>
                                    PERSONAL
                    </Typography>
                            </Link>
                            <div style={{ marginLeft: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <div className="button" onClick={() => { window.open("https://github.com/kobayashikento") }} >
                                    <GitHubIcon className="icon" style={{ borderRadius: "50%", color: colorScheme.stdColor }} />
                                </div>
                                <div className="button" onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} >
                                    <LinkedInIcon className="icon" style={{ color: colorScheme.stdColor }} />
                                </div>
                                <div className="button" onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                                    <MailIcon className="icon" style={{ color: colorScheme.stdColor }} />
                                </div>
                                <Link onMouseEnter={() => setNavHover(6)} onMouseLeave={() => setNavHover(0)} onSetActive={() => handleSetActive(5)}
                                    activeClass="active" className="contact" to="contact" spy={true} smooth={true} duration={500} style={{ cursor: "pointer", textDecoration: "none" }} >
                                    <Typography variant="body1" style={{ color: navHover === 6 ? colorScheme.stdColor : navIndex === 5 ? colorScheme.stdColor : colorScheme.darkColor, fontFamily: "'Montserrat', sans-serif", fontWeight: "500", margin: "1rem" }}>
                                        CONTACT
                    </Typography>
                                </Link>
                            </div>
                        </animated.div>
                    )}
                </Transition>
            }
            <Element name="introduction" className="element" isDynamic={true} >
                <Introduction
                    mobile={mobile}
                    theme={colorScheme}
                    handleExpClick={() => handleExpClick()}
                    handleProjClick={() => handleProjClick()}
                    navIndex={navIndex}
                />
            </Element>
            <Element name="description" className="element" isDynamic={true} ref={desRef}>
                <MyDescription
                    render={first}
                    second={second}
                    mobile={mobile}
                    theme={colorScheme}
                />
            </Element>
            <Element name="experience" className="element" isDynamic={true} ref={expRef}>
                <Experience
                    clientWidth={clientWidth}
                    mobile={mobile}
                    theme={colorScheme}
                    cardIndex={cardIndex}
                    activePage={activePage}
                    third={third}
                    handleTimeClick={(index) => handleTimeClick(index)}
                    handleArrowClick={(dir) => handleArrowClick(dir)}
                    handleActiveCard={(item) => handleActiveCard(item)}
                    handleCardClick={(index) => handleCardClick(index)}
                />
            </Element>
            <Element name="projects" className="element" isDynamic={true} ref={projRef}>
                <Projects
                    render={forth}
                    mobile={mobile}
                    theme={colorScheme}
                />
            </Element>
            <Element name="aboutme" className="element" isDynamic={true} ref={aboutRef}>
                <AboutMe
                    mobile={mobile}
                    render={fith}
                    theme={colorScheme}
                />
            </Element>
            <Element name="contact" className="element" isDynamic={true}>
                <Contact
                    mobile={mobile}
                    theme={colorScheme}
                    themes={themes}
                    handleThemeChange={(index) => handleThemeChange(index)}
                />
            </Element>
            <Modal
                open={showDetails}
                onClose={() => handleDetailsChange()}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                style={{ overflow: "auto" }}
            >
                <Transition
                    items={showModal}
                    from={{ opacity: 0, transform: "translate(0, 200px)" }}
                    enter={{ opacity: 1, transform: "translate(0, 0px)" }}
                    leave={{ opacity: 0, transform: "translate(0, 180px)" }}>
                    {showModal => showModal && (props =>
                        <div style={props}>
                            <ResumeDetails
                                mobile={mobile}
                                handleDetailsChange={() => handleDetailsChange()}
                                activeCard={activeCard}
                            />
                        </div>)}
                </Transition>
            </Modal>
        </div >
    )
})


export default React.memo(Home); 