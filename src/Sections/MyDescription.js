import React from 'react';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const MyDescription = (props) => {

    return (
        props.mobile ? 
        <Container>

        </Container>
        :
        <Container maxWidth="lg"> 
            <Grid>

            </Grid>
        </Container>
    )
}

export default React.memo(MyDescription)