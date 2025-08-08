import './Buttons.css'

function MusicSuggestion(){

    return(
        <button className="sggstd-song-btn">

            <img className="sggstd-song-img" src="./src/assets/musicbg.jpg" alt="" />
            <div className="sggstd-song-info">
                <span className="sggstd-song-title">Song Title</span>
                <span className="sggstd-song-artist">Song Artist</span>
            </div>

        </button>
        
        
    );

}

export default MusicSuggestion