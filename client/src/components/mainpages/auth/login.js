import { useState } from 'react';
import './login.css';

import axios from 'axios';

const Login = () => {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(user.password)
            alert(err.response.data.msg)
        }
    }

    return ( 
        <main>
            <div className="login-container" id="login-container">
                
                <div className="form-container sign-in-container">
                    <form onSubmit={loginSubmit}>
                        <div id='banner'>Returning Customers</div>
                        <h1>Log in</h1>
                        <input type="email" name="email" required placeholder="Email"
                            value={user.email} onChange={onChangeInput}/>
                         <input type="password" name="password" required autoComplete="on"
                            placeholder="Password" value={user.password} onChange={onChangeInput} />
                        <div className='controlContainer'>
                            <label>
                                <p>Remember</p>
                                <input type="checkbox"/>
                            </label>
                            <span class="checkmark"></span>
                            <a href='/'>Forgot Password</a>
                            
                        </div>
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
            </div>
        </main>
     );
}
 
export default Login;