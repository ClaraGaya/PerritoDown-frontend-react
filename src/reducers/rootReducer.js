import authReducer from './authReducer';
import routineReducer from './routineReducer';
import asanaReducer from './asanaReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    routine: routineReducer,
    asana: asanaReducer
});

export default rootReducer;