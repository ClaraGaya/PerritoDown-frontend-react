import * as types from './types';



// Thunk Action creator 
export const addRoutine = (routine) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        dispatch(addRoutineRequest());
        firestore.collection('routines').add({
            ...routine,
            author: 'Clara',
            authorId: 1234,
            createdAt: new Date()

        })
        .then( (res) => { console.log(res); dispatch(addRoutineSuccess(res.data)); })
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
