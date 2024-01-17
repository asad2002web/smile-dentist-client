
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const [navbar, setNavbar] = useState()
  const navigate = useNavigate()
  const { user, logoutUser } = useAuth()


  const handleLogout = () => {
    try {
      logoutUser()
      navigate('/')
    } catch (error) {
      console.log({
        error: error.message
      })
    }
  }

  const navList = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/services">Services</Link></li>
    <li><Link to="/blogs">Blogs</Link></li>
    <li><Link to="/contacts">Contacts</Link></li>
    {
      user ? <li><Link to="/dashboard">Dashboard</Link></li>
        : <li><Link to="/login">Login</Link></li>
    }
    {
      user && <li><Link onClick={handleLogout} to="/">LogOut</Link></li>
    }

  </>

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (

    <div className={`navbar shadow ${navbar ? 'bg-blue-500' : ''}`}>
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content -ml-[10px] mt-5 z-[1] shadow bg-gray-400 w-96 h-screen text-3xl text-black rounded
"
          >
            {navList}
          </ul>
        </div>

        <a className={`ml-2 text-white text-3xl text-${navbar ? 'white' : 'black'}`}><span className='text-7xl'>s</span>mile Dentist</a>
      </div>
      <div className="navbar-center hidden lg:flex py-2 ">
        <ul className={`menu menu-horizontal px-1 lg:text-xl text-${navbar ? 'white' : 'black'}`}>
          {navList}
        </ul>
      </div>
      <div className="navbar-end flex items-center">
        <a className={`btn md:text-xl text-sm shadow-2xl ${navbar ? 'text-black' : 'text-black'}`} href="#">
          Book Appointment
        </a>
      </div>
    </div>
  );
};

export default Navbar;
