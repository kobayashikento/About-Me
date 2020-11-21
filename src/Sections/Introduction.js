import React from 'react'

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import { useTransition, useSpring, useChain, config } from 'react-spring'

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Canvas from '../Components/Canvas.js';

import catImg from '../Assets/Cat.png';
import { StyledContainer } from '../Styles/introductionStyle.js';

const buttonTheme = createMuiTheme({ palette: { primary: { main: "#FFFFFF" } } })

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

{/* <Avatar style={{
                height: "10rem", width: "10rem", left: "50%", transform: "translate(-50%, 0)", zIndex: "1", boxShadow: shadow
            }} src={catImg} /> */}

const Introduction = (prop) => {
    const theme = useTheme();
    //sm down
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        < Container maxWidth={matches ? "xs" : "sm"} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
            <Paper elevation={3} style={{ boxShadow: shadow, width: "fit-content", opacity: "0.9", padding: "2rem", paddingBottom: "1rem", paddingTop: "2rem", borderRadius: "10px" }}>
                <Typography style={{ margin: "1rem", }} variant="body1" align="center">
                    Hello! I am Kento Kobayashi.
                    </Typography>
                <Typography variant="body1" align="justify" style={{ textIndent: "2rem" }}>
                    I am a recent graduate from the University of Toronto where I received my bachelor's in Mathematics, Statistics, and Philosophy. I enjoy thinking about and solving complex problems that require understanding the problem, finding the solutions, and applying the solutions. I also enjoy learning new knowledge and this is where my passion for programming because there is always something new to learn.
                    </Typography>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                    <IconButton onClick={() => { window.open("https://github.com/kobayashikento") }} >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                        <MailIcon />
                    </IconButton>
                </div>
            </Paper>
        </Container >
    )
}

const AboutLines = (props) => {
    const springRef = React.useRef(null)
    const [open, setOpen] = React.useState(false);

    function handleClick() {
        setOpen(!open);
    }

    const { size, opacity, height, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: "1%", opacity: "0" },
        to: { size: open ? "70%" : "10%", opacity: open ? "1" : "0" }
    })

    useChain(open ? [springRef] : [springRef], [0, open ? 0.1 : 0.6])

    return (
        <MuiThemeProvider theme={buttonTheme} >
            <Button variant="outlined" color="primary" style={{ margin: "2rem", position: "fixed", right: "0", top: "0", }} onClick={() => handleClick()}>
                <Typography variant="body1">
                    About the lines
                </Typography>
            </Button>
            <StyledContainer style={{ ...rest, width: size, right: "0", top: "0", backgroundColor: "white", margin: "2rem", opacity: opacity, zIndex: "2" }} onClick={() => handleClick()}>
                <div style={{ display: open ? "" : "none" }}>
                    <Typography variant="h5" align="center" style={{ margin: "3rem", }}>
                        Its all about the Prime Numbers...
                </Typography>
                    <Typography variant="body1" style={{ margin: "3rem", textIndent: "3rem" }} align="justify">
                        This pattern is created using the properties of prime numbers for the first 5000 digits starting from 0, and is mapped to a 2-dimensional plane. For every increment in the index, the value of y or xs increases by a pre-set amount.
                        However, when the current index is a prime the vector increases with a 90 degree rotation. For example, if the pervious index extended the line by -y, then the current index will extend the line by
                        -x. This results in the pattern below.
                </Typography>
                </div>
                <div style={{ display: open ? "" : "none" }}>
                    <Typography variant="h6" align="center" style={{ margin: "3rem", display: open ? "" : "none" }}>
                        An example with the first 8 digits
                     </Typography>
                    <Canvas
                        size={9}
                        xAxis={100}
                        yAxis={175}
                        home={false}
                        amount={75}
                        open={open}
                    />
                </div>
            </StyledContainer>
        </MuiThemeProvider>
    )
}

const MenuButton = (prop) => {
    const [hover, setHover] = React.useState({
        resume: false, aboutMe: false, port: false
    })
    return (
        <Container style={{ marginTop: "1rem" }} maxWidth="sm">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
            >
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.resume ? "1" : "0.9", boxShadow: shadow }}>
                        <Link to="/resume" style={{ textDecoration: "none", color: "black" }}>
                            <CardActionArea onMouseEnter={() => setHover({ ...hover, resume: true })} onMouseLeave={() => setHover({ ...hover, resume: false })}>
                                <CardContent>
                                    <Typography variant="body1" style={{ textAlign: "center" }}>Resume</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.aboutMe ? "1" : "0.9", boxShadow: shadow }}>
                        <CardActionArea onClick={() => prop.handleAboutMeClick()} onMouseEnter={() => setHover({ ...hover, aboutMe: true })} onMouseLeave={() => setHover({ ...hover, aboutMe: false })}>
                            <CardContent>
                                <Typography variant="body1" style={{ textAlign: "center" }}>About Me</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.port ? "1" : "0.9", boxShadow: shadow }}>
                        <CardActionArea onMouseEnter={() => setHover({ ...hover, port: true })} onMouseLeave={() => setHover({ ...hover, port: false })}>
                            <CardContent>
                                <Typography variant="body1" style={{ textAlign: "center" }}>Portfolio</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

const BottomMenu = (prop) => {
    const [hover, setHover] = React.useState({
        resume: false, port: false
    })
    return (
        <Container style={{ marginTop: "1rem" }} maxWidth="sm">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
            >
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.resume ? "1" : "0.9", boxShadow: shadow }}>
                        <Link to={"/resume"} style={{ textDecoration: "none", color: "black" }}>
                            <CardActionArea onMouseEnter={() => setHover({ ...hover, resume: true })} onMouseLeave={() => setHover({ ...hover, resume: false })}>
                                <CardContent>
                                    <Typography variant="body1" style={{ textAlign: "center" }}>Resume</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.port ? "1" : "0.9", boxShadow: shadow }}>
                        <CardActionArea onMouseEnter={() => setHover({ ...hover, port: true })} onMouseLeave={() => setHover({ ...hover, port: false })}>
                            <CardContent>
                                <Typography variant="body1" style={{ textAlign: "center" }}>Portfolio</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default React.memo(Introduction);
export { MenuButton, AboutLines, BottomMenu };
