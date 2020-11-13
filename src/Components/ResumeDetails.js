import React from 'react'
import Fade from 'react-reveal'

import Container from '@material-ui/core/Container';
import { IconButton, Typography, Grid } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import ImageCarousel from '../Components/ImageCarousel.js';

const ResumeDetails = (props) => {
    // props send in the item 
    const resDetails = React.useRef(null);
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        props.handleHeight(resDetails.current.clientHeight);
        function handleClickOutside(event) {
            if (resDetails.current && !resDetails.current.contains(event.target)) {
                if (!open) {
                    console.log(open)
                    props.handleDetailsChange();
                }
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [resDetails]);

    const handleClick = () => {
        props.handleDetailsChange()
    }

    const handleOpen = () => {
        console.log("paaseed")
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Fade up >
            <Container ref={resDetails} maxWidth="md" style={{ paddingRight: "8px", display: "flex", flexDirection: "column", backgroundColor: "white", marginTop: "5rem", borderRadius: "5px", }}>
                {/* Header  */}
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    style={{ marginTop: "16px" }}
                >
                    <Grid item xs={3} style={{ marginTop: "32px" }} align="center">
                        <img src={props.activeCard.img} style={{ width: props.activeCard.imgWidth, height: props.activeCard.imgHeight }} />
                    </Grid>
                    <Grid item xs={8} style={{ marginTop: "16px" }}>
                        <Typography variant="h5" style={{ margin: "8px" }}>
                            {props.activeCard.title}
                        </Typography>
                        <Typography variant="h6" style={{ margin: "8px" }}>
                            {props.activeCard.titleDescription}
                        </Typography>
                        <Typography variant="body1" style={{ margin: "8px" }}>
                            {props.activeCard.date}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} align="center">
                        <IconButton size="small" style={{ marginLeft: "auto", height: "fit-content", marginTop: "8px" }} onClick={() => handleClick()}>
                            <CancelIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                {/* Body */}
                <div style={{ whiteSpace: "pre-wrap", textIndent: "2rem", margin: "2rem" }}>
                    <Typography variant="body1" style={{ margin: "8px" }} align="justify">
                        {props.activeCard.bodySummary.split("\n").map((i, key) => {
                            // Create link by detecting \r
                            if (/\r/.test(i)) {
                                let match1 = /^[^\r]+/.exec(i)
                                let match2 = /\r(.*)/.exec(i)
                                return (
                                    <div key={`${props.activeCard.title}link${key}`}>
                                        {match1}
                                        <a href={match2} style={{ textDecoration: "none" }}>{props.activeCard.urlDescription}</a>
                                    </div>
                                )
                            } else {
                                return <p key={`${props.activeCard.title}paragraph${key}`}>{i}</p>;
                            }
                        })}
                    </Typography>
                    {props.activeCard.additionalImage === true ?
                        <ImageCarousel
                            srcs={props.activeCard.additionalSrc}
                            open={open}
                            handleClose={() => handleClose()}
                            handleOpen={() => handleOpen()}
                        />
                        : null}
                </div>
            </Container>
        </Fade >
    )
}

export default ResumeDetails 