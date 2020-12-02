import React from 'react'

import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import { useTrail, animated, useTransition } from 'react-spring';
import { Transition } from 'react-spring/renderprops';


import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import face from '../Assets/Pictures/chicagome.jpg';
import hurtme from '../Assets/Pictures/hurtme.jpg';

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const Introduction = (props) => {
    const theme = useTheme();
    //sm down
    const open = true
    const items = [
        {
            content: <Typography variant="h5" align="justify" style={{ color: props.theme.secColor, paddingTop: "1rem", fontWeight: "400", textIndent: "2rem", opacity: "0.8" }}>
                Hello! My name is
                    </Typography>
        },
        {
            content: <Typography variant="h2" align="justify" style={{ opacity: "0.9", paddingTop: "1rem", textIndent: "2rem", fontWeight: "bold", color: props.theme.priColor === "#86C232" ? "#FEFFFF" : props.theme.priColor }}>
                Kento Kobayashi
        </Typography>
        },
        {
            content: <Typography variant="h5" align="justify" style={{ color: props.theme.secColor, paddingTop: "1rem", textIndent: "2rem", fontWeight: "400", opacity: "1" }}>
                I'm a Developer and Analyst
</Typography>
        },
        {
            content: <Typography variant="body1" align="justify" style={{ color: props.theme.priTxtColor, paddingTop: "1rem", fontWeight: "400", paddingLeft: "2rem", width: "70%" }}>
                I recently obtained my Honours Bachelors of Science degree from the University of Toronto with experiences in Application and Web Development.
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
        delay: 1500
    })

    return (
        <React.Fragment>
            < Container maxWidth={matches ? "lg" : "md"} style={{ position: "absolute", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}>
                {trail.map(({ x, height, ...rest }, index) => (
                    <animated.div key={`introContent${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                        {items[index].content}
                    </animated.div>
                ))}
            </Container >
        </React.Fragment>
    )
}

const NavBar = (props) => {

    const priColor = props.theme.priColor;
    const navItems = ["About", "Experience", "Contact"];
    const navTrail = useTrail(navItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: props.open ? 1 : 0,
        x: props.open ? 0 : 20,
        height: props.open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0, },
    })
    const [hover, setHover] = React.useState(0);

    const handleClose = (index) => {
        setHover(0);
    };

    const handleMouseEnter = (index) => {
        setHover(index + 1);
    }

    return (
        <div style={{
            display: "flex", height: "48px", width: "100%", position: "absolute",
            top: "0px", right: "0px", zIndex: "1", marginRight: "1rem", background: props.firstRender ? "transparent" : `${props.theme.priBack}`
        }}>
            <div style={{ display: "flex", marginLeft: "auto" }}>
                {navTrail.map(({ x, height, ...rest }, index) => (
                    <animated.div key={`navicons${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`), margin: "8px" }}>
                        <Button className="navText" style={{ backgroundColor: "transparent" }} onClick={() => props.handleNavClick(index)}
                            onMouseLeave={() => handleClose(0)} onMouseEnter={() => handleMouseEnter(index)}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    <Typography variant="body2" align="justify" style={{ marginRight: "8px", color: props.theme.priColor, fontWeight: "bolder" }}>
                                        {`${index + 1}.`}
                                    </Typography>
                                    <Typography variant="body2" align="justify" style={{ color: hover === index + 1 ? props.theme.priColor : props.theme.secColor, fontWeight: "bold", opacity: "0.8" }}>
                                        {navItems[index]}
                                    </Typography>
                                </div>
                                <Transition
                                    items={hover === index + 1}
                                    from={{ opacity: 0, width: "0px" }}
                                    enter={{ opacity: 1, width: index === 0 ? "77px" : index === 1 ? "119px" : "97px" }}
                                    leave={{ opacity: 0, width: "0px" }}>
                                    {show => show && (props => <div style={props}>
                                        <Divider style={{ height: "2px", marginTop: "2px", backgroundColor: priColor }} />
                                    </div>)}
                                </Transition>
                            </div>
                        </Button>
                    </animated.div>
                ))}
            </div>
        </div >
    )
}

const ToTop = (props) => {

    const color = props.theme.secColor
    const transitions = useTransition(!props.showNav, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const handleTopClick = () => {
        props.handleTopClick()
    }

    return (
        transitions.map(({ item, key, props }, index) => (
            item && <animated.div key={key} style={{
                ...props, display: "flex", position: "absolute", flexDirection: "column",
                justifyContent: "center", padding: "32px", paddingBottom: "40px", bottom: "0px", right: "0px", zIndex: "1"
            }}>
                <Button style={{ backgroundColor: "transparent", width: "fit-content" }} onClick={() => handleTopClick()} >
                    <ArrowUpwardIcon style={{ color: color }} />
                </Button>
            </animated.div >
        ))
    )
}

const SideIcons = (props) => {
    const open = true;
    const [hover, setHover] = React.useState(0);

    const iconItems = [{
        content:
            <div className="button" onClick={() => { window.open("https://github.com/kobayashikento") }} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
                <GitHubIcon className="icon" style={{ borderRadius: "50%", color: hover === 1 ? props.theme.priColor : props.theme.secColor }} />
            </div>
    },
    {
        content: <div className="button" onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)}>
            <LinkedInIcon className="icon" style={{ color: hover === 2 ? props.theme.priColor : props.theme.secColor, }} />
        </div>
    },
    {
        content: <div className="button" onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)}>
            <MailIcon className="icon" style={{ color: hover === 3 ? props.theme.priColor : props.theme.secColor, }} />
        </div>
    }];
    const trail = useTrail(iconItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 1600
    })
    return (
        trail.map(({ x, height, ...rest }, index) => (
            <animated.div key={`sideicons${index}`} style={{
                ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`), paddingBottom: "4px",
            }}>
                { iconItems[index].content}
            </animated.div >
        ))
    )
}

const Contact = (props) => {
    const handleClick = (index) => {
        props.handleThemeChange(index)
    }
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
                        <Typography variant="h4" style={{ paddingLeft: "1rem", color: props.theme.priColor, fontWeight: "bold" }}>
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
                    <Typography variant="body1" align="center" style={{ color: props.theme.priTxtColor, textIndent: "1rem", paddingLeft: "1rem", marginBottom: "1rem" }}>
                        If you have any suggestions whether it's the design, animation, color scheme, etc... for my website, I am always eager to make improvements so leave me a message. I am also looking for new opportunities, so if you like what you're seeing, then feel free to contact me too.
            </Typography>
                </Grid>
                <Grid item xs={2} />
                <Button style={{ marginTop: "3rem", color: props.theme.priTxtColor, border: `1px solid ${props.theme.secColor}` }} onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                    Leave A Message
                </Button>
            </Grid>
            <Typography variant="body1" align="center" style={{ color: props.theme.priTxtColor, marginBottom: "1rem", marginTop: "4rem" }}>
                These are some potential themes I was considering...
            </Typography>
            <div style={{ display: "flex", marginTop: "1rem", marginRight: "auto", marginLeft: "auto", height: "40px" }}>
                {props.themes.map((theme, index) => {
                    return (
                        <Button style={{ marginRight: "1rem", color: theme.priColor, border: `1px solid ${theme.priColor}` }} onClick={() => handleClick(index)}>
                            {`${theme.priColor}`}
                        </Button>
                    )
                })}
            </div>
        </Container >
    )
}

const Picture = (props) => {

    const open = props.render;
    const priColor = props.theme.secColor
    const transitions = useTransition(open, null, {
        from: { position: 'absolute', opacity: 0, transform: "translate(0, -10%)" },
        enter: { opacity: 1, transform: "translate(0, 0%)" },
        leave: { opacity: 0, transform: "translate(0, -10%)" },
    })

    return (
        <Container maxWidth="md" style={{ position: "absolute", top: "5%", left: "50%", display: "flex", transform: "translate(-50%, 5%)" }}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={7} />
                <Grid item xs={5} style={{ display: "flex", justifyContent: "center" }}>
                    {transitions.map(({ item, key, props }) =>
                        item && <animated.div key={key} style={props}>
                            <img src={face} style={{
                                marginLeft: "2rem", width: "240px", height: "250px", borderRadius: "5px",
                                boxShadow: `0 9px 12px 1px ${priColor}33, 0 3px 16px 2px ${priColor}26, 0 5px 6px -3px ${priColor}33`
                            }} />
                        </animated.div>
                    )}
                </Grid>
            </Grid>
        </Container >
    );
}

const AboutMe = (props) => {

    const open = props.render

    const headerItems = [{
        content: <Typography variant="h5" style={{ color: props.theme.priColor, fontWeight: "bold" }}>1.</Typography>,
        type: 0
    },
    {
        content: <Typography variant="h4" style={{ paddingLeft: "1rem", color: props.theme.priColor, fontWeight: "bold" }}>About Me </Typography>,
        type: 0,
    },
    {
        content: <Divider style={{ marginLeft: "3rem", width: "15rem", backgroundColor: props.theme.priTxtColor }} />,
        type: 0,
    }
    ]

    const contentItems = [
        {
            content: <Typography variant="body1" style={{ display: "block", color: props.theme.priTxtColor, textIndent: "1rem", marginBottom: "1rem" }}> I am Developer based in Toronto, Ontario with a mild addiction to coffee. </Typography>,
            paddingLeft: "1rem", marginBottom: "1rem", textIndent: "1rem"
        },
        {
            content: <Typography variant="body1" style={{ display: "inline", paddingLeft: "1rem", color: props.theme.priTxtColor }}>I recently obtained my </Typography>,
            paddingLeft: "1rem", marginBottom: "inherit", textIndent: "1rem"
        },
        {
            content: <Typography variant="body1" style={{ display: "inline", boxDecorationBreak: "clone", color: props.theme.secColor }}> Bachelors of Science in Mathematics, Statistics, and Philosophy from the University of Toronto. </Typography>
            , paddingLeft: "1rem", marginBottom: "inherit", textIndent: "0"
        },
        {
            content: <Typography variant="body1" style={{ display: "inline", boxDecorationBreak: "clone", color: props.theme.priTxtColor }}> I put pride in making functional and beautiful products by focusing on every single detail, from the animations to the color schemes.  </Typography>
            , paddingLeft: "1rem", marginBottom: "inherit", textIndent: "0"
        },
    ]

    const headerTrail = useTrail(headerItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    const contentTrail = useTrail(contentItems.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 500
    })

    return (
        <Container maxWidth="md" style={{ position: "absolute", top: "20%", left: "47%", display: "flex", transform: "translate(-50%, -20%)" }}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                style={{ padding: "1rem" }}
            >
                <Grid item xs={7} >
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}>
                        {headerTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`aboutHeader${index}`} style={{ ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`) }}>
                                {headerItems[index].content}

                            </animated.div>))}
                    </div>
                    <div style={{ marginBottom: "1rem", paddingLeft: "3rem" }}>
                        {contentTrail.map(({ x, height, ...rest }, index) => (
                            <animated.div key={`aboutContent${index}`} style={{
                                ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`), display: index === 0 ? "block" : "inline",
                            }}>
                                {contentItems[index].content}
                            </animated.div>))}
                    </div>
                </Grid>
                <Grid item xs={5} />
            </Grid>
        </Container >
    )
}

const SecondPicture = (props) => {

    const open = props.render;
    const priColor = props.theme.secColor
    const transitions = useTransition(open, null, {
        from: { position: 'absolute', opacity: 0, transform: "translate(0, -10%)" },
        enter: { opacity: 1, transform: "translate(0, 0%)" },
        leave: { opacity: 0, transform: "translate(0, -10%)" },
    })

    return (
        <Container maxWidth="md" style={{ position: "absolute", top: "26%", left: "48%", display: "flex", transform: "translate(-40%, -26%)" }}>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3} style={{ display: "flex", justifyContent: "center" }}>
                    {transitions.map(({ item, key, props }) =>
                        item && <animated.div key={key} style={props}>
                            <img src={hurtme} style={{
                                width: "250px", height: "222px", borderRadius: "5px",
                                boxShadow: `0 9px 12px 1px ${priColor}33, 0 3px 16px 2px ${priColor}26, 0 5px 6px -3px ${priColor}33`
                            }} />
                        </animated.div>
                    )}
                </Grid>
                <Grid item xs={9} />
            </Grid>
        </Container >
    );
}

const AboutMeSecond = (props) => {

    const open = props.render
    const items = [
        {
            content: <Divider style={{ marginLeft: "5rem", width: "16rem", marginBottom: "2rem", backgroundColor: props.theme.priTxtColor }} />
        },
        {
            content: <Typography variant="body1" style={{ color: props.theme.priTxtColor, paddingLeft: "1rem", textIndent: "1rem", marginBottom: "1rem" }}>
                When I am not coding I enjoy playing video games, playing the piano, and occasionally check myself out while working out.
</Typography>
        },
        {
            content: <Typography variant="body1" style={{ color: props.theme.priTxtColor, paddingLeft: "1rem", textIndent: "1rem" }}>
                I enjoy playing all kinds of pieces on the piano from Ghibli films, to Chopin's Waltz, and Jazz music, while carefully making sure that I don't annoy my neighbors.
</Typography>
        },
    ]
    const contentTrail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
        delay: 500
    })
    return (
        <Container maxWidth="md" style={{ position: "absolute", top: "28%", left: "64%", display: "flex", transform: "translate(-60%, -35%)" }}>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={4} />
                <Grid item xs={6} >
                    {contentTrail.map(({ x, height, ...rest }, index) => (
                        <animated.div key={`aboutSec${index}`} style={{
                            ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`)
                        }}>
                            {items[index].content}
                        </animated.div>
                    ))}
                </Grid>
                <Grid item xs={2} />
            </Grid>
        </Container >
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

const LineDescription = (props) => {

    const open = props.render;

    const items = [{
        content: <div style={{ display: "flex", alignItems: "center", marginRight: "auto", marginLeft: "auto", width: "fit-content" }}>
            <Divider style={{ marginRight: "1rem", width: "2rem", backgroundColor: props.theme.priTxtColor }} />
            <Typography variant="body2" align="justify" style={{ color: props.theme.priTxtColor, fontWeight: "400", width: "fit-content" }}>
                About The Lines
        </Typography>
            <Divider style={{ marginLeft: "1rem", width: "2rem", backgroundColor: props.theme.priTxtColor }} />
        </div>
    }, {
        content: <Typography variant="subtitle2" align="justify" style={{ color: props.theme.priTxtColor, paddingTop: "1rem", paddingLeft: "1rem", fontWeight: "400", width: "fit-content" }}>
            The number of dots and lines present on the canvas is set to be within the limit of 17000 pixels.
    </Typography>
    }]

    const contentTrail = useTrail(items.length, {
        config: { mass: 5, tension: 2000, friction: 200 },
        opacity: open ? 1 : 0,
        x: open ? 0 : 20,
        height: open ? 110 : 0,
        from: { opacity: 0, x: 20, height: 0 },
    })

    return (
        <Container maxWidth="xs" style={{ display: "flex", flexDirection: "column", position: "absolute", top: "30%", left: "40%", display: "flex", transform: "translate(-50%, -20%)" }}>
            {contentTrail.map(({ x, height, ...rest }, index) => (
                <animated.div key={`lineDes${index}`} style={{
                    ...rest, transform: x.interpolate((x) => `translate3d(0,${-x}px,0)`)
                }}>
                    {items[index].content}
                </animated.div>
            ))}
        </Container>
    )
}

export default React.memo(Introduction);
export { MenuButton, BottomMenu, Introduction, AboutMe, NavBar, SideIcons, Contact, ToTop, Picture, AboutMeSecond, SecondPicture, LineDescription };
