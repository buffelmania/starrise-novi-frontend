import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../../components/context/AuthContext';
import Moon from '../../assets/sanni-sahil-cSm2a_-25YU-unsplash.jpg';
import './SigninStyles.css';
import Form from '../../components/Form/Form';
import LoadingSpinner from '../../components/Loading/LoadingSpinner';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            await signIn(email, password);
            navigate('/account');
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="SignIn">
            <div className="overlay">
                <img className="img" src={Moon} alt="" />
                <div className="content">
                    <div className="grid-container">
                        <div className="grid-item item1SI">
                            <main>
                                <p>
                                    Login om te zien wanneer de zon en maan opkomen en weer ondergaan.
                                </p>
                                <p>
                                    Heb je nog geen account? Maak dan snel een <Link to="/SignUp">account aan.</Link>
                                </p>

                                <Form onSubmit={handleSubmit} buttonText={isLoading ? 'Laden...' : 'Login'} error={error}>
                                    <label>Email adres</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" />

                                    <label>Wachtwoord</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" />
                                </Form>
                                {isLoading && <LoadingSpinner loading={isLoading} />}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
