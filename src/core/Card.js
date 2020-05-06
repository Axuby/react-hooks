import React,{useState,useEffect} from 'react'
import {Link, Redirect} from 'react-router-dom';
import ShowImage from "./ShowImage"
import moment from 'moment';
import {addItem,updateItem,removeItem } from './CartHelpers'

const Card = ({product,
    showAddToCartButton = true,
    showViewProductButton = true,
    showRemoveProductButton = false,
    cartUpdate = false}) =>{

const [cartRedirect, setcartRedirect] = useState(false)
const [count, setCount] = useState(product.count)


const showViewButton = (showViewProductButton) => {
    
    return (
   showViewProductButton &&  (<Link to={`/product/${product._id}`} >
       <button className='btn btn-outline-primary mt-2 mb-2'>
   View Product
</button></Link>)
)}


useEffect(() => {
setCount()
}, [])


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


const handleChange = productId => event => {
    setCount(event.target.value < 1 ? 1 : event.target.value)
    if (event.target.value >= 1) {
        updateItem(productId,event.target.value);
    }
}


const showCartUpdate = (cartUpdate) => {

    return(
        cartUpdate && <div>
   <div className="input-group mb-3">
       <div className="input-group-prepend">
           <span className="input-group-text">
               Adjust Quantity
           </span>
       </div>

       <input type="number" className="form-control"/>
   </div>
        </div>
    )
}





const showRemoveCartButton = (showRemoveProductButton) => {
    
    return (
   showRemoveProductButton &&  (<Link to={`/product/${product._id}`} >
       <button onClick={()=> removeItem(product._id)} className='btn btn-outline-primary mt-2 mb-2'>
   Remove from Cart
</button>
</Link>)
)}

const showAddCartButton = (showAddToCartButton) => {
    
    return (
   showAddToCartButton &&  (<Link to={`/product/${product._id}`} >
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
     {showAddCartButton(showAddToCartButton)}
    </div>
    </div>
           // </div>
        
    )
}




export default Card;