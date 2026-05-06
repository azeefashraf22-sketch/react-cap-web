import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 5%;
          background-color: #fff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          font-family: 'Poppins', sans-serif;
        }

        .logo {
          font-size: 24px;
          font-weight: 800;
          color: #222;
          text-transform: uppercase;
          text-decoration: none;
          letter-spacing: 1px;
        }

        .logo span { color: #e67e22; }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 35px;
          margin: 0;
          padding: 0;
        }

        .nav-links a {
          text-decoration: none;
          color: #222; 
          font-weight: 450; 
          font-size: 16px;
          position: relative;
          padding: 8px 0;
          transition: 0.3s;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px; 
          bottom: 0;
          left: 50%;
          background-color: #e67e22;
          transform: translateX(-50%);
          transition: width 0.3s ease-in-out;
        }

        /* Hover Effect */
        .nav-links a:hover::after {
          width: 100%;
        }

        .nav-links a.active {
          color: #e67e22;
        }
        .nav-links a.active::after {
          width: 100%;
        }

        /* Button with Hover */
        .btn-get {
          background: #222;
          color: #fff;
          padding: 10px 22px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s ease;
          border: 2px solid #222;
        }

        .btn-get:hover {
          background: #e67e22;
          border-color: #e67e22;
          transform: translateY(-2px); 
        }
      `}</style>

      <nav className="navbar">
        <NavLink to="/" className="logo">
          CAP<span>STORE</span>
        </NavLink>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <NavLink to="/contact" className="btn-get">Get a Cap</NavLink>
      </nav>
    </>
  );
}

export default Navbar;