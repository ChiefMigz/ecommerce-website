import { useRef, useEffect } from 'react';
import '../modals.css'

const NotificationModal = ({isOpen, toggleModal, children}) => {
    const modalRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
             if (modalRef.current && !modalRef.current.contains(event.target)) {
               toggleModal();
             }
        }
        // Bind the event listener
        document.addEventListener('mouseclick', handleClickOutside);
        return() => {
              // Unbind the event listener
              document.removeEventListener('mouseclick', handleClickOutside);
        };
 }, [modalRef, toggleModal]);
    return ( 
        <div className={isOpen ? 'modalDialog' : 'modalDialogHidden'}>
            <h2>{children.title}</h2>
            <p>{children.message}</p>
            <button className='close' onClick={()=>toggleModal(!isOpen)}>Dismiss</button>
        </div>
     );
}
 
export default NotificationModal;