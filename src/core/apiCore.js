import {API} from "../config";
import queryString from "query-string"


export const getProduct = (sortBy) =>{
    return fetch(`${API}/product?sortBy=${sortBy}&order=desc&limit=6 ` ,{
        method:"GET"

    }).then(response => response.json())
    .catch(err => console.log(err))
}


export const getCategories = () =>{
    return fetch(`${API}/categories` ,{
        method:"GET"

    }).then(response => response.json())
    .catch(err => console.log(err))
}

export const read = (productId) =>{
    return fetch(`${API}/product/${productId} ` ,{
        method:"GET"

    }).then(response => response.json())
    .catch(err => console.log(err))
}




export const  getFilteredProducts  =(skip,limit,filter = {}) =>{


    const data = {
        skip,
        limit,
        filter
    }
   // console.log(userId)
  return   fetch(`${API}/product/by/search`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        
        },
        body:JSON.stringify(data)
    })
    .then(res => res.JSON( ))
    .catch(error => console.log(error))
}

export const list = (params) =>{
    const query = queryString.stringify(params)
    console.log(query)

 
    return fetch(`${API}/products${query} ` ,{
        method:"GET"

    }).then(response => response.json())
    .catch(err => console.log(err))
}

export const listRelated = (productId) =>{
    return fetch(`${API}/product/related/${productId} ` ,{
        method:"GET"

    }).then(response => response.json())
    .catch(err => console.log(err))
}
