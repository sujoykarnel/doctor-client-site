import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment.png'
import { Button, Container, Typography } from '@mui/material';



const AppointmentBanner = () => {
    return (
        <Container>
            <Box style={{ background: `url(${bg})`, marginTop: 100 }} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{ width: 400, marginTop: -100 }}
                            src={doctor} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left',
                    }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: 'background.paper', mb: 5 }}>
                                Appointment
                            </Typography>
                            <Typography variant='h4' sx={{ color: 'background.paper' }}>
                                Make An Appointment Today
                            </Typography>
                            <Typography sx={{ color: 'background.paper', my: 3 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur esse quis necessitatibus, velit dolorum natus adipisci ut incidunt iusto accusantium.
                            </Typography>
                            <Button variant='contained' >Appointment</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default AppointmentBanner;