import logo from "../assets/images/logo.svg";

const Header = () => {
    return (
        <div className="headerContainer">
            <div className="header">
                <div className="logoContainer">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="navItemsContainer">
                    <ul className="navItems">
                        <li className="navItem">Home</li>
                        <li className="navItem">About</li>
                        <li className="navItem">🛒</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
