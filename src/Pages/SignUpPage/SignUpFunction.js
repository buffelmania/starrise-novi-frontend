import React, {useState} from "react";
import {UserAuth} from "../../components/context/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import sunrise from "../../assets/john-towner-CakC6u4d95g-unsplash.jpg";

function SignUpFunction() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {createUser} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError('');
        try {
            await createUser(email, password);
            navigate("/account");
        } catch (e) {
            switch (e.code) {
                case "auth/email-already-in-use":
                    setError("Dit emailadres is al in gebruik.");
                    break;
                case "auth/invalid-email":
                    setError("Ongeldig emailadres.");
                    break;
                case "auth/weak-password":
                    setError("Wachtwoord moet minimaal 6 tekens zijn.");
                    break;
                default:
                    setError("Er is iets fout gegaan, probeer het later opnieuw.");
                    break;
            }
        }
    }

    return (
        <div className='SignUp'>
            <div className="overlay">
                <img className="img" src={sunrise} alt=""/>
                <div className="content">
                    <div className="grid-container">
                        <div className="grid-item item1SU">

                            <h2>Heb je al een account? <Link to="/Signin">Log dan snel in</Link></h2>

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>
                                        Email adres
                                    </label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email"/>
                                </div>

                                <div>
                                    <label>
                                        Wachtwoord
                                    </label>
                                    <input onChange={(e) =>setPassword(e.target.value)} type="password"/>
                                </div>
                                {error && <div className="error">{error}</div>}
                                <button>Maak account aan</button>
                            </form>



                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUpFunction;