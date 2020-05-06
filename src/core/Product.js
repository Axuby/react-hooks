


import React, { useEffect,useState } from 'react'

import Layout  from  './Layout';
import {listRelated,read} from './apiCore'
import Card from './Card'

const Product = (props) =>{
    

    const [product, setproduct] = useState({})
const [Error, setError] = useState(false)
const [relatedProduct, setrelatedProduct] = useState([])


//const {name,price,description}  = product

const loadSingleProduct = productId => {
read().then(data =>{
    if (data.error) {
        setError(data.error)
    } else {
        setproduct(data)

        listRelated(data._id).then(data =>{
            if (data.error) {
                setError(data.error)
            } else {
                setrelatedProduct(data)
            }
        })
    }
})
}

useEffect(() => {
  
const productId  = props.match.params.productId
loadSingleProduct(productId)
}, [props])




        return (
            <div>
                  <Layout title={product && product.name}
                  description={product && product.description && product.description.substring(0,100)}
                  className=" container-fluid">
<div className="row">
    {product && product.description && (
        <Card product={product} showViewProductButton={false}/>
    )}
</div>


<div className="col-4">
    <h4>Related Products</h4>
    {relatedProduct.map((p,i) =>(
      <div className='mb-2'>
            <Card  product={p} key={i}/>
      </div>
    ))}
</div>
                  </Layout>
            </div>
        )
    
}

export default Product
