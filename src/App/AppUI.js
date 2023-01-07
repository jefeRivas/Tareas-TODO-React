import React from "react";
import {TodoCounter} from '../TodoCounter'
import {TodoSearch} from '../TodoSearch'
import {TodoList} from '../TodoList'
import {TodoItem} from '../TodoItem'
import {CreateTodoButton} from '../CreateTodoButton'

function AppUI({
    totalTodos,
    completesTodos,
    search,
    setSearch,
    searchedTodos,
    completeTodos,
    deleteTodos
}){
    return(
        <React.Fragment>
          <TodoCounter
            totalTodos = {totalTodos}
            completesTodos = {completesTodos}
        
          />
          <TodoSearch
            search = {search}
            setSearch = {setSearch}
          />
          
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
          <CreateTodoButton/>
            
        </React.Fragment>
    )
}

export {AppUI}