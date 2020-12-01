import React from 'react'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import { useTransition, animated } from 'react-spring'

import Fade from 'react-reveal';
import Flip from 'react-reveal';

import '../Styles/resumeStyle.css';

const AnimatedCard = (props) => {
    const [hover, setHover] = React.useState(false);

    const handleClick = () => {
        props.handleCardClick(props.item.key)
        props.handleActiveCard(props.item)
    }

    const transitions = useTransition(hover, null, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <Card
            className="card"
            variant="outlined"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <CardActionArea
                style={{
                    display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", alignItems: "center",
                }}
                onClick={() => handleClick()}
            >
                {props.activePage === 0 ?
                    <React.Fragment>
                        <img src={props.item.img} alt={`${props.item.title}`} style={{ width: props.item.imgWidth, height: props.item.imgHeight, position: "absolute", top: "16px", paddingTop: props.item.logoPadding, marginTop: props.item.logoMargin }} />
                        <div style={{ position: "relative", marginTop: "8px", display: "flex", flexDirection: "column", alignItems: "center", height: "100%", width: "100%", paddingTop: props.item.key === 1 ? "97px" : "95px" }}>
                            <Typography variant={props.item.key === 1 ? "body2" : "body1"} style={{ fontWeight: "bold", color: props.theme.priTxtColor, marginTop: "8px", width: "fit-content" }} align="center">
                                {props.item.title}
                            </Typography>
                            <Typography variant="body2" align="center" style={{ color: props.theme.priTxtColor, width: "fit-content" }}>
                                {props.item.subtitle}
                            </Typography>
                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <img src={props.item.img} alt={`${props.item.title}`} style={{ width: props.item.imgCardWidth, height: props.item.imgCardHeight, position: "absolute", top: "16px", paddingTop: props.item.logoPadding, marginTop: props.item.cardMargin }} />
                        <div style={{ position: "absolute", paddingTop: "170px", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%" }}>
                            <Typography variant={props.item.key === 1 ? "body1" : "h6"} style={{ fontWeight: "bold", color: props.theme.priTxtColor, marginTop: props.item.key === 1 ? "14px" : "8px", width: "fit-content" }} align="center">
                                {props.item.title}
                            </Typography>
                            <Typography variant="body1" style={{ color: props.theme.priTxtColor, width: "fit-content" }}>
                                {props.item.subtitle}
                            </Typography>
                            <Typography variant="subtitle2" style={{
                                width: "fit-content", paddingTop: props.item.cardSubtitleMargin === 0 ? "42px" : props.item.cardSubtitleMargin === 1 ? "37px" : "32px",
                                color: props.theme.priTxtColor, whiteSpace: "break-spaces", textAlign: "center"
                            }}>
                                {props.item.cardSubtitle}
                            </Typography>
                            <Divider style={{ width: "70%", marginTop: props.item.cardSubtitleMargin === 2 ? "8px" : "16px" }} />
                        </div>
                    </React.Fragment>
                }
            </CardActionArea>
        </Card >
    )
}

export default React.memo(AnimatedCard)