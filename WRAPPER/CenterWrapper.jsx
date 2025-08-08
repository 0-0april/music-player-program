import VerticalWrapper from './VerticalWrapper.jsx'
import HorizontalWrapper from './HorizontalWrapper.jsx'

function CenterWrapper({children}){

    return(

        <div className="center-wrapper">
            {children}
            
        </div>
    );


}

export default CenterWrapper