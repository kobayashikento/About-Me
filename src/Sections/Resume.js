import React from 'react'

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';

import Canvas from '../Components/Canvas.js';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import RowingIcon from '@material-ui/icons/Rowing';

import styles from '../Styles/resumeStyle.js';

const useStyles = makeStyles(styles);

const Resume = () => {
    const classes = useStyles();
    const [activePage, setActivePage] = React.useState(0);
    const [showIcon, setShowIcon] = React.useState({
        education: false,
        experience: false,
        extra: false
    })


    return (
        <section style={{ height: "100vh", width: "100vw", backgroundColor: "rgb(7 22 39 / 94%)" }} >
            <div style={{ position: "fixed", top: "15%", left: "45px" }}>
                <Timeline align="left" style={{ position: "fixed" }}>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={activePage === 1 ? "primary" : "grey"}>
                                <IconButton
                                    style={{ zoom: showIcon.education ? 1.5 : 1 }}
                                    onMouseEnter={() => setShowIcon({ ...showIcon, education: true })}
                                    onMouseLeave={() => setShowIcon({ ...showIcon, education: false })}
                                    size="small"
                                >
                                    <SchoolIcon />
                                </IconButton>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{ display: showIcon.education ? "" : "none" }}>
                            <Paper elevation={3} className={classes.paper} >
                                <Typography variant="h6" component="h1">
                                    Education
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={activePage === 2 ? "primary" : "grey"} >
                                <IconButton
                                    style={{ zoom: showIcon.experience ? 1.5 : 1 }}
                                    onMouseEnter={() => setShowIcon({ ...showIcon, experience: true })}
                                    onMouseLeave={() => setShowIcon({ ...showIcon, experience: false })}
                                    size="small"
                                >
                                    <WorkIcon />
                                </IconButton>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{ display: showIcon.experience ? "" : "none" }}>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Experience
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color={activePage === 2 ? "primary" : "grey"} >
                                <IconButton
                                    style={{ zoom: showIcon.extra ? 1.5 : 1 }}
                                    onMouseEnter={() => setShowIcon({ ...showIcon, extra: true })}
                                    onMouseLeave={() => setShowIcon({ ...showIcon, extra: false })}
                                    size="small"
                                >
                                    <RowingIcon />
                                </IconButton>
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent style={{ display: showIcon.extra ? "" : "none" }}>
                            <Paper elevation={3} className={classes.paper}>
                                <Typography variant="h6" component="h1">
                                    Extracurricular
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
            <Container maxWidth="md">
            </Container>
        </ section>
    );
}

export default Resume;