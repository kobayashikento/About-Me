import React from 'react'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import Fade from 'react-reveal';

import '../Styles/resumeStyle.css';

const AnimatedCard = (props) => {
    const [hover, setHover] = React.useState(false);

    const handleClick = () => {
        props.handleCardClick(props.item.key)
        props.handleActiveCard(props.item)
    }

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
                        <Fade bottom className="details" when={hover}>
                            <Divider style={{ position: "relative", width: "80%", margin: "auto", marginTop: "56px" }} />
                            <Typography variant="body1" style={{ color: "rgba(0, 0, 0, 0.5)", marginTop: "16px", position: "relative" }} align="center">
                                More Details
                            </Typography>
                        </Fade>
                        <Fade bottom when={!hover}>
                            <div style={{ position: "absolute", marginTop: "8px", display: "flex", flexDirection: "column", alignItems: "center", height: "100%", width: "100%", paddingTop: props.item.key === 1 ? "103px" : "96px" }}>
                                <Typography variant={props.item.key === 1 ? "body1" : "h6"} style={{ marginTop: "8px", width: "fit-content" }} align="center">
                                    {props.item.title}
                                </Typography>
                                <Typography variant="body2" style={{ width: "fit-content" }}>
                                    {props.item.subtitle}
                                </Typography>
                                <Divider style={{ width: "70%", marginTop: "24px" }} />
                                <Chip label={props.item.chip} variant="outlined" style={{ marginTop: "16px" }} />
                            </div>
                        </Fade>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <img src={props.item.img} alt={`${props.item.title}`} style={{ width: props.item.imgCardWidth, height: props.item.imgCardHeight, position: "absolute", top: "16px", paddingTop: props.item.logoPadding, marginTop: props.item.cardMargin }} />
                        <Fade bottom when={hover}>
                            <Divider style={{ position: "relative", width: "80%", margin: "auto", marginTop: "56px" }} />
                            <Typography variant="body1" style={{ color: "rgba(0, 0, 0, 0.5)", marginTop: "16px", position: "relative" }} align="center">
                                More Details
                            </Typography>
                        </Fade>
                        <Fade bottom when={!hover}>
                            <div style={{ position: "absolute", paddingTop: "200px", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", height: "100%" }}>
                                <Typography variant={props.item.key === 1 ? "body1" : "h6"} style={{ marginTop: "8px", width: "fit-content" }} align="center">
                                    {props.item.title}
                                </Typography>
                                <Typography variant="body1" style={{ width: "fit-content" }}>
                                    {props.item.subtitle}
                                </Typography>
                                <Typography variant="subtitle2" style={{ width: "fit-content", marginTop: props.item.cardSubtitleMargin === 0 ? "86px" : props.item.cardSubtitleMargin === 1 ? "80px" : "60px",
                                color: "rgba(0, 0, 0, 0.6)", whiteSpace: "break-spaces", textAlign: "center" }}>
                                    {props.item.cardSubtitle}
                                </Typography>
                            <Divider style={{ width: "70%", marginTop: "16px" }} />
                            <Chip label={props.item.chip} variant="outlined" style={{ marginTop: "16px" }} />
                            </div>
                        </Fade>
                    </React.Fragment>
                }
            </CardActionArea>
        </Card >
    )
}

export default React.memo(AnimatedCard)