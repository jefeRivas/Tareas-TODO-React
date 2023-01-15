import React from "react";
import { TodoContext } from "./TodoContext";
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {TodoItem} from '../TodoItem'
import {CreateTodoButton} from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from "../TodoForm";

function AppUI(){
  const { searchedTodos, completeTodos, deleteTodos, openModal, setOpenModal } = React.useContext(TodoContext)
    return(
      
        <React.Fragment>
          <TodoCounter/>
          <TodoSearch/>
          <TodoList>
              {searchedTodos.map(todo=>(
                <TodoItem 
                  text={todo.text} 
                  key={todo.text} 
                  completed={todo.completed}
                  onComplete={()=>completeTodos(todo.text)}
                  onDelete={()=>deleteTodos(todo.text)}
                />
              ))}            
           </TodoList>
           {!!openModal && (
            <Modal>
              <TodoForm/>
           </Modal>
           )}
          <CreateTodoButton
            setOpenModal = {setOpenModal}
            openModal = {openModal}
          />
            
        </React.Fragment>
        )}
    



export {AppUI}