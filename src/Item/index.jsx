import './Item.css';
import { FcFullTrash, FcSynchronize, FcOk,  } from "react-icons/fc";

export const Item = ({text, completed, onCompleted, onDeleted}) => {
    return(
        <div className={`item-contenedor`}>
            <h5 className={completed ? ""  : "estado-abierta"} onClick={onCompleted}>
               {
                completed ?
                <FcOk />
                :
                <FcSynchronize />
               }
            </h5>
            <p className={completed ? "completa" : "estado-abierta"}>
                {text}
            </p>
            <h5 onClick={onDeleted}>
                <FcFullTrash />
            </h5>
        </div>         
    );

}

