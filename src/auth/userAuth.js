import {API}   from "../config";



export const  signup =(user) =>{

    console.log(user)
  return   fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res => res.JSON( ))
    .catch(error => console.log(error))
}



export const  signin =(user) =>{

    console.log(user)
  return   fetch(`${API}/signin`,{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res => res.JSON( ))
    .catch(error => console.log(error))
}



