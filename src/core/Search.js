import React, { Component } from 'react';

const Search = () => { 
    const handleChange = (e) => {
e.preventDefault();

    }
        return (
            <div>
                <form action="" className="mb2 mt2">
                    <input type="text" value={value}/>
                    <label htmlFor="">
                        <button onClick={handleChange} >Search</button>
                    </label>
                </form>
            </div>
        )
    
}

export default Search
