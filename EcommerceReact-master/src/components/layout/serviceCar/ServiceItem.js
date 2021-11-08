import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, CardActionArea, CardMedia, CardHeader, Grid, IconButton, Rating, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';
import { green, grey } from '@mui/material/colors';
import _ from 'lodash';



const CarItem = ({ data }) => {
    

    const { id, type, cost } = data;

    return (
        <Card
        className='card'
            sx={{
                backgroundColor: '#fffff',
            }}>
            <CardMedia
                sx={{
                    width: '50%',
                    height: 'auto',
                    marginLeft: '20%',
                    marginTop:'10%'
                }}
                component="img"
                image={require('../../../img/'+_.lowerFirst(type.replace(/ /g, ""))+'.jpg').default}
                alt="200"
                width="200"
                
            />
            <CardContent sx={{ height: '100%' }}>
                <Typography gutterBottom variant="h6" component="div">
                    {type}
                </Typography>
                <Typography variant="subtitle2" gutterBottom component="div" color="text.secondary">
                    Referencia<br></br>
                    <Rating name="read-only" value={2} readOnly />
                </Typography>
                <Typography variant="h6" display="block" gutterBottom color={green[900]} justifyContent="center">
                        {`$ ${cost}`}
                    </Typography>
            </CardContent>
        </Card >
    );
}

CarItem.propTypes = {
    data: PropTypes.object.isRequired,
}

export default CarItem;