import React ,{Fragment}from 'react'
import {Link,withRouter} from 'react-router-dom'
import {signout,isAuthenticated} from "../auth/userAuth"
 //import Dashboard from '../User/userDashboard'
 

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
                <Link className="nav-link" to="/shop" style={isActive(history,'/shop')}>Shop</Link>
                </li>
                
                
  {isAuthenticated() && (<div>
                     
    <li className='nav-item' >
             <Link className="nav-link"  to="/signup"  style={isActive(history,'/signup')}> Signup </Link>
                </li>

                {/* <li className='nav-item' >
                <Link className="nav-link" to="/signin" style={isActive(history,'/signin')}>Signin</Link>
                </li>
    */}
  </div>)}
  {isAuthenticated() && isAuthenticated().user.role === 0 && (
    <li className='nav-item' >
                <Link className="nav-link" to="/user/dashboard" style={isActive(history,'/user/dashboard')}>Dashboard</Link>
                </li>
  )}
  {isAuthenticated() && isAuthenticated().user.role === 1 && (
    <li className='nav-item' >
                <Link className="nav-link" to="/admin/dashboard" style={isActive(history,'/admin/dashboard')}>Dashboard</Link>
                </li>
  )}
{isAuthenticated() && (<div>
                <li className='nav-item' >
                <span className="nav-link" onClick={() => signout(()=> history.push('/')) } style={{cursor:'pointer',color:"#ffffff"}}>Signout</span>
                </li></div>)}

                 </ul> 

            </div>
        )
    
}

export default withRouter(Menu);
