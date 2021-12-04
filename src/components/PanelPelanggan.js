import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '50%',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

export default function PanelPelanggan({ onSelectCust, selectedCust }) {

    const [customers, setCustomers] = useState([
        {
            id: 'cust01',
            name: 'Putu'
        },
        {
            id: 'cust02',
            name: 'Asep'
        },
        {
            id: 'cust03',
            name: 'Joko'
        },
        {
            id: 'cust04',
            name: 'Lukas'
        }
    ]);

    const selectCustHandler = (e) => {
        const selectedCust = customers.find(cust => cust.id === e.target.value);
        onSelectCust(selectedCust);
    }

    const classes = useStyles();
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="customer-select-label">Pelanggan</InputLabel>
            <Select
                labelId="customer-select-label"
                id="customer-select"
                label="Pelanggan"
                value={selectedCust}
                onChange={selectCustHandler}
            >
                {customers.map(cust => (<MenuItem key={cust.id} value={cust.id}>{cust.name}</MenuItem>) )}
            </Select>
        </FormControl>
    )
}