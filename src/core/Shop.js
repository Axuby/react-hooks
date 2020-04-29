import React,{ useEffect ,useState} from "react";
import Card from "../core/Card"
import Layout from "./Layout";
import {getCategories} from "./apiCore"
import Checkbox from "./Checkbox"

const Shop = () =>{


    const [MyFilters, setMyFilters] = useState({
        filters:{
            categories:[],
            price:[]
        }
    })
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

const handleFilters = (filters,filterBy) =>{
console.log('SHSOP',filters,filterBy)

const newFilters = {...MyFilters}
newFilters.filters[filterBy] = filters;
setMyFilters(newFilters);

}

return (
    
    <div>
    <Layout title="Home Page" description="Search and Find Products of your Choice" className=" container-fluid"> ....</Layout>
<div className="row">
    <div className="col-4">Left Side bar
    </div>
    <div className="col-8">Right
    
    <Checkbox Categories={Categories} handleFilters={filters => handleFilters(filters,'categories')}/>
  */}
    </div>
    
    
    </div>
</div>
)
}

export default Shop;