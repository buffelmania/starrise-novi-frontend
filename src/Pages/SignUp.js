import React, {useState} from "react";
import "../components/SignUp/SignUpStyles.css"
import {Link, useNavigate} from "react-router-dom";
import {UserAuth} from "../context/AuthContext";
import sunrise from "../assets/john-towner-CakC6u4d95g-unsplash.jpg";
import Moon from "../assets/sanni-sahil-cSm2a_-25YU-unsplash.jpg";


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
        <div className='SignUp'>
            <div className="overlay">
                <img className="img" src={sunrise}/>
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
                <button>Maak account aan</button>
            </form>



</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default SignUp;