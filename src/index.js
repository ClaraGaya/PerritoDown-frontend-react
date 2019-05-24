import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../src/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fb.config.js';

const store = createStore(rootReducer, 
    // compose several store enchancers
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, {
            useFirestoreForProfile: true, //  tell firebase reducer to use firestore (our database) to sync to the profile obeject on the state we have 
            userProfile: 'users', // firebase reducer needs to know wich collection to use 
            attachAuthIsReady: true
        })
    )
);


// wait for auth data before rendering the app
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})






