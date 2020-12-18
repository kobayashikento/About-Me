import React from 'react';

import Typography from '@material-ui/core/Typography';

import '../Styles/values.css';

const WorkValues = (props) => {

    return (
        <div style={{ display: "flex", height: "100%", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly"}}>
            <div className="hex" style={{ backgroundColor: props.theme.lightColor }}>
                <div className="hex1" style={{ borderBottom: `25.98px solid ${props.theme.lightColor}` }}>
                </div>
                <div className="hex2" style={{ borderTop: `25.98px solid ${props.theme.lightColor}` }}>
                </div>
                {props.content.icon}
            </div>
            <Typography variant={props.mobile ? "h6" : "h5"} style={{
                width: "max-content", color: props.theme.darkestColor, fontWeight: "400", fontFamily: "'Montserrat', sans-serif", marginTop: "1rem"
            }}>
                {props.content.value}
            </Typography>
            <Typography variant="body1" align="center" style={{
                width: "max-content", color: props.theme.darkestColor, fontFamily: "'Poppins', sans-serif", width: "100%"
            }}>
                {props.content.info}
            </Typography>
        </div>
    )
}

export default React.memo(WorkValues);