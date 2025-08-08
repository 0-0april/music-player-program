import Searchbar from './Searchbar.jsx'
import UserProfile from './UserProfile.jsx'
import './Navigation.css'

function Navigation(){


    return(
        <div className="navbar">

            <Searchbar/>
            <UserProfile/>

        </div>

    );
}

export default Navigation