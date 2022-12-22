import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<nav className={styles.Navigation}>
			<NavLink to="/block-explorer" className={styles.NavItem}>
				Block Explorer
			</NavLink>
			<NavLink to="/accounts" className={styles.NavItem}>
				Accounts
			</NavLink>
		</nav>
	);
};

export default Navigation;
