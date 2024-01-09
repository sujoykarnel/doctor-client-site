import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';

import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        id: 1,
        name: 'Fluoride Treatment',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cum tenetur, aliquam voluptates quaerat itaque unde.Nihil illo deserunt totam fugiat!',
        img: fluoride
    },
    {
        id: 2,
        name: 'Cavity Filling',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cum tenetur, aliquam voluptates quaerat itaque unde.Nihil illo deserunt totam fugiat!',
        img: cavity
    },
    {
        id: 3,
        name: 'Teeth Whitening',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.Cum tenetur, aliquam voluptates quaerat itaque unde.Nihil illo deserunt totam fugiat!',
        img: whitening
    }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 'bold', m: 2 }} >OUR SERVICES</Typography>
                <Typography sx={{ fontWeight: 'bold', m: 2, color: 'text.secondary' }} >Services We Provide</Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;