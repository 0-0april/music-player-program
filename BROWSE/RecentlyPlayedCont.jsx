import RecentlyPlayed from './RecentlyPlayed.jsx'
import SongTableHeader from '../CARDS/SongTableHeader.jsx'
import VerticalWrapper from '../WRAPPER/VerticalWrapper.jsx'

function RecentlyPlayedCont(){


    return(
        <VerticalWrapper>

            <h3>Recently Played</h3>

            <SongTableHeader/>
            <RecentlyPlayed/>

        </VerticalWrapper>
        
    );
}

export default RecentlyPlayedCont