import "../styles/navigation.css";
import logo from  "../images/logo.png";
import searchIcon from "../images/searchIcon.png";

function Navigation(){
    return(
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="Instagram Logo"/>
                <div className="search">
                    <img src={searchIcon} alt="Search Icon" className="search-icon"/>
                    <span className="search-text">Search</span>
                </div>
            </div>
        </div>
    )
}

export default Navigation;