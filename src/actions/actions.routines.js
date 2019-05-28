import * as types from './types';



// Thunk Action creator 
export const addRoutine = (routine) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const uid = getState().firebase.auth.uid;
        dispatch(addRoutineRequest());
        firestore.collection('routines').add({
            ...routine,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: uid,
            timestamp: new Date()

        })
        .then( (res) => {  dispatch(addRoutineSuccess(res.data)); })
        .catch((err) => { dispatch(addRoutineError(err)); });
    }
}

// Actions
export const addRoutineRequest = () =>  ({
    type: types.ROUTINES_CREATE_REQUEST
})

export const addRoutineSuccess = (list) => ({
    type: types.ROUTINES_CREATE_SUCCESS,
    payload: list
})

export const addRoutineError = (err) => ({
    type: types.ROUTINES_CREATE_ERROR,
    error: err
})
