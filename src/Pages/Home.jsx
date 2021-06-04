import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components'

function Home( {items} ) {

  console.log({items})

    return (
    
    <div className="container">
      <div className="content__top">
            
        <Categories onClickItem={(name)=> console.log(name)} items={['Meat', 'Vegeterian', 'Grill', 'Spicy', 'Extra Cheese']}/>
        
        <SortPopup items={
          [
            {name: 'Best Sellers', type: 'popular'},
            {name: 'Price', type: 'price'}, 
            {name: 'Name', type: 'name'}
          ]
            }/>
      </div>

      <h2 className="content__title">All Pizza</h2>

      <div className="content__items">

        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
          
        ))}
        
      </div>
    </div>
       
    )
}

export default Home
