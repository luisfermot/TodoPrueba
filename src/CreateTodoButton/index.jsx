import { FcPlus } from "react-icons/fc";
import "./CreateTodoButton.css"

export const CreateTodoButton =  ({action}) =>{
    return (
        <h1 onClick={action} className="btn-add">
            <FcPlus />
        </h1>
    );

}