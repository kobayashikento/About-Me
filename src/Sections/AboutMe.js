import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const AboutMe = () => {
    return (
        <Container maxWidth="md" style={{ display: "flex", height: "100vh" }}>
            <Paper style={{ width: "fit-content", position: "relative", opacity: "1", padding: "2rem", borderRadius: "10px", marginTop: "auto", marginBottom: "auto" }}>
                <Typography style={{ textAlign: "left" }} variant="h3">
                    About Me:
            </Typography>
                <Typography style={{ textAlign: "center", marginTop: "2rem" }} variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui eget urna facilisis consectetur ac at dolor. Pellentesque velit ante, aliquam eget volutpat quis, venenatis at velit. Integer consequat malesuada ipsum, porta ultricies risus dictum quis. Aliquam viverra lorem bibendum, feugiat nisl sed, tincidunt lacus. Vestibulum cursus tempor accumsan. Quisque fringilla massa vitae neque viverra rhoncus. Integer felis eros, facilisis porta aliquam id, suscipit a urna. Nam ultricies pharetra porttitor. Sed pretium velit mauris, ut laoreet diam fermentum nec. Praesent finibus, urna at varius imperdiet, ipsum dolor elementum metus, vel congue quam dolor imperdiet diam. Quisque tellus est, condimentum sit amet eros vel, maximus sagittis quam. Nam laoreet libero sit amet malesuada tempor. Quisque a lacus quam.
            </Typography>
                <Typography style={{ textAlign: "center", marginTop: "1rem" }} variant="body1">
                    Suspendisse lacinia dapibus mauris sit amet euismod. Phasellus mi ligula, consectetur eget vestibulum et, dignissim ut libero. Sed venenatis nulla at lorem vulputate auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer volutpat leo sed aliquam dignissim. Donec rhoncus ultricies lectus. Proin eu nunc nec mi venenatis aliquam id eu ante. In ac purus congue, bibendum purus aliquam, consectetur metus. Proin ac quam id nisi venenatis mattis sed nec nisl.
                    </Typography>
            </Paper>
        </Container>
    )
}

export default AboutMe;