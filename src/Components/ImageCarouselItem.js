import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

import { animated, useSpring, } from 'react-spring'

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

const ImageCarouselItem = (props) => {
    return (
        <Modal
            open={props.open}
            onClose={() => props.handleClose()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={props.open}>
                <div>
                    <h2 id="spring-modal-title">Spring modal</h2>
                    <p id="spring-modal-description">react-spring animates me.</p>
                </div>
            </Fade>
        </Modal>
    )
}

export default React.memo(ImageCarouselItem);