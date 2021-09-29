import React from 'react';
import { firebaseApp } from '../../api';
import { AuthForm } from "./authForm";
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

function toRegistration(email, password) {
    return (
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
    )
}

export function Registr() {
    return (
        <div>
            <div className={'App-container'}>
                <Link to='/Home' style={{ textDecoration: 'none' }}>
                    <MenuItem style={{ color: '#61dafb' }} >
                        Home
                    </MenuItem>
                </Link>
            </div>
            <hr />
            <AuthForm ttlProp={"Let's sign-up"} lblProp={'E-mail'} btnProp={'REGISTRATION'} onClick={toRegistration} />
            <Link to='/Login' style={{ textDecoration: 'none' }}>
                <MenuItem style={{ color: '#61dafb' }} >
                    У Вас есть аккаунт? Войдите в него...
                </MenuItem>
            </Link>
        </div>
    )
}