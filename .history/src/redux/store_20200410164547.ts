import {combineReducers, createStore} from 'redux';
import userEventsReducer from './user-events';

const rootReducer = combineReducers({
    userEvents: userEventsReducer
})

const store = createStore(rootReducer);

export default store;