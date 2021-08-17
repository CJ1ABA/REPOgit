import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, TextField, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';

function Message({ defaultText }) {
    const useStyles = makeStyles((theme) => {
        return {
            root: {
                flexGrow: 1,
                background: theme.light.color,
            },
        }
    })
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
    const [messageList, setmessageList] = useState([]);
    const [inputValueTxt, setinputValueTxt] = useState();
    const clickSend = function () {
        setmessageList((state) => [...state, { Author: 'Слава', Msg: inputValueTxt }])
        setinputValueTxt("");
    }
    const changeInpTxt = function (e) {
        setinputValueTxt(e.target.value)
    }
    useEffect(() => {
        let lastItem = messageList[messageList.length - 1]
        setTimeout(() => {
            if (lastItem?.Author === 'Слава') {
                setmessageList([...messageList, { Author: 'Bot', Msg: 'Your message has been received' }])
            }
        }, 1500)
    }, [messageList]);
    const params = useParams();
    const style = useStyles();
    return (
        <div className={style.root}>
            <header className="home-header">
                <h2 style={{ color: '#61dafb' }}>{params.chatId}</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App-container">
                    <TextField TextField id="filled-basic" label={defaultText} variant="filled" className='inp' value={inputValueTxt} onChange={changeInpTxt} onClick={() => setinputValueTxt("")} ></TextField>
                    <MyButton variant="contained" color="primary" href="#contained-buttons" onClick={clickSend} disabled={!inputValueTxt}>Send</MyButton>
                </div>
                {messageList.map((item, id) => (

                    <p key={id}>  {item.Author}: <div className="msgBox">{item.Msg}</div></p>
                ))}
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
    );
}
export default Message;