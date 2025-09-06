import LowerRightWrapper from '../WRAPPER/LowerRightWrapper.jsx'
import RecentlyPlayedAlbumsCont from './RecentlyPlayedAlbumsCont.jsx'
import LowerWrapper from '../WRAPPER/LowerWrapper.jsx'

function LowerAlbums(){

    return(
        <LowerWrapper>
            <RecentlyPlayedAlbumsCont/>
            <LowerRightWrapper/>
        </LowerWrapper>

    );
}

export default LowerAlbums