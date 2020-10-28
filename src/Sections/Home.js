import React from 'react'

import { CSSTransition } from 'react-transition-group';


import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Fade from 'react-reveal'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AboutMe from '../Sections/AboutMe.js';
import Roadmap from '../Sections/Roadmap.js';
import Resume from '../Sections/Resume.js';
import Introduction from '../Sections/Introduction.js';
import { MenuButton, AboutLines } from '../Sections/Introduction.js';

import { makeStyles } from '@material-ui/core';

import '../Styles/transitions.css';
import Canvas from '../Components/Canvas.js';

import styles from '../Styles/homeStyle.js';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'

const useStyles = makeStyles(styles);


const Home = () => {
    const classes = useStyles();
    const [showHome, setShowHome] = React.useState(true);
    const [scrollTop, setScrollTop] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);
    const [showResume, setShowResume] = React.useState(false);
    let parallax = React.useRef();

    React.useEffect(() => {
        const onScroll = e => {
            const newVal = e.target.documentElement.scrollTop;
            if (newVal > scrollTop) {
                switch (activePage) {
                    case 0:
                        if (newVal > window.innerHeight * 0.8) {
                            setActivePage(1);
                        }
                        break;
                    case 1:
                        if (newVal > (window.innerHeight * 2) * 0.8) {
                            setActivePage(2);
                        }
                        break;
                    case 2:
                        if (newVal > (window.innerHeight * 2)) {
                            setActivePage(0);
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            })
                        }
                        break;
                    default:
                }
            } else {
                switch (activePage) {
                    case 0:
                        break;
                    case 1:
                        if (newVal < (window.innerHeight * 1) * 0.8) {
                            setActivePage(0);
                        }
                        break;
                    case 2:
                        if (newVal < (window.innerHeight * 2) * 0.8) {
                            setActivePage(1);
                        }
                        break;
                    case 3:
                        break;
                    default:
                }
            }
            setScrollTop(e.target.documentElement.scrollTop);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    function handleAboutMeClick() {
        setActivePage(1);
        window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
        })
    }

    function handleResumeClick() {
        setShowResume(true);
        setShowHome(false);
        window.history.pushState('page1', 'Resume', '/resume')
    }

    return (
        <div>
            {showHome && (
                <React.Fragment>
                    <Parallax ref={(ref) => { parallax = ref }} pages={3}>
                        <Fade down >
                            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#30212c" }} />
                            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#36484e" }} />
                            <ParallaxLayer offset={0} speed={0} factor={3} style={{ background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)" }} >
                                <div style={{ position: "fixed", width: "100%", height: "100%", margin: "0" }}>
                                    <Canvas 
                                        size={6000}
                                        xAxis={600}
                                        yAxis={100}
                                        home={true}
                                    />
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer
                                offset={0}
                                speed={0.1}
                                style={{ alignItems: "center", justifyContent: "center" }}
                                onClick={() => parallax.scrollTo(1)}
                            >
                                <Introduction />
                            </ParallaxLayer>
                            <ParallaxLayer
                                offset={0.8}
                                speed={-0.1}
                                style={{ alignItems: "center", justifyContent: "center" }}>
                                <MenuButton
                                    handleAboutMeClick={() => handleAboutMeClick()}
                                    handleResumeClick={() => handleResumeClick()}
                                />
                            </ParallaxLayer>
                            <ParallaxLayer
                                offset={0}
                                speed={0.1}
                                style={{ alignItems: "center", justifyContent: "center" }}
                            >
                                <AboutLines />
                            </ParallaxLayer>
                            <ParallaxLayer
                                offset={1}
                                speed={0.1}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                onClick={() => parallax.scrollTo(2)}
                            >
                                <AboutMe />
                            </ParallaxLayer>
                            <ParallaxLayer
                                offset={2}
                                speed={-0}
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                onClick={() => parallax.scrollTo(0)}
                            >
                                <Roadmap />
                            </ParallaxLayer>
                        </Fade>
                        {/* <div style={{ position: "fixed", top: "50%", left: "95%", transform: "translate(-50%, -50%)", display: activePage === 0 ? "none" : "", zIndex: "1" }}>
                        <Timeline align="right">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color={activePage === 1 ? "rgb(7 22 39 / 94%)" : "grey"} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>About Me</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color={activePage === 2 ? "rgb(7 22 39 / 94%)" : "grey"} />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Roadmap</TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div> */}
                        {/* <Fade >
                        <AboutMe />
                    </Fade>
                    <div>
                        <Roadmap />
                    </div> */}
                    </Parallax>
                </React.Fragment>
            )}
            {showResume && (
                <Fade right>
                    <Resume />
                </Fade>
            )}
        </div >
    )
}

export default Home;