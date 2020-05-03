


import React, { useEffect,useState } from 'react'

import Layout  from  './Layout';
import {getProduct} from './apiCore'
import Card from './Card'

const Product = (props) =>{
    

    const [product, setproduct] = useState({})
const [Error, setError] = useState(false)



const loadSingleProduct = productId => {

}

useEffect(() => {
  
const productId  = props.match.params.productId
loadSingleProduct(productId)
}, [input])


        return (
            <div>
                  <Layout title="Home Page" 
                  description="Search and Find Products of your Choice" 
                  className=" container-fluid">

                  </Layout>
            </div>
        )
    
}

export default Product
