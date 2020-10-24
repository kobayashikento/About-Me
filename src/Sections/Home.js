import React from 'react'

import { CSSTransition } from 'react-transition-group';

import { useSpring, animated } from 'react-spring'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Fade from 'react-reveal'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AboutMe from '../Sections/AboutMe.js';
import Roadmap from '../Sections/Roadmap.js';
import Resume from '../Sections/Resume.js';

import { CardActionArea, makeStyles } from '@material-ui/core';

import Canvas from '../Components/Canvas.js';
import catImg from '../Assets/Cat.png';
import '../Styles/transitions.css';

import styles from '../Styles/homeStyle.js';
import { FormatListBulletedRounded } from '@material-ui/icons';

const useStyles = makeStyles(styles);

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const Home = () => {
    const classes = useStyles();
    const [showHome, setShowHome] = React.useState(true);
    const [scrollTop, setScrollTop] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);
    const [showResume, setShowResume] = React.useState(false);
    const [hover, setHover] = React.useState({
        resume: false, aboutMe: false, port: false
    })

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
                                behavior: 'smooth',
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
            behavior: 'smooth',
        })
    }

    function handleResumeClick() {
        window.location.href = '/resume'
        setShowResume(true);
    }

    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
        <div>
            {showHome && (
                <React.Fragment>
                    <Fade down >
                        <section style={{ height: "100vh", backgroundColor: "rgb(7 22 39 / 94%)" }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            <animated.div style={{ transform: props.xy.interpolate(trans1) }} >
                                <Canvas />
                            </animated.div>
                            <div style={{ paddingTop: "12rem" }}>
                                <Paper style={{ width: "fit-content", position: "relative", opacity: "0.9", padding: "3rem", borderRadius: "10px", paddingTop: "6rem", left: "50%", top: "6rem", transform: "translate(-50%, -54%)" }}>
                                    <Typography style={{ textAlign: "center" }} variant="h3">
                                        Kento Kobayashi
                            </Typography>
                                    <Typography style={{ textAlign: "center", marginTop: "1rem" }} variant="h5">
                                        Developer, Athlete, Pianist
                            </Typography>
                                </Paper>
                                <Avatar style={{ height: "10rem", width: "10rem", position: "relative", left: "50%", top: "-18rem", transform: "translate(-50%, -50%)" }} src={catImg} />
                            </div>
                            <Container style={{ marginTop: "-8rem" }} maxWidth="md">
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    spacing={5}
                                >
                                    <Grid item xs={4}>
                                        <Card style={{ borderRadius: "100px", opacity: hover.resume ? "1" : "0.7" }}>
                                            <CardActionArea onClick={() => handleResumeClick()} onMouseEnter={() => setHover({ ...hover, resume: true })} onMouseLeave={() => setHover({ ...hover, resume: false })}>
                                                <CardContent>
                                                    <Typography variant="h6" style={{ textAlign: "center" }}>Resume</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card style={{ borderRadius: "100px", opacity: hover.aboutMe ? "1" : "0.7" }}>
                                            <CardActionArea onClick={() => handleAboutMeClick()} onMouseEnter={() => setHover({ ...hover, aboutMe: true })} onMouseLeave={() => setHover({ ...hover, aboutMe: false })}>
                                                <CardContent>
                                                    <Typography variant="h6" style={{ textAlign: "center" }}>About Me</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Card style={{ borderRadius: "100px", opacity: hover.port ? "1" : "0.7" }}>
                                            <CardActionArea onMouseEnter={() => setHover({ ...hover, port: true })} onMouseLeave={() => setHover({ ...hover, port: false })}>
                                                <CardContent>
                                                    <Typography variant="h6" style={{ textAlign: "center" }}>Portfolio</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                    {/* <ExpandMoreIcon style={{ margin: "16px" }} fontSize="large" /> */}
                                    {/* <Button className={classes.bounce} onClick={() => handleAboutMeClick()} style={{ marginTop: "56px", borderRadius: "10px" }}>
                              </Button> */}
                                </Grid>
                            </Container>
                        </section>
                    </Fade>
                    <div style={{ position: "fixed", top: "50%", left: "95%", transform: "translate(-50%, -50%)", display: activePage === 0 ? "none" : "", zIndex: "1" }}>
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
                    </div>
                    <Fade >
                        <AboutMe />
                    </Fade>
                    <div>
                        <Roadmap />
                    </div>
                </React.Fragment>
            )}
            <CSSTransition
                in={showResume}
                timeout={300}
                classNames="resume"
                unmountOnExit
                onEnter={() => setShowHome(false)}
                onExited={() => setShowHome(true)}
            >
                <div>
                    <Resume />
                </div>
            </CSSTransition>
        </div >
    )
}

export default Home;