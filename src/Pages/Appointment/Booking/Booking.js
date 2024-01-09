import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom>
                    {name}
                </Typography>
                <Typography sx={{ fontWeight: 500 }} variant="h6" gutterBottom>
                    {time}
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                    {space} Appointment Available
                </Typography>
                <Button variant="contained">Booking Now</Button>
            </Paper>
        </Grid>
    );
};

export default Booking;