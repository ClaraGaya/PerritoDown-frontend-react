import * as types from './types';

// Thunk Action creator 
export const addAsana = (asana) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        dispatch(addAsanaRequest());
        firestore.collection('asanas').add({
            ...asana,
        })
        .then( (res) => {  dispatch(addAsanaSuccess(res.data)); })
        .catch((err) => { dispatch(addAsanaError(err)); });
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

export const addAsanaRequest = () =>  ({
    type: types.ASANAS_CREATE_REQUEST
})

export const addAsanaSuccess = (asanas) => ({
    type: types.ASANAS_CREATE_SUCCESS,
    payload: asanas
})

export const addAsanaError = (err) => ({
    type: types.ASANAS_CREATE_ERROR,
    error: err
})
