import React from 'react'

// import from react-spring
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import { Transition } from 'react-spring/renderprops'

// import from material ui 
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

// import components 
import { AnimateTimeline, AnimatedGrid } from '../Components/AnimatedResume.js';
import ResumeParallax from '../Sections/ResumeParallax.js';
import NetworkAni from '../Components/NetworkAni.js';
import ResumeDetails from '../Components/ResumeDetails.js';
import { NavBar, Introduction, AboutMe, SideIcons, Contact, ToTop, Picture, AboutMeSecond, SecondPicture, LineDescription } from '../Sections/Introduction.js';

// import styles
import '../Styles/resumeStyle.css';
const emptyShadow = "0 9px 12px 1px rgba(0,0,0,0), 0 3px 16px 2px rgba(0,0,0,0), 0 5px 6px -3px rgba(0,0,0,0)";

// Themes/Color schemes 
const themes = [
    {
        //EDF6FF
        priBack: "#EDF6FF",
        secBack: "#FFFFFF",
        priColor: "#05878a",
        secColor: "#437FC7",
        priTxtColor: "#264572"
    },
    {
        priBack: "#222629",
        secBack: "#464866",
        priColor: "#86C232",
        secColor: "#61892F",
        priTxtColor: "#6B6E70"
    },
    {
        //f1faee
        //a8dadc
        priBack: "#f1faee",
        secBack: "#a8dadc",
        priColor: "#e63946",
        secColor: "#457b9d",
        priTxtColor: "#1d3557"
    },
    {
        priBack: "#88BDBC",
        secBack: "#254E58",
        priColor: "#e76f51",
        secColor: "#112D32",
        priTxtColor: "#DEF2F1"
    },
    {
        priBack: "#3AAFA9",
        secBack: "#2B7A78",
        priColor: "#e9c46a",
        secColor: "#17252A",
        priTxtColor: "#DEF2F1"
    },
]

const Home = () => {
    const navBarHeight = 120;
    let parallax = React.useRef();
    let ref = React.useRef();
    // condition that changes parallax size depending on the window size
    // if its 1500px or higher, then keep layout size at 4 
    const matches1 = useMediaQuery('(min-width:1500px)');
    // if its 1200 then layout size of 4 when in card but 4.5
    const matches2 = useMediaQuery('(min-width:1200px)');
    const [open, setOpen] = React.useState(true);
    const [cardIndex, setCardIndex] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);
    const [showNav, setShowNav] = React.useState(true);
    const [firstRender, setFirstRender] = React.useState(true);
    const [theme, setTheme] = React.useState(themes[0]);
    const [first, setFirst] = React.useState(false)
    const [second, setSecond] = React.useState(false);
    const [third, setThird] = React.useState(false);
    const [forth, setForth] = React.useState(false);
    const [activeCard, setActiveCard] = React.useState(null);
    const [showDetails, setShowDetails] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [layout, setLayout] = React.useState(matches1 ? 4 : 4.5);
    const [contactPosition, setContactPosition] = React.useState(matches1 ? 3 : 3.6);
    const [preload, setPreload] = React.useState(false);

    // Detect esc button
    React.useEffect(() => {
        document.addEventListener("keydown", escFunction, false);
        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    // Detect scroll
    React.useEffect(() => {
        if (!preload && ref.current.children[0] !== undefined) {
            var lastScrollTop = 0;
            ref.current.children[0].addEventListener("scroll", function () {
                var st = ref.current.children[0].scrollTop || document.documentElement.scrollTop;
                // render about me 
                if (window.innerHeight * 0.2 < st) {
                    setFirst(true)
                }
                if (window.innerHeight * 0.5 < st) {
                    setSecond(true)
                }
                if (window.innerHeight * 0.6 < st) {
                    setThird(true)
                }
                if (window.innerWidth * 0.8 < st) {
                    setForth(true)
                }
                if (st === 0) {
                    setSecond(false)
                    setThird(false)
                    setFirst(false)
                    setFirstRender(true)
                    setForth(false)
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
        }

    }, [ref])

    React.useEffect(() => {
        if (activePage !== 0){
            if (!matches1){
                setLayout(4);
                setContactPosition(3);
            }
        } else { 
            if (!matches1){
                setLayout(4.5);
                setContactPosition(3.6);
            }
        }
    }, [activePage, matches1])

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

    // Handle when button on the nav menu is clicked 
    const handleNavClick = (index) => {
        if (index === 1) {
            parallax.scrollTo((2.1))
        } else {
            if (index === 2) {
                parallax.scrollTo(contactPosition)
            } else {
                parallax.scrollTo(1)
            }
        }
    }

    // Handle timeline click on the experience section
    const handleTimeClick = (index) => {
        setActivePage(index);
        setCardIndex(0);
    }

    // Handle the arrow button click on the right bottom 
    const handleTopClick = () => {
        if (parallax !== null) {
            parallax.scrollTo(0)
        }
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

    return (
        preload ?
            <div style={{
                height: "100vh",
                backgroundColor: theme.priBack
            }}>
                < Container maxWidth={"md"} style={{ position: "absolute", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}>
                    <Typography variant="h2" align="justify" style={{ opacity: "0.9", paddingTop: "1rem", textIndent: "2rem", fontWeight: "bold", color: theme.priColor }}>
                        Kento Kobayashi.
        </Typography>
                </Container >
            </div>
            :
            <div>
                <Transition
                    items={showNav}
                    config={{ duration: 500 }}
                    from={{ opacity: 0, transform: "translate(0, -100px)", boxShadow: emptyShadow }}
                    enter={{ opacity: 1, transform: "translate(0, 0px)", boxShadow: emptyShadow }}
                    leave={{ opacity: 0, transform: "translate(0, -100px)", boxShadow: emptyShadow }}>
                    {showNav => showNav && (props =>
                        <div style={{
                            ...props, height: "48px", width: "100%", position: "absolute", zIndex: "1", marginRight: "1rem",
                        }}>
                            <NavBar
                                firstRender={firstRender}
                                style={props}
                                theme={theme}
                                navBarHeight={navBarHeight}
                                handleNavClick={(index) => handleNavClick(index)}
                                open={open}
                            />
                        </div>
                    )}
                </Transition>
                {/* Main Content area animated with parallax */}
                <div ref={ref}>
                    <Parallax className="homeContainer" ref={(ref) => { parallax = ref }} pages={layout}>
                        <ParallaxLayer offset={0} speed={0} factor={layout} style={{
                            backgroundImage:
                                `radial-gradient(closest-corner, ${theme.priBack} 0%, ${theme.secBack} 100%)`,
                            backgroundColor: theme.priBack
                        }} ></ParallaxLayer>
                        {/* Landing page animation */}
                        <ParallaxLayer
                            offset={0} speed={-0.5} factor={1.5}
                        >
                            <div>
                                <NetworkAni
                                    theme={theme}
                                />
                            </div>
                        </ParallaxLayer>
                        {/* Landing page */}
                        <ParallaxLayer
                            offset={0}
                            speed={0.2}
                        >
                            <Introduction
                                theme={theme}
                            />
                        </ParallaxLayer>
                        {/* Content between landing page and about me */}
                        <ParallaxLayer
                            offset={0.6}
                            speed={0.3}
                        >
                            <LineDescription
                                theme={theme}
                                render={first}
                            />
                        </ParallaxLayer>
                        {/* About me description */}
                        <ParallaxLayer
                            offset={1}
                            speed={0.1}
                        >
                            <AboutMe
                                render={second}
                                theme={theme}
                            />
                        </ParallaxLayer>
                        {/* About me description first picture */}
                        <ParallaxLayer
                            offset={1.1}
                            speed={-0.1}
                        >
                            <Picture
                                render={second}
                                theme={theme}
                            />
                        </ParallaxLayer>
                        {/* About me second picture */}
                        <ParallaxLayer
                            offset={1.4}
                            speed={0.1}
                        >
                            <SecondPicture
                                render={third}
                                theme={theme}
                            />
                        </ParallaxLayer>
                        {/* About me second description */}
                        <ParallaxLayer
                            offset={1.5}
                            speed={-0.1}
                        >
                            <AboutMeSecond
                                render={third}
                                theme={theme}
                            />
                        </ParallaxLayer>
                        {/* Experience section */}
                        <ParallaxLayer
                            offset={2.1}
                            speed={0.2}
                        >
                            <ResumeParallax
                                parallax={parallax}
                                activePage={activePage}
                                cardIndex={cardIndex}
                                handleArrowClick={(dir) => handleArrowClick(dir)}
                                handleTimeClick={(index) => handleTimeClick(index)}
                                theme={theme}
                                render={forth}
                            />
                            <AnimateTimeline
                                theme={theme}
                                activePage={activePage}
                                handleTimeClick={(index) => handleTimeClick(index)}
                            />
                            <div>
                                <AnimatedGrid
                                    theme={theme}
                                    cardIndex={cardIndex}
                                    activePage={activePage}
                                    handleNavClick={(dir) => handleArrowClick(dir)}
                                    handleActiveCard={(item) => handleActiveCard(item)}
                                    handleCardClick={(index) => handleCardClick(index)}
                                />
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
                                        from={{ opacity: 0, transform: "translate(0, 100%)" }}
                                        enter={{ opacity: 1, transform: "translate(0, 0%)" }}
                                        leave={{ opacity: 0, transform: "translate(0, 80%)" }}>
                                        {showModal => showModal && (props =>
                                            <div style={props}>
                                                <ResumeDetails
                                                    handleDetailsChange={() => handleDetailsChange()}
                                                    activeCard={activeCard}
                                                />
                                            </div>)}
                                    </Transition>

                                </Modal>
                            </div>
                        </ParallaxLayer>
                        {/* Contact me section, change the location depending on the secreen view 
                            set it to 3.6 when width is less than 1500 and 3 when its higher.
                        */}
                        <ParallaxLayer
                            offset={contactPosition}
                            speed={0.1}
                        >
                            <Contact
                                theme={theme}
                                themes={themes}
                                handleThemeChange={(index) => handleThemeChange(index)}
                            />
                        </ParallaxLayer>
                    </Parallax>
                </div>
                {/* SideIcons */}
                <div style={{ position: "absolute", padding: "32px", bottom: "0px", left: "0px", zIndex: "1" }}>
                    <SideIcons
                        theme={theme}
                        open={open}
                    />
                </div>
                {/* Navigation Arrow on the side */}
                <ToTop
                    theme={theme}
                    handleTopClick={() => handleTopClick()}
                    showNav={showNav}
                />
            </div >
    )
}

export default React.memo(Home);