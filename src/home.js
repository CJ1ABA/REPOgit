import SimpleMenu from './chat-room';
import { makeStyles } from '@material-ui/core';
import logo from './logo.svg';
import './App.css';
export default function Home() {
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
            <header className="home-header">
                < p className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Let's send a message! Powered by:
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
            </header>
        </div >
    )
}