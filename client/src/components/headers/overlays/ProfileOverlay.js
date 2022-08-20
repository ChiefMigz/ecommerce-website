import { Link } from 'react-router-dom';
import '../../../index.css';

const ProfileOverlay = () => {
    return ( 
        <div className='overlay'>
            <Link to='/login'>Sign In</Link>
        </div>
     );
}
 
export default ProfileOverlay;