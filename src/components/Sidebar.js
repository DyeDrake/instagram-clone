import "../styles/sidebar.scss";
import sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../assets/profileImage.jpg";
function Sidebar(){
    return(
            <sticky topOffset={-80}>
                <div id="sidebar" className="sidebar">
                    <Profile
                        username="naspaj j."
                        caption="Jane Padi"
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