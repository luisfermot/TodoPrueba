import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = createContext();

// PROPS GLOBALES PARA QUE EL CODIGO QUEDE MAS LIMPIO Y EVITAR EL PROPDRILING
const TodoProvider = ({ children }) =>{
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal ] = useState(false);
    // forma de resivir propiedades de un objeto y renombrarlas
  const {
    items:todos, 
    saveItems:saveTodos,
    loading,
    error,
  } = useLocalStorage("TODO_V1",[]);
  const todosCompleted = todos.filter((todo)=> !!todo.completed ).length;
  const totalTodos = todos.length;
  


  const searchTodo = todos.filter(
    (todo)=>{
      let texto = todo.text.toLowerCase();
      let searchTexto = search.toLowerCase();
      return texto.includes(searchTexto)
    }
  );

  const addTodo = (text) =>{
    const newTodo = [...todos];
    newTodo.push(
      {text,completed :false},
    ) 
    saveTodos(newTodo);
  }

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => (
        todo.text == text
      )
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }
  
  const deletedTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => (
        todo.text === text
      )
    );
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  }
  


    return (
        <TodoContext.Provider  value={{
            todosCompleted,
            totalTodos,
            search,
            setSearch,
            searchTodo,
            completeTodo,
            deletedTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            todos,
            saveTodos,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider };