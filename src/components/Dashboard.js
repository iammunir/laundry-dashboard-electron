import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';

import PanelJasa from './PanelJasa';
import PanelPelanggan from "./PanelPelanggan";
import PanelTransaksi from "./PanelTransaksi";


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box p={3}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    wrapper: {
        flexGrow: 1,
        backgroundColor: 'white',
        display: 'flex',
        height: 450,
        width: 650
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    left: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    right: {
        width: '100%'
    }
}));

export default function Dashboard() {

    const [value, setValue] = useState(0);

    const [service, setService] = useState('');
    const [selectedCustomer, setSelectedCustomer] = useState('');

    const selectService = (serviceSelected) => {
        setService(serviceSelected);
    };

    const selectCustomer = (selected) => {
        setSelectedCustomer(selected);
    };

    const finishCalculateHandler = (trx) => {
        console.log(trx);
        setService('');
        setSelectedCustomer('');
    };

    const history = useHistory();
    const logout = () => {
        history.push('/');
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const classes = useStyles();
    return (
        <div>
            <div className={classes.wrapper}>
                <div className={classes.left}>
                    <Tabs
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-label="vertical tabs"
                        className={classes.tabs}
                    >
                        <Tab label="Jasa" {...a11yProps(0)} />
                        <Tab label="Pelanggan" {...a11yProps(1)} />
                        <Tab label="Transaksi" {...a11yProps(2)} />
                    </Tabs>
                    <Button color="danger" onClick={logout}>Keluar</Button>
                </div>
                <div className={classes.right}>
                    <TabPanel value={value} index={0}>
                        <PanelJasa onSelected={selectService} selectedId={service && service.id} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <PanelPelanggan onSelectCust={selectCustomer} selectedCust={selectedCustomer && selectedCustomer.id} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <PanelTransaksi onFinishCalculate={finishCalculateHandler} selectedCust={selectedCustomer} selectedService={service} />
                    </TabPanel>
                </div>
            </div>
        </div>
    );
}
