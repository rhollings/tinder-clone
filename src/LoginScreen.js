import React from 'react';
import "./LoginScreen.css";


const LoginScreen = () => {
    
    return (
        <div className='login__page'>
            <div>
                <img
                className="login__logo"
                src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
                alt="tinder logo"
                />
            </div>
            <div className='login_form'>
            <form class="login-form">
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <button className='button login'>login</button>
                <button className='button continue'>Contiue (as Guest)</button>
            </form>
            </div>
        </div>
    )
}

export default LoginScreen;
