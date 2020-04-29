import {API} from "../config";


export const getProduct = (sortBy) =>{
    return fetch(`${API}/categories` ,{
        method:"GET"

    }).then(response => response.json())
    .catch(err => console.log(err))
}