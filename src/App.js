import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

// Page Imports
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
