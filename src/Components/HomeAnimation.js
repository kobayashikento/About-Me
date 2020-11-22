import React from 'react'

import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';

import AppsIcon from '@material-ui/icons/Apps';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import RowingIcon from '@material-ui/icons/Rowing';
import LaptopIcon from '@material-ui/icons/Laptop';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import { useTheme, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import { useSprings, animated } from 'react-spring'

import '../Styles/resumeStyle.css';

const Menu = (props) => {
    const theme = useTheme();
    //sm down
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    let items = [{ deg: 270 }, { deg: 292.5 }, { deg: 315 }, { tooltip: "See Resume", placement: "bottom", deg: 337.5, icon: <AppsIcon />, link: "resume/all" },
    { tooltip: "See Education History", placement: "bottom", deg: 0, icon: <SchoolIcon />, link: "resume/education" }, { tooltip: "Read personal roadmap", placement: "bottom", deg: 22.5, icon: <PermIdentityIcon />, link: "about-me" },
    { deg: 45 }, { deg: 67.5 }, { tooltip: "See Work History", placement: "bottom", deg: 157.5, icon: <RowingIcon />, link: "resume/activties" },
    { tooltip: "See Activities", placement: "bottom", deg: 180, icon: <WorkIcon />, link: "resume/experience" }, { tooltip: "See Skills", placement: "bottom", deg: 202.5, icon: <LaptopIcon />, link: "resume/skills" },
    { deg: 222.5 }
    ]

    //helper function that positions the icons 

    const from = i => ({ rot: 270, opacity: 0 })

    const to = i => ({ rot: items[i].deg, delay: (i + 1) * 400, opacity: 1 })

    const [spring, set] = useSprings(items.length, i => ({ ...to(i), from: from(i) }))

    const StyledTooltip = withStyles({
        tooltip: {
            color: "rgb(234,250,240)",
            backgroundColor: "rgba(108,115,112,0.6)"
        }
    })(Tooltip);

    const makeIcon = (rot, opacity, i) => {
        if (i === 3 || i === 4 ||  i === 5 ||  i === 8 ||  i === 9 ||  i === 10) {
            return (
                <Link to={items[i].link} key={`link${i}`} style={{ textDecoration: "none" }}>
                    <animated.div className={items[i].icon === undefined ? "" : "homeIcon"} key={`icon${i}`} style={{ opacity: opacity, transform: rot.interpolate(deg => `rotate(${deg}deg) translate(22rem) rotate(-${deg}deg)`) }}>
                        <StyledTooltip TransitionComponent={Zoom} title={items[i].tooltip} placement={items[i].placement}>
                            <IconButton disabled={false} style={{ color: "white", backgroundColor: items[i].icon === undefined ? "transparent" : "rgb(145,150,149)", borderRadius: "5px" }}>
                                {items[i].icon}
                            </IconButton>
                        </StyledTooltip>
                    </animated.div>
                </Link>
            )
        } else {
            return (<React.Fragment key={`emptyIcon${i}`}></React.Fragment>)
        }
    }

    return (
        <div style={{ position: "absolute", top: "46%", left: "48%", transform: "translate(-50%, -50%)" }}>
            {spring.map(({ rot, opacity }, i) => (
                makeIcon(rot, opacity, i)
            ))}
        </div>
    )
}

export default React.memo(Menu);