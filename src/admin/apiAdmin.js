import {API}   from "../config";



export const  createCategory  =(userId,token,category) =>{

    console.log(userId)
  return   fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorizater:`Bearer ${token }`
        },
        body:JSON.stringify(category)
    })
    .then(res => res.JSON( ))
    .catch(error => console.log(error))
}


export const  createProduct =(userId,token,product) =>{

    console.log(userId)
  return   fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json", //we are sending the form data
            Authorizater:`Bearer ${token }`
        },
        body:product
    })
    .then(res => res.JSON( ))
    .catch(error => console.log(error))
}


export const getCategories = () =>{
    return fetch(`${API}/categories` ,{
        method:"GET"

    }).then(response => response.json())
    .catch(err => console.log(err))
}