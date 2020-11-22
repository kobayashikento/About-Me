import React from 'react'

import { Transition } from 'react-spring/renderprops'

import { useSpring, animated, useTransition, useChain } from 'react-spring'

import { Introduction, IntroAvatar } from '../Sections/Introduction.js';
import Menu from '../Components/HomeAnimation.js';

import '../Styles/resumeStyle.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans3 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans4 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`

const Home = () => {
    const [spring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 50, tension: 550, friction: 340 } }))
    const [show, setShow] = React.useState(true);

    const transitionIntroRef = React.useRef()
    const transitionAvatarRef = React.useRef()

    const introTrans = useTransition(show, null, {
        from: { position: 'absolute', opacity: 0, transform: 'translate3d(0,-100%,0)', width: "600px", height: "90%" },
        enter: { position: 'absolute', opacity: 1, transform: 'translate3d(0,6%,0)', width: "600px", height: "90%" },
        leave: { opacity: 0 },
        ref: transitionIntroRef,
    })

    const avatarTrans = useTransition(show, null, {
        from: { position: 'absolute', opacity: 0, transform: 'translate3d(40%,-100%,0)', width: "20%", height: "20%", },
        enter: { position: 'absolute', opacity: 1, transform: 'translate3d(40%,26%,0)', width: "20%", height: "20%", },
        leave: { opacity: 0 },
        ref: transitionAvatarRef,
    })

    useChain([transitionIntroRef, transitionAvatarRef], [1, 2] /*1000*/)

    const changeView = () => {
        setShow(false);
    }

    return (
        <Transition
            items={show}
            from={{ opacity: 0, transform: 'translate3d(0,-100%,0)', position: "absolute" }}
            enter={{ opacity: 1, transform: 'translate3d(0,0,0)', position: "absolute" }} >
            {show => (props =>
                <div className="homeContainer" style={props} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <animated.div key={`renderMenu`} style={{ transform: spring.xy.interpolate(trans1), width: "90%", height: "90%", position: "absolute" }} >
                        <Menu/>
                    </animated.div>
                    {introTrans.map(({ item, key, props }) => (
                        item && <animated.div key={key} style={props}>
                            <animated.div style={{ transform: spring.xy.interpolate(trans4), width: "600px", height: "90%", position: "absolute" }} >
                                <Introduction />
                            </animated.div>
                        </animated.div>
                    ))}
                    {avatarTrans.map(({ item, key, props }) => (
                        item && <animated.div key={key} style={props}>
                            <animated.div style={{ transform: spring.xy.interpolate(trans3), width: "20%", height: "20%", position: "absolute" }} >
                                <IntroAvatar />
                            </animated.div>
                        </animated.div>
                    ))}
                </div>
            )}
        </Transition>
    )
}

export default React.memo(Home);