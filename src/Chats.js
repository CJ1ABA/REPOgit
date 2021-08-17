import Message from './message';
import SimpleMenu from './chat-room';
import { Switch, Route, Link } from 'react-router-dom';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';

export default function Chats() {
    const pHolder = 'Text your msg here...';
    const useStyles = makeStyles((theme) => {
        return {
            root: {
                flexGrow: 1,
                background: theme.light.color,
            },
        }
    })
    const style = useStyles();
    return (
        <div className={style.root}>
            <SimpleMenu />
            <header className="App-header">
                <div className="chat-butt">
                    <ButtonGroup
                        orientation="vertical"
                        color="primary"
                        aria-label="vertical contained primary button group"
                        variant="contained"
                    >
                        <Link to='/Chat1' style={{ textDecoration: 'none' }}>
                            <Button>One</Button>
                        </Link>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button>Two</Button>
                        </Link> <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button>Three</Button>
                        </Link>
                    </ButtonGroup>
                </div>
                <Switch>
                    <Route path='/Chats'>
                        <div className='container'>
                            < p className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Let's send a message! Select a chat...
                            </p>
                            <img src={logo} className="App-logo" alt="logo" />
                            < a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn how to send message!
                            </a>
                        </div>
                    </Route>
                    <Route path='/Chat1'>
                        <Message defaultText={pHolder} />
                    </Route>
                </Switch>
            </header>
        </div >
    )
}