import React from 'react';

import { useTransition, animated, config } from 'react-spring'

import resume from '../Assets/resume.js';

import useMedia from './useMedia.js'
import useObserver from './useMeasure.js'
import AnimatedCard from './AnimatedCard.js';

const AnimatedGrid = (props) => {
    const columns = useMedia(['(min-width: 1500px)', '(min-width: 1200px)', '(min-width: 850px)'], [6, 5, 4], 2)
    const ref = React.useRef(null);
    const [width, setWidth] = React.useState(0);
    // center display of card distance

    const callback = () => {
        setWidth(ref.current.offsetWidth)
    }

    useObserver({ callback: callback, element: ref })

    const getItems = () => {
        let len = resume.length
        let temp = [...resume]
        let activePage = props.activePage;
        if (activePage === 1) {
            while (len--) {
                if (temp[len].type !== "education") {
                    temp.splice(len, 1);
                }
            }
            return (temp);
        } else if (activePage === 2) {
            while (len--) {
                if (temp[len].type !== "experience") {
                    temp.splice(len, 1);
                }
            }
            return (temp);
        } else if (activePage === 3) {
            while (len--) {
                if (temp[len].type !== "coding") {
                    temp.splice(len, 1);
                }
            }
            return (temp);
        } else if (activePage === 4) {
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

        // index of left and right
        let index = 0;
        let left = (Math.ceil(columns / 2)) - 1;
        let right = (Math.ceil(columns / 2))
        // 0 is left, 1 is right
        let dir = 0;
        const mobileHeight = 400;

        // need to check if item is on the second row AND the number of items is less than the number of columns
        // need to find at which column the starting items is not filled to the max of width: if there isnt any then return 0, 
        // if there is then return the index to watch for
        // we know that a grid will be uneven if theres a remainder when divided by the number of columns which can be done using modulo
        let leftover = 0
        let change = false;
        if (items.length % columns !== 0) {
            // if remainder exists 
            // modulo will return at which index from the last will not fit the grid 
            leftover = (items.length - (items.length % columns));
            change = true;
        }

        let gridItems = items.map((child, idx) => {
            let column;
            let xy;

            if (props.mobile) {
                // check if the idx is even or odd, even => left side, odd => right side
                if ((idx % 2 === 0) && (idx === items.length - 1)) {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [Math.floor((width / columns)) / 2, (heights[column] += mobileHeight / 2) - mobileHeight / 2]
                    return { ...child, xy, width: Math.floor((width / columns)), height: (mobileHeight / 2) }
                } else if (idx % 2 === 0) {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [0, (heights[column] += mobileHeight / 2) - mobileHeight / 2]
                    return { ...child, xy, width: Math.floor((width / columns)), height: (mobileHeight / 2) }
                } else {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [window.innerWidth / 2, (heights[column] += mobileHeight / 2) - mobileHeight / 2]
                    return { ...child, xy, width: Math.floor((width / columns)), height: (mobileHeight / 2) }
                }
            } else {
                if ((left === -1) && (right === columns)) {
                    left = (Math.ceil(columns / 2)) - 1
                    right = (Math.ceil(columns / 2))
                    dir = 0;
                }
                if (items.length === 2) {
                    if (items.length % 2 !== columns % 2) {
                        column = heights.indexOf(Math.min(...heights));
                        xy = [Math.floor(((width / 2) - ((width / columns))) + ((width / columns) * index)), (heights[column] += child.height / 2) - child.height / 2]
                        index += 1;
                        return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                    }
                }
                if (items.length === 1) {
                    column = heights.indexOf(Math.min(...heights));
                    xy = [Math.floor(((width / 2) - ((width / columns) / 2))), (heights[column] += child.height / 2) - child.height / 2]
                    return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                }
                if (change && idx >= leftover) {
                    // modulo = 0 even 
                    if (columns % 2 === 0) {
                        // check if theres only one item 
                        if (items.length - leftover === 1) {
                            column = heights.indexOf(Math.min(...heights));
                            xy = [Math.floor((width / 2) - (width / columns) / 2), (heights[column] += child.height / 2) - child.height / 2]
                            left -= 1
                            dir = 1;
                            return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                        }
                        if (dir === 0) {
                            column = heights.indexOf(Math.min(...heights));
                            xy = [Math.floor((width / columns) * left), (heights[column] += child.height / 2) - child.height / 2]
                            left -= 1
                            dir = 1;
                            return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                        } else if (dir === 1) {
                            column = heights.indexOf(Math.min(...heights));
                            xy = [Math.floor((width / columns) * right), (heights[column] += child.height / 2) - child.height / 2]
                            right += 1
                            dir = 0;
                            return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                        }
                    } else {
                        // 1 = odd
                        // center middle 
                        if (dir === 0) {
                            column = heights.indexOf(Math.min(...heights));
                            xy = [Math.floor((width / 2) - (width / columns) * (left - 1)), (heights[column] += child.height / 2) - child.height / 2]
                            left -= 1
                            dir = 1;
                            return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                        } else if (dir === 1) {
                            column = heights.indexOf(Math.min(...heights));
                            xy = [Math.floor((width / (columns - 1)) * (right - 1)), (heights[column] += child.height / 2) - child.height / 2]
                            right += 1
                            dir = 0;
                            return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                        }
                    }
                } else {
                    if (dir === 0) {
                        column = heights.indexOf(Math.min(...heights));
                        xy = [Math.floor((width / columns) * left), (heights[column] += child.height / 2) - child.height / 2]
                        left -= 1
                        dir = 1;
                        return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                    } else if (dir === 1) {
                        column = heights.indexOf(Math.min(...heights));
                        xy = [Math.floor((width / columns) * right), (heights[column] += child.height / 2) - child.height / 2]
                        right += 1
                        dir = 0;
                        return { ...child, xy, width: Math.floor((width / columns)), height: (child.height / 2) }
                    }
                }
            }
        })
        return [heights, gridItems]
    }, [columns, width, props.activePage, props.cardIndex])

    const transitions = useTransition(gridItems, (item) => item.title, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0, }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { opacity: 0 },
        config: config.stiff,
        trail: 5
    })

    return (
        <div ref={ref} style={{ height: Math.max(...heights), width: window.innerWidth * 0.9, paddingBottom: "2.2vmax" }} className="list">
            {transitions.map(({ item, props: { xy, ...rest } }, index) => (
                <animated.div key={`list-${item.key}`} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                    <AnimatedCard
                        item={item}
                        index={index}
                        mobile={props.mobile}
                        theme={props.theme}
                        activePage={props.activePage}
                        handleCardClick={(index) => props.handleCardClick(index)}
                        handleActiveCard={(item) => props.handleActiveCard(item)}
                        width={width}
                    />
                </animated.div>
            ))}
        </div >
    )
}

export default React.memo(AnimatedGrid)