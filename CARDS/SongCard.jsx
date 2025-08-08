import musicbg from '../assets/musicbg.jpg'

function SongCard(){

    return(

        <div className="song-card">
            <img src={musicbg} />
            
            <span className="song-title">Song Title</span>
            <span className="song-artist">Song Artist</span>
            <span className="song-duration">00:00</span>
            <button class="fa-solid fa-ellipsis-vertical"></button>
            

        </div>
    );


}

export default SongCard