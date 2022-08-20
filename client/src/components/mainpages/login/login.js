import './login.css';

const Login = () => {
    return ( 
        <div>
            <div class="login-container" id="login-container">
                
                <div className="form-container sign-in-container">
                    <form action="#">
                        <div id='banner'>Returning Customers</div>
                        <h1>Log in</h1>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <div>
                            <a href='/'>Forgot Password</a>
                            Remember Me
                            <input type="checkbox"/>
                            <span class="checkmark"></span>
                            
                        </div>
                        <button>Sign In</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Login;