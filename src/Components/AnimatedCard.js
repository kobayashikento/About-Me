import React from 'react'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Transition } from 'react-spring/renderprops'

import { animated, useSpring, config, useChain } from 'react-spring';

const AnimatedCard = (props) => {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 10, (x - window.innerWidth / 2) / 10, 1.1]
    const trans = (x, y, s) => `perspective(400px) scale(${s})`
    const [para, setPara] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension: 200, friction: 40 } }))

    const [open, setOpen] = React.useState(false);

    const springRef = React.useRef()
    const { width, height, opacity, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { width: "100%", height: "100%", zIndex: "auto" },
        to: { width: open ? '70vw' : '100%', height: open ? '70vh' : "100%" }
    })

    useChain(open ? [springRef] : [springRef], [0, open ? 0.1 : 0.6])

    return (
        <animated.div
            class="card"
            onMouseEnter={({ clientX: x, clientY: y }) => setPara({ xys: calc(x, y) })}
            onMouseLeave={() => setPara({ xys: [0, 0, 1] })}
            style={{ transform: open ? "" : para.xys.interpolate(trans), width: open ? width : "" }}
        >
            <Card style={{ opacity: "0.8", border: "1px solid grey", width: "100%", height: "100%" }} variant="outlined">
                <CardActionArea style={{ width: "100%", height: "100%" }} onClick={() => setOpen(!open)}>
                    <Typography>
                        {props.item.title}
                    </Typography>
                    <Typography>
                        {props.item.subtitle}
                    </Typography>
                </CardActionArea>
            </Card>
        </animated.div>
    )
}

export default React.memo(AnimatedCard)