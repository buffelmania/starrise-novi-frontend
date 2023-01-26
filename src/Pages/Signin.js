import React from "react";
import "../Signin/SignInStyles.css"
import {Link} from 'react-router-dom';







function Signin() {
    return (
        <div>
            <div className="Signin">


<h2>Login om te zien wanneer de zon en maan opkomen en weer ondergaan.</h2>
            <h2>Heb je nog geen account? Maak dan snel een <Link to="/SignUp">account aan.</Link></h2>
</div>
            <form>
                <div>
                    <label>
                        Email adres
                    </label>
                    <input type="email"/>
                </div>
            </form>
            <form>
                <div>
                    <label>
                        Wachtwoord
                    </label>
                    <input type="password"/>
                </div>
                <button>Maak account aan</button>
            </form>

</div>

    );
}

export default Signin;