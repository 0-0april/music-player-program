import Sidebar from './SIDEBAR/Sidebar.jsx'
import ContentWrapper from './WRAPPER/ContentWrapper.jsx'
import Navigation from './NAVIGATION/Navigation.jsx'
import Browse from './BROWSE/Browse.jsx'
import Songs from './SONGS/Songs.jsx'
import Albums from './ALBUMS/Albums.jsx'
import Artist from './ARTIST/Artist.jsx'

import { BrowserRouter, Routes, Route} from 'react-router-dom'





function App(){

  return(
    <BrowserRouter>
      <div>
        <Sidebar/>
        <ContentWrapper>
          <Navigation/>
          <Routes>

            <Route path='/' element={<Browse/>}/>
            <Route path='/browse' element={<Browse/>}/>
            <Route path='/songs' element={<Songs/>}/>
            <Route path='/albums' element={<Albums/>}/>
            <Route path='/artist' element={<Artist/>}/>

          </Routes>

          

        </ContentWrapper>
      </div>

    </BrowserRouter>

   
      
    
  );


}

export default App