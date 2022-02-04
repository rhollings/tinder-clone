import React from "react";
import "./LoginScreen.css";
import { Link } from "react-router-dom";



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
            <h1>Welcome to Tinder</h1>
            <div className='login_form'>
            <form class="login-form">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button disabled className="login__button button">Login</button>
                <Link to="/home">
                    <button className="continue__button button">Continue (as Guest)</button>
                </Link>
            </form>
            </div>
        </div>
    )
}

export default LoginScreen;
