import React from 'react';

import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import RowingIcon from '@material-ui/icons/Rowing';
import LaptopIcon from '@material-ui/icons/Laptop';
import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { useTransition, animated } from 'react-spring'

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
    const fullItems = [{ width: 84, icon: <AppsIcon style={{ marginRight: "11px" }} />, content: "All" }, { width: 148, icon: <SchoolIcon style={{ marginRight: "11px" }} />, content: "Education" },
    { width: 105, icon: <WorkIcon style={{ marginRight: "11px" }} />, content: "Work" }, { width: 110, icon: <LaptopIcon style={{ marginRight: "11px" }} />, content: "Skills" },
    { width: 108, icon: <RowingIcon style={{ marginRight: "11px" }} />, content: "Extra" }]

    const [gridItems] = React.useMemo(() => {
        // this index keeps track of the position of the cards
        let starting = 0;
        let items = [];
        if (props.mobile) {
            let copy = [...fullItems]
            copy.shift()
            items = copy
        } else {
            items = [...fullItems]
        }
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
                height: "42px", width: props.mobile ? "100%" : "420px", position: "relative", display: "flex", marginLeft: props.mobile ? "5%" : "auto", marginRight: "auto",
            }}>
                {transitions.map(({ item, props: { xy, ...rest } }, index) => (
                    <animated.div key={index} style={{ border: `2px solid ${props.theme.secColor}`, borderRadius: "17px", overflow: "hidden", transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`), ...rest }}>
                        <Button style={{ borderRadius: "17px" }} size="large" disabled={page === index ? true : false} onClick={() => handleClick(index)}>
                            {item.icon}
                            {item.content}
                        </Button>
                    </animated.div>
                ))}
            </div >
        </ThemeProvider >
    )
}

export default React.memo(AnimateTimeline)
