import React, { useState,useEffect } from 'react';
import { getCategories,list } from './apiCore';
import Card from './Card';


const Search = () => { 

    const [Data, setData] = useState({
        categories:[],
        category:"",
        search:"",
        results:[],
        searched:false
    })

    const {categories,category, search,results,searched} = Data

    const loadCategories = () =>{
        getCategories().then(data => {
          if (data.error) {
            console.log(data) 
          } else {
              setData({...Data,categories:data,searched:true})
          }
        }) 
    }

    useEffect(() => {
      loadCategories()
    }, [])
    
const searchData = () =>{
    if (search) {
        list({search:search || undefined,category:category,}).then(response => {
            if (response.error) {
                console.log(response.error)
            }else{
                setData({...Data,results:response,searched:true})
            }
        })
    }
    
}

const searchSubmit = (e) =>{
e.preventDefault()
searchData() //makes request to backend
}

const handleChange =(name) => (event) =>{
    setData({...Data, [name]:event.target.value, searched:false})
     
}
   
const searchMessage = (searched,results) =>{
if(searched && results.length > 0){
    return `Found ${results.length} products `
}

if(searched && results.length < 1){
    return `No products `
}
}

const searchProduct = (results = []) => {    
    return (
   <div>
<h2 className="mt-4 mb-4">{searchMessage(searched,results)}</h2>

        <div className="row">{results.map((product,i) => (
<Card key={i} product={product}/>
    ))}</div>
   </div>
    )
}
const searchForm = () =>
         (
               <form action="" onSubmit={searchSubmit} className="mb2 mt2">
               <span className="input-group-text">
                   <div className="input-group input-group-lg">
<div className="input-group-prepend">
    <select name="" onChange={handleChange('category')} id="" className="btn mr-2">
        <option value="All">Pick Category</option>
        {categories.map((c,i) => (
            <option value={c._id} key={i}>{c.name}</option>
        ))}
    </select>
</div>

       <input type="search " className="form-control" 
                    placeholder="search" onChange={handleChange('search')} value={value}/>
                   
                   </div>
                   <div className="btn input-group-append" style={{border:'none'}}>
                       <button className="input-group-text">Search</button>
                   </div>
               </span>
                </form> 
        )
    

        return (
            <div className="row">
    <h2>search</h2> 
    <div className="container mb-3">{searchForm()}</div>           
            </div>
        )
    
}

export default Search
