
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background-color: #111; /* Dark background */
          color: #fff;
          padding: 40px 20px;
          text-align: center;
          font-family: 'Poppins', sans-serif;
          margin-top: 60px;
        }

        .footer-logo {
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 2px;
          margin-bottom: 20px;
          color: #fff;
        }

        .footer-logo span {
          color: #e67e22; /* Theme color */
        }

        .footer-links ul{
          margin-bottom: 25px;
          margin-left: -30px;
          display: flex;
          justify-content: center;
          gap: 30px;
          list-style: none;
        }

        .footer-links a {
          text-decoration: none;
          color: #bbb;
          font-size: 15px;
          font-weight: 500;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #e67e22;
        }

        .footer-divider {
          height: 1px;
          width: 80%;
          max-width: 600px;
          background: rgba(255, 255, 255, 0.1);
          margin: 0 auto 20px auto;
        }

        .copyright {
          color: #777;
          font-size: 13px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .copyright b {
          color: #999;
        }
      `}</style>

      <footer className="footer">
        <div className="footer-logo">
          CAP<span>STORE</span>
        </div>

        <div className="footer-links">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>

        <div className="footer-divider"></div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} <b>CAPSTORE</b>. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;