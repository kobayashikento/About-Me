import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Fade from 'react-reveal/Fade';

import '../Styles/descriptionStyle.css';

import restme from '../Assets/Pictures/restme.png';

//icons 
import DevicesIcon from '@material-ui/icons/Devices';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import BuildIcon from '@material-ui/icons/Build';
import ScheduleIcon from '@material-ui/icons/Schedule';

import ExperienceBar from '../Components/ExperienceBar.js';
import WorkValues from '../Components/WorkValues.js';

import { useTrail, animated, useTransition } from 'react-spring';

const MyDescription = React.memo(props => {
    const open = props.render;
    const theme = props.theme;
    const mobile = props.mobile;

    const headerItems = [
        {
            content: <Typography variant={props.mobile ? "h6" : "h4"} style={{
                width: "max-content", color: props.theme.darkestColor, fontWeight: "400", fontFamily: "'Roboto Mono', monospace",
            }}>ABOUT</Typography>,
            type: 0,
        },
        {
            content: <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "5rem", backgroundColor: props.theme.darkestColor }} />,
            type: 0
        },
    ]

    const jobValues = [
        {
            value: "Fast",
            info: "Websites loads fast and has lag free interactions.",
            icon: <ScheduleIcon style={{ width: "100%", height: "100%", transform: "rotate(-90deg)", color: props.theme.lightestColor }} />,
            key: 0
        },
        {
            value: "Responsive",
            info: "Layouts will work on any screen size, small or big.",
            icon: <DevicesIcon style={{ width: "100%", height: "100%", transform: "rotate(-90deg)", color: props.theme.lightestColor }} />,
            key: 1
        },
        {
            value: "Usability",
            info: "Strong preference for easy to use, intuitive UX/UI.",
            icon: <BuildIcon style={{ width: "100%", height: "100%", transform: "rotate(-90deg)", color: props.theme.lightestColor }} />,
            key: 2
        },
        {
            value: "Design",
            info: "Websites build to be aesthetically pleasing.",
            icon: <ColorLensIcon style={{ width: "100%", height: "100%", transform: "rotate(-90deg)", color: props.theme.lightestColor }} />,
            key: 3
        }
    ]

    const headerTrail = useTrail(headerItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    const trail = useTrail(jobValues.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 200 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    return (
        props.mobile ?
            <Container>

            </Container>
            :
            <div style={{ minHeight: "100vh", backgroundColor: props.theme.lightestColor }}>
                <Grid
                    container
                    direction="column"
                    justify="space-evenly"
                    alignItems="center"
                    style={{ minHeight: "100vh", margin: "0px", paddingBottom: "4rem", overflow:"hidden" }}
                >
                    <Grid item sm={1} xs={12} style={{ display: "flex", alignItems: "center", maxWidth: "min-content", margin: "1rem", marginTop: "3rem" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            {headerTrail.map(({ x, height, ...rest }, index) => (
                                <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                    {headerItems[index].content}
                                </animated.div>))}
                        </div>
                    </Grid>
                    <Grid item sm={4} style={{ display: "flex", alignItems: "center", maxWidth: "75%", margin: "1rem" }}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            {trail.map(({ x, height, ...rest }, index) => (
                                <Grid item sm={3}>
                                    <animated.div
                                        key={jobValues[index].key}
                                        className="trails-text"
                                        style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) }}>
                                        <animated.div style={{ height }}>
                                            <WorkValues
                                                mobile={mobile}
                                                theme={theme}
                                                content={jobValues[index]}
                                            />
                                        </animated.div>
                                    </animated.div>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item sm={7} style={{ display: "flex", alignItems: "center", maxWidth: "75%", margin: "1rem" }}>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={3}
                        >
                            <Grid item sm={5} style={{ display: "flex", flexDirection: "center", alignItems: "center" }}>
                                <Fade left when={props.second}>
                                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                        <img src={restme} style={{
                                            height: "250px", width: "280px", marginBottom: "2rem"
                                        }} /> <Typography align="center" variant="h6" style={{ width: "80%", fontWeight: "bold", marginBottom: "1rem" }}>
                                            Hello, I'm Kento Kobayashi
                                </Typography>
                                        <Typography align="justify" variant="body1" style={{ width: "80%", }}>
                                            I recently obtained my Honours Bachelors of Science degree from the University of Toronto with experiences in Application and Web Development.
                                </Typography>
                                    </div>
                                </Fade>
                            </Grid>
                            <Grid item sm={7} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                {/* 90 - expert, 67.5 - advanced, 45 - intermediate, 22.5 novice */}
                                <Fade right when={props.second}>
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"HTML"}
                                        percentage={90}
                                        delay={700}
                                    />
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"CSS"}
                                        percentage={90}
                                        delay={800}
                                    />
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"JavaScript"}
                                        percentage={90}
                                        delay={900}
                                    />
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"React"}
                                        percentage={67.5}
                                        delay={1000}
                                    />
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"Swift"}
                                        percentage={67.5}
                                        delay={1100}
                                    />
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"Node.js"}
                                        percentage={45}
                                        delay={1200}
                                    />
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"MongoDB"}
                                        percentage={45}
                                        delay={1300}
                                    />
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"Liquid"}
                                        percentage={45}
                                        delay={1400}
                                    />
                                    <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"UI Design"}
                                        percentage={45}
                                        delay={1500}
                                    />
                                       <ExperienceBar
                                        render={props.second}
                                        theme={props.theme}
                                        name={"Vue JS"}
                                        percentage={22.5}
                                        delay={1600}
                                    />
                                </Fade>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div >
    )
})

export default React.memo(MyDescription)