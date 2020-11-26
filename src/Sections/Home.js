import React from 'react'

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

import { Transition } from 'react-spring/renderprops'

import { NavBar, Introduction, AboutMe, SideIcons, Contact, ToTop } from '../Sections/Introduction.js';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import ResumeParallax from '../Sections/ResumeParallax.js';

import '../Styles/resumeStyle.css';

const shadow = "0 9px 12px 1px rgba(0,0,0,0.5), 0 3px 16px 2px rgba(0,0,0,0.5), 0 5px 6px -3px rgba(0,0,0,0.5)";
const emptyShadow = "0 9px 12px 1px rgba(0,0,0,0), 0 3px 16px 2px rgba(0,0,0,0), 0 5px 6px -3px rgba(0,0,0,0)";

const themes = [
    {
        priBack: "#3AAFA9",
        secBack: "#2B7A78",
        priColor: "#FEFFFF",
        secColor: "#17252A",
        priTxtColor: "#DEF2F1"
    },
    {
        priBack: "#222629",
        secBack: "#464866",
        priColor: "#86C232",
        secColor: "#61892F",
        priTxtColor: "#6B6E70"
    },
    {
        priBack: "#0B0C10",
        secBack: "#1F2833",
        priColor: "#66FCF1",
        secColor: "#45A29E",
        priTxtColor: "#C5C6C7"
    },
    {
        priBack: "#25274D",
        secBack: "#464866",
        priColor: "#2E9CCA",
        secColor: "#29648A",
        priTxtColor: "#C5C6C7"
    },
]

const Home = (props) => {
    let parallax = React.useRef();
    let ref = React.useRef();
    const [open, setOpen] = React.useState(true);
    const [cardIndex, setCardIndex] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);
    const [showNav, setShowNav] = React.useState(true);
    const [firstRender, setFirstRender] = React.useState(true);
    const [theme, setTheme] = React.useState(themes[0]);

    const navBarHeight = 120

    // Detect scroll
    React.useEffect(() => {
        if (ref.current.children[0] !== undefined) {
            var lastScrollTop = 0;
            ref.current.children[0].addEventListener("scroll", function () {
                var st = ref.current.children[0].scrollTop || document.documentElement.scrollTop;
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

    const handleThemeChange = (index) => {
        setTheme(themes[index])
    }
    const handleNavClick = (index) => {
        if (index === 1) {
            return
        } else {
            if (index === 2 && matches2 && activePage === 0) {
                parallax.scrollTo((index + 2))
            } else {
                parallax.scrollTo((index + 1))
            }
        }
    }

    const handlePopClick = (index) => {
        setActivePage(index)
        setCardIndex(0)
        if (parallax !== null) {
            parallax.scrollTo(2)
        }
    }


    const handleTimeClick = (index) => {
        setActivePage(index);
        setCardIndex(0);
    }

    const handleTopClick = () => {
        if (parallax !== null) {
            parallax.scrollTo(0)
        }
    }

    const handleArrowClick = (direction) => {
        if (direction === "left") {
            setCardIndex(cardIndex - 1);
        } else if (direction === "right") {
            setCardIndex(cardIndex + 1);
        }
    }

    // condition that changes parallax size depending on the window size, the possible conditions are ['(min-width: 1500px)', '(min-width: 1200px)', '(min-width: 850px)'], [4, 3, 2], 1)
    // if its 1500px or higher, then keep layout size at 4 
    const matches1 = useMediaQuery('(min-width:1500px)');
    // if its 1200 then layout size of 4 when in card but 5 in grid 
    const matches2 = useMediaQuery('(min-width:1200px)');
    const [layoutSize, setLayoutSize] = React.useState(matches1 ? 4 : 5)
    // page = 0 is grid and everthing else is card 
    React.useEffect(() => {
        if (matches1) {
            setLayoutSize(4);
        } else if (matches2) {
            if (activePage === 0) {
                setLayoutSize(5);
            } else {
                setLayoutSize(4);
            }
        }
    }, [activePage])

    return (
        <div>
            <Transition
                items={showNav}
                config={{ duration: 300 }}
                from={{ opacity: 0, transform: "translate(0, -100px)", boxShadow: firstRender ? emptyShadow : shadow }}
                enter={{ opacity: 1, transform: "translate(0, 0px)", boxShadow: emptyShadow }}
                leave={{ opacity: 0, transform: "translate(0, -100px)", boxShadow: shadow }}>
                {showNav => showNav && (props =>
                    <div style={{ ...props, height: "48px", width: "100%", position: "absolute", zIndex: "1", marginRight: "1rem" }}>
                        <NavBar
                            style={props}
                            theme={theme}
                            navBarHeight={navBarHeight}
                            handleNavClick={(index) => handleNavClick(index)}
                            open={open}
                            handlePopClick={(index) => handlePopClick(index)}
                        />
                    </div>
                )}
            </Transition>
            <div ref={ref}>
                <Parallax className="homeContainer" ref={(ref) => { parallax = ref }} pages={layoutSize}>
                    <ParallaxLayer offset={0} speed={0} factor={layoutSize} style={{ backgroundColor: theme.priBack }} />
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                    >
                        <Introduction
                            theme={theme}
                        />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={1}
                        speed={0.1}
                    >
                        <AboutMe
                            theme={theme}
                        />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2}
                        speed={0.1}
                    >
                        <ResumeParallax
                            parallax={parallax}
                            activePage={activePage}
                            cardIndex={cardIndex}
                            handleArrowClick={(dir) => handleArrowClick(dir)}
                            handleTimeClick={(index) => handleTimeClick(index)}
                            theme={theme}
                        />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={matches1 ? 4 : layoutSize - 1}
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
            <div style={{ position: "absolute", padding: "32px", bottom: "0px", left: "0px", zIndex: "1" }}>
                <SideIcons
                    theme={theme}
                    open={open}
                />
            </div>
            <ToTop
                theme={theme}
                handleTopClick={() => handleTopClick()}
                showNav={showNav}
            />
        </div >
    )
}

export default React.memo(Home);