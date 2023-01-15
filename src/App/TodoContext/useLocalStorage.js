import React from "react";

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

  export {useLocalStorage}