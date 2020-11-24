import React from 'react'

import { Transition } from 'react-spring/renderprops'

import { useSpring, animated, useTransition, useChain } from 'react-spring'

import { Introduction, IntroAvatar } from '../Sections/Introduction.js';
import Menu from '../Components/HomeAnimation.js';

import '../Styles/resumeStyle.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans3 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
const trans4 = (x, y) => `translate3d(${x / 30}px,${y / 30}px,0)`

const Home = (props) => {
    const [spring, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 50, tension: 550, friction: 340 } }))
    const [show, setShow] = React.useState(true);
    const [showAvatar, setShowAvatar] = React.useState(true);
    const [showContainer, setShowContainer] = React.useState(true);

    const transitionIntroRef = React.useRef()
    const transitionAvatarRef = React.useRef()
    const transitionIconRef = React.useRef()
    const transitionContainerRef = React.useRef()

    const introTrans = useTransition(show, null, {
        from: { position: 'absolute', opacity: 0, transform: 'translate3d(0,-100%,0)', width: "600px", height: "80%" },
        enter: { position: 'absolute', opacity: 1, transform: 'translate3d(0,20%,0)', width: "600px", height: "80%" },
        leave: { position: 'absolute', opacity: 0, transform: 'translate3d(0,0,0)', width: "600px", height: "80%" },
        ref: transitionIntroRef,
    })

    const avatarTrans = useTransition(showAvatar, null, {
        from: { position: 'absolute', opacity: 0, transform: `scale(1)`, top: "0%", right: "43%", width: "94px", height: "62px", paddingTop: "1rem", paddingRight: "2rem", },
        enter: { position: 'absolute', opacity: 1, transform: `scale(3)`, top: "25%", right: "43%", width: "94px", height: "62px", paddingTop: "1rem", paddingRight: "2rem", },
        leave: { position: 'absolute', opacity: 1, transform: `scale(1)`, top: "0%", right: "0%", width: "94px", height: "62px", paddingTop: "1rem", paddingRight: "2rem", },
        ref: transitionAvatarRef,
    })

    const iconTrans = useTransition(show, null, {
        from: { position: 'absolute', opacity: 0, transform: 'translate3d(0%,-100%,0)', width: "600px", height: "80%" },
        enter: { position: 'absolute', opacity: 1, transform: 'translate3d(0%,20%,0)', width: "600px", height: "80%" },
        leave: { position: 'absolute', opacity: 0, transform: 'translate3d(0%,20%,0)', width: "600px", height: "80%" },
        ref: transitionIconRef,
    })

    const conatinerTrans = useTransition(showContainer, null, {
        from: { position: 'absolute', opacity: 0, transform: 'translate3d(0%,-100%,0)', width: "100vw", height: "100vh", background: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", zIndex: "-1" },
        enter: { position: 'absolute', opacity: 1, transform: 'translate3d(0%,0%,0)', width: "100vw", height: "100vh", background: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", zIndex: "-1" },
        leave: { position: 'absolute', opacity: 0, transform: 'translate3d(0%,-100%,0)', width: "100vw", height: "100vh", background: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)", zIndex: "-1" },
        ref: transitionContainerRef,
    })

    useChain([transitionContainerRef, transitionIntroRef, transitionIconRef, transitionAvatarRef], [0, 0.5, 0.8, 1.2])

    const changeView = () => {
        setShow(false);
        setTimeout(() => {
            setShowAvatar(false)
        }, 700)
        setTimeout(() => {
            setShowContainer(false)
        }, 900)
    }

    return (
        <div className="homeContainer" style={spring} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div style={{ display: "flex", width: "100vw", height: "100vh", justifyContent: "center" }}>
                {iconTrans.map(({ item, key, props }) => (
                    item && <animated.div key={key} style={props}>
                        <animated.div key={`renderMenu`} style={{ transform: spring.xy.interpolate(trans1), width: "90%", height: "90%", position: "absolute" }} >
                            <Menu
                                handleClick={() => changeView()}
                            />
                        </animated.div>
                    </animated.div>
                ))}
                {introTrans.map(({ item, key, props }) => (
                    item && <animated.div key={key} style={props}>
                        <animated.div style={{ transform: spring.xy.interpolate(trans4), width: "600px", height: "90%", position: "absolute" }} >
                            <Introduction />
                        </animated.div>
                    </animated.div>
                ))}
                {avatarTrans.map(({ item, key, props }) => (
                    item && <animated.div key={key} style={props}>
                        <animated.div style={{ transform: spring.xy.interpolate(trans3), width: "46px", height: "46px" }} >
                            <IntroAvatar />
                        </animated.div>
                    </animated.div>
                ))}
            </div>
            {conatinerTrans.map(({ item, key, props }) => (
                item && <animated.div key={key} style={props} />
            ))}
        </div>
    )
}

export default React.memo(Home);