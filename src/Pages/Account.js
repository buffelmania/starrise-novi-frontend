import React from 'react'
import "../components/account/AccountStyles.css"
import {UserAuth} from "../context/AuthContext";

function Account(){
    const {user, logout} = UserAuth();
    return (
        <div className="Account">
            <h2>Account</h2>
            <p>Gebruiker Email: {user && user.email }</p>
            <button>Log uit</button>
        </div>
    )
}

export default Account