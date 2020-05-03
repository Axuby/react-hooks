import React from 'react'
import { BrowserRouter,Switch,Route} from "react-router-dom";
import Signup from '../src/User/Signup';
import Signin from "../src/User/Signin";
import Home from '../src/core/Home';
import Menu from '../src/core/menu';
import DashBoard from '../src/User/userDashboard'
import AdminRoute from './auth/adminRoute';
 import PrivateRoute from '../src/auth/PrivateRoutes';
 import AdminDashboard from "../src/User/adminDashboard"
 import AddCategory from "../src/admin/AddCategory";
 import AddProduct from "../src/admin/AddProduct";
 import Shop from './core/Shop'
 import Product from '../src/core/Product'
  
const Routes = () => {
        return (
            <div>
                <BrowserRouter>
                <Menu/>
                <Switch>
                <Route path="/" exact component={Home}/>
                    <Route path="/signup" exact component={Signup}/>
                    <Route path="/signin" exact component={Signin}/>
                    <Route path="/shop" exact component={Shop}/>
                    <PrivateRoute path="/user/dashboard" exact component={ DashBoard}/>
                    <AdminRoute path="/admin/dashboard " exact component={AdminDashboard}/>
                    <AdminRoute path="/create/category " exact component={AddCategory}/>
                    <AdminRoute path="/create/product " exact component={AddProduct}/>
                   
                </Switch>
                </BrowserRouter>
            </div>
        )
    
}

export default Routes
