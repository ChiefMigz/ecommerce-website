import { Link } from 'react-router-dom';
import '../../../index.css';

const ProfileOverlay = (props) => {
    return ( 
        <div className='overlay'>
            <ul>
            { 
                props.choices.map(choice => {
                    return <li><Link to={choice.replace(/\s/g, '').trim().toLowerCase()}>{choice}</Link></li>
                })
            }
            </ul>
        </div>
     );
}
 
export default ProfileOverlay;