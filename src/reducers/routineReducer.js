import * as types from '../actions/types';

const initialState = {
    isFetching: false,
    lastUpdated: null,
    data: [],
    error: null,
}

const routineReducer = (state = initialState,action) => {
    switch(action.type) {
        case types.ROUTINES_GET_LIST_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                lastUpdated: state.lastUpdated,
                error: null
            })
        case types.ROUTINES_GET_LIST_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                lastUpdated: Date.now(),
                data: action.payload,
                error: null
            })
        case types.ROUTINES_GET_LIST_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: state.lastUpdated,
                error: action.payload
            })
        case types.ROUTINES_CREATE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                lastUpdated: state.lastUpdated,
                error: null
            })
        case types.ROUTINES_CREATE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                lastUpdated: Date.now(),
                data: action.payload,
                error: null
            })
        case types.ROUTINES_CREATE_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                lastUpdated: state.lastUpdated,
                error: action.payload
            })
        default:
            return state;
    }
}

export default routineReducer;