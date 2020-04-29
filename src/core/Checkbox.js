import React, {useEffect,useState} from 'react';


const Checkbox = ({categories}) => {

const [Checked, setChecked] = useState([])
const handleToggle = c => () =>{
    //return the first index or -1
    const currentCategoryId = Checked.indexOf(c)
const newCheckedCategoryId  = [...Checked] 
//if currently checked was not already in checked state then push else pul/take off

if (currentCategoryId === -1) {
  newCheckedCategoryId.push(c)
}else{
    newCheckedCategoryId.splice(currentCategoryId,1)
}
 console.log(newCheckedCategoryId)

 setChecked(newCheckedCategoryId)
}


useEffect(() => {
    
}, [])

    return categories.map((c,i) =>(
        <li key={i}className="list-unstyled">
            <input onChange={handleToggle(c._id)} value={Checked.indexOf(c._id === -1)} type="checkbox" className="form-check-input"/>
    <label className="form-check-label">{c.name}</label>
        </li>
    ))
}

export default Checkbox;