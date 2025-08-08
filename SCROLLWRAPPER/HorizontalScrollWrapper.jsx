import './ScrollWrapper.css'
function HorizontalScrollWrapper({children}){

    return(
        <div className="horizontal-scroll-wrapper">
            
            {children}
        
        </div>

    );

}
export default HorizontalScrollWrapper