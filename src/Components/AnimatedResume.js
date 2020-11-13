import React from 'react';

import { Link } from 'react-router-dom';

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

import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import RowingIcon from '@material-ui/icons/Rowing';
import LaptopIcon from '@material-ui/icons/Laptop';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';

import catImg from '../Assets/Cat.png';

import resume from '../Assets/resume.js';

import useMedia from '../Components/useMedia.js'
import useObserver from '../Components/useMeasure.js'
import AnimatedCard from '../Components/AnimatedCard.js';

import '../Styles/resumeStyle.css';

const AnimatedIcon = () => {
    const isExpanded = true;
    return (
        <div style={{ display: "flex" }}>
            < Transition
                config={{ duration: 1000 }}
                items={isExpanded}
                from={{ transform: 'translate(-50%, -50%)', opacity: 0, position: "fixed", top: "50%", left: "50%" }}
                enter={{ transform: 'translate(0,0)', opacity: 1, position: "fixed", top: "0", left: "0" }}
                leave={{ transform: 'translate3d(0,-40px,0)' }}>
                {isExpanded => isExpanded && (props =>
                    <animated.div style={{ ...props, display: "flex", justifyContent: "left", paddingTop: "1rem", paddingLeft: "2rem" }}>
                        <IconButton onClick={() => { window.open("https://github.com/kobayashikento") }} >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => { window.open("https://ca.linkedin.com/in/kento-kobayashi-1a7330120") }} >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton onClick={() => { window.location.href = "mailto:kentokobayashik@gmail.com?" }} >
                            <MailIcon />
                        </IconButton>
                    </animated.div>)}
            </Transition >
            < Transition
                config={{ duration: 1000 }}
                items={isExpanded}
                from={{ transform: 'translate(50%, -50%)', opacity: 0, position: "fixed", top: "50%", right: "50%", zoom: "3" }}
                enter={{ transform: 'translate(0,0)', opacity: 1, position: "fixed", top: "0", right: "0", zoom: "1" }}
                leave={{ transform: 'translate3d(0,-40px,0)' }}>
                {isExpanded => isExpanded && (props =>
                    <animated.div style={{ ...props, display: "flex", justifyContent: "right", paddingTop: "1rem", paddingRight: "2rem" }}>
                        <Link to="/" style={{ textDecoration: "none", color: "grey" }}>
                            <Button
                                style={{ marginRight: "1rem", color: "grey" }}
                            >
                                Home
                        </Button>
                        </Link>
                        <Button
                            style={{ marginRight: "1rem", color: "grey" }}
                            to={"/portfolio"}
                            component={Link}
                        >
                            Portfolio
                        </Button>
                        <Avatar style={{ border: "2px solid grey" }} src={catImg} />
                    </animated.div>)}
            </Transition >
        </div>
    )
}

const AnimateTimeline = (props) => {
    const [showIcon, setShowIcon] = React.useState(0)
    const page = props.activePage
    const handleClick = (index) => {
        props.handleTimeClick(index);
    }
    return (
        < Transition
            config={{ duration: 500 }}
            items={true}
            from={{ transform: 'translate(-50%, -50%)', opacity: 0, position: "fixed", top: "50%" }}
            enter={{ transform: 'translate(0,0)', opacity: 1, position: "fixed", top: "0", left: "0" }}
            leave={{ transform: 'translate3d(0,-40px,0)' }}>
            {isExpanded => isExpanded && (props =>
                <animated.div style={{ ...props }}>
                    <Timeline align="left" style={{ position: "fixed", top: "10rem" }}>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined">
                                    <IconButton
                                        style={{ zoom: showIcon === 1 ? 1.5 : page === 1 ? 1.5 : 1 }}
                                        onMouseEnter={() => setShowIcon(1)}
                                        onMouseLeave={() => setShowIcon(0)}
                                        size="small"
                                        onClick={() => handleClick(1)}
                                    >
                                        <SchoolIcon />
                                    </IconButton>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={{ display: showIcon === 1 || page === 1 ? "" : "none", paddingTop: "16px" }}>
                                <Button disabled variant="outlined" style={{ color: "grey" }} >
                                    Education
                                </Button>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" >
                                    <IconButton
                                        style={{ zoom: showIcon === 2 || page === 2 ? 1.5 : 1, backgroundColor: "none" }}
                                        onMouseEnter={() => setShowIcon(2)}
                                        onMouseLeave={() => setShowIcon(0)}
                                        size="small"
                                        onClick={() => handleClick(2)}
                                    >
                                        <WorkIcon />
                                    </IconButton>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={{ display: showIcon === 2 || page === 2 ? "" : "none", paddingTop: "16px" }}>
                                <Button disabled variant="outlined" style={{ color: "grey" }}>
                                    Work Experience
                    </Button>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" >
                                    <IconButton
                                        style={{ zoom: showIcon === 3 || page === 3 ? 1.5 : 1, backgroundColor: "none" }}
                                        onMouseEnter={() => setShowIcon(3)}
                                        onMouseLeave={() => setShowIcon(0)}
                                        size="small"
                                        onClick={() => handleClick(3)}
                                    >
                                        <LaptopIcon />
                                    </IconButton>
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent style={{ display: showIcon === 3 || page === 3 ? "" : "none", paddingTop: "16px" }}>
                                <Button disabled variant="outlined" style={{ color: "grey" }}>
                                    Technical Skills
                    </Button>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot variant="outlined" >
                                    <IconButton
                                        style={{ zoom: showIcon === 4 || page === 4 ? 1.5 : 1 }}
                                        onMouseEnter={() => setShowIcon(4)}
                                        onMouseLeave={() => setShowIcon(0)}
                                        size="small"
                                        onClick={() => handleClick(4)}
                                    >
                                        <RowingIcon />
                                    </IconButton>
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent style={{ display: showIcon === 4 || page === 4 ? "" : "none", paddingTop: "16px" }}>
                                <Button disabled variant="outlined" style={{ color: "grey" }}>
                                    Extracurricular
                    </Button>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </animated.div >)}
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

    const callback = () => {
        setWidth(ref.current.offsetWidth)
    }

    useObserver({ callback: callback, element: ref })

    const [items, set] = React.useState(resume)

    const [heights, gridItems] = React.useMemo(() => {
        let list;
        if (props.activePage === 1) {
            let len = items.length
            let temp = [...resume]
            while (len--) {
                if (temp[len].type !== "education") {
                    temp.splice(len, 1);
                }
            }
            list = temp;
        } else if (props.activePage === 2) {
            let len = items.length
            let temp = [...resume]
            while (len--) {
                if (temp[len].type !== "experience") {
                    temp.splice(len, 1);
                }
            }
            list = temp;
        } else if (props.activePage === 3) {
            let len = items.length
            let temp = [...resume]
            while (len--) {
                if (temp[len].type !== "coding") {
                    temp.splice(len, 1);
                }
            }
            list = temp;
        } else if (props.activePage === 4) {
            let len = items.length
            let temp = [...resume]
            while (len--) {
                if (temp[len].type !== "extra") {
                    temp.splice(len, 1);
                }
            }
            list = temp;
        } else {
            list = resume;
        }

        let heights = new Array(columns).fill(0) // Each column gets a height starting with zero
        let gridItems = list.map((child, i) => {
            const column = heights.indexOf(Math.min(...heights)) // Basic masonry-grid placing, puts tile into the smallest column using Math.min
            const xy = [(width / columns) * column, (heights[column] += child.height / 2) - child.height / 2] // X = container width / number of columns * column index, Y = it's just the height of the current column
            return { ...child, xy, width: width / columns, height: child.height / 2 }
        })
        props.handleHeight(Math.max(...heights))
        return [heights, gridItems]
    }, [columns, items, width, props.activePage])

    const transitions = useTransition(gridItems, (item) => item.title,
        {
            from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
            enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
            update: ({ xy, width, height }) => ({ xy, width, height }),
            leave: { height: 0, opacity: 0 },
            config: { mass: 5, tension: 500, friction: 100 },
            trail: 25
        })

    return (
        <div ref={ref} className="list" style={{ height: Math.max(...heights), marginTop: "96px", marginBottom: "24px" }}>
            {transitions.map(({ item, props: { xy, ...rest } }, index) => (
                <animated.div key={item.key} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                    <AnimatedCard
                        item={item}
                        handleCardClick={(index) => props.handleCardClick(index)}
                        handleActiveCard={(item) => props.handleActiveCard(item)}
                        width={width}
                    />
                </animated.div>
            ))}
        </div >
    )
}

export { AnimatedIcon, AnimateTimeline, AnimatedGrid }