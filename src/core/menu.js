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
                
                <li className='nav-item' to="/">
                <Link className="nav-link" style={isActive(history,'/')}>Home</Link>
                </li>
                 
                <li className='nav-item' to="/signup">
                <Link className="nav-link" style={isActive(history,'/signup')}> Signup </Link>
                </li>

                <li className='nav-link' to="/signin">
                <Link className="nav-link" style={isActive(history,'/signin')}>Signin</Link>
                </li>

                 </ul> 

            </div>
        )
    
}

export default withRouter(Menu);
