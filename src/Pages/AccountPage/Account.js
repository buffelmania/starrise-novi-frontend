import React from 'react'
import {useNavigate} from "react-router-dom";
import "./AccountStyles.css"
import {UserAuth} from "../../components/context/AuthContext";
import Button from "../../components/Button/Button";

function Account() {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <section className="Account">
            <header>
            <h2>Account</h2>
            </header>
            <main>
            <p>Gebruiker Email: {user && user.email }</p>
            <Button label="Log uit" onClick={handleLogout} />
            </main>

        </section>
    );
}

export default Account;