import React from "react";
import './TodoSearch.css'

function TodoSearch({search, setSearch}) {
    const onChangeSearch = (event)=>{
        console.log(`Estas buscando ${event.target.value}`)
        setSearch(event.target.value)
    }
    return(
        <input 
            className='TodoSearch' 
            placeholder='cocina'
            value={search}
            onChange={onChangeSearch}
        />)
}

export {TodoSearch}