import musicbg from '../assets/musicbg.jpg'

function ArtistCard(){

    return(

        <div className="artist-card">
            <img src={musicbg} alt="artist img"  className="browse-artist-img"/>
            <p className="artist-name">Artist Name</p>
        </div>
    );


}

export default ArtistCard