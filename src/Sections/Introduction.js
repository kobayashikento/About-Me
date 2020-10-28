import React from 'react'

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import { useTransition, useSpring, useChain, config } from 'react-spring'

import Canvas from '../Components/Canvas.js';

import catImg from '../Assets/Cat.png';
import { StyledContainer } from '../Styles/introductionStyle.js';

const buttonTheme = createMuiTheme({ palette: { primary: { main: "#FFFFFF" } } })

const Introduction = (prop) => {
    return (
        <section style={{ height: "100vh" }}>
            <Avatar style={{ height: "10rem", width: "10rem", left: "50%", transform: "translate(-50%, 70%)", zIndex: "1" }} src={catImg} />
            <Container maxWidth="sm" style={{ transform: "translate(0, 30%)" }}>
                <Paper style={{ width: "fit-content", position: "relative", opacity: "0.9", padding: "2rem", borderRadius: "10px", paddingTop: "6rem", left: "50%", top: "6rem", transform: "translate(-50%, -54%)" }}>
                    <Typography style={{ textAlign: "center" }} variant="h3">
                        Kento Kobayashi
                   </Typography>
                    <Typography style={{ marginTop: "1rem" }} variant="body1" align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui eget urna facilisis consectetur ac at dolor. Pellentesque velit ante, aliquam eget volutpat quis, venenatis at velit. Integer consequat malesuada ipsum, porta ultricies risus dictum quis. Aliquam viverra lorem bibendum, feugiat nisl sed, tincidunt lacus. Vestibulum cursus tempor accumsan.
                     </Typography>
                </Paper>
            </Container>
        </section>
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
        from: { size: "10%", opacity: "0" },
        to: { size: open ? "70%" : "10%", opacity: open ? "1" : "0" }
    })

    useChain(open ? [springRef] : [springRef], [0, open ? 0.5 : 0.5])

    return (
        <MuiThemeProvider theme={buttonTheme}>
            <Button variant="outlined" color="primary" style={{ margin: "2rem", position: "fixed", right: "0", top: "0" }} onClick={() => handleClick()}>
                <Typography variant="body1">
                    About the lines
                </Typography>
            </Button>
            <StyledContainer style={{ ...rest, width: size, height: size, right: "0", top: "0", backgroundColor: "white", margin: "2rem", opacity: opacity, zIndex: "2" }} onClick={() => handleClick()}>
                <div style={{ display: open ? "" : "none" }}>
                    <Typography variant="h5" align="center" style={{ margin: "3rem", }}>
                        Its all about the Prime Numbers...
                </Typography>
                    <Typography variant="body1" style={{ margin: "3rem", textIndent: "3rem" }} align="justify">
                        This pattern is created using the 5000 digits starting from 0 in a 2-dimension plane. For every increment in the index, the value of y increases by a pre-set amount.
                        However, when the index is a prime the point is rotated 90 degrees, in other words the x value is increased instead. After 5000 recusions, it creates a pattern that is shown below.
                </Typography>
                </div>
                <div style={{ display: open ? "" : "none" }}>
                    <Typography variant="h6" align="center" style={{ margin: "3rem", display: open ? "" : "none" }}>
                        An example with the first 10 digits
                     </Typography>
                    <Canvas
                        size={10}
                        xAxis={10}
                        yAxis={10}
                        home={false}
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
                    <Card style={{ borderRadius: "100px", opacity: hover.resume ? "1" : "0.9" }}>
                        <CardActionArea onClick={() => prop.handleResumeClick()} onMouseEnter={() => setHover({ ...hover, resume: true })} onMouseLeave={() => setHover({ ...hover, resume: false })}>
                            <CardContent>
                                <Typography variant="body1" style={{ textAlign: "center" }}>Resume</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.aboutMe ? "1" : "0.9" }}>
                        <CardActionArea onClick={() => prop.handleAboutMeClick()} onMouseEnter={() => setHover({ ...hover, aboutMe: true })} onMouseLeave={() => setHover({ ...hover, aboutMe: false })}>
                            <CardContent>
                                <Typography variant="body1" style={{ textAlign: "center" }}>About Me</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={4}>
                    <Card style={{ borderRadius: "100px", opacity: hover.port ? "1" : "0.9" }}>
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
export { MenuButton, AboutLines };
