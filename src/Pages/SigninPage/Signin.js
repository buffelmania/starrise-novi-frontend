import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from "../../context/AuthContext";
import Moon from "../../assets/sanni-sahil-cSm2a_-25YU-unsplash.jpg"
import './SigninStyles.css'



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


<div className="SignIn">
    <div className="overlay">
        <img className="img" src={Moon} alt=""/>
        <div className="content">
            <div className="grid-container">
                <div className="grid-item item1SI">

<p>Login om te zien wanneer de zon en maan opkomen en weer ondergaan.</p>
            <p>Heb je nog geen account? Maak dan snel een <Link to="/SignUp">account aan.</Link></p>


            <form onSubmit={handleSubmit}>

                    <label>
                        Email adres
                    </label>
                    <input onChange={(e) =>setEmail(e.target.value)} type="email"/>


                    <label>
                        Wachtwoord
                    </label>
                    <input onChange={(e) =>setPassword(e.target.value)} type="password"/>
                {error && <div className="error">Inloggegevens zijn onjuist</div>}

                <button>Login</button>
            </form>
                </div>
            </div>
    </div>
</div>

</div>


    );
}

export default Signin;