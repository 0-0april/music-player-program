
import musicbg from '../assets/musicbg.jpg'

function UserProfile(){

    return(
        <div className="user-profile">
            <img src={musicbg} alt="user profile img" className="user-profile-img" />
            <h4>User Name</h4>
        </div>
    );


}
export default UserProfile