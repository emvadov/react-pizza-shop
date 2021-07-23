import axios from 'axios'

export const setLoaded = val => ({
    type: 'SET_LOADING',
    payload: val
});

export const fetchPizza = (sortBy, category) => (dispatch) => {
    
    dispatch(setLoaded(false));
    axios.get(`/pizza?${category !== null ? `category=${category}` : '' }&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setPizza(data));

        
      
    });
}

export const setPizza = (items) => ({

    type: 'SET_PIZZA',
    payload: items
})