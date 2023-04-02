import "../styles/navigation.scss";
import logo from "../assets/logo.png";
import searchIcon from "../assets/searchIcon.png";
import Menu from "./Menu";


function Navigation(){
    return(
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="Instagram Logo"/>
                <div className="search">
                    <img src={searchIcon} alt="Search Icon" className="search-icon"/>
                    <span className="search-text">Search</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation;