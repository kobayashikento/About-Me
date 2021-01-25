import React from 'react';

import Typography from '@material-ui/core/Typography';

const Landing = () => {
    return (
        <div style={{ display: "flex", background: "linear-gradient(#232659 10%, #010326 50%)", height: "100vh" }}>
            <div style={{ width: "33vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", marginLeft: "11%" }}>
                <Typography style={{ color: "white", fontFamily: "Hind Siliguri', sans-serif", fontSize: "6rem" }}>
                    KENTO
                </Typography>
                <Typography style={{ color: "white", fontFamily: "Hind Siliguri', sans-serif", fontSize: "6rem" }}>
                    KOBAYASHI
                </Typography>
            </div>
            <div>

            </div>
        </div>
    )
}

export default React.memo(Landing);