import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'

const Banner = () => {
    return (
        <Container >
            <Box style={{ background: `url(${bg})` }} sx={{
                flexGrow: 1,
                height: 450, display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                p:3
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={5} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left',
                    }}>
                        <Typography>
                            <Box>
                                <Typography variant='h4' sx={{ mb: 5 }}>
                                    Your New Smile <br /> Start Here
                                </Typography>
                                <Typography sx={{ my: 3 }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse quis necessitatibus, velit dolorum natus adipisci ut incidunt iusto accusantium.
                                </Typography>
                                <Button variant='contained' >Get Appointment</Button>
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <img style={{ width: '400px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Banner;