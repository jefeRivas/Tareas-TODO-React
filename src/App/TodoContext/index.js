import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider(props) {
  const [todos, saveTodos]  = useLocalStorage('TODOS_V1',[])
  const [search, setSearch] = React.useState('')
  const [openModal, setOpenModal] = React.useState(false)

  const completesTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []
  if (!search.length>=1){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase()
      const SearchText = search.toLowerCase()
      return todoText.includes(SearchText)
    })
  }
  const addTodos = (text)=>{
    const newTodos = [...todos]
    newTodos.push({
        completed: false,
        text,
    })
    saveTodos(newTodos)
  }
  const completeTodos = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  }
  const deleteTodos = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
        deleteTodos,
        completeTodos,
        searchedTodos,
        search,
        totalTodos,
        setSearch,
        completesTodos,
        openModal,
        setOpenModal,
        addTodos
    }}>
        {props.children}
    </TodoContext.Provider>
  )
}

export {TodoContext, TodoProvider}