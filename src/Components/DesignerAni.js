import React from 'react';

const DesignerAni = (props) => {
    //Initialize Canvas
    const canvasRef = React.useRef(null);
    const dashLen = 220;
    let dashOffset = dashLen
    const speed = 20;
    const txt = "Designer";
    let x = 70;
    let i = 0;

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')
        context.canvas.width = 360;
        context.canvas.height = 72;
        context.font = "3rem Comfortaa, sans-serif";
        context.lineWidth = 3;
        context.lineJoin = "round";
        context.globalAlpha = 1;
        context.strokeStyle = context.fillStyle = props.theme.priTxtColor;

        const loop = () => {
            context.clearRect(x, 0, 55, 150);
            context.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
            dashOffset -= speed;                                         // reduce dash length
            context.strokeText(txt[i], x, 55);                               // stroke letter

            if (dashOffset > 0) requestAnimationFrame(loop);             // animate
            else {
                context.fillText(txt[i], x, 55);                               // fill final letter
                dashOffset = dashLen;                                      // prep next char
                x += context.measureText(txt[i++]).width + context.lineWidth * Math.random();
                if (i < txt.length) requestAnimationFrame(loop);
            }
        }

        setTimeout(() => {
            loop();
        }, 1000)
    }, []);

    return (
        <canvas style={{
            position: "fixed", top: "0", left: "0", right: "0",
        }} ref={canvasRef} style={{ width: "100%", height: "100%", margin: "0", }} />
    )
}

export default React.memo(DesignerAni)