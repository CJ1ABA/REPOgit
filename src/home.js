import SimpleMenu from './chat-room';
import { ClickTheCheckBox, UCheckbox } from './store'
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
function Home({ visible, actionClick }) {
    const useStyles = makeStyles((theme) => {
        return {
            root: {
                flexGrow: 1,
                background: theme.light.color,
            },
        }
    })
    const style = useStyles();
    console.log(visible)
    return (
        <div className={style.root}>
            <div className="topMenu">
                <button onClick={actionClick}>Click</button>
                <SimpleMenu disable={visible} /> <UCheckbox props={actionClick} />
            </div>
            <hr />
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
function mapStateToProps(state) {
    return { visible: state.isVisible }
};
function mapDispatchToProps(dispatch) {
    return {
        actionClick: () => dispatch(ClickTheCheckBox())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);