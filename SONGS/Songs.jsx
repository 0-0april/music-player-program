import './Songs.css'
import BodyWrapper from '../WRAPPER/BodyWrapper.jsx'
import MusicGenreCont from './MusicGenreCont.jsx'
import MusicSuggestionCont from './MusicSuggestionCont.jsx'
import Navigation from '../NAVIGATION/Navigation.jsx'

function Songs(){

    return(
       <BodyWrapper>

            <MusicGenreCont/>
            <MusicSuggestionCont/>
        
       </BodyWrapper>



        
    );



}
export default Songs