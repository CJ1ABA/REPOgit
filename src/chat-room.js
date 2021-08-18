import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickTheCheckBox from './store';

export default function SimpleMenu({ disable }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <Button disabled={disable} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ color: '#61dafb' }}>
                Open Menu
            </Button>
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
            </Menu>
        </div >
    );
}