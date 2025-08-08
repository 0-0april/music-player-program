import BodyWrapper from '../WRAPPER/BodyWrapper.jsx'
import LowerAlbums from './LowerAlbums.jsx'
import PopAlbumsCont from './PopAlbumsCont.jsx'
import './Albums.css'




function Albums(){

    return(

        <BodyWrapper>
            
           <PopAlbumsCont/>
           <LowerAlbums/>

        </BodyWrapper>

        
    );
}

export default Albums