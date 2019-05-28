import * as types from './types';


// Thunk Action creator 
export const addAsanas = () => {
    
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
