import "../styles/menu.scss";
import {ReactComponent as Home} from "../assets/home.svg";
import {ReactComponent as Inbox} from "../assets/messages.svg";
import {ReactComponent as Explore} from "../assets/explore.svg";
import {ReactComponent as Notifications} from "../assets/notifications.svg";
import ProfileIcon from "./ProfileIcon";
import profileImage from "../assets/profileImage.jpg"

function Menu(){
    return(
        <div className="menu">
            <Home className="menu-icon" />
            <Inbox className="menu-icon" />
            <Explore className="menu-icon"/>
            <Notifications className="menu-icon" />
            <ProfileIcon iconSize="small" image={profileImage} storyBorder={true}/>
        </div>
    )
}

export default Menu;