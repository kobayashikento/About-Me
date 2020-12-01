import React from 'react';

import { Link, Redirect } from 'react-router-dom';

import { Transition } from 'react-spring/renderprops'
import { useTransition, animated, } from 'react-spring'

import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { TransitionGroup, CSSTransition } from "react-transition-group";

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

import face from '../Assets/Pictures/face.jpg';

import resume from '../Assets/resume.js';

import useMedia from '../Components/useMedia.js'
import useObserver from '../Components/useMeasure.js'
import AnimatedCard from '../Components/AnimatedCard.js';

import Fade from 'react-reveal';

import styles from '../Styles/resumeStyle.css';
import { Tooltip } from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';
import { Apps } from '@material-ui/icons';

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
                        {/* <Button
                            style={{ marginRight: "1rem", color: "grey" }}
                            to={"/portfolio"}
                            component={Link}
                        >
                            Portfolio
                        </Button> */}
                        <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
                            <IconButton
                                size="small" style={{ marginRight: "1rem", color: "grey", backgroundColor: "transparent" }}
                            >
                                <Avatar style={{ border: "2px solid grey" }} src={face} ></Avatar>
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
        props.handleTimeClick(index);
    }

    const theme = createMuiTheme({
        overrides: {
            MuiButton: {
                root: {
                    backgroundColor: props.theme.secBack,
                    color: props.theme.priTxtColor,
                    boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                    "&$disabled": {
                        color: props.theme.priTxtColor,
                        backgroundColor: props.theme.secBack,
                        boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
                    },
                    '&:hover': {
                        backgroundColor: props.theme.secBack,
                    }
                },
                textSizeLarge: {
                    padding: "6px 9px"
                }
            }
        }
    });

    // Coding the animation
    const items = [{ width: 84, icon: <AppsIcon style={{ marginRight: "11px" }} />, content: "All" }, { width: 148, icon: <SchoolIcon style={{ marginRight: "11px" }} />, content: "Education" },
    { width: 105, icon: <WorkIcon style={{ marginRight: "11px" }} />, content: "Work" }, { width: 110, icon: <LaptopIcon style={{ marginRight: "11px" }} />, content: "Skills" },
    { width: 108, icon: <RowingIcon style={{ marginRight: "11px" }} />, content: "Extra" }]

    const [gridItems] = React.useMemo(() => {
        // this index keeps track of the position of the cards
        let starting = 0;

        let gridItems = items.map((child, idx) => {
            let xy;
            if (idx === page) {
                xy = [starting, 0]
                starting += 20
                return { ...child, xy, width: child.width, height: 42 }
            } else {
                xy = [starting, 0]
                starting += 20
                return { ...child, xy, width: 46, height: 42 }
            }
        })
        return [gridItems]
    }, [page])

    const transitions = useTransition(gridItems, (item) => item.content, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { opacity: 0 },
        config: { mass: 5, tension: 300, friction: 100 },
        trail: 10
    })

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                height: "42px", width: "420px", position: "relative", display: "flex", marginLeft: "auto", marginRight: "auto",
            }}>
                {transitions.map(({ item, props: { xy, ...rest } }, index) => (
                    <animated.div key={index} style={{ border: `2px solid ${props.theme.secColor}`, borderRadius: "17px", overflow: "hidden", transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                        <Button style={{ borderRadius: "17px" }} size="large" disabled={page === index ? true : false} onClick={() => handleClick(index)}>
                            {items[index].icon}
                            {items[index].content}
                        </Button>
                    </animated.div>
                ))}
            </div >
        </ThemeProvider >
    )
}

const AnimatedGrid = (props) => {
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1200px)', '(min-width: 850px)'], [5, 4, 3], 1)
    const ref = React.useRef(null);
    const [width, setWidth] = React.useState(0);

    // center display of card distance
    const dist = ((window.innerWidth * 0.7) / 2) - 315

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
        // this index keeps track of the position of the cards
        let leftIndex = 0;
        // index that keeps track of scrolled cards
        let rightIndex = props.cardIndex

        let gridItems = items.map((child, idx) => {
            let column;
            let xy;
            if (props.activePage !== 0) {
                //code it so it react different on different screen size

                // If card index is less than 2 of the cardIndex, then it should be in focus
                // If theres only 1 card
                if (items.length === 1) {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [dist + 167, 0]
                    leftIndex += 1;
                    return { ...child, xy, width: 300, height: 400 }
                    // if theres more than 1 card and the cards are in the starting position
                } else if (props.cardIndex === 0) {
                    // display the first 2 cards that are in focus
                    if (idx === 0 || idx === 1) {
                        column = heights.indexOf(Math.min(...heights));
                        xy = [((300 + 5) * leftIndex) + dist, 0]
                        leftIndex += 1;
                        return { ...child, xy, width: 300, height: 400 }
                    } else {
                        column = heights.indexOf(Math.min(...heights));
                        xy = [((300 + 15) * leftIndex) + dist, 25]
                        leftIndex += 1;
                        return { ...child, xy, width: 250, height: 350 }
                    }
                } else if (idx < props.cardIndex) {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [dist - ((250) * rightIndex), 25]
                    rightIndex -= 1;
                    return { ...child, xy, width: 250, height: 350 }
                } else if (idx > props.cardIndex) {
                    if (idx === props.cardIndex || idx === props.cardIndex + 1) {
                        column = heights.indexOf(Math.min(...heights));
                        xy = [((300 + 10) * leftIndex) + dist, 0]
                        leftIndex += 1;
                        return { ...child, xy, width: 300, height: 400 }
                    } else {
                        xy = [((300) * leftIndex) + dist, 25]
                        leftIndex += 1;
                        column = heights.indexOf(Math.min(...heights));
                        return { ...child, xy, width: 250, height: 350 }
                    }
                } else {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [dist, 0]
                    leftIndex += 1;
                    return { ...child, xy, width: 300, height: 400 }
                }
                //condition when its in grid view
            } else {
                column = heights.indexOf(Math.min(...heights));
                xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2]
                return { ...child, xy, width: (width / columns), height: (child.height / 2) }
            }
        })
        return [heights, gridItems]
    }, [columns, width, props.activePage, props.cardIndex])

    const transitions = useTransition(gridItems, (item) => item.title, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0, }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { opacity: 0 },
        config: { mass: 5, tension: 300, friction: 100 },
        trail: 10
    })

    return (
        <React.Fragment >
            <div ref={ref} className={props.activePage !== 0 ? "listCard" : "list"} style={{
                marginTop: "1rem", paddingRight: "16px", height: props.activePage !== 0 ? "500px" : Math.max(...heights), width: props.activePage !== 0 ? window.innerWidth * 0.7 : "", position: "relative"
            }}>
                {transitions.map(({ item, props: { xy, ...rest } }, index) => (
                    <animated.div key={props.activePage !== 0 ? `listCard-${item.key}` : `list-${item.key}`} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                        <AnimatedCard
                            item={item}
                            theme={props.theme}
                            activePage={props.activePage}
                            handleCardClick={(index) => props.handleCardClick(index)}
                            handleActiveCard={(item) => props.handleActiveCard(item)}
                            width={width}
                        />
                    </animated.div>
                ))}
            </div >
            <Fade bottom when={props.activePage !== 0}>
                <div style={{ position: "relative", top: "-85px", width: "fit-content", overflow: "hidden", marginRight: "auto", marginLeft: "auto" }}>
                    <IconButton disabled={props.cardIndex === 0 ? true : false} style={{ marginRight: "16px" }} onClick={() => props.handleNavClick('left')}>
                        <ChevronLeftIcon clsssname="icon" style={{ color: props.cardIndex === 0 ? `${props.theme.secColor}33` : props.theme.secColor }} />
                    </IconButton>
                    <IconButton disabled={getItems().length < 3 ? true : getItems().length - 1 === props.cardIndex ? true : false} onClick={() => props.handleNavClick('right')}>
                        <ChevronRightIcon clsssname="icon" style={{
                            color: getItems().length < 3 ? `${props.theme.secColor}33` :
                                getItems().length - 1 === props.cardIndex ? `${props.theme.secColor}33` : props.theme.secColor
                        }} />
                    </IconButton>
                </div>
            </Fade>
        </React.Fragment >
    )
}

export default React.memo(AnimatedGrid)
export { AnimatedIcon, AnimateTimeline, AnimatedGrid }