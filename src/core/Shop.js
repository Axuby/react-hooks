import React,{ useEffect ,useState} from "react";
import {Card} from "../core/Card"
import Layout from "./Layout";
import {getCategories,getFilteredProducts} from "./apiCore"
import Checkbox from "./Checkbox";
import {Prices} from "../core/FixedPrices";
import RadioBox from "../core/RadioBox"


const Shop = () =>{


    const [MyFilters, setMyFilters] = useState({
        filters:{
            categories:[],
            price:[]
        }
    })
const [Categories, setCategories] = useState([])
const [Error, setError] = useState(false)

const [Limit, setLimit] = useState(6)// 6 products per request 
const [Skip, setSkip] = useState(0);
const [FilteredResults, setFilteredResults] = useState(0)

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
init();
loadFilteredResults(skip,limit,newFilters.filters)
}, [])

const handleFilters = (filters,filterBy) =>{
console.log('SHSOP',filters,filterBy)

const newFilters = {...MyFilters}
newFilters.filters[filterBy] = filters;


if (filterBy === 'price') {
    
let priceValue = handlePrice(filters)
newFilters.filters[filterBy] = priceValue;

} 

loadFilteredResults(MyFilters.filters);

setMyFilters(newFilters);

}



const handlePrice = (value) =>{
const data = Prices;
let array = []

for(let key in data ){
    if (data[key]._id === parseInt(value))  {
        array = data[key].array
    } 

    return array;
 }

const  loadFilteredResults = (newFilters) =>{
//console.log(newFilters)

getFilteredProducts(Skip,Limit,newFilters).then(data => {
    if (data.error) {
        setError(data.error )
    } else {
       setFilteredResults(data)
     }}
)
}
 
return (
    
    <div>
    <Layout title="Home Page" description="Search and Find Products of your Choice" className=" container-fluid"> ....</Layout>
<div className="row">
    <div className="col-4">Left Side bar
    </div>
    <div className="col-8">Right
    <h4>Filter By Categories</h4>
    <ul>
    <Checkbox Categories={Categories} 
    handleFilters={filters => handleFilters(filters,'categories')}/>
    </ul>

  

<ul>
 <h4>Filter By Price Range</h4>
<RadioBox prices={Prices} handleFilters={filters => handleFilters(filters,'price')}/>

</ul>
 
    </div>
    
    
    </div>
</div>

)


export default Shop;