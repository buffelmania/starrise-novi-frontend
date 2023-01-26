import React from 'react'
import {useNavigate} from "react-router-dom";
import "../components/account/AccountStyles.css"
import {UserAuth} from "../context/AuthContext";

function Account(){
    const {user, logout} = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
try {
    await logout()
    navigate('/')
    } catch (e){
    console.log(e.message)
}
    }
    return (
        <div className="Account">
            <h2>Account</h2>
            <p>Gebruiker Email: {user && user.email }</p>
            <button onClick={handleLogout}>Log uit</button>
        </div>
    )
}

export default Account