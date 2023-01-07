import React from "react";
import './TodoCounter.css'

function TodoCounter({totalTodos, completesTodos}){
    return (
        <h2 >Has completado {completesTodos} de {totalTodos} TODOs</h2>
    )
}

export  {TodoCounter}