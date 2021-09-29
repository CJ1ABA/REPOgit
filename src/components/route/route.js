import { Route, Redirect } from 'react-router-dom';
export function PrivateRoute({ isAuth, ...rest }) {
    return isAuth ? <Route {...rest} /> : <Redirect to='/Home' />
}
export function PublicRoute({ isAuth, ...rest }) {
    return !isAuth ? <Route {...rest} /> : <Redirect to='/Chats' />
}