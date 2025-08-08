import React, {useState, useEffect} from 'react'
import SidebarBtn from './SidebarBtn.jsx'
import Songs from '../SONGS/Songs.jsx'

function SidebarLib(){

    return(
        <div className="sidebar-library">

            <h4>Library</h4>
                    
            <SidebarBtn 
                to='/browse'
                destination="Browse" 
                className="sidebar-browse"
            />
            <SidebarBtn 
                to='/songs'
                destination="Songs" 
                className="sidebar-songs"
            />

            <SidebarBtn 
                to='albums'
                destination="Albums" 
                className="sidebar-albums"

            />
            <SidebarBtn 
                to='artist'
                destination="Artist" 
                className="sidebar-artist"
            />

        </div>
    );


}
export default SidebarLib