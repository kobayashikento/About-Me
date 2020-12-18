import React from 'react';

import Container from '@material-ui/core/Container';

import ResumeParallax from '../Components/ResumeParallax.js';
import AnimateTimeline from '../Components/AnimatedTimeline.js';
import AnimatedGrid from '../Components/AnimatedGrid.js';

import Fade from 'react-reveal';
import { Grid } from '@material-ui/core';

const Experience = (props) => {

    return (
        <div style={{ backgroundColor: props.theme.darkColor, minHeight: "100vh", paddingBottom: "7.5vmax", paddingTop: "6.6vmax" }}>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={5}
            >
                <Grid item sm={1}>
                    <ResumeParallax
                        mobile={props.mobile}
                        cardIndex={props.cardIndex}
                        theme={props.theme}
                        render={props.third}
                    />
                </Grid>
                <Grid item sm={1} style={{ display: "flex", justifyContent: "center" }}>
                    <Fade top when={props.third}>
                        <AnimateTimeline
                            mobile={props.mobile}
                            theme={props.theme}
                            activePage={props.activePage}
                            handleTimeClick={(index) => props.handleTimeClick(index)}
                        />
                    </Fade>
                </Grid>
                <Grid item sm={10} style={{ display: "flex", justifyContent: "center", overflow: "hidden" }}>
                    <Fade bottom when={props.third}>
                        <AnimatedGrid
                            clientWidth={props.clientWidth}
                            mobile={props.mobile}
                            theme={props.theme}
                            cardIndex={props.cardIndex}
                            activePage={props.activePage}
                            handleArrowClick={(dir) => props.handleArrowClick(dir)}
                            handleActiveCard={(item) => props.handleActiveCard(item)}
                            handleCardClick={(index) => props.handleCardClick(index)}
                        />
                    </Fade>
                </Grid>
            </Grid>
        </div>
    )
}
{/* <div>
                            <Modal
                                open={showDetails}
                                onClose={() => handleDetailsChange()}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                                style={{ overflow: "auto" }}
                            >
                                <Transition
                                    items={showModal}
                                    from={{ opacity: 0, transform: "translate(0, 100%)" }}
                                    enter={{ opacity: 1, transform: "translate(0, 0%)" }}
                                    leave={{ opacity: 0, transform: "translate(0, 80%)" }}>
                                    {showModal => showModal && (props =>
                                        <div style={props}>
                                            <ResumeDetails
                                                mobile={mobile}
                                                handleDetailsChange={() => handleDetailsChange()}
                                                activeCard={activeCard}
                                            />
                                        </div>)}
                                </Transition>

                            </Modal>
                        </div> */}
export default React.memo(Experience)