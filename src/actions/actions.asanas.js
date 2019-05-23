import * as types from './types';


// Thunk Action creator 
export const getAsanas = () => {
    return (dispatch, getState, { getFirestore }) => {
        dispatch(getAsanasRequest());
        const firestore = getFirestore();
        firestore.collection('asanas').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
              console.log(doc.id, '=>', doc.data());
            });
        })
        // .then((doc) => {  console.log(doc); dispatch(getAsanasSuccess(doc.data)); })
        .catch((err) => { dispatch(getAsanasError(err)); });
    }
}

// Actions
export const getAsanasRequest = () =>  ({
    type: types.ASANAS_GET_LIST_REQUEST
})

export const getAsanasSuccess = (asanas) => ({
    type: types.ASANAS_GET_LIST_SUCCESS,
    payload: asanas
})

export const getAsanasError = (err) => ({
    type: types.ASANAS_GET_LIST_ERROR,
    error: err
})
