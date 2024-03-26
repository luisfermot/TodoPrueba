import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const TodoCounter = () =>{

    const {
        todosCompleted: completed,
        totalTodos:total,
    } = useContext(TodoContext);

    return (
            <h2>Has completado {completed} de {total} todos</h2>
        );
}


