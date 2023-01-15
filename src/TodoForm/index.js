import React from "react";
import { TodoContext } from "../App/TodoContext";
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState("")
    const [errorModal, setErrorModal] = React.useState(false)
    const {addTodos, setOpenModal} = React.useContext(TodoContext)
    const onChange = (event)=>{
        setNewTodoValue(event.target.value)
    }
    const onCancel = ()=>{
        setOpenModal(false)
    }
    const onSubmit = (event)=>{
        event.preventDefault()
        if (newTodoValue ===""){
            setErrorModal(true)
        } else {
        addTodos(newTodoValue)
        setOpenModal(false)}
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="escribe aqui tu tarea"
            />
            {!!errorModal && (<p className="errorModal">¡No has agregado tu tarea!</p>)}
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}