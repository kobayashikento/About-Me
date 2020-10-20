import React from 'react'

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
import Button from '@material-ui/core/Button';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AboutMe from '../Sections/AboutMe.js';
import Roadmap from '../Sections/Roadmap.js';
import { CardActionArea, makeStyles } from '@material-ui/core';

import styles from '../Styles/homeStyle.js';

const useStyles = makeStyles(styles);

const Home = () => {
    const classes = useStyles();
    const [scrollTop, setScrollTop] = React.useState(0);
    const [pageHeight, setPageHeight] = React.useState(0);
    const [activePage, setActivePage] = React.useState(0);

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

    return (
        <div>
            <div style={{ position: "fixed", top: "50%", left: "95%", transform: "translate(-50%, -50%)" }}>
                <Timeline align="right">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={activePage === 0 ? "primary" : "grey"} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Home</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={activePage === 1 ? "primary" : "grey"} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>About Me</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={activePage === 2 ? "primary" : "grey"} />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>Roadmap</TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <section style={{ height: "100vh", backgroundColor: "white" }}>
                <div>
                    <Typography style={{ textAlign: "center", paddingTop: "10rem" }} variant="h3">
                        Kento Kobayashi
      </Typography>
                    <Typography style={{ textAlign: "center", marginTop: "1rem" }} variant="h5">
                        Developer, Athlete, Pianist
      </Typography>
                </div>
                <Container style={{ marginTop: "5rem" }} maxWidth="md">
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={5}
                    >
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant="body1" style={{ textAlign: "center" }}>Resume</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant="body1" style={{ textAlign: "center" }}>Portfolio</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant="body1" style={{ textAlign: "center" }}>Contact Details</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item xs={12}>
                                    <Card>
                                        <CardActionArea onClick={() => handleAboutMeClick()} >
                                            <CardContent>
                                                <Typography variant="body1" style={{ textAlign: "center" }}>About Me</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Button className={classes.bounce} onClick={() => handleAboutMeClick()} style={{ marginTop: "56px", borderRadius: "10px" }}>
                                    <ExpandMoreIcon fontSize="large" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            <AboutMe />
            <Roadmap />
            <section style={{ height: "30vh", backgroundColor: "turquoise" }}>
                <Container maxWidth="md" />
            </section>
        </div>
    )
}

export default Home;