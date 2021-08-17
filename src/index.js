import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';
import './index.css';
import Message from './message';
import Home from './home';
import Chats from './Chats'
import reportWebVitals from './reportWebVitals';


const theme = createTheme({
  dark: {
    color: '#000',
  },
  light: {
    color: '#282c34',
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/Home'>
            <Home />
          </Route>
          <Route exact path='/:chatId'>
            {/* <Message defaultText={pHolder} /> */}
            <Chats />
          </Route>
          <Route path='*'>
            <h1>404 page</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode >,
  document.getElementById('root')
);

reportWebVitals();
