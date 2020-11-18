import React from 'react'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

import '../Styles/resumeStyle.css';

const AnimatedCard = (props) => {
    const handleClick = () => {
        props.handleCardClick(props.item.key)
        props.handleActiveCard(props.item)
    }

    return (
        <Card className="card" variant="outlined">
            <CardActionArea style={{
                display: "flex", flexDirection: "column", justifyContent: "center",
                width: "100%", height: "100%", alignItems: "center",
            }} onClick={() => handleClick()}>
                <img src={props.item.img} alt={`${props.item.title}`} style={{ width: props.item.imgWidth, height: props.item.imgHeight, position: "absolute", top: "16px", paddingTop: props.item.logoPadding, marginTop: props.item.logoMargin }} />
                <div style={{ position: "absolute", marginTop: "8px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant={props.item.key === 1 ? "body1" : "h6"} style={{ marginTop: "8px", width: "fit-content" }} align="center">
                        {props.item.title}
                    </Typography>
                    <Typography variant="body2" style={{ width: "fit-content" }}>
                        {props.item.subtitle}
                    </Typography>
                </div>
                <Divider style={{ position: "absolute", width: "70%", top: "71%" }} />
                <Chip label={props.item.chip} variant="outlined" style={{ position: "absolute", bottom: "16px" }} />
            </CardActionArea>
        </Card>
    )
}

export default React.memo(AnimatedCard)