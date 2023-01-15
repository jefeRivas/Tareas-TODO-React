import React from "react";
import { TodoContext } from "../App/TodoContext";
import './TodoSearch.css'

function TodoSearch() {
    const {search, setSearch} = React.useContext(TodoContext)
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