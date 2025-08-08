import SidebarSetting from './SidebarSetting.jsx'
import SidebarLib from './SidebarLib.jsx'
import SidebarUrMusic from './SidebarUrMusic.jsx'

function SidebarChoice(){

    return(
         <div className="sidebar-choices">
            <SidebarLib/>
            <SidebarUrMusic/>
            <SidebarSetting/>

        </div>


    );


} 
export default SidebarChoice