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

import Canvas from '../Components/Canvas.js';

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import RowingIcon from '@material-ui/icons/Rowing';

import Measure from 'react-measure'
import { Transition, animated, interpolate } from 'react-spring/renderprops'



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
        <Container >

        </Container>
    );
}

export default Resume;