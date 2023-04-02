import "../styles/story.scss"
import users from "../data/users.js";
import ProfileIcon from "./ProfileIcon";
function Story(){
    let accountName = users[Math.floor(Math.random() * users.length)].name;

    if(accountName.length > 10 ){
        accountName = accountName.substring(0, 10) + "...";

    }

    return(
        <div className="story">
            <ProfileIcon iconSize="large" storyBorder={true}/>
            <span className="accountName">
                {accountName}
            </span>
        </div>
    )
}

export default Story;