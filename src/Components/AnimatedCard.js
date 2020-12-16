import React from 'react'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { useTransition, animated } from 'react-spring'

import { withStyles } from '@material-ui/core/styles';

import Fade from 'react-reveal';
import Flip from 'react-reveal';

import '../Styles/resumeStyle.css';

const AnimatedCard = (props) => {
    const [hover, setHover] = React.useState(false);
    let backColor;
    let textColor;
    switch ((props.index + 1) % 3) {
        case 0:
            backColor = props.theme.lightestColor
            textColor = props.theme.darkestColor
            break;
        case 1:
            backColor = props.theme.darkestColor
            textColor = props.theme.lightColor
            break;
        case 2:
            backColor = props.theme.lightColor
            textColor = props.theme.darkColor
            break;
        default:
    }

    const handleClick = () => {
        setHover(false)
        props.handleCardClick(props.item.key)
        props.handleActiveCard(props.item)
    }

    const transitions = useTransition(hover, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const StyledButton = withStyles({
        root: {
            background: backColor,
            borderRadius: 0,
            border: `2px solid ${props.theme.stdColor}`,
            '&:hover': {
                background: props.theme.stdColor,
            },
        },
    })(Button);

    return (
        <div
            style={{ backgroundColor: hover ? backColor : "transparent" }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {
                hover ?
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly", height: "100%" }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "1rem" }}>
                            <Typography align="center" variant="h5" style={{
                                color: textColor, fontWeight: "400", fontFamily: "'Comfortaa', sans-serif", padding: "4px"
                            }}>
                                {props.item.title}
                            </Typography>
                            <Divider style={{ height: "2px", width: props.mobile ? "3rem" : "1rem", backgroundColor: textColor }} />
                            <Typography variant="body1" style={{
                                color: textColor, fontFamily: "'Roboto', sans-serif", padding: "4px"
                            }}>
                                {props.item.subtitle}
                            </Typography>
                        </div>
                        <StyledButton variant="outlined" style={{ margin: "1rem" }} onClick={() => handleClick()}>
                            <Typography variant="body1" style={{ color: textColor, fontWeight: "400", fontFamily: "'Roboto', sans-serif", padding: "4px" }}>
                                Learn More
                            </Typography>
                        </StyledButton>
                    </div>
                    :
                    <div
                        style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", alignItems: "center" }}
                    >
                        <img src={props.item.img} alt={`${props.item.title}`}
                            style={{
                                width: props.item.imgWidth, height: props.item.imgHeight,
                                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", filter: "brightness(0) invert(1)"
                            }} />
                    </div>
            }
        </div>
    )
}

export default React.memo(AnimatedCard)