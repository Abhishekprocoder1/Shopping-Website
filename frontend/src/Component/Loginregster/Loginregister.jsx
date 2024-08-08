import React, { useContext, useState } from 'react'
import './Loginregister.css';
import { ShopContext } from '../../Context/ShopContext';

const Loginregister = () => {

    const { url } = useContext(ShopContext)
    const [state, setState] = useState("login");

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })


    const apiRequest = async (endpoint, successRedirect) => {
        try {
            console.log(`${endpoint} Function Executed`, formData);
    
            const response = await fetch(`${url}/${endpoint}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
            });
    
            const responseData = await response.json();
    
            if (response.ok && responseData.success) {
                localStorage.setItem('auth-token', responseData.token);
                window.location.replace(successRedirect);
            } else {
                alert(responseData.error || 'An error occurred');
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
        }
    }
    
    const login = () => apiRequest('login', '/');
    
    const register = () => apiRequest('signup', '/login');
    
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    




  return (
    <div>
 <div className='loginsingh'>
            <div className="loginsingup-continer">
                <h1>{state}</h1>
                <div className="loginsingup-felid">
                    {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type='text' placeholder='Your Name' /> : <></>}
                    <input name='email' value={formData.email} type='email' onChange={changeHandler} placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type='password' placeholder='Password' />
                </div>
                <button onClick={() => { state === "Login" ? login() : register() }}>Continue</button>
                {state === "Sign Up" ?
                    <p className='loginsingup-login'>Already have an account? <span onClick={() => { setState("Login") }}>Login  here</span></p> :
                    <p className='loginsingup-login'>Create an account <span onClick={() => { setState("Sign Up") }}  >Sign Up here</span></p>
                }
                <div className="loginsingup-agree">
                    <input type='checkbox' name='' id='' />
                    <p>By continuing, i agree to the terms of use & privacy.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loginregister