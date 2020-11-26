import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Roadmap from '../Sections/Roadmap.js';
import Resume from '../Sections/Resume.js';

import { MenuButton, AboutLines, BottomMenu } from '../Sections/Introduction.js';
import { RoadmapTitle, TimelineAccordion } from '../Sections/Roadmap.js';
import Canvas from '../Components/Canvas.js';

import torontoImg from '../Assets/toronto.jpg';
import graduation from '../Assets/graduation.jpg';
import racing from '../Assets/racing.jpg';

import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons.cjs'
import { useSpring, animated } from 'react-spring'

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`
const trans4 = (x, y) => `translate3d(${x / 80}px,${y / 80}px,0)`

const AboutMe = () => {
    const [scrollTop, setScrollTop] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    let parallax = React.useRef();

    React.useEffect(() => {
        console.log("paasssed")
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
        <Parallax ref={(ref) => { parallax = ref }} pages={4} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}  >
            <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: "#30212c" }} />
            <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: "#36484e" }} />
            <ParallaxLayer offset={0} speed={0} factor={4} style={{ background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)" }} >
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
                <Container maxWidth="md" style={{ display: "flex", height: "100vh" }}>
                    <Paper elevation={3} style={{ boxShadow: shadow, width: "fit-content", position: "relative", opacity: "0.9", padding: "2rem", borderRadius: "10px", marginTop: "auto", marginBottom: "auto" }}>
                        <Typography style={{ textAlign: "left" }} variant="h3">
                            About Me:
            </Typography>
                        <Typography style={{ textAlign: "center", marginTop: "2rem" }} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui eget urna facilisis consectetur ac at dolor. Pellentesque velit ante, aliquam eget volutpat quis, venenatis at velit. Integer consequat malesuada ipsum, porta ultricies risus dictum quis. Aliquam viverra lorem bibendum, feugiat nisl sed, tincidunt lacus. Vestibulum cursus tempor accumsan. Quisque fringilla massa vitae neque viverra rhoncus. Integer felis eros, facilisis porta aliquam id, suscipit a urna. Nam ultricies pharetra porttitor. Sed pretium velit mauris, ut laoreet diam fermentum nec. Praesent finibus, urna at varius imperdiet, ipsum dolor elementum metus, vel congue quam dolor imperdiet diam. Quisque tellus est, condimentum sit amet eros vel, maximus sagittis quam. Nam laoreet libero sit amet malesuada tempor. Quisque a lacus quam.
            </Typography>
                        <Typography style={{ textAlign: "center", marginTop: "1rem" }} variant="body1">
                            Suspendisse lacinia dapibus mauris sit amet euismod. Phasellus mi ligula, consectetur eget vestibulum et, dignissim ut libero. Sed venenatis nulla at lorem vulputate auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer volutpat leo sed aliquam dignissim. Donec rhoncus ultricies lectus. Proin eu nunc nec mi venenatis aliquam id eu ante. In ac purus congue, bibendum purus aliquam, consectetur metus. Proin ac quam id nisi venenatis mattis sed nec nisl.
                    </Typography>
                    </Paper>
                </Container>
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
    )
}

export default AboutMe;