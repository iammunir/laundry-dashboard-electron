import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';


const useStyles = makeStyles((theme) => ({
    fieldBlock: {
        marginBottom: '16px',
    },
    wrapper: {
        textAlign: 'center'
    }
}));

export default function PanelTransaksi({ onFinishCalculate, selectedCust, selectedService }) {

    const [weight, setWeight] = useState(0);

    const handleWeightChange = (e) => {
        setWeight(+e.target.value);
    }

    const calculatePrice = () => {
        const total = selectedService.price * weight
        swal(`Total Rp ${total}`, `Terima Kasih, kak ${selectedCust.name}`, 'success')
            .then(() => {
                onFinishCalculate({
                    customer: selectedCust,
                    service: selectedService,
                    weight: weight,
                    total: total
                });
                setWeight(0);
            });
    }

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <TextField
                fullWidth
                className={classes.fieldBlock}
                label="Pelanggan"
                value={selectedCust.name ? selectedCust.name : ''}
                variant="outlined"
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                fullWidth
                className={classes.fieldBlock}
                label="Jasa"
                value={selectedService.name ? selectedService.name : ''}
                variant="outlined"
                InputProps={{
                    readOnly: true,
                }}
            />
            <TextField
                fullWidth
                className={classes.fieldBlock}
                label="Harga"
                value={selectedService.price ? selectedService.price : ''}
                variant="outlined"
                InputProps={{
                    readOnly: true,
                }}
            />
            <FormControl fullWidth className={classes.fieldBlock} variant="outlined">
                <FormHelperText id="outlined-weight-helper-text">Berat</FormHelperText>
                <OutlinedInput
                    id="outlined-weight-helper-text"
                    value={weight}
                    type="number"
                    onChange={handleWeightChange}
                    endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'Berat',
                    }}
                    labelWidth={0}
                />
            </FormControl>
            <Button
                onClick={calculatePrice} 
                disabled={selectedService.price <= 0 || weight <= 0} 
                variant="contained" 
                type="submit" 
                color="primary"
                >Hitung</Button>
        </div>
    )
}