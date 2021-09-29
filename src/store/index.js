import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { sessionReducer } from './Authy/reducer';
import { gistsReducer } from './gists'
import { profileReducer } from './uInput';
import { messageReducer } from './message';
import { conversationReducer } from './conversations';
import { logger, botSendMessage } from './middlewares';
export * from './uInput'
export const store = createStore(
    combineReducers({
        profile: profileReducer,
        conversations: conversationReducer,
        messages: messageReducer,
        gists: gistsReducer,
        session: sessionReducer,
    }),

    applyMiddleware(thunk, logger, botSendMessage)
);