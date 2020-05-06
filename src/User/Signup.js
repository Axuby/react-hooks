import React ,{useState} from 'react';
import Layout from "../core/Layout";
import {Link} from "react-router-dom";
import {signup }from "../auth/userAuth"

const Signup  = () =>{

const [Values, setValues] = useState({
    name:"",
    email:"",
    password:"",
    error:"",
    success:false

})

const {name,email,password,error,success} = Values ;



const handleChange = name  => event => {
setValues({
    ...Values,
    error:false,
    [name] :event.target.value
})
}




const clickSubmit= (e)=>{
e.preventDefault()
setValues({...Values,error:false})
signup({name,email,password })
.then(data =>{
if (data.error) {
    setValues({
        ...Values,
        error:data.error,
        success:false
    })
} else {
    setValues({
        ...Values,
        name:"",
        email:"",
        password:"",
        error:"",
        success:true
    })
}})
}
    const signUpForm = () => (
        <form >
            <div>
            <label className="text-muted">Name</label>
<input type="text"  onChange={handleChange("name")} className="form-control" value={name} />
            </div> <div>
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

    const showSucces = () => (
        <div className="alert alert-danger" style={{display:success ? "t" :'none'}}>
Your account was successfully created! you can now <Link to="/signin">Signin</Link> to access the products.
        </div>
    )


return(
    <div>
        <Layout title="Signup" description="Signup to view Products" className="container col-md-8 offset-md-2">
            {showError()}
          {showSucces()}
          {signUpForm()}
          {JSON.stringify(Values)}
        </Layout>
    </div>
)

}
export default Signup;





//name.has()




