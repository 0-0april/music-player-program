import musicbg from '../assets/musicbg.jpg'
import './Cards.css'
import MusicCardDescription from './MusicCardDescription.jsx'

function MusicCard(){

    return(
        <div className="music-card">

            <img src={musicbg} alt="music img" />
            <MusicCardDescription/>

            

        </div>

    ); 

}

export default MusicCard