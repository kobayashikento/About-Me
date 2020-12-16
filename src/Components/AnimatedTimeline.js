import React from 'react';

import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { useSprings, useSpring, useTransition, animated, config } from 'react-spring';

const AnimateTimeline = (props) => {
    const page = props.activePage
    const theme = props.theme
    const [hover, setHover] = React.useState(null);
    const handleClick = (index) => {
        props.handleTimeClick(index);
    }

    const items = [{ content: "All", key: 0 }, { content: "Education", key: 1 }, { content: "Work", key: 2 }, { content: "Skills", key: 3 }]
    const springs = useSprings(
        items.length,
        items.map(item => ({ opacity: item.key === page ? 1 : 0 }))
    );

    const handleHover = (index) => {
        setHover(index)
    }

    return (
        <div style={{ marginTop: "1rem", display: "flex" }}>
            {springs.map((prop, i) => {
                return (
                    <div style={{ marginRight: "8px", marginLeft: "8px" }} onMouseEnter={() => handleHover(i)} onMouseLeave={() => handleHover(null)}>
                        <Typography variant="h6" style={{ color: page === i ? theme.stdColor : hover === i ? theme.stdColor : theme.lightestColor, fontFamily: "'Comfortaa', sans-serif", cursor: "pointer" }} onClick={() => handleClick(i)}>
                            {items[i].content}
                        </Typography>
                        <animated.div style={prop} key={i}>
                            <Divider
                                style={{ backgroundColor: theme.stdColor, height: "2px" }}
                            />
                        </animated.div>
                    </div>
                );
            })}
            {/* <div style={{ marginRight: "1rem" }} key={key}>
                        <Typography variant="h6" style={{ color: page === index ? theme.stdColor : theme.lightestColor, fontFamily: "'Comfortaa', sans-serif" }}>
                            {items[index].content}
                        </Typography> */}
            {/* <animated.div style={spring}>
                <div style={{ marginRight: "1rem" }}>
                    <Typography variant="h6" style={{ color: page === 0 ? theme.stdColor : theme.lightestColor, fontFamily: "'Comfortaa', sans-serif" }}>
                        {items[0].content}
                    </Typography>
                    <Divider
                        style={{ backgroundColor: theme.stdColor, height: "2px" }}
                    />
                </div>
            </animated.div> */}
        </div >
    )
}

export default React.memo(AnimateTimeline)
