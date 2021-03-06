import React,{useState,useEffect} from 'react'
import Layout from './Layout';
import {getCart,removeItem} from "./CartHelpers";
import Card from '../core/Card';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';



const Cart = (props) =>{
    const [items, setitems] = useState([]);




    useEffect(() => {
         setitems( getCart())
    }, [ items ])//updates when the state changes

const showItems = (item) =>{

    return (
        <div>
            <h2>Your Cart has {`${items.length}`}</h2>
            <hr/>
            {items.map((product,i)=> (
                <Card key={i}product={product} cartUpdate={true} showRemoveProductButton={true}  showAddtoCartButton={false}/>
            ))}
        </div>
    )
}



const noItemsMessage = ()=>{
    return (
        <h2>Your Cart is empty <br/> <Link   to='/shop'>Continue Shopping</Link></h2>
    )
}
    return (
        <Layout title="Shopping Cart" 
        description="Myanage your Cart .Add,remove or continue shopping " 
        className=" container-fluid"> 
       <div className="row">
           <div className="col-6">
                
        {items.length > 0 ? (
            showItems()
            ):(noItemsMessage())}
           </div>
       </div>
        

       <div className="row">
           <div className="col-6">
                <p>Show checkout Options</p>
                <h2 className="mb-4"> Your cart summary</h2>
                <Checkout/>
        
           </div>
       </div>
        
        
        
        ....</Layout>
    )
}


export default Cart;