import React from 'react'
import {useNavigate} from "react-router-dom";
import "./AccountStyles.css"
import {UserAuth} from "../../components/context/AuthContext";
import Button from "../../components/Button/Button";

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
            <Button label="Log uit" onClick={handleLogout} />
        </div>
    )
}

export default Account