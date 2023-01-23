import React, {useState} from "react";
import {BiSearch} from 'react-icons/bi'
import {BsPerson} from "react-icons/bs";
import {HiOutlineMenuAlt4} from "react-icons/hi";
import './NavbarStyles.css'
import {AiOutlineClose} from 'react-icons/ai';
import {FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube} from "react-icons/fa";
import {Link } from "react-router-dom";






function Navbar(){
    const[nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return(
        <div className={nav ? 'navbar navbar-bg': 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>StarRise</h2>
            </div>


            <ul className="nav-menu">
                <Link className="nav-link" to="/">   <li> Home</li></Link>
                <Link className="nav-link" to="/Wist"><li> Wist je dat?</li></Link>
                <Link className="nav-link" to="/Links"><li> Interessante links</li></Link>
                <Link className="nav-link" to="/RegisterLogin"><li>Registreer en Login</li></Link>
                <Link className="nav-link" to="/ZonEnMaan"><li>Zon en Maan</li></Link>

            </ul>


            <div className="nav-icons">
                <BiSearch className='icon' style={{marginRight: '1rem'}}/>
                <BsPerson className='icon'/>
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon'/> ): (<AiOutlineClose style={{color: '#000'}} className='icon'/>)}
            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link className="nav-link-mobile" to="/">   <li> Home</li></Link>
                    <Link className="nav-link-mobile" to="/Wist"><li> Wist je dat?</li></Link>
                    <Link className="nav-link-mobile" to="/Links"><li> Interessante links</li></Link>
                    <Link className="nav-link-mobile" to="/RegisterLogin"><li>Registreer en Login</li></Link>
                    <Link className="nav-link" to="/ZonEnMaan"><li>Zon en Maan</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Zoeken</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon'/>
                        <FaInstagram className='icon'/>
                        <FaTwitter className='icon'/>
                        <FaPinterest className='icon'/>
                        <FaYoutube className='icon'/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar