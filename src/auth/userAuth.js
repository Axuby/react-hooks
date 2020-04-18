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



export const  authenticate = (data, next) =>{
    if( typeof window !== 'undefined'){
localStorage.setItem('jwt', JSON.stringify(data))
next();
    }
}

export const signout  = (next) => {
    if( typeof window !== 'undefined'){
        localStorage.removeItem('jwt')
        next()
        return  fetch(`${API}/signout`, {
            method:'GET',
        }).then(res =>console.log('signout',res))
        .catch(error => console.log(error))
            }
} 

export const isAuthenticated = () =>{
    if( typeof window == 'undefined'){
        return false
    }

    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    } else {
        return false
    }
}