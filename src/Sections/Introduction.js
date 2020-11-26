import React from 'react'

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import { useSpring, useChain, config, useTrail, animated, useTransition } from 'react-spring'

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Canvas from '../Components/Canvas.js';

import face from '../Assets/face.jpg';

import catImg from '../Assets/Cat.png';
import { StyledContainer } from '../Styles/introductionStyle.js';

const buttonTheme = createMuiTheme({ palette: { primary: { main: "#FFFFFF" } } })

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const Introduction = (props) => {
    const theme = useTheme();
    //sm down
    const [open, setOpen] = React.useState(true);
    const items = [
        {
            content: <Typography variant="h6" align="justify" style={{ color: props.theme.secColor, paddingTop: "1rem", textIndent: "2rem" }}>
                Hello! My name is
                    </Typography>
        },
        {
            content: <Typography variant="h2" align="justify" style={{ paddingTop: "1rem", textIndent: "2rem", fontWeight: "bold", color: props.theme.priColor === "#86C232" ? "#FEFFFF" : props.theme.priColor }}>
                Kento Kobayashi.
        </Typography>
        },
        {
            content: <Typography variant="h5" align="justify" style={{ color: props.theme.secColor, paddingTop: "1rem", textIndent: "2rem", fontWeight: "bold", opacity: "0.6" }}>
                I code things that look nice.
</Typography>
        },
        {
            content: <Typography variant="body1" align="justify" style={{ color: props.theme.priTxtColor, paddingTop: "1rem", paddingLeft: "2rem", width: "70%" }}>
                I recently obtained my Honours Bachelor’s of Science degree from University of Toronto. I enjoy playing Jazz piano and occasionally checking myself out while working out.
                </Typography>

        }
    ]

    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const trail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 1800
    })

    return (
        <React.Fragment>
            < Container maxWidth={matches ? "lg" : "md"} style={{ position: "absolute", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                        {items[index].content}
                    </animated.div>
                ))}
            </Container >
        </React.Fragment>
    )
}

const NavBar = (props) => {
    const navItems = ["About", "Experiences", "Contact"];

    const navTrail = useTrail(navItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: props.open ? 1 : 0,
        x: props.open ? 0 : 20,
        height: props.open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })
    const [open, setOpen] = React.useState(false);
    const [hover, setHover] = React.useState(0);
    const [itemHover, setItemHover] = React.useState(0);

    const handleClose = (index) => {
        if (index !== 0) {
            props.handlePopClick(index);
        }
        setHover(0);
        setItemHover(0);
        setOpen(false);
    };

    const handleListKeyDown = (event) => {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const handleMouseEnter = (index) => {
        if (index === 1) {
            setOpen(true);
        }
        setHover(index + 1);
    }

    const handleItemEnter = (index) => {
        setItemHover(index)
    }

    const handleItemLeave = (index) => {
        setItemHover(index)
    }

    const handleClick = (index) => {
        props.handleThemeChange(index)
    }
    return (
        <div style={{
            display: "flex", backgroundColor: props.theme.priBack, height: "64px", width: "100%", position: "absolute",
            top: "0px", right: "0px", zIndex: "1", marginRight: "1rem", paddingRight: "1rem"
        }}>
            <div style={{ display: "flex", marginTop: "8px", marginRight: "auto", height: "40px", transform: "translate(4rem)" }}>
                {props.themes.map((theme, index) => {
                    return (
                        <Button style={{ marginRight: "1rem", color: theme.priColor, border: `solid ${theme.priColor}` }} onClick={() => handleClick(index)}>
                            {`${theme.priColor}`}
                        </Button>
                    )
                })}
            </div>
            <div style={{ display: "flex", marginTop: "8px", marginLeft: "auto" }}>
                {navTrail.map(({ x, height, ...rest }, index) => (
                    <animated.div style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`), margin: "8px" }}>
                        <Button className="navText" style={{ backgroundColor: "transparent" }} onClick={() => props.handleNavClick(index)}
                            onMouseLeave={() => handleClose(0)} onMouseEnter={() => handleMouseEnter(index)}>
                            <Typography variant="body1" align="justify" style={{ marginRight: "8px", color: props.theme.secColor }}>
                                {`${index + 1}.`}
                            </Typography>
                            <div>
                                <Typography variant="body1" align="justify" style={{ color: hover === index + 1 ? props.theme.secColor : props.theme.priTxtColor }}>
                                    {navItems[index]}
                                </Typography>
                                {index === 1 ? <Popper style={{ marginTop: "2.5rem", marginLeft: "1.5rem" }} open={open} role={undefined} transition disablePortal>
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                        >
                                            <Paper style={{ backgroundColor: props.theme.priBack }}>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList onKeyDown={handleListKeyDown}>
                                                        <MenuItem style={{ color: itemHover === 1 ? props.theme.secColor : props.theme.priTxtColor }}
                                                            onMouseEnter={() => handleItemEnter(1)} onMouseLeave={() => handleItemLeave(1)} onClick={() => handleClose(1)}>Education</MenuItem>
                                                        <MenuItem style={{ color: itemHover === 2 ? props.theme.secColor : props.theme.priTxtColor }}
                                                            onMouseEnter={() => handleItemEnter(2)} onMouseLeave={() => handleItemLeave(2)} onClick={() => handleClose(2)}>Work</MenuItem>
                                                        <MenuItem style={{ color: itemHover === 3 ? props.theme.secColor : props.theme.priTxtColor }}
                                                            onMouseEnter={() => handleItemEnter(3)} onMouseLeave={() => handleItemLeave(3)} onClick={() => handleClose(3)}>Skills</MenuItem>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper> : null}
                            </div>
                        </Button>
                    </animated.div>
                ))}
            </div>
        </div >
    )
}

const SideIcons = (props) => {
    const transRef = React.useRef();
    const iconItems = [{
        content: <React.Fragment>
            <div className="button" onClick={() => { window.open("https://github.com/kobayashikento") }} >
                <GitHubIcon className="icon" style={{ color: props.theme.secColor }} />
            </div>
            <div className="button" onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} >
                <LinkedInIcon className="icon" style={{ color: props.theme.secColor }} />
            </div>
            <div className="button" onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                <MailIcon className="icon" style={{ color: props.theme.secColor }} />
            </div>
        </React.Fragment>
    }];
    const transitions = useTransition(props.open, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        ref: transRef
    })
    useChain([transRef], [2])
    return (
        transitions.map(({ item, key, props }, index) => (
            item && <animated.div key={key} style={{
                ...props, display: "flex", position: "absolute", flexDirection: "column",
                justifyContent: "center", padding: "32px", bottom: "0px", left: "0px", zIndex: "1"
            }}>
                {iconItems[index].content}
            </animated.div>
        ))
    )
}

const Contact = (props) => {
    return (
        <Container maxWidth="md" style={{ position: "absolute", top: "30%", left: "50%", display: "flex", flexDirection: "column", transform: "translate(-50%, -20%)" }}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={2} />
                <Grid item xs={8} style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "3rem" }}>
                        <Divider style={{ marginRight: "3rem", width: "5rem", backgroundColor: props.theme.priTxtColor }} />
                        <Typography variant="h4" style={{ color: props.theme.priColor, fontWeight: "bold" }}>
                            3.
            </Typography>
                        <Typography variant="h4" style={{ paddingLeft: "1rem", color: props.theme.priTxtColor, fontWeight: "bold" }}>
                            Get In Touch
            </Typography>
                        <Divider style={{ marginLeft: "3rem", width: "5rem", backgroundColor: props.theme.priTxtColor }} />
                    </div>
                </Grid>
                <Grid item xs={2} />
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={2} />
                <Grid item xs={8} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <Typography variant="body1"  align="center" style={{ color: props.theme.priTxtColor, textIndent: "1rem", paddingLeft: "1rem", marginBottom: "1rem" }}>
                        I am Developer based in Toronto, Ontario with a mild addictiosn to coffee.
            </Typography>
                    <Typography variant="body1" align="center" style={{ color: props.theme.priTxtColor, paddingLeft: "1rem", textIndent: "1rem" }}>
                        When I am not coding I enjoy working out and eventually plan to paddle whenever I can. I also enjoy playing pieces from the Ghibli films,
                        Jazz music and Lofi-Hip hop on the piano, carefully making sure that I don't annoy my neighbors.
            </Typography>
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Container >
    )
}
const AboutMe = (props) => {
    return (
        <Container maxWidth="md" style={{ position: "absolute", top: "30%", left: "50%", display: "flex", transform: "translate(-50%, -20%)" }}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={8}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "3rem" }}>
                        <Typography variant="h4" style={{ color: props.theme.priColor, fontWeight: "bold" }}>
                            1.
            </Typography>
                        <Typography variant="h4" style={{ paddingLeft: "1rem", color: props.theme.priTxtColor, fontWeight: "bold" }}>
                            About Me
            </Typography>
                        <Divider style={{ marginLeft: "3rem", width: "20rem", backgroundColor: props.theme.priTxtColor }} />
                    </div>
                    <Typography variant="body1" style={{ color: props.theme.priTxtColor, textIndent: "1rem", paddingLeft: "1rem", marginBottom: "1rem" }}>
                        I am Developer based in Toronto, Ontario with a mild addictiosn to coffee.
            </Typography>
                    <div style={{ paddingLeft: "1rem", marginBottom: "1rem" }}>
                        <Typography variant="body1" style={{ display: "inline", color: props.theme.priTxtColor, paddingLeft: "1rem", textIndent: "1rem" }}>
                            I recently obtained my
                        </Typography>
                        <Typography variant="body1" style={{ display: "inline", color: props.theme.priTxtColor }} > </Typography>
                        <Typography variant="body1" style={{ display: "inline", color: props.theme.secColor }}>
                            Bachelor’s of Science (Hons) in Mathematics, Statistics, and Philosophy from the University of Toronto.
                        </Typography>
                        <Typography variant="body1" style={{ display: "inline", color: props.theme.priTxtColor }} > </Typography>
                        <Typography variant="body1" style={{ display: "inline", color: props.theme.priTxtColor }}>
                            I have experience in developing iOS and web applications and I enjoy focusing on the smallest detail making sure that everything looks nice and smooth.
            </Typography>
                    </div>
                    <Typography variant="body1" style={{ color: props.theme.priTxtColor, paddingLeft: "1rem", textIndent: "1rem" }}>
                        When I am not coding I enjoy working out and eventually plan to paddle whenever I can. I also enjoy playing pieces from the Ghibli films,
                        Jazz music and Lofi-Hip hop on the piano, carefully making sure that I don't annoy my neighbors.
            </Typography>
                </Grid>
                <Grid item xs={4} style={{ display: "flex", justifyContent: "center" }}>
                    <img src={face} style={{
                        marginLeft: "2rem", width: "70%", borderRadius: "5px",
                        boxShadow: `0 9px 12px 1px ${props.theme.priColor}33, 0 3px 16px 2px ${props.theme.priColor}26, 0 5px 6px -3px ${props.theme.priColor}33`
                    }} />
                </Grid>
            </Grid>
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
export { MenuButton, AboutLines, BottomMenu, Introduction, AboutMe, NavBar, SideIcons, Contact };
