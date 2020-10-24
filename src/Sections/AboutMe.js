import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const AboutMe = () => {
    return (
        <section style={{ height: "100vh", backgroundColor: "white" }} >
            <Container style={{ paddingTop: "6rem", backgroundColor: "white", height: "100vh" }} maxWidth="md">
                <Typography style={{ textAlign: "left" }} variant="h3">
                    About Me:
      </Typography>
                <Typography style={{ textAlign: "center", marginTop: "2rem" }} variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec dui eget urna facilisis consectetur ac at dolor. Pellentesque velit ante, aliquam eget volutpat quis, venenatis at velit. Integer consequat malesuada ipsum, porta ultricies risus dictum quis. Aliquam viverra lorem bibendum, feugiat nisl sed, tincidunt lacus. Vestibulum cursus tempor accumsan. Quisque fringilla massa vitae neque viverra rhoncus. Integer felis eros, facilisis porta aliquam id, suscipit a urna. Nam ultricies pharetra porttitor. Sed pretium velit mauris, ut laoreet diam fermentum nec. Praesent finibus, urna at varius imperdiet, ipsum dolor elementum metus, vel congue quam dolor imperdiet diam. Quisque tellus est, condimentum sit amet eros vel, maximus sagittis quam. Nam laoreet libero sit amet malesuada tempor. Quisque a lacus quam.
      </Typography>
                <Typography style={{ textAlign: "center", marginTop: "1rem" }} variant="body1">
                    Suspendisse lacinia dapibus mauris sit amet euismod. Phasellus mi ligula, consectetur eget vestibulum et, dignissim ut libero. Sed venenatis nulla at lorem vulputate auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer volutpat leo sed aliquam dignissim. Donec rhoncus ultricies lectus. Proin eu nunc nec mi venenatis aliquam id eu ante. In ac purus congue, bibendum purus aliquam, consectetur metus. Proin ac quam id nisi venenatis mattis sed nec nisl.
      </Typography>
                <Typography style={{ textAlign: "center", marginTop: "1rem" }} variant="body1">
                    Integer nec elementum tortor. Mauris condimentum libero quis risus rhoncus, nec scelerisque nisl finibus. Phasellus venenatis eros eget varius convallis. Phasellus tristique vitae elit eu blandit. Nam sollicitudin tempus elit. Aenean id egestas enim. Vestibulum egestas malesuada pharetra. Vestibulum nulla lorem, condimentum laoreet euismod vel, tristique sed mauris. Vestibulum erat quam, bibendum sit amet elit at, tincidunt bibendum dolor. Praesent suscipit enim mattis dolor elementum pellentesque. Suspendisse pulvinar, nulla et ultricies vulputate, ex nisi lobortis ex, at commodo sapien erat at tellus. Nam in tempus eros. Proin faucibus sed nisi id posuere. Praesent ornare est ac neque ultrices pretium.

      </Typography>
            </Container>
        </section>
    )
}

export default AboutMe;