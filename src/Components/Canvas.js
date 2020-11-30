import React from 'react'

import primes from '../Assets/prime.js';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const Canvas = props => {
    const canvasRef = React.useRef(null);
    let points = calcWaypoints(getVertices());
    const [selectedNumber, setSelectedNumber] = React.useState(1);

    React.useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let frameCount = 0;
        let animationFrameId;
        context.lineCap = "round";
        context.lineWidth = 2;
        if (props.home) {
            context.canvas.width = window.innerWidth;
            context.canvas.height = window.innerHeight * 2;
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
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    function getVertices() {
        const amount = props.amount;
        let vertices = [{ x: props.xAxis, y: props.yAxis, dir: props.home ? "-y" : "-y" }]
        for (let i = props.startIndex; i < props.size; i++) {
            if (isPrime(i)) {
                switch (vertices.slice(-1)[0].dir) {
                    case "x":
                        vertices.push({ x: vertices.slice(-1)[0].x, y: vertices.slice(-1)[0].y - amount, dir: "-y" });
                        break;
                    case "y":
                        vertices.push({ x: vertices.slice(-1)[0].x + amount, y: vertices.slice(-1)[0].y, dir: "x" });
                        break;
                    case "-x":
                        vertices.push({ x: vertices.slice(-1)[0].x, y: vertices.slice(-1)[0].y + amount, dir: "y" });
                        break;
                    case "-y":
                        vertices.push({ x: vertices.slice(-1)[0].x - amount, y: vertices.slice(-1)[0].y, dir: "-x" });
                        break;
                    default:
                }
            } else {
                switch (vertices.slice(-1)[0].dir) {
                    case "x":
                        vertices.push({ x: vertices.slice(-1)[0].x + amount, y: vertices.slice(-1)[0].y, dir: "x" });
                        break;
                    case "y":
                        vertices.push({ x: vertices.slice(-1)[0].x, y: vertices.slice(-1)[0].y + amount, dir: "y" });
                        break;
                    case "-x":
                        vertices.push({ x: vertices.slice(-1)[0].x - amount, y: vertices.slice(-1)[0].y, dir: "-x" });
                        break;
                    case "-y":
                        vertices.push({ x: vertices.slice(-1)[0].x, y: vertices.slice(-1)[0].y - amount, dir: "-y" });
                        break;
                    default:
                }
            }
        }
        return vertices;
    }

    function calcWaypoints(vertices) {
        var waypoints = [];
        if (props.home) {
            // for (let i = 1; i < vertices.length; i++) {
            //     let pt0 = vertices[i - 1];
            //     let pt1 = vertices[i];
            //     let dx = pt1.x - pt0.x;
            //     let dy = pt1.y - pt0.y;
            //     let x = pt0.x + dx;
            //     let y = pt0.y + dy;
            //     waypoints.push({
            //         x: x,
            //         y: y
            //     });
            // }
            for (let i = 2; i < vertices.length; i++) {
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
        } else {
            for (let i = 2; i < vertices.length; i++) {
                let pt0 = vertices[i - 1];
                let pt1 = vertices[i];
                let dx = pt1.x - pt0.x;
                let dy = pt1.y - pt0.y;
                for (let j = 0; j < 50; j++) {
                    let x = pt0.x + dx * j / 50;
                    let y = pt0.y + dy * j / 50;
                    waypoints.push({ x: x, y: y });
                }
            }
        }
        return (waypoints);
    }

    function animate(context, frameCount) {
        // draw a line segment from the last waypoint
        // to the current waypoint
        context.beginPath();
        context.moveTo(points[frameCount - 1].x, points[frameCount - 1].y);
        context.lineTo(points[frameCount].x, points[frameCount].y);
        context.stroke();
        // increment "t" to get the next waypoint
    }

    return (
        <div>
            <canvas ref={canvasRef} style={{ width: "100%", height: "100%", margin: "0", }} />
        </div>
    )
}

export default React.memo(Canvas)