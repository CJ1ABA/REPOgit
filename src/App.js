import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Gists } from './components/gists/gists';
import Chats from './components/chat-list/Chats';
import Home from './components/home/home';
import { Login, Registr } from './components';
import { getSessionDB } from './store/Authy/thunk';
import { PrivateRoute, PublicRoute } from './components/route/route';
import './index.css';

function App({ sessionRedux, session }) {
    // const [session, setSession] = useState(null);
    const dispatch = useDispatch();
    useEffect(function () {
        dispatch(getSessionDB())
        // firebaseApp.auth().onAuthStateChanged(function (user) {
        //     if (user) {
        //         setSession(user)
        //     } else {
        //         setSession(null)
        //     }
        // })
    }, [dispatch]);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/Home'>
                    <Home />
                </Route>
                <PrivateRoute isAuth={sessionRedux} exact path='/Chats'>
                    <Chats session={sessionRedux} />
                </PrivateRoute>
                <PrivateRoute isAuth={sessionRedux} exact path='/Chats/:roomId'>
                    <Chats session={sessionRedux} />
                </PrivateRoute>
                <PrivateRoute isAuth={sessionRedux} path='/Gists'>
                    <Gists />
                </PrivateRoute>
                <PublicRoute isAuth={sessionRedux} path='/Login'>
                    <Login />
                </PublicRoute>
                <PublicRoute isAuth={sessionRedux} path='/Registration'>
                    <Registr />
                </PublicRoute>
                <PublicRoute isAuth={sessionRedux} path='*'>
                    <h1>404 page</h1>
                </PublicRoute>
            </Switch>
        </BrowserRouter>
    )
}
function mapStateToProps(state) {
    return {
        sessionRedux: state.session.session,
        session: state.session,
    }
};
function mapDispatchToProps(dispatch) {
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
