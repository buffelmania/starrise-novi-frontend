import React, {useState} from "react";
import "../Signin/SignInStyles.css"
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from "../context/AuthContext";


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

    return (
        <div>
            <div className="Signin">


<h2>Login om te zien wanneer de zon en maan opkomen en weer ondergaan.</h2>
            <h2>Heb je nog geen account? Maak dan snel een <Link to="/SignUp">account aan.</Link></h2>
</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Email adres
                    </label>
                    <input onChange={(e) =>setEmail(e.target.value)} type="email"/>
                </div>
                <div>
                    <label>
                        Wachtwoord
                    </label>
                    <input onChange={(e) =>setPassword(e.target.value)} type="password"/>
                </div>
                <button>Login</button>
            </form>

</div>

    );
}

export default Signin;