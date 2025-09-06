import './Albums.css'
import AlbumVerticalScrollWrapper from '../SCROLLWRAPPER/AlbumVerticalScrollWrapper.jsx'
import AlbumListCard from '../CARDS/AlbumListCard.jsx'

function RecentlyPlayedAlbums(){

    return(

        <AlbumVerticalScrollWrapper>
            
            <AlbumListCard/>
            <AlbumListCard/>
            <AlbumListCard/>
            <AlbumListCard/>
            <AlbumListCard/>
            <AlbumListCard/>
            <AlbumListCard/>
            <AlbumListCard/>
            
        </AlbumVerticalScrollWrapper>
    );

}

export default RecentlyPlayedAlbums