import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing'
import ProductDetails from './components/ProductDetails';
import ProductComponent from './components/ProductComponent';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={ProductListing}/>
          <Route path="/product/:productId" exact component={ProductDetails}/>
          <Route>404 Not found</Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
