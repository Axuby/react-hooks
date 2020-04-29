import React,{useState,useEffect} from 'react'
import Layout from './Layout';
import {getProduct} from "./apiCore";
import Card from '../core/Card';


const Home = () =>{

const [ProductBySell, setProductBySell] = useState([])
const [ProductByArrival, setProductByArrival] = useState([])
const [Error, setError] = useState(false)

const loadProductBySell =  () => {

    getProduct('sold').then(data => {
        if (data.error) {
            setError(data.error)
        } else {
            setProductBySell(data)
        }
    }).catch(err => console.log(err))
}

const loadProductByArrival=  () => {

    getProduct('createdAt ').then(data => {
        if (data.error) {
            setError(data.error)
        } else {
            setProductByArrival(data)
        }
    }).catch(err => console.log(err))
}

useEffect(() => {
 loadProductByArrival();
 loadProductBySell()
}, [])


        return (
            <div>
                <Layout title="Home Page" description="Node E-commerce App" className=" container-fluid"> ....</Layout>
                <h2>Home</h2>
                <h2 className="mb-4"> New Arrivals</h2>
                <div className="row">
                {ProductByArrival.map((product,i) => (
    <Card key={i} product={product}/>
))}
                </div>


<h2 className="mb-4"> Best Sellers</h2>
<div className="row">
{ProductBySell.map((product,i) => (
    <Card key={i} product={product}/>
))}
</div>


                {/* {JSON.stringify(ProductByArrival)}
                <hr/>
                {JSON.stringify(ProductBySell)} */}
            </div>
        )
    
}

export default Home;