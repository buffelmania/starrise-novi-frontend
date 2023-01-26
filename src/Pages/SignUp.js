import React from "react";
import "../components/SignUp/SignUpStyles.css"
import {Link} from "react-router-dom";





function SignUp() {
    return (
        <div>
          <div className="SignUp">
              <h2>Heb je al een account? <Link to="/Signin">Log dan snel in</Link></h2>
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

export default SignUp;