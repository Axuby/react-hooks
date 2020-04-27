import React ,{ useState, useEffect} from  'react';
import Layout from '../core/Layout'
import {Link } from 'react-router-dom';
import {isAuthenticated} from "../auth/userAuth"
import {createProduct} from '../admin/apiAdmin'
import AddCategory from './AddCategory';


const AddProduct = () =>{


const {user,token} = isAuthenticated();
const [Value, setValue] = useState({
    name:'',
    description:"",
    price:'',
    categories: [],
    category:'',
    shipping:'',
    quantity:'',
    photo:'',
    loading:false,
    error:'',
    createdProduct:false,
    redirectToProfile:false,
    formData:''
})

const {
     name,
description,
price,
categories,
category,
shipping,
quantity,
photo,
loading,
error,
createdProduct,
redirectToProfile,
formData
} = Value


const newPostForm = ()=>  (
    <div>
     <form className="mb-3">
        <h4> Post Photo</h4>
        <div className="form-group">
            <label className="btn btn-outline-secondary">
            <input type="file" name="photo"  accept="image/*">
                </label>
        </div>
    </form>
    </div>
)

    return (
        <Layout title="Add a new  product" description={`Good day ${user.name},ready to add a new product`}  >
        
        <div className="row">
         
            <div className="col-md-8 offset-md-2"> 
  ...{newPostForm()}
            </div>
        </div>
            </Layout>
    )

}

export default AddProduct;