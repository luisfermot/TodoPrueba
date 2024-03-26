import { useContext, useState } from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

export const TodoForm = ()=>{
    const [ newTodo, setNewTodo ] = useState('');
    const {
        setOpenModal,
        todos,
        saveTodos,
        addTodo,
    }  = useContext(TodoContext);
    
    const onSubmit = (event) =>{
        event.preventDefault();
        setOpenModal(false);
        addTodo(newTodo);
    }
    
    const onCancel = () =>{
        setOpenModal(false);
    }
    const onChange = (event) =>{
        setNewTodo(event.target.value);
    }

    return (
        <form className='new-todo' onSubmit={onSubmit}>
            <h3>¡¡Crea tu nuevo Todo!!</h3>  
            <textarea 
                onChange={onChange}
                value={newTodo}
                name="newTodo" 
                className='form-control' 
                type='text' 
                placeholder='nuevo todo!!' 
            />
            <div className='conten-buttons'>
            <button className='btn btn-danger' onClick={onCancel}>Cancelar</button>
            <button type="submit" className='btn btn-primary'>Aceptar</button>
            </div>
        </form>
    );
}
