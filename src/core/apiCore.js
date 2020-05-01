import {API} from "../config";


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