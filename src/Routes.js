import React from 'react'
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Signup from '../src/User/Signup';
import Signin from "../src/User/Signin";
import Home from '../src/core/Home';
import Menu from '../src/core/menu';

const Routes = () => {
        return (
            <div>
                <BrowserRouter>
                <Menu/>
                
                <Switch>

                <Route path="/" exact component={Home}/>
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/signin" exact component={Signin}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    
}

export default Routes
