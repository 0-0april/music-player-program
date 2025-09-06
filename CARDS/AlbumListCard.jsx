import './Cards.css'
import musicbg from '../assets/musicbg.jpg'
import AlbumListCardDescrip from './AlbumListCardDescrip.jsx'

function AlbumListCard(){
    return(
        <div className="album-list-card">
            <img src={musicbg} alt="album img" />
            <AlbumListCardDescrip/>
        </div>
    );
}
export default AlbumListCard