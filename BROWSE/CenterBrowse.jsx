import PopularArtistCont from './PopularArtistCont.jsx'
import RecentlyPlayedCont from './RecentlyPlayedCont.jsx'
import CenterWrapper from '../WRAPPER/CenterWrapper.jsx'

function Browse(){

    return(
        <CenterWrapper>
            

            <PopularArtistCont/>
            <RecentlyPlayedCont/>

        </CenterWrapper>
    );

}

export default Browse