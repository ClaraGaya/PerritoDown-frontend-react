import * as types from './types';
import axios from 'axios';

import {ROOT} from '../config';

// Thunk Action creator 
export const getAsanas = () => {
    return (dispatch) => {
        dispatch(getAsanasRequest());
        axios.get(`${ROOT}/asanas`)
        .then((res) => {  dispatch(getAsanasSuccess(res.data.asanas)); })
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
