import './Albums.css'
import VerticalScrollWrapper from '../SCROLLWRAPPER/VerticalScrollWrapper.jsx'
import AlbumListCard from '../CARDS/AlbumListCard.jsx'

function RecentlyPlayedAlbums(){

    return(

        <VerticalScrollWrapper>
            
            <AlbumListCard/>
            
        </VerticalScrollWrapper>
    );

}

export default RecentlyPlayedAlbums