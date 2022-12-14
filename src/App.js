import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop" component={ShopPage} />
			</Switch>
		</div>
	);
}

export default App;
