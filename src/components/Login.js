import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';


const useStyles = makeStyles(() => ({
    wrapper: {
        width: '50%',
        margin: 'auto'
    },
    buttonWrapper: {
        marginTop: '16px'
    }
}));

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const history = useHistory(); 

    const changeUsername = (e) => {
        setUsername(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };

    const loginHandler = async (e) => {
        
        e.preventDefault();

        const auth = await window.preload.login({username,password});
        
        if (!auth) {
            swal ("Oops", "username atau password salah!", "error");
            return
        }

        history.push('/dashboard');
    }

    const classes = useStyles();
    return (
        <form className={classes.wrapper} noValidate autoComplete="off" onSubmit={loginHandler}>
            <TextField label="username" fullWidth margin="normal" type="text" onChange={changeUsername} />
            <TextField label="password" fullWidth margin="normal" type="password" onChange={changePassword} />
            <Grid className={classes.buttonWrapper} container direction="row" justifyContent="space-evenly" alignItems="center">
                <Button variant="contained" color="secondary">Cancel</Button>
                <Button variant="contained" type="submit" color="primary">Login</Button>
            </Grid>
        </form>
    )
}
