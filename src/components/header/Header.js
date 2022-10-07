import React from "react";
import "./header.style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/18763726-crown.svg";
const Header = () => {
	return (
		<div className="header">
			<Link to="/" className="logo-container">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					Shop
				</Link>
				<Link className="option" to="/shop">
					Contact
				</Link>
				{/* <Link className="shop" to="/shop" />
				<Link className="shop" to="/shop" /> */}
			</div>
		</div>
	);
};

export default Header;
