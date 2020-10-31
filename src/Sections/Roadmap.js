import React from 'react';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

// icons 
import EventIcon from '@material-ui/icons/Event';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import timeline from '../Assets/timeline.js';

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const theme = createMuiTheme({
    overrides: {
        MuiTimelineItem: {
            missingOppositeContent: {
                "&:before": {
                    flex: "1"
                }
            }
        }
    }
});

const RoadmapTitle = () => {
    return (
        <Card style={{ padding: "1rem", width: "fit-content", marginLeft: "auto", marginRight: "auto", marginTop: "5rem", opacity: "0.9", boxShadow: shadow }}>
            <Typography style={{ textAlign: "center" }} variant="h5">
                More About Me: Timeline
            </Typography>
        </Card>
    )
}

const TimelineAccordion = () => {
    return (
        <ThemeProvider theme={theme}>
            <Timeline align="alternate" style={{ width: "70%", marginTop: "9rem", marginLeft: "auto", marginRight: "auto" }}>
                {timeline.map(event => {
                    return (
                        <TimelineItem key={event.event}>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <event.icon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent >
                                <Accordion style={{ opacity: "1", boxShadow: shadow }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                    >
                                        <div style={{ padding: "1rem" }}>
                                            <Typography variant="h6" >
                                                {event.event}
                                            </Typography>
                                            <div style={{ display: "flex" }}>
                                                <EventIcon style={{ marginTop: "8px", marginRight: "8px" }} />
                                                <Typography variant="body2" align="left" style={{ marginTop: "8px", marginRight: "8px" }}>
                                                    {event.date}
                                                </Typography>
                                                <LocationOnIcon style={{ marginTop: "8px", marginRight: "8px" }} />
                                                <Typography variant="body2" align="left" style={{ marginTop: "8px", marginRight: "8px" }}>
                                                    {event.location}
                                                </Typography>
                                            </div>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ paddingLeft: "1rem", paddingBottom: "1rem", paddingRight: "1rem" }}>
                                            {event.details}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        </ThemeProvider>
    )
}

const Roadmap = () => {
    return (
        <div>
            {RoadmapTitle()}
            {TimelineAccordion()}
        </div>
    )
}

export default Roadmap;
export { RoadmapTitle, TimelineAccordion };

