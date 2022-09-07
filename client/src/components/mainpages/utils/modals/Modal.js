import "./Modal.css";
import  ReactDOM  from "react-dom";

function Modal({children, onClose }) {
    return (
        <div className="Modal">
            <div className="modal-content">
            <button className="btn-modal" onClick={onClose}>X</button>
            {children}
        </div>
    </div>
    )
}


export default function ModalPortal ({children, onClose}) {
    return ReactDOM.createPortal(
        <Modal onClose={onClose}>
            {children}
        </Modal>, document.getElementById("modal-root")
    )
}

