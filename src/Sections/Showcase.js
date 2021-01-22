import React from 'react';

import { Spring } from 'react-spring/renderprops';

const Showcase = (props) => {
    const leave = false;

    //delete after 
    const themes = {
        //EDF6FF
        darkestColor: "#010A26",
        darkColor: "#011640",
        lightColor: "#B6D6F2",
        lightestColor: "#FFFFFF",
        stdColor: "#E83338"
    }

    return (
        <Spring
            to={{ opacity: 1, transform: `scale(1)` }}
            from={{ opacity: 1, transform: `scale(1)` }}
        >
            {prop => (
                <div style={{ ...prop, background: themes.lightColor, overflow: "hidden" }}
                >
                    
                </div>
            )}
        </Spring>
    )
}

export default React.memo(Showcase);