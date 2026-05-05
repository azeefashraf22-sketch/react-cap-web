import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <style>{`
        .notfound-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          background-color: #f8f9fa;
          font-family: 'Segoe UI', sans-serif;
        }

        .notfound-container h1 {
          font-size: 120px;
          margin: 0;
          color: #e67e22;
          font-weight: 900;
        }

        .notfound-container h2 {
          font-size: 30px;
          color: #333;
          margin-bottom: 20px;
        }

        .notfound-container p {
          color: #666;
          margin-bottom: 30px;
        }

        .home-btn {
          padding: 12px 25px;
          background-color: #222;
          color: white;
          text-decoration: none;
          border-radius: 5px;
          transition: 0.3s;
          font-weight: bold;
        }

        .home-btn:hover {
          background-color: #e67e22;
        }
      `}</style>

      <div className="notfound-container">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you are looking for is not in our store!</p>
        <Link to="/" className="home-btn">Go Back to Home</Link>
      </div>
    </>
  );
}

export default NotFound;