import './ScrollWrapper.css'

function ContentScrollWrapper({children}){

    return(
        <div className='content-scroll-wrapper'>

            {children}

        </div>
    );

}
export default ContentScrollWrapper