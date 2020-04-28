import React ,{ useState, useEffect} from  'react';
import Layout from '../core/Layout'
import {Link } from 'react-router-dom';
import {isAuthenticated} from "../auth/userAuth"
import {createProduct,getCategories} from '../admin/apiAdmin'
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

//load categories and set form Data
const init = ()=>{
    getCategories().then(data =>{

        if (data.error) {
            setValue({
                ...Value,
                error:data.error
            })
        } else {
            setValue({
                ...Value,
                categories:data,
                formData: new FormData()
            })
        }
       
    }).catch(err => console.log(err))
}


//runs anythime the Value changes
useEffect(() => {
    init()
//      setValue({
//         ...Value, 
//     formData:new FormData()
// })
}, [])

const handleChange = (name) => event => {
    const values = name === 'photo' ? event.target.files[0] :event.target.value;
//formDate is used to populate the state and send info to the backend
    formData.set(name,values)

    setValue({
        ...Value,
        error:false,
        [name] :values
    })
}

const clickSubmit = (e) =>{
    e.preventDefault();

    setValue({
        ...Value,
        error:"",
        loading:true
    })

    createProduct( user._id,token,formData)
    .then(data => {
        if (data.error) {
            setValue({
                ...Value,
                error:data.error
            })
        } else {
         setValue({
             ...Value,
             name:'',
    description:"",
    price:'',
    category:'',
    shipping:'',
    quantity:'',
    photo:'',
    loading:false,
    createdProduct:data.name
         })   
        }
    }).catch()
}


const newPostForm = ()=>  (
    <div>
     <form className="mb-3" onSubmit={clickSubmit}>
        <h4> Post Photo</h4>
        <div className="form-group">
            <label className="btn btn-outline-secondary">
            <input onChange={handleChange('photo')} type="file" name="photo"  accept="image/*"/>
                </label>
        </div>
        <div className="form-group">
            <label  className="text-muted" htmlFor="">Name</label>
            <input  onChange={handleChange('name')} type="text" className="form-control"  value={name}/>
            </div>
            <div className="form-group">
            <label  className="text-muted" htmlFor="">Description</label>
            <textarea  onChange={handleChange('description')}  className="form-control"  value={description}/>
            </div>
            <div className="form-group">
            <label  className="text-muted" htmlFor="">Price</label>
            <input  onChange={handleChange('price')} type="number" className="form-control"  value={price}/>
            </div>
            <div className="form-group">
            <label  className="text-muted" htmlFor="">Category</label>
            <select onChange={handleChange('category')} className="form-control"  value={category}>
          <option value=""> Please select</option>
{categories && categories.map((c,i) => (
    <option key={i} value="c._id">{c.name}</option>
))}


           </select>

           <div className="form-group">
            <label  className="text-muted" htmlFor="">Quantity</label>
            <input  onChange={handleChange('quantity')} type="number" className="form-control"  value={quantity}/>
            </div>

            <div className="form-group">
            <label  className="text-muted" htmlFor="">Shipping</label>
            <select onChange={handleChange('shipping')} className="form-control"  value={category}>
          <option value="0"> No</option>
          <option value="1"> Yes</option>
           </select>
            </div>
</div>

<button className="btn btn-outline-primary">Create Product</button>
    </form>
    </div>
)



const showError =() => (
    <div className="alert alert-danger"
    style={{display:error  ? "" : "none"}}>
   {error}
    </div>
 
)

const showSuccess=() => (
    <div className="alert alert-danger"
    style={{display:createdProduct  ? "" : "none"}}>
   <h2> { `${createdProduct} `} is created!</h2>
    </div>
 
)

const showLoading = () => 

    loading && (<div className='alert alert-success'>
<h2>...Loading</h2>
    </div> )


    return (
        <Layout title="Add a new  product" description={`Good day ${user.name},ready to add a new product`}  >
        
        <div className="row">
         
            <div className="col-md-8 offset-md-2"> 
            {showLoading()}
            {showSuccess()}
            {showError()}
  ...{newPostForm()}
            </div>
        </div>
            </Layout>
    )

}

export default AddProduct;