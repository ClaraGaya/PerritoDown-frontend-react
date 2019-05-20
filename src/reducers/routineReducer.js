const initState = {
    routines: [
        {
            id: 1,
            timestamp: 'Mon May 15 2019 19:59:51 GMT+0100 (British Summer Time)',
            title: 'Morning Routine',
            description: 'Lorem Ipsum dolot set',
            asanas: [ 1,2,3]
        },
        {
            id: 2,
            timestamp: 'Mon May 19 2019 20:15:51 GMT+0100 (British Summer Time)',
            title: 'Afternoon Routine',
            description: 'Lorem Ipsum dolot set',
            asanas: [ 1,4,5,6]
        },
        {
            id: 3,
            timestamp: 'Mon May 20 2019 19:59:51 GMT+0100 (British Summer Time)',
            title: 'Evening Routine',
            description: 'Lorem Ipsum dolot set',
            asanas: [ 1,2,3,6]
        }
    ]
};

const routineReducer = (state = initState,action) => {
    return state
}

export default routineReducer;