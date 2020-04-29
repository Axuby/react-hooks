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