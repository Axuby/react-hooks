import React from 'react'
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Signup from '../src/User/Signup';
import Signin from "../src/User/Signin";
import Home from '../src/core/Home';
import Menu from '../src/core/menu';
import DashBoard from '../src/User/userDashboard'
 import PrivateRoute from '../src/auth/PrivateRoutes';
 
const Routes = () => {
        return (
            <div>
                <BrowserRouter>
                <Menu/>
                <Switch>
                <Route path="/" exact component={Home}/>
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/signin" exact component={Signin}/>
                    <PrivateRoute path="/user/dashboard" exact component={ DashBoard}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    
}

export default Routes
