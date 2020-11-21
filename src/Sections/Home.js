import React from 'react'

import { Link } from 'react-router-dom';

import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Fade from 'react-reveal'

import '../Styles/transitions.css';

import Introduction from '../Sections/Introduction.js';
import Menu  from '../Components/HomeAnimation.js';

const Home = () => {
    return (
        <Fade bottom> 
            <div style={{ background: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)", height: "100vh", width: "100vw", overflow: "hidden" }} >
                <Introduction />
                <Menu />
            </div>
        </Fade>
    )
}

export default React.memo(Home);