import React, {useState} from "react";
import "../components/SignUp/SignUpStyles.css"
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";


function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('')
    const {createUser} = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password)
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

    return (
        <div>
          <div className="SignUp">
              <h2>Heb je al een account? <Link to="/Signin">Log dan snel in</Link></h2>
          </div>
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
                <button>Maak account aan</button>
            </form>





        </div>
    );
}

export default SignUp;