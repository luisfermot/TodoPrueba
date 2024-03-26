import ReactDOM  from "react-dom";
import "./Modal.css";

export const Modal = ({children})=>{
    // lo que se quiere trasportar por el modal 
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        // a donde se quiere transportar.
        document.getElementById('modal')
    );
}