import { useState, useEffect } from "react";

const  items = [
    {text:"la historia",completed :true},
    {text:"escuchar musica",completed :false},
    {text:"ver peliculas",completed :true},
    {text:"jugar un juego",completed :false}, 
    {text:"hacer un juego",completed :false}, 
    {text:"tarea",completed :false}, 
  ]
// custom hook  para persistencia en localStorage
localStorage.setItem("TODO_V1",JSON.stringify(items));
const useLocalStorage = (itemName, initialValue) =>{
    const [ items,setItems ] = useState(initialValue);
    const [ loading,setLoading ] =useState(true);
    const [ error,setError ] = useState(false);
 
    useEffect(()=>{
			setTimeout(()=>{
				
				try {
						let localStorageItem = localStorage.getItem(itemName);
						let parseItems;
						if(!localStorageItem){
							localStorage.setItem(itemName,JSON.stringify([]));
							parseItems = initialValue;
						}else{
							parseItems = JSON.parse(localStorageItem);
							setItems(parseItems);
						}
						setLoading(false);
				} catch (error) {
						setLoading(false);
						setError(true);
				}
			},2000);
    },[]);
    
  
    const saveItems = (newTodos) =>{
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setItems(newTodos);
    }
  
    // return [items,saveItems]
    // cuando se van a retornar mas de dos propiedades se recomienda el uso de objetos
    return {
        items,
        saveItems,
        loading,
        error
    }
  }

export { useLocalStorage };