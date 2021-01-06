import React from 'react'

import Experience from './Experience.js';

const colorScheme = {
    //EDF6FF
    darkestColor: "#010A26",
    darkColor: "#011640",
    lightColor: "#B6D6F2",
    lightestColor: "#FFFFFF",
    stdColor: "#E83338"
}

const Test = () => {
    return (
        <Experience
            mobile={false}
            theme={colorScheme}
            cardIndex={0}
            activePage={0}
            render={true}
        />
    )
}

export default React.memo(Test);