//CENTER PART
import CenterWrapper from '../WRAPPER/CenterWrapper.jsx'
import PopMusicCont from './PopMusicCont.jsx'
import HipHopMusicCont from './HipHopMusicCont.jsx'
import JazzMusicCont from './JazzMusicCont.jsx'
import RockMusicCont from './RockMusicCont.jsx'
import NuMetalMusicCont from './NuMetalMusicCont.jsx'


function MusicGenre(){

    return(
        <CenterWrapper>

            <PopMusicCont/>
            <HipHopMusicCont/>
            <JazzMusicCont/>
            <RockMusicCont/>
            <NuMetalMusicCont/>

        </CenterWrapper>


    );
}

export default MusicGenre