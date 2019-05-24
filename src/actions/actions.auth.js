export const signIn = (credentials) => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        })
        .catch((err) => { dispatch({type: 'LOGIN_ERROR', err}) });
    }
}

export const signOut = () => {
    return(dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut()
        .then(() => { dispatch({type: 'LOGOUT_SUCCESS'}) })
        .catch((err) => { dispatch({type: 'LOGOUT_ERROR', err}) });
    }
}

export const signUp = (creds) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(creds.email, creds.password )
        .then((res) => { 
            // create record in our firestore of the newly created user
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: creds.firstName,
                lastName:creds.lastName,
                initials:creds.firstName[0] + creds.lastName[0],
            })
        })
        .then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'}) 
        })
        .catch((err) => { dispatch({type: 'SIGNUP_ERROR', err}) });
    }
}