import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import Fade from 'react-reveal'

import { useTransition, animated, useSpring, useChain, config } from 'react-spring'

import { Transition } from 'react-spring/renderprops'

import { AnimatedIcon, AnimateTimeline, AnimatedCarousel, AnimatedCard, AnimatedGrid } from '../Components/AnimatedResume.js';

const shadow = "0 9px 12px 1px rgba(0,0,0,0.14), 0 3px 16px 2px rgba(0,0,0,0.12), 0 5px 6px -3px rgba(0,0,0,0.20)";

const Resume = (props) => {
    // 0-none, 1-education, 2-work, 3-extra
    const [activePage, setActivePage] = React.useState(0);
    const timelineRef = React.useRef(null);

    const handleTimeClick = (index) => {
        if (activePage === index) {
            setActivePage(0);
        } else {
            setActivePage(index);
        }
    }
    React.useEffect(() => {
        function handleClickOutside(event) {
            if (timelineRef.current && !timelineRef.current.contains(event.target)) {
                setActivePage(0);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [timelineRef]);
    return (
        <div style={{ background: "linear-gradient(120deg, #5ee7df  0%, #a8edea 100%)" }}>
            <Fade up>
                <div style={{ height: "100%", background: "linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)" }}>
                    <AnimatedIcon />
                    <div ref={timelineRef}> 
                    <AnimateTimeline
                        activePage={activePage}
                        handleTimeClick={handleTimeClick}
                    />
                    </div>
                    <AnimatedGrid
                        activePage={activePage}
                    />
                    {/* <AnimatedCarousel /> */}
                </div>
            </Fade>
        </div>
    );
}

export default Resume;