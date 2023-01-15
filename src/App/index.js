//import './App.css';
import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './TodoContext';
/*const defaultTodos = [
  {text:'Cocinar desayuno', completed: true},
  {text:'hacer ejercicio', completed: false},
  {text:'bañarse', completed: true},
  {text:'alistar maleta', completed: false}
]*/



function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
