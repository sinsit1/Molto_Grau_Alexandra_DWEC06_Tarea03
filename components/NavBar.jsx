import { Outlet, useNavigate } from 'react-router-dom';

function NavBar() {

	const navigate = useNavigate();
	const goTo = (url) => navigate(url);

	return <>
		<nav className="navbar">
			<div className="nav-center">
				<ul className="nav-links"><span>Cocktail DWEC-DB</span></ul>
				<ul className="nav-links">
					<li><a onClick={() => goTo('/')} href=''>home</a></li>
					<li><a onClick={() => goTo('/about')} href=''>about</a></li>
				</ul>
			</div>
		</nav>
		<Outlet />
	</>
}

export default NavBar;

