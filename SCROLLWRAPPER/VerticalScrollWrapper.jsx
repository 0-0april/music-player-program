import './ScrollWrapper.css'

function VerticalScrollWrapper({children}){
    return(
        <div className="vertical-scroll-wrapper">

            {children}

        </div>
    );

}
export default VerticalScrollWrapper