import React from "react";
import { TodoContext } from "../App/TodoContext";
import './TodoCounter.css'

function TodoCounter(){
    const {totalTodos, completesTodos} = React.useContext(TodoContext)
    return (
        <h2 >Has completado {completesTodos} de {totalTodos} TODOs</h2>
    )
}

export  {TodoCounter}