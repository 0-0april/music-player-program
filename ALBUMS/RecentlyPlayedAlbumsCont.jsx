import './Albums.css'
import RecentlyPlayedAlbums from './RecentlyPlayedAlbums'
import LowerCenterWrapper from '../WRAPPER/LowerCenterWrapper';

function RecentlyPlayedAlbumsCont(){

    return(
        <LowerCenterWrapper>
            <h3>Recently Played Albums</h3>
            <RecentlyPlayedAlbums/>

        </LowerCenterWrapper>
        
    );

}

export default RecentlyPlayedAlbumsCont