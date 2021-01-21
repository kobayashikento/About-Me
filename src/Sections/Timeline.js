import React from 'react';

import Typography from '@material-ui/core/Typography';

const Timeline = (props) => {
    // Using react spring and interpolation change the distance of timeline 
    // props.s
    return (
        <div style={{ display: "flex" }}>
            <Typography style={{
                fontSize: "11px", lineHeight: "19px", color: "rgba(183,180,176,0.9)", fontFamily: "'Assistant', sans-serif",
                fontWeight: "500", margin: "4px"
            }}>
                Meet Kento Kobayashi
                            </Typography>
        </div>
    )
}

export default React.memo(Timeline);