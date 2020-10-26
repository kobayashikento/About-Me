import React from 'react'

import { useSpring, animated } from 'react-spring'
import Canvas from '../Components/Canvas.js';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';

import { ParallaxLayer } from 'react-spring/renderprops-addons.cjs';

import catImg from '../Assets/Cat.png';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`


const Introduction = (prop) => {
    const [hover, setHover] = React.useState({
        resume: false, aboutMe: false, port: false
    })
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    return (
        <section style={{ height: "100vh" }} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div style={{ transform: props.xy.interpolate(trans1) }} >
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
                                <CardActionArea onClick={() => prop.handleResumeClick()} onMouseEnter={() => setHover({ ...hover, resume: true })} onMouseLeave={() => setHover({ ...hover, resume: false })}>
                                    <CardContent>
                                        <Typography variant="h6" style={{ textAlign: "center" }}>Resume</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card style={{ borderRadius: "100px", opacity: hover.aboutMe ? "1" : "0.7" }}>
                                <CardActionArea onClick={() => prop.handleAboutMeClick()} onMouseEnter={() => setHover({ ...hover, aboutMe: true })} onMouseLeave={() => setHover({ ...hover, aboutMe: false })}>
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
                    </Grid>
                </Container>
            </div>
        </section>
    )
}

export default React.memo(Introduction);
