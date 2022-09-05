import { useState } from 'react';
import '../modals.css';

const DeliveryModal = ({isVisble = true}) => {

    const [isModalVisible, setIsModalVisible] = useState(isVisble)
    return ( 
        <div>
            <div class={isModalVisible ? 'modalDialog' : 'modalDialogHidden'}>
                <div>
                    <button className='close' onClick={()=> setIsModalVisible(!isModalVisible)}>x</button>
                    <h2>Is delivery available?</h2>
                    <p>Zip Code:</p>
                </div>
            </div>
        </div>
    );
}
 

export default DeliveryModal;