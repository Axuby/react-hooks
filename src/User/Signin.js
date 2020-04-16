import React,{useState}from 'react'
import Layout from "../core/Layout";

import {Redirect} from "react-router-dom"
import {signin }from "../auth/userAuth";


const Signin  = () =>{

    const [Values, setValues] = useState({
     
        email:"",
        password:"",
        error:"",
        loading:false,
        redirectToRefferer:false
    
    })
    
    const {email,password,error,loading,redirectToRefferer} = Values ;
    
    
    
    const handleChange = name  => event => {
    setValues({
        ...Values,
        error:false,
        [name] :event.target.value
    })
    }
    
    
    
    
    const clickSubmit= (e)=>{
    e.preventDefault()
    setValues({...Values,error:false,loading:true})

    signin({ email,password })
    .then(data =>{
    if (data.error) {
        setValues({
            ...Values,
            error:data.error,
            loading:false
        })
    } else {
        setValues({
            ...Values,
            // email:"",
            // password:"",
            // error:"",
            // loading:false, only concerned with redirecting the user after registering
            redirectToRefferer:true
        })
    }})
    }
        const signUpForm = () => (
            <form >
                 <div>
                <label className="text-muted">Email</label>
    <input type="email"  onChange={handleChange("email")} className="form-control" value={email} />
                </div> 
                <div>
                <label className="text-muted">Password</label>
    <input type="password"  onChange={handleChange("password")} className="form-control" value={password} />
                </div> 
                
                <button onClick={clickSubmit} className="btn btn-primary">Submit</button>
            </form>
        )
    
        const showError = () => (
            <div className="alert alert-danger" style={{display:error ? "" :'none'}}>
    {error}
            </div>
        )
    
        const showLoading = () => (
            loading && (<div className="alert alert-info">
                <h2>Loading ...</h2>
            </div>)
        )
    const redirectUser = () =>{

        if(redirectToRefferer){
            return <Redirect to="/"></Redirect>
        }
    }
    
    return(
        <div>
            <Layout title="Signup" description="Signup to view Products" className="container col-md-8 offset-md-2">
                {showError()}
              {showLoading()}
              {signUpForm()}
              {redirectUser()}
              {JSON.stringify(Values)}
            </Layout>
        </div>
    )
    
    }
    export default Signin;
