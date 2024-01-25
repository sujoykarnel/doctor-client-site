import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, boxShadow:0 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    style={{ width: 'auto', height: '100%', margin: '0 auto' }}
                    image={img}
                    title="green iguana"
                />
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

    );
};

export default Service;