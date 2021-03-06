import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Page Imports
import Home from "./pages/Home";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import Disclaimer from "./pages/Disclaimer";
import AboutUs from "./pages/AboutUs";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/products" component={Products} />
				<Route exact path="/contact-us" component={ContactUs} />
				<Route exact path="/privacy-policy" component={PrivacyPolicy} />
				<Route exact path="/terms-and-conditions" component={TermsConditions} />
				<Route exact path="/disclaimer" component={Disclaimer} />
				<Route exact path="/about-us" component={AboutUs} />
			</Switch>
		</Router>
	);
}

export default App;
