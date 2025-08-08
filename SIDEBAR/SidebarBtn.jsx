import { Link } from 'react-router-dom';

function MenuBtn({to, destination, className=''}){

    return(

        <Link to={to} className={`sidebar-btn ${className}`}>

            {destination}
            
        </Link>
    );



}

export default MenuBtn