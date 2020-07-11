import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth/authContext';
import ContactContex from '../../context/contact/contactContext';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContex);

	const { user, isAuthenticated, logout } = authContext;
	const { clearContacts } = contactContext;

	const onLogout = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<Fragment>
			<li>Hello {user && user.name}</li>
			<li>
				<a onClick={onLogout} href='#!'>
					<i className='fas fa-sign-out-alt'></i>
					<span className='hide-sm'>Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</Fragment>
	);

	return (
		<div className='navbar bg-primary'>
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
};
Navbar.prototypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
	icon: 'fas fa-id-card-alt',
	title: 'Contact Keeper',
};

export default Navbar;
