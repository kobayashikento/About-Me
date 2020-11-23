import React from 'react';

import { Link, Redirect } from 'react-router-dom';

import { Transition } from 'react-spring/renderprops'
import { useTransition, animated, } from 'react-spring'

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

// Icons 
import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import RowingIcon from '@material-ui/icons/Rowing';
import LaptopIcon from '@material-ui/icons/Laptop';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import catImg from '../Assets/Cat.png';

import resume from '../Assets/resume.js';

import useMedia from '../Components/useMedia.js'
import useObserver from '../Components/useMeasure.js'
import AnimatedCard from '../Components/AnimatedCard.js';

import Fade from 'react-reveal';

import '../Styles/resumeStyle.css';
import { Tooltip } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

const AnimatedIcon = () => {
    const isExpanded = true;
    return (
        <div style={{ display: "flex", zIndex: "2" }}>
            < Transition
                config={{ duration: 1000 }}
                items={isExpanded}
                from={{ transform: 'translate(50%, 0)', opacity: 0, position: "fixed", left: "-50%" }}
                enter={{ transform: 'translate(0,0)', opacity: 1, position: "fixed", left: "0" }}
                leave={{ transform: 'translate3d(0,-40px,0)' }}>
                {isExpanded => isExpanded && (props =>
                    <animated.div style={{ ...props, display: "flex", justifyContent: "left", paddingLeft: "2rem", paddingTop: "8px" }}>
                        <div className="button" onClick={() => { window.open("https://github.com/kobayashikento") }} >
                            <GitHubIcon className="icon" />
                        </div>
                        <div className="button" onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }}>
                            <LinkedInIcon className="icon" />
                        </div>
                        <div className="button" onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }}>
                            <MailIcon className="icon" />
                        </div>
                    </animated.div>)}
            </Transition >
            < Transition
                items={isExpanded}
                from={{ transform: 'translate(0,0)', opacity: 1, position: "fixed", top: "0", right: "0", zoom: "1" }}
                enter={{ transform: 'translate(0,0)', opacity: 1, position: "fixed", top: "0", right: "0", zoom: "1" }}
                leave={{ transform: 'translate3d(0,-40px,0)' }}>
                {isExpanded => isExpanded && (props =>
                    <animated.div style={{ ...props, display: "flex", justifyContent: "right", paddingTop: "1rem", paddingRight: "2rem" }}>
                        <Button
                            style={{ marginRight: "1rem", color: "grey" }}
                            to={"/portfolio"}
                            component={Link}
                        >
                            Portfolio
                        </Button>
                        <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
                            <IconButton
                                size="small" style={{ marginRight: "1rem", color: "grey", backgroundColor: "transparent" }}
                            >
                                <Avatar style={{ border: "2px solid grey" }} src={catImg} ></Avatar>
                            </IconButton>
                        </Link>
                    </animated.div>)}
            </Transition >
        </div >
    )
}

const AnimateTimeline = (props) => {
    const page = props.activePage

    const handleClick = (index) => {
        switch (index) {
            case 0:
                <Redirect to="/resume/all" />
                break;
            case 1:
                <Redirect to="/resume/education" />
                break;
        }
        props.handleTimeClick(index);
    }

    const createContent = (name, index) => {
        return (
            <Transition
                items={page === index}
                config={{ mass: 1, tension: 280, friction: 60 }}
                from={{ transform: 'translate3d(-25px,0,0)', opacity: 0, width: "0px" }}
                enter={{ transform: 'translate3d(-20px,0,0)', opacity: 1, width: "130px" }}
                leave={{ transform: 'translate3d(-25px,0,0)', opacity: 0, width: "0px" }}>
                {toggle => toggle ? props =>
                    <TimelineContent style={props} className="timelineContentActive" >
                        <Button disabled variant="outlined" className="timelineButton" >
                            {name}
                        </Button>
                    </TimelineContent> : props => null
                }
            </Transition>
        )
    }

    return (
        < Transition
            config={{ duration: 1000 }}
            items={true}
            from={{ opacity: 0, position: "fixed", left: "-50%" }}
            enter={{ opacity: 1, position: "fixed", left: "0%" }}
            leave={{ transform: 'translate3d(0,-40px,0)' }}>
            {isExpanded => isExpanded && (props =>
                <animated.div style={{ ...props }}>
                    <Timeline align="left" style={{ position: "fixed", top: "10rem" }}>
                        <TimelineItem>
                            <TimelineSeparator className={page === 0 ? "" : "seperator"} onClick={() => handleClick(0)}>
                                <Tooltip title={page !== 0 ? "Show All" : ""} placement="right">
                                    <TimelineDot variant="outlined" className="dot">
                                        <IconButton
                                            disabled={true}
                                            style={{ backgroundColor: "transparent", color: "rgb(234,250,240)" }}
                                            size="small"
                                        >
                                            <AppsIcon fontSize="small" />
                                        </IconButton>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector className="connector" />
                            </TimelineSeparator>
                            {createContent("All", 0)}
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator className={page === 1 ? "" : "seperator"} onClick={() => handleClick(1)}>
                                <Tooltip title={page !== 1 ? "Show Education" : ""} placement="right">
                                    <TimelineDot variant="outlined" className="dot">
                                        <IconButton
                                            disabled={true}
                                            style={{ backgroundColor: "transparent", color: "rgb(234,250,240)" }}
                                            size="small"
                                        >
                                            <SchoolIcon fontSize="small" />
                                        </IconButton>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector className="connector" />
                            </TimelineSeparator>
                            {createContent("Education", 1)}
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator className={page === 2 ? "" : "seperator"} onClick={() => handleClick(2)}>
                                <Tooltip title={page !== 2 ? "Show Experience" : ""} placement="right">
                                    <TimelineDot variant="outlined" className="dot">
                                        <IconButton
                                            disabled={true}
                                            style={{ backgroundColor: "transparent", color: "rgb(234,250,240)" }}
                                            size="small"
                                        >
                                            <WorkIcon fontSize="small" />
                                        </IconButton>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector className="connector" />
                            </TimelineSeparator>
                            {createContent("Experience", 2)}
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator className={page === 3 ? "" : "seperator"} onClick={() => handleClick(3)}>
                                <Tooltip title={page !== 3 ? "Show Skills" : ""} placement="right">
                                    <TimelineDot variant="outlined" className="dot">
                                        <IconButton
                                            disabled={true}
                                            style={{ backgroundColor: "transparent", color: "rgb(234,250,240)" }}
                                            size="small"
                                        >
                                            <LaptopIcon fontSize="small" />
                                        </IconButton>
                                    </TimelineDot>
                                </Tooltip>
                                <TimelineConnector className="connector" />
                            </TimelineSeparator>
                            {createContent("Skills", 3)}
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator className={page === 4 ? "" : "seperator"} onClick={() => handleClick(4)}>
                                <Tooltip title={page !== 4 ? "Show Activities" : ""} placement="right">
                                    <TimelineDot variant="outlined" className="dot">
                                        <IconButton
                                            disabled={true}
                                            style={{ backgroundColor: "transparent", color: "rgb(234,250,240)" }}
                                            size="small"
                                        >
                                            <RowingIcon fontSize="small" />
                                        </IconButton>
                                    </TimelineDot>
                                </Tooltip>
                            </TimelineSeparator>
                            {createContent("Extra", 4)}
                        </TimelineItem>
                    </Timeline>
                </animated.div >)
            }
        </Transition >
    )
}

// Carousel feels too busy, but keep it for the future. maybe i could have a toggle. 
// const AnimatedCarousel = () => {
//     const [state, setState] = React.useState({
//         goToSlide: 0,
//         offsetRadius: 3,
//         showNavigation: false,
//         config: config.slow
//     });

//     const slides = CarasoelContent.map((slide, index) => {
//         return { ...slide, onClick: () => setState({ goToSlide: index }) };
//     });

//     return (
//         < Transition
//             config={{ duration: 1500 }}
//             items={true}
//             from={{ width: "10vw", height: "10vh", position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
//             enter={{ width: "70%", height: "80vh", position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
//             leave={{ transform: 'translate3d(0,-40px,0)' }}>
//             {isExpanded => isExpanded && (props =>
//                 <animated.div style={{ ...props }}>
//                     <Carousel
//                         slides={slides}
//                         goToSlide={state.goToSlide}
//                         offsetRadius={state.offsetRadius}
//                         showNavigation={state.showNavigation}
//                         animationConfig={state.config}
//                     />
//                 </animated.div>)}
//         </ Transition>
//     )
// }

const AnimatedGrid = (props) => {
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1200px)', '(min-width: 850px)'], [4, 3, 2], 1)
    const ref = React.useRef(null);
    const [width, setWidth] = React.useState(0);
    const dist = (window.innerWidth * 0.8) * 0.2

    const callback = () => {
        setWidth(ref.current.offsetWidth)
    }

    useObserver({ callback: callback, element: ref })
    const getItems = () => {
        let len = resume.length
        let temp = [...resume]
        if (props.activePage === 1) {
            while (len--) {
                if (temp[len].type !== "education") {
                    temp.splice(len, 1);
                }
            }
            return (temp);
        } else if (props.activePage === 2) {
            while (len--) {
                if (temp[len].type !== "experience") {
                    temp.splice(len, 1);
                }
            }
            return (temp);
        } else if (props.activePage === 3) {
            while (len--) {
                if (temp[len].type !== "coding") {
                    temp.splice(len, 1);
                }
            }
            return (temp);
        } else if (props.activePage === 4) {
            while (len--) {
                if (temp[len].type !== "extra") {
                    temp.splice(len, 1);
                }
            }
            return (temp);
        } else {
            return (temp);
        }
    }

    const [heights, gridItems] = React.useMemo(() => {
        let heights = new Array(columns).fill(0)
        let items = getItems();
        let index = 0;
        let gridItems = items.map((child, idx) => {
            let column;
            let xy;
            if (props.activePage !== 0) {
                //code it so it react different on different screen size 
                if (idx < props.cardIndex) {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [dist, 0]
                } else if (props.cardIndex === idx && props.cardIndex !== 0) {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [dist, -14]
                    index += 1
                } else {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [((344 + 30) * index) + dist, 0]
                    index += 1
                }
                //change height depending on screen size, then adjust golden for height
                return { ...child, xy, width: 344, height: 510 }
            } else {
                column = heights.indexOf(Math.min(...heights));
                xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]
                return { ...child, xy, width: width / columns, height: child.height / 2 }
            }
        })
        return [heights, gridItems]
    }, [columns, width, props.activePage, props.cardIndex])

    const transitions = useTransition(gridItems, (item) => item.title, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { height: 0, opacity: 0 },
        config: { mass: 5, tension: 300, friction: 100 },
        trail: 10
    })

    return (
        <React.Fragment>
            <div ref={ref} className={props.activePage !== 0 ? "listCard" : "list"} style={{
                height: props.activePage !== 0 ? window.innerHeight - 96 : Math.max(...heights), width: props.activePage !== 0 ? window.innerWidth * 0.8 : "", position: "relative"
            }}>
                {transitions.map(({ item, props: { xy, ...rest } }, index) => (
                    <animated.div key={props.activePage !== 0 ? `listCard-${item.key}` : `list-${item.key}`} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                        <AnimatedCard
                            item={item}
                            activePage={props.activePage}
                            handleCardClick={(index) => props.handleCardClick(index)}
                            handleActiveCard={(item) => props.handleActiveCard(item)}
                            width={width}
                        />
                    </animated.div>
                ))}
            </div >
            <Fade bottom when={props.activePage !== 0}>
                <div style={{ position: "absolute", width: window.innerWidth * 0.8, left: "20%", marginTop: "72px", top: "75%", overflow: "hidden" }}>
                    <div style={{ transform: `translate(${dist + 113}px)` }}>
                        <IconButton disabled={props.cardIndex === 0 ? true : false} style={{ marginRight: "16px" }} onClick={() => props.handleNavClick('left')}>
                            <ChevronLeftIcon clsssname="icon" />
                        </IconButton>
                        <IconButton disabled={getItems().length - 1 === props.cardIndex ? true : false} onClick={() => props.handleNavClick('right')}>
                            <ChevronRightIcon clsssname="icon" />
                        </IconButton>
                    </div>
                </div>
            </Fade>
        </React.Fragment>
    )
}

export default React.memo(AnimatedGrid)
export { AnimatedIcon, AnimateTimeline, AnimatedGrid }