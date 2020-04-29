import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({product}) =>{
    return (
        <div className="col-4 mb-3">
            <div className="Card">
    <div className="card-header">{product.name}</div>
    <div className="card-body">
    <p>{product.description}</p>
    <p>{product.price}</p>
    </div>
            </div>
        </div>
    )
}




export default Card;