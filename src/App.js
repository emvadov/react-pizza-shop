import React from 'react'
import { Header } from './components'
import { Home, Cart } from './Pages'
import { Route } from 'react-router-dom'
import axios from 'axios'
import { setPizza /*,setPizzaAction*/ } from './redux/actions/pizza'
import { useSelector, useDispatch } from 'react-redux'

function App( ) {

  const dispatch = useDispatch();

  


  React.useEffect(() => {

    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      dispatch(setPizza(data.pizza));
      
    }, []);

  });

  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" component={Home} exact />
          <Route path="/Cart" component={Cart} exact />
        </div>
      </div>
  );
}

/*
class App extends React.Component {

  componentDidMount() {

    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizza(data.pizza);
      
    });
  }

  render() {

    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" render={() => <Home items={this.props.items} />} exact />
          <Route path="/Cart" component={Cart} exact />
        </div>
      </div>
    );
  }

}
*/

/*
const mapStateToProps = (state) => {
  return {
    items: state.pizza.items
  };
};



const mapDispatchToProps = (dispatch) => {
  
  return {
    
    setPizza: (items) => dispatch(setPizzaAction(items))
  };

}



const mapDispatchToProps =  {
    
    setPizza
    
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
*/


/*
export default connect(
  (state) => {
    return {
      items: state.pizza.items,
      filters: state.filters
    };
  },
  (dispatch) => {
    return {
      setPizza: (items) => dispatch(setPizza(items))
    };
    
  }
)(App);
*/

export default App;