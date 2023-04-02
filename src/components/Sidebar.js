import "../styles/sidebar.scss";
import sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profileImage.jpg";
function Sidebar(){
    return(
            <sticky topOffset={-80}>
                <div className="sidebar">
                    <Profile
                        username="wendy m.A D."
                        caption="Wendy M. A. Darling"
                        urlText="switch"
                        iconSize="large"
                        image={image}/>
                </div>
                <Suggestions/>
                <Footer/>
            </sticky>
    )
}

export default Sidebar;