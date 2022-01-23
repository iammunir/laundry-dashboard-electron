import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    root: {
        minWidth: 200,
    },
    selected: {
        backgroundColor: 'lightgray'
    },
    title: {
        fontSize: 14,
    },
    cardAction: {
        textAlign: 'initial',
        margin: '8px',
    }
});

export default function PanelJasa({ onSelected, selectedId }) {
    
    const [services, setServices] = useState([
        {
            id: 'cl1',
            name: 'Cuci Lipat',
            price: 7000
        },
        {
            id: 'cs1',
            name: 'Cuci Setrika',
            price: 9000
        },
        {
            id: 'clk1',
            name: 'Cuci Lipat Kilat',
            price: 12000
        },
        {
            id: 'csk1',
            name: 'Cuci Setrika Kilat',
            price: 14000
        },
    ]);

    const selectHandler = (service) => {
        onSelected(service);
    }

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            { services.map(service => (
                <ButtonBase
                    className={classes.cardAction}
                    onClick={() => selectHandler(service)}
                >
                    <Card className={classes.root}>
                            <CardContent className={selectedId === service.id ? classes.selected : ''}>
                                <Typography variant="h6" component="h4">
                                    {service.name}
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    {service.price}
                                </Typography>
                            </CardContent>
                    </Card>
                </ButtonBase>
            )) }
        </div>
    );
}
