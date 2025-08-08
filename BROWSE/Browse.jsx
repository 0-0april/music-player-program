import Navigation from '../NAVIGATION/Navigation.jsx'
import CenterBrowse from './CenterBrowse.jsx'
import MusicSggstnCont from './MusicSggstnCont.jsx'
import './Browse.css'
import BodyWrapper from '../WRAPPER/BodyWrapper.jsx'

function Browse(){


    return(
        <BodyWrapper>

            <CenterBrowse/> 
            <MusicSggstnCont/> 
        
        </BodyWrapper>
    );
}

export default Browse