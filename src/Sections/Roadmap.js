import React from 'react';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

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

const Roadmap = () => {
    return (
        <ThemeProvider theme={theme}>
            <section style={{ minHeight: "100vh", backgroundColor: "rgb(7 22 39 / 94%)"}} >
                <Container style={{ paddingTop: "6rem" }} maxWidth="md">
                    <Typography style={{ textAlign: "center" }} variant="h5">
                        Personal Roadmap
      </Typography>
                    <Timeline align="alternate" style={{padding:"3rem"}}> 
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Home</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>About Me</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>Roadmap</TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot />
                            </TimelineSeparator>
                            <TimelineContent>More...</TimelineContent>
                        </TimelineItem>
                </Timeline>
                </Container>
            </section>
        </ThemeProvider>
    )
}

export default Roadmap;

