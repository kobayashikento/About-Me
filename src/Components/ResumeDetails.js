import React from 'react'
import Fade from 'react-reveal'

import Container from '@material-ui/core/Container';
import { IconButton, Typography, Grid } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';

const ResumeDetails = (props) => {
    // props send in the item 
    const resDetails = React.useRef(null);

    React.useEffect(() => {
        props.handleHeight(resDetails.current.clientHeight);
        function handleClickOutside(event) {
            if (resDetails.current && !resDetails.current.contains(event.target)) {
                props.handleDetailsChange()
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

    return (
        <Fade up >
            <Container ref={resDetails} maxWidth="md" style={{ paddingRight: "8px", display: "flex", flexDirection: "column", backgroundColor: "white", marginTop: "5rem", borderRadius: "5px",}}>
                {/* Header  */}
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="flex-start"
                    style={{ marginTop: "16px" }}
                >
                    <Grid item xs={3} style={{ marginTop: "16px" }} align="center">
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
                        <IconButton style={{ marginLeft: "auto", height: "fit-content", marginTop: "8px" }} onClick={() => handleClick()}>
                            <CancelIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                {/* Body */}
                <div style={{ whiteSpace: "pre-wrap", textIndent: "2rem", margin: "2rem" }}>
                    <Typography variant="body1" style={{ margin: "8px" }} align="justify">
                        {props.activeCard.bodySummary.split("\n").map((i, key) => {
                            return <p key={key}>{i}</p>;
                        })}
                    </Typography>
                </div>
            </Container>
        </Fade>
    )
}

export default ResumeDetails 