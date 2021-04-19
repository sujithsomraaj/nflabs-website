import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
