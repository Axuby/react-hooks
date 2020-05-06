import React,{useState,useEffect} from 'react'
import Layout from './Layout';
import {getProduct} from "./apiCore";
import Card from '../core/Card';
import {isAuthenticated} from '../auth/userAuth'
import { Link } from 'react-router-dom';

const Checkout = ([products]) =>{ 


const getTotal = () =>{
    return  products.reduce((currentValue,nextValue) => {
return currentValue + nextValue.price * nextValue.count
    },0)
}


return (<div>
    <h2>Total Price :{getTotal()}</h2>
{isAuthenticated() ? (
<button className='btn btn-success'>Checkout</button>   
): ( 
    <Link to='/signin '>
    <button className='btn btn-success'>Signin to checkout</button>   
    </Link>
)}

</div>)


}


export default Checkout;