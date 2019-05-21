import * as types from './types';
import axios from 'axios';

import {ROOT} from '../config';

// Thunk Action creator 
export const getRoutines = () => {
    return (dispatch) => {
        dispatch(getRoutinesRequest());
        axios.get(`${ROOT}/routines`)
        .then((res) => { console.log(res); dispatch(getRoutinesSuccess(res.data.routines)); })
        .catch((err) => { dispatch(getRoutinesError(err)); });
    }
}

// Actions
export const getRoutinesRequest = () =>  ({
    type: types.ROUTINES_GET_LIST_REQUEST
})

export const getRoutinesSuccess = (list) => ({
    type: types.ROUTINES_GET_LIST_SUCCESS,
    payload: list
})

export const getRoutinesError = (err) => ({
    type: types.ROUTINES_GET_LIST_ERROR,
    error: err
})

// Thunk Action creator 
export const addRoutine = (name, description,asanasArr) => {
    return (dispatch) => {
        dispatch(addRoutineRequest());
        axios.post(`${ROOT}/routine`,{
            name: name,
            description: description,
            asanasArr: asanasArr
        })
        .then((res) => { console.log(res); dispatch(addRoutineSuccess(res.data)); })
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
