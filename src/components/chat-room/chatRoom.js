import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { firebaseApp } from '../../api';

export function SimpleMenu({ disable, session }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '16px' }}>
            <div>
                <Button disabled={disable} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ color: '#61dafb' }}>
                    Open Menu
                </Button>

                <Link to='/Login' style={{ textDecoration: 'none' }}>
                    <Button disabled={disable} aria-controls="simple-menu" aria-haspopup="true" style={{ color: '#61dafb' }}>
                        Login page
                    </Button>
                </Link>
                <Link to='/Registration' style={{ textDecoration: 'none' }}>
                    <Button disabled={disable} aria-controls="simple-menu" aria-haspopup="true" style={{ color: '#61dafb' }}>
                        Registration
                    </Button>
                </Link>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <Link to='/Home' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose} style={{ color: '#61dafb' }} >Home</MenuItem>
                    </Link>
                    <Link to='/Chats' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose} style={{ color: '#61dafb' }}>Chat-rooms </MenuItem>
                    </Link>
                    <Link to='/Gists' style={{ textDecoration: 'none' }}>
                        <MenuItem onClick={handleClose} style={{ color: '#61dafb' }}>GISTS </MenuItem>
                    </Link>
                </Menu>
            </div >
            {session?.email && (
                <p style={{ cursor: 'pointer', color: '#61dafb', fontSize: '18px' }} onClick={function () { firebaseApp.auth().signOut() }} > Выход({session.email})</p>)}
        </div >
    );
}
