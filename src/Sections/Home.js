import React from 'react'

import Fade from 'react-reveal'

import { useSpring, animated } from 'react-spring'

import { Introduction, IntroAvatar } from '../Sections/Introduction.js';
import Menu from '../Components/HomeAnimation.js';

import '../Styles/resumeStyle.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans3 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans4 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`

const Home = () => {
    const [spring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 50, tension: 550, friction: 340 } }))

    return (
        <div class="homeContainer" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <animated.div style={{ transform: spring.xy.interpolate(trans1), width: "90%", height: "90%", position: "absolute" }} >
                <Introduction />
            </animated.div>
            <animated.div style={{ transform: spring.xy.interpolate(trans3), width: "20%", height: "90%", position: "absolute" }} >
                <IntroAvatar />
            </animated.div>
            <animated.div style={{ transform: spring.xy.interpolate(trans4), width: "90%", height: "90%", position: "absolute" }} >
                <Menu />
            </animated.div>
        </div>
    )
}

export default React.memo(Home);