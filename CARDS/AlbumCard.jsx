import musicbg from '../assets/musicbg.jpg'
import AlbumCardDescrip from './AlbumCardDescrip.jsx'

function AlbumCard(){


    return(
        <div className="album-card">
            <img src={musicbg} alt="album img" />
            <AlbumCardDescrip/>

        </div>
    );
}

export default AlbumCard