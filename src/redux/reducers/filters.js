const initState = {
    category: 0,
    sortBy: 'popular'
};

const filters = (state = initState, action) => {

    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload
        };
    }

    if (action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload
        };
    }

    return state;
}

export default filters;