//import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

/*const defaultTodos = [
  {text:'Cocinar desayuno', completed: true},
  {text:'hacer ejercicio', completed: false},
  {text:'bañarse', completed: true},
  {text:'alistar maleta', completed: false}
]*/

function useLocalStorage(nameItem,InitalItem){
  const localStorageItems = localStorage.getItem(nameItem)
  let parsedItems;

  if(!localStorageItems){
    localStorage.setItem(nameItem,JSON.stringify(InitalItem))
  } else {
    parsedItems = JSON.parse(localStorageItems)
  }
  const [items, setTodos] = React.useState(parsedItems)
  const saveItems = (newItems)=>{
    const stfItems = JSON.stringify(newItems)
    localStorage.setItem(nameItem,stfItems)
    setTodos(newItems)
  }

  return [items, saveItems]
}

function App() {
  const [todos, saveTodos]  = useLocalStorage('TODOS_V1',[])
  const [search, setSearch] = React.useState('')

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
    <AppUI
      totalTodos = {totalTodos}
      completesTodos = {completesTodos}
      search = {search}
      setSearch = {setSearch}
      searchedTodos = {searchedTodos}
      completeTodos = {completeTodos}
      deleteTodos = {deleteTodos}
    />
  );
}

export default App;
