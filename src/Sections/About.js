import React from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import DevicesIcon from '@material-ui/icons/Devices';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import BuildIcon from '@material-ui/icons/Build';
import ScheduleIcon from '@material-ui/icons/Schedule';

import { useTrail, animated, useSpring } from 'react-spring';

import WorkValues from '../Components/WorkValues.js';

const phi = 1.6180339887498948482;

const gRatioA = window.innerHeight / phi;
const gRatioB = window.innerHeight - gRatioA;

const About = React.memo(props => {
    const [valuesOpen, setValuesOpen] = React.useState(false);
    const jobValues = [
        {
            value: "Fast",
            info: "Websites loads fast and has lag free interactions.",
            icon: <ScheduleIcon fontSize="large" style={{ color: props.theme.lightColor }} />,
            key: 0
        },
        {
            value: "Responsive",
            info: "Layouts will work on any screen size, small or big.",
            icon: <DevicesIcon fontSize="large" style={{ color: props.theme.lightColor }} />,
            key: 1
        },
        {
            value: "Useable",
            info: "Strong preference for easy to use, intuitive UX/UI.",
            icon: <BuildIcon fontSize="large" style={{ color: props.theme.lightColor }} />,
            key: 2
        },
        {
            value: "Appealing",
            info: "Websites build to be aesthetically pleasing.",
            icon: <ColorLensIcon fontSize="large" style={{ color: props.theme.lightColor }} />,
            key: 3
        }
    ]

    const headerItems = [
        {
            content: <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: props.mobile ? "5.5vmax" : "", padding: props.mobile ? "16px" : "" }}>
                <Typography style={{
                    lineHeight: "61px", fontSize: "36px", width: "max-content", color: props.theme.lightestColor, fontWeight: "bold", fontFamily: "'Merriweather', serif",
                }}>About</Typography>
                <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "5rem", backgroundColor: props.theme.lightestColor }} />
            </div>,
            type: 0,
        },
    ]

    const handleDescriptionRest = () => {
        if (props.descriptionOpen) { setValuesOpen(true) }
    }

    const headerTrail = useTrail(headerItems.length, {
        config: { mass: 5, tension: 2000, friction: 200, duration: 180 },
        to: {
            opacity: props.open ? 1 : 0,
            x: props.open ? 0 : 100,
            height: props.open ? 50 : 0,
        },
        from: { opacity: 0, x: 100, height: 0 },
        onRest: () => props.handleDescriptionRest(),
    })


    const descriptionSpring = useSpring({
        opacity: props.descriptionOpen ? 1 : 0,
        transform: props.descriptionOpen ? `translateX(0px)` : `translateX(-100px)`,
        from: { opacity: 0, transform: `translateX(-100px)`, height: 100 },
        onRest: () => handleDescriptionRest()
    })

    const trail = useTrail(jobValues.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: valuesOpen ? 1 : 0,
        x: valuesOpen ? 0 : -50,
        from: { opacity: 0, x: -50, height: 50 },
    })

    return (
        props.mobile ?
            <div style={{
                height: "100%", background: props.theme.darkestColor, display: "flex", flexDirection: "column", justifyContent: "flex-start",
                alignItems: "center", paddingBottom: "3.3vmax"
            }}>
                {headerItems[0].content}
                <Typography align="justify" style={{
                    fontSize: "15px", padding: "16px",
                    color: props.theme.lightestColor, fontFamily: "'Quicksand', sans-serif",
                    fontWeight: "200"
                }}>
                    Experienced Front-End Web and App Developer with a Bachelors of Science in Mathematics and Statistics from the University of Toronto.
          </Typography>
                <Grid
                    container
                    style={{ padding: "16px" }}
                >
                    {jobValues.map((prop, index) => {
                        return (
                            <Grid item xs={6} key={`values-${index}`}>
                                <WorkValues
                                    theme={props.theme}
                                    content={jobValues[index]}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            :
            <div
                style={{
                    transform: props.hideAbout ? `translate3d(20%, 0, 0)` : `translate3d(0, 0, 0)`,
                    background: "transparent", height: "100vh", display: "flex", position: "absolute", width: "100%",
                    flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden"
                }}>
                {headerTrail.map(({ x, height, ...rest }, index) => (
                    <animated.div key={`aboutHeader${index}`} style={{
                        ...rest,
                        transform: x.interpolate((x) => `translate3d(${-x}px,0,0)`)
                    }}>
                        {headerItems[index].content}
                    </animated.div>
                ))}
                <div style={{ margin: "2.3vmax", marginBottom: "1.2vmax", maxWidth: "70%", }}>
                    <animated.div style={descriptionSpring}>
                        <Typography align="justify" style={{
                            fontSize: "15px", width: "300px",
                            color: props.theme.lightestColor, fontFamily: "'Quicksand', sans-serif",
                            fontWeight: "200"
                        }}>
                            Experienced Front-End Web and App Developer with a Bachelors of Science in Mathematics and Statistics from the University of Toronto.
          </Typography>
                    </animated.div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column", maxWidth: "70%", transform: "scale(0.95)" }} >
                    {trail.map(({ x, height, ...rest }, index) => (
                        <animated.div
                            key={jobValues[index].key}
                            className="trails-text"
                            style={{ ...rest, transform: x.interpolate((x) => `translate3d(${x}px,0,0)`), marginBottom: "2vmax" }}>
                            <animated.div style={{ height }}>
                                <WorkValues
                                    theme={props.theme}
                                    content={jobValues[index]}
                                />
                            </animated.div>
                        </animated.div>
                    ))}
                </div>
            </div>
    )
})

export default About;