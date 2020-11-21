import React from 'react'

import IconButton from '@material-ui/core/IconButton';

import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import RowingIcon from '@material-ui/icons/Rowing';
import LaptopIcon from '@material-ui/icons/Laptop';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { useSprings, animated, interpolate } from 'react-spring'

const Menu = () => {
    const theme = useTheme();
    //sm down
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    let items = [{ icon: <AppsIcon fontSize="large" /> }, { icon: <SchoolIcon fontSize="large" /> }, { icon: <WorkIcon fontSize="large" /> },
    { icon: <RowingIcon fontSize="large" /> }, { icon: <LaptopIcon fontSize="large" /> }, { icon: <PermIdentityIcon fontSize="large" /> }]

    const xy = [
        { x: matches ? (600 / 2) : (window.innerWidth / 2) + 960 * 0.35, y: matches ? window.innerHeight * 0.3 : (window.innerHeight / 2) - window.innerHeight * 0.4, opacity: 0 },
        { x: matches ? (600 / 2) : (window.innerWidth / 2) + 960 * 0.5  , y: matches ? window.innerHeight * 0.3 : (window.innerHeight / 2),  opacity: 0 },
        { x: matches ? (600 / 2) : (window.innerWidth / 2)  + 960 * 0.8 , y: matches ? window.innerHeight * 0.3 : (window.innerHeight / 2) + window.innerHeight * 0.4,  opacity: 0 },
        { x: matches ? (600 / 2) : (960 / 2) - (960 / 2.8), y: matches ? window.innerHeight * 0.3 : window.innerHeight * 0.3 },
        { x: matches ? (600 / 2) : (960 / 2) - (960 / 2.8), y: matches ? window.innerHeight * 0.3 : window.innerHeight * 0.3 },
        { x: matches ? (600 / 2) : (960 / 2) - (960 / 2.8), y: matches ? window.innerHeight * 0.3 : window.innerHeight * 0.3 },
    ]
    const to = i => ({
        x: xy[i].x, y: xy[i].y, scale: 1, delay: i * 500,  opacity: 1
    })

    const from = i => ({ x: window.innerWidth / 2, y: window.innerHeight / 2, scale: 1.5 })

    const [props, set] = useSprings(items.length, i => ({ ...to(i), from: from(i) }))

    const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

    return (
        props.map(({ x, y, scale }, i) => (
            <animated.div key={`icon${i}`} style={{ position: "absolute",transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
                <animated.div style={{  transform: interpolate([scale], trans) }} >
                    <IconButton size="medium">
                        {items[i].icon}
                    </IconButton>
                </animated.div>
            </animated.div>
        ))
    )
}

export default React.memo(Menu);