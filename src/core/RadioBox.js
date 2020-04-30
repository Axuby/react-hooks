import React,{useState,useEffect, Fragment} from 'react';



const RadioBox = ({prices,handleFilters}) => {
const [Value, setValue] = useState(0)

// return (
//     <Fragment>
// <input type="radio" className="mr-2 ml-4"/>
// <label htmlFor="" className="form-check-label">{
//     prices.map(
//         (p,i) => 
//         <li key={i}> 
//         <input type="checkbox"  value={Value.indexOfm} className="form-check-input"/></li>
//     )
// }</label>
//     </Fragment>
// )

const handleChange = (event) => {
handleFilters(event.target.value)
setValue(event.target.value)


}

return prices.map((p,i) =>(
    <div key={i}className="list-unstyled">
        <input onChange={handleChange} 
        value={`${p._id}`} 
        type="checkbox" className="form-check-input"/>
<label className="form-check-label">{p.name}</label>
    </div>
))


} 

export default RadioBox;