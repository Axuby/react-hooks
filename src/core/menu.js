import React from 'react'
import {Link,withRouter} from 'react-router-dom'

const isActive = (history,path) => {
     if (history.location.pathname === path) {
         return {colour : '#ff9000'}
     } else {
        return {colour:"#ffffff"};
     }
}

const Menu = ({history}) => {
        return (
            <div>
            <ul className='nav nav-tabs.bg-primary'>
                
                <li className='nav-item' >
                <Link className="nav-link" to="/" style={isActive(history,'/')}>Home</Link>
                </li>
                 
                <li className='nav-item' >
                <Link className="nav-link"  to="/signup"  style={isActive(history,'/signup')}> Signup </Link>
                </li>

                <li className='nav-item' >
                <Link className="nav-link" to="/signin" style={isActive(history,'/signin')}>Signin</Link>
                </li>

                 </ul> 

            </div>
        )
    
}

export default withRouter(Menu);
