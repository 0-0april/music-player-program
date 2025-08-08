import SidebarBtn from './SidebarBtn.jsx'

function SidebarUrMusic(){
    return(
        <div className="sidebar-ur-music">
            <h4>Your Music</h4>
            <SidebarBtn destination="Recently Played"/>
            <SidebarBtn destination="Favorites"/>
            <SidebarBtn destination="Playlist"/>
        </div>
    );


}

export default SidebarUrMusic