import React,{useState,useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom';
import ShowImage from "./ShowImage"
import moment from 'moment';
import {addItem} from './CartHelpers'

const Card = ({product,showViewProductButton = true}) =>{

const [cartRedirect, setcartRedirect] = useState(false)


const showViewButton = (showViewProductButton) => {
    
    return (
   showViewProductButton &&  (<Link to={`/product/${product._id}`} >
       <button className='btn btn-outline-primary mt-2 mb-2'>
   View Product
</button></Link>)
)}



const showStock = (quantity) =>{
return (quantity > 0 ? (<span className="badge badge-primary badge-pill">
In stock!
</span>): (<span lassName="badge badge-primary badge-pill">
Out Of Stock
</span>))

}

const addToCart = (cartRedirect) =>{
    addItem(product,()=> {
        if (cartRedirect) {
            return <Redirect to='/cart'/>
        }
    })
}

const showAddToCartButton= (showViewAddToCartButton) => {
    
    return (
   showViewAddToCartButton &&  (<Link to={`/product/${product._id}`} >
       <button onClick={addToCart} className='btn btn-outline-primary mt-2 mb-2'>
   ADD TO CART
</button>
</Link>)
)}



    return (
      //  <div className="col-4 mb-3">
            <div className="Card">
                 <div className="card-header name">{product.name}</div>
                            <div className="card-body">
            <ShowImage item={product} url='product'/>

    <p>{product.description.substring(0,100)}</p>
    <p className='black-10'>${product.price}</p>
    <p className='black-9'>Category :{product.category && product.category.name}</p>
    <p className='black-8'>Added on {moment(product.createdAt).fromNow()}</p>
{showStock(product.quantity)}
<br/>
     {showViewButton(showViewProductButton)}
     {showAddToCartButton()}
    </div>
    </div>
           // </div>
        
    )
}




export default Card;