import { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import '../CSS/App.css';

const MyButton = styled(Button)({
    background: 'linear-gradient(20deg, #61dafb 25%, #16424f 95%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: 20,
    // height: 48,
    padding: '0 30px',
});

export function AuthForm({ ttlProp, lblProp, btnProp, onClick }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    function changeEmail(e) {
        setEmail(e.target.value)
    }
    function changePassword(e) {
        setPassword(e.target.value)
    }
    return (
        <div className={'authy'}>
            <h2>{ttlProp}</h2>
            <TextField
                TextField id="filled-basic" label={lblProp} type='email' variant="filled" className='inp'
                value={email} onChange={(e) => changeEmail(e)} >
            </TextField>
            <TextField
                TextField id="filled-basic" label='Password' type='password' variant="filled" className='inp'
                value={password} onChange={(e) => changePassword(e)}>
            </TextField>
            <MyButton variant="contained" color="primary" href="#contained-buttons" onClick={() => onClick(email, password)}>{btnProp}</MyButton>
        </div>
    )
}