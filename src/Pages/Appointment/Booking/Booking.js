import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time, space } = booking;
    const [openBookingModal, setOpenBookingModal] = React.useState(false);
    const handleBookingOpen = () => setOpenBookingModal(true);
    const handleBookingClose = () => setOpenBookingModal(false);
    return (
        <>
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
                    <Button onClick={handleBookingOpen} variant="contained">Booking Now</Button>
                </Paper>
            </Grid>
            <BookingModal
                booking={booking}
                date={date}
                openBookingModal={openBookingModal}
                setBookingSuccess={setBookingSuccess}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Booking;