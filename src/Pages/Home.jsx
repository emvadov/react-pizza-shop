import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components'
import { useSelector, useDispatch } from 'react-redux'

import { setCategory } from '../redux/actions/filters'

const categoryNames = ['Meat', 'Vegeterian', 'Grill', 'Spicy', 'Extra Cheese'];

const sortItems = [
  {name: 'Best Sellers', type: 'popular'},
  {name: 'Price', type: 'price'}, 
  {name: 'Name', type: 'name'}
];


function Home( ) {

  const dispatch = useDispatch();
  const items = useSelector(( {pizza} ) => pizza.items);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  

    return (
    
    <div className="container">
      <div className="content__top">
            
        <Categories onClickItem={onSelectCategory}
                    items={categoryNames}/>
        
        <SortPopup items={sortItems}/>
      </div>

      <h2 className="content__title">All Pizza</h2>

      <div className="content__items">

        {items && items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
          
        ))}
        
      </div>
    </div>
       
    )
}

export default Home
