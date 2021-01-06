import React from 'react';

import Typography from '@material-ui/core/Typography';

import '../Styles/values.css';

const WorkValues = (props) => {

    return (
        <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
            {/* <div className="hex" style={{ backgroundColor: props.theme.lightColor }}>
                <div className="hex1" style={{ borderBottom: `25.98px solid ${props.theme.lightColor}` }}>
                </div>
                <div className="hex2" style={{ borderTop: `25.98px solid ${props.theme.lightColor}` }}>
                </div>
                {props.content.icon}
            </div> */}
            {props.content.icon}
            <div style={{ display: "flex", flexDirection: "column", marginLeft: "2.2vmax", marginTop: "1.1vmax" }}>
                <Typography  style={{
                    width: "max-content", color: props.theme.lightestColor, fontWeight: "500", fontFamily: "'Quicksand', sans-serif",
                    fontSize: "21px", lineHeight: "36px"
                }}>
                    {props.content.value}
                </Typography>
                <Typography align="left" style={{
                     color: props.theme.lightestColor, fontFamily: "'Quicksand', sans-serif", 
                    width: "100%", fontWeight: "300", fontSize: "14px",
                }}>
                    {props.content.info}
                </Typography>
            </div>
        </div>
    )
}

export default React.memo(WorkValues);