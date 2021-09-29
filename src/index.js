import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  dark: {
    color: '#000',
  },
  light: {
    color: '#282c34',
  },
});

export function Main() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode >
  )
}
ReactDOM.render(<Main />, document.getElementById('root'));
reportWebVitals();
