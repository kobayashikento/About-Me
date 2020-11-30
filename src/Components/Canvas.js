import React from 'react'

import primes from '../Assets/prime.js';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const Canvas = props => {
    const canvasRef = React.useRef(null);
    let points = calcWaypoints(getVertices(props.size));

    React.useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0;
        let animationFrameId;
        context.lineCap = "round";
        context.lineWidth = 2;
        if (props.home) {
            context.canvas.width = window.innerWidth;
            context.canvas.height = window.innerHeight;
            context.strokeStyle = `${props.theme.secColor}40`;
        }
        const render = () => {
            frameCount++;
            if (props.home) {
                if (frameCount < points.length - 1) {
                    animate(context, frameCount)
                    animationFrameId = window.requestAnimationFrame(render)
                }
            }
        }
        render()
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [props.open])

    function isPrime(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    function getPrimes(amount) {
        let primes = []
        for (let i = 1; i < amount; i++) {
            if (isPrime(i)) {
                primes.push(i)
            }
        }
        return primes;
    }

    function getVertices(size) {
        const amount = props.amount;
        //[{ x: props.xAxis, y: props.yAxis, dir: props.home ? "-y" : "-y" }]
        let vertices = [{ x: 0, y: 0 }]
        const primes = getPrimes(size);
        // for (let i = 0; i < primes.length; i++) {
        //     for (let n = 0; n < primes.length; n++) {
        //         // calculate r and theta, where x = primes[i] : y = primes[n]
        //         let r = Math.sqrt((primes[i] ^ 2 + primes[n] ^ 2)) * 5;
        //         let theta = Math.atan(primes[n] / primes[i]);
        //         // get x and y cords in polar 
        //         let x = r * Math.cos(theta);
        //         let y = r * Math.sin(theta);
        //         vertices.push({ x: x, y: y })
        //     }
        // }
        for (let i = 1; i < size; i++) {
            vertices.push({ x: vertices[i - 1].x + 100, y: vertices[i - 1].y + 100 })
        }
        return vertices;
    }

    function calcWaypoints(vertices) {
        var waypoints = [];
        for (let i = 1; i < vertices.length; i++) {
            let pt0 = vertices[i - 1];
            let pt1 = vertices[i];
            let dx = pt1.x - pt0.x;
            let dy = pt1.y - pt0.y;
            for (let j = 0; j < 1; j++) {
                let x = pt0.x + dx * j / 1;
                let y = pt0.y + dy * j / 1;
                waypoints.push({ x: x, y: y });
            }
        }
        return (waypoints);
    }

    console.log(points)


    function animate(context, frameCount) {
        // draw a line segment from the last waypoint
        // to the current waypoint
        context.beginPath();
        context.moveTo(points[frameCount - 1].x, points[frameCount - 1].y);
        context.lineTo(points[frameCount].x, points[frameCount].y);
        context.stroke();
    }

    return (
        <div>
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%", margin: "0px", }} />
        </div>
    )
}

export default React.memo(Canvas)