import React,{ useEffect ,useState} from "react";
import Card from "../core/Card"
import Layout from "./Layout";
import {getCategories} from "./apiCore"


const Shop = () =>{

const [Categories, setCategories] = useState([])
const [Error, setError] = useState(false)


const init = ()=>{
    getCategories().then(data =>{

        if (data.error) {
            setError(data.error)
        } else {
           setCategories(data)
        }
       
    }).catch(err => console.log(err))
}

useEffect(() => {
init()
}, [])


return (
    
    <div>
    <Layout title="Home Page" description="Search and Find Products of your Choice" className=" container-fluid"> ....</Layout>
<div className="row">
    <div className="col-4">Left Side bar
    </div>
    <div className="col-8">Right
    </div>
    
    
    </div>
</div>
)
}

export default Shop;