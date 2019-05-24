import authReducer from './authReducer';
import routineReducer from './routineReducer';
import asanaReducer from './asanaReducer';
import { combineReducers } from 'redux';
// firestoreReducer is a pre-made reducer used to sync our firestore data with our state in the background
// This reducer knows how to connect to our firebase db cause we've passed our firestore config to the store
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    routines: routineReducer,
    asanas: asanaReducer,
    firestore: firestoreReducer, // this will contain our firestore data
    firebase: firebaseReducer 
});

export default rootReducer;