import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Cavity Protection',
        time: '09:00 AM - 10:00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Pediatric Dental',
        time: '10:00 AM - 11:00 AM',
        space: 4
    },
    {
        id: 3,
        name: 'Woman Dental',
        time: '11:00 AM - 12:00 PM',
        space: 5
    },
    {
        id: 4,
        name: 'Maternity Dental',
        time: '12:00 PM - 01:00 PM',
        space: 1
    },
    {
        id: 5,
        name: 'Oral Surgery',
        time: '01:00 PM - 02:00 PM',
        space: 12
    },
    {
        id: 6,
        name: 'Dental Capping',
        time: '02:00 PM - 03:00 PM',
        space: 3
    }
]

const AvailableAppointment = ({ date }) => {
    const newDate = new Date(date);
    return (
        <Container>
            <Typography sx={{ fontWeight: 600, p: 3 }} variant='h5'>
                Available Appointment on {newDate.toDateString()}
            </Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        date={newDate}
                        booking={booking}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;