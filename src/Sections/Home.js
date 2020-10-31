import React from 'react'

import { Link } from 'react-router-dom';

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
import { MenuButton, AboutLines, BottomMenu } from '../Sections/Introduction.js';
import { RoadmapTitle, TimelineAccordion } from '../Sections/Roadmap.js';
import { makeStyles } from '@material-ui/core';

import '../Styles/transitions.css';
import torontoImg from '../Assets/toronto.jpg';
import graduation from '../Assets/graduation.jpg';
import racing from '../Assets/racing.jpg';

import Canvas from '../Components/Canvas.js';

import styles from '../Styles/homeStyle.js';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import { useSpring, animated } from 'react-spring'

const useStyles = makeStyles(styles);

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
const trans4 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`

const Home = () => {
    const [showHome, setShowHome] = React.useState(true);
    const [scrollTop, setScrollTop] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

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
        parallax.scrollTo(1)
    }

    return (
        <div style={{ background: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)", height: "100vh", width: "100vw" }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })} >
            <Fade down>
                <Parallax ref={(ref) => { parallax = ref }} pages={4}  >
                    <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#30212c" }} />
                    <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#36484e" }} />
                    <ParallaxLayer offset={0} speed={0} factor={4} style={{ background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)" }} >
                        <animated.div style={{ transform: props.xy.interpolate(trans3) }}>
                            <div style={{ position: "fixed", width: "100%", height: "100%", margin: "0" }}>
                                <Canvas
                                    size={5500}
                                    xAxis={600}
                                    yAxis={100}
                                    home={true}
                                    amount={10}
                                    open={false}
                                />
                            </div>
                        </animated.div>
                        <animated.div style={{ transform: props.xy.interpolate(trans4) }}>
                            <div style={{ position: "fixed", width: "100%", height: "100%", margin: "0", transform: "scaleX(-1)" }}>
                                <Canvas
                                    size={5500}
                                    xAxis={600}
                                    yAxis={100}
                                    home={true}
                                    amount={10}
                                    open={false}
                                />
                            </div>
                        </animated.div>
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        style={{ alignItems: "center", justifyContent: "center" }}
                    >
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0.1}
                        speed={0.1}
                        style={{ alignItems: "center", justifyContent: "center" }}
                    >
                        <Introduction />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={0.8}
                        speed={-0.1}
                        style={{ alignItems: "center", justifyContent: "center" }}>
                        <MenuButton
                            handleAboutMeClick={() => handleAboutMeClick()}
                        />
                    </ParallaxLayer>
                    <AboutLines />
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
                        speed={-0.1}
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <RoadmapTitle />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2.2}
                        speed={0.3}
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img src={graduation} style={{ borderRadius: "10px", width: "20%", height: "auto", position: "fixed", left: "10%" }} />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2.9}
                        speed={0.3}
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img src={racing} style={{ borderRadius: "10px", width: "40%", height: "auto", position: "fixed", right: "5%" }} />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={3.2}
                        speed={0.3}
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <img src={torontoImg} style={{ borderRadius: "10px", width: "30%", height: "30%", position: "fixed", left: "10%" }} />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={2.1}
                        speed={0.2}
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                    >
                        <TimelineAccordion />
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={3.6}
                        speed={-0.1}
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                        onClick={() => parallax.scrollTo(0)}
                    >
                        <BottomMenu
                            handleAboutMeClick={() => handleAboutMeClick()}
                        />
                    </ParallaxLayer>
                </Parallax>
            </Fade>
        </div>
    )
}

export default Home;