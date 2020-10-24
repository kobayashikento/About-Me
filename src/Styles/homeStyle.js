const homeStyle = theme => ({
    background: {
        backgroundColor: "rgb(7 22 39 / 94%)"
    },
    bounce: {
        animation: `$bounce 2000ms infinite`,
    },
    "@keyframes bounce": {
        "0%": { transform: "scale(1,1) translateY(0)" },
        "10%": { transform: "scale(1.1,.9)   translateY(0)" },
        "30%": { transform: "scale(.9,1.1)   translateY(-10px)" },
        "50%": { transform: "scale(1.05,.95) translateY(0)" },
        "57%": { transform: "scale(1,1)      translateY(-2px)" },
        "64%": { transform: "scale(1,1)      translateY(0)" },
        "100%": { transform: "scale(1,1)      translateY(0)" },
    }
})

export default homeStyle;