import HorizontalScrollWrapper from '../SCROLLWRAPPER/HorizontalScrollWrapper.jsx'
import './Wrapper.css'
function HorizontalWrapper({children}){

    return(
        <div className="horizontal-wrapper">

            {children}    
            
        </div>

    );
}

export default HorizontalWrapper