import logo from '../assets/logo.png'

function Logo(){

    return(
        <div className="logo-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1>Alon</h1>        
        </div>
    );



}

export default Logo