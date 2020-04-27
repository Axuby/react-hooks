import React ,{ useState}from  'react';
import Layout from '../core/Layout'
import {Link } from 'react-router-dom';
import {createCategory} from '../admin/apiAdmin'
import {isAuthenticated} from "../auth/userAuth"

const AddCategory = () =>{

const [name, setName] = useState('')
const [error, setError] = useState(false)

const [success, setSuccess] = useState(false)



//destructure user and token from localstorage
const {user,token } = isAuthenticated()

const clickSubmit = (e) => {
 e.preventDafault();

 setError('');
 setSuccess(false)

 createCategory(user._id,token, {name})
 .then(data => {
    if(data.error) {
        setError(true)
    } else{
        setError("")
        setSuccess(true)
    } 
 })
 //make request to api to create



}
const handleChange = (e) =>{

setError('')
setName(e.target.value)

}



const showSuccess = () =>{
    if (success) {
    return (<h3 className='text-success'>{name}</h3>)
    }
}


const showError = () =>{
    if (error) {
    return (<h3 className='text-danger'>{name} is should be unique </h3>)
    }
}


const goBack = () =>{
    return (
        <div className="mt-5">
            <Link to="/admin/dashboard" className="text-warning"> Back to Dashboard</Link>
        </div>
    )
}


const newCategoryForm = () =>(
    <form  onSubmit={clickSubmit}> 
        <div className="form-group">
            <label htmlFor="" className="text-muted">Name</label>
            <input type="text" className="form-control" required  onChange={handleChange} value={name} autoFocus/>
           
            </div>
            <button className="btn btn-outline-primary">Create Category</button>
    </form>
)


return (
    <Layout title="Add a new category" 
description={`Good day ${name},ready to add a new category`} 
>

<div className="row">
 
    <div className="col-md-8 offset-md-2"> 
    {showError()}
    {showSuccess()}
           {newCategoryForm()}
           {goBack()}
    </div>
</div>
    </Layout>
)


}


export default AddCategory;