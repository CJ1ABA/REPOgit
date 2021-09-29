import React from 'react';
import { firebaseApp } from '../../api/firebase'
import { AuthForm } from "./authForm";
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';

function toLogin(email, password) {
    return (
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
    )
}

export function Login() {
    return (
        <div >
            <div className={'App-container'}>
                <Link to='/Home' style={{ textDecoration: 'none' }}>
                    <MenuItem style={{ color: '#61dafb' }} >
                        Home
                    </MenuItem>
                </Link>
            </div>
            <hr />
            <AuthForm ttlProp={"Let's log-in"} lblProp={'E-mail'} btnProp={'LOG in'} onClick={toLogin} />
            <Link to='/Registration' style={{ textDecoration: 'none' }}>
                <MenuItem style={{ color: '#61dafb' }} >
                    У Вас нет аккаунта? Зарегистрируйтесь...
                </MenuItem>
            </Link>
        </div>
    )
}