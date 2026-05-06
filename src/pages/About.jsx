function About() {
  return (
    <>
      <style>{`
        .about-section {
          padding: 80px 10%;
          font-family: 'Poppins', sans-serif;
          color: #222;
          background-color: #fff;
        }

        /*  Header  */
        .about-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .about-header h1 {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .about-header h1 span {
          color: #e67e22;
        }

        .about-header p {
          color: #777;
          font-size: 18px;
        }

        /*  Main Content  */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .about-image img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 20px 20px 0px #fdf2e9; /* Decorative shadow */
        }

        .about-text h2 {
          font-size: 32px;
          margin-bottom: 20px;
        }

        .about-text p {
          line-height: 1.8;
          color: #555;
          margin-bottom: 20px;
        }

        /*  Stats Section  */
        .stats-container {
          display: flex;
          justify-content: space-between;
          margin-top: 80px;
          padding: 40px;
          background-color: #222;
          color: #fff;
          border-radius: 12px;
          text-align: center;
        }

        .stat-item h3 {
          font-size: 36px;
          color: #e67e22;
          margin-bottom: 5px;
        }

        .stat-item p {
          font-size: 14px;
          color: #bbb;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-header h1 { font-size: 36px; }
          .stats-container {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>

      <div className="about-section">

        <div className="about-header">
          <h1>About <span>CAPSTORE</span></h1>
          <p>Defining your style since 2020</p>
        </div>

        <div className="about-grid">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Cap Store Workshop" 
            />
          </div>
          
          <div className="about-text">
            <h2>The Quality You Deserve</h2>
            <p>
              At CapStore, we believe that a cap is more than just an accessory—it's a statement. 
              Founded in Karachi, we started with a simple mission: to provide high-quality, 
              durable, and trendy headwear for everyone.
            </p>
            <p>
              Every single cap in our collection is crafted with premium materials and 
              tested for comfort. Whether you're hitting the streets or the gym, 
              our caps are designed to fit your lifestyle perfectly.
            </p>
            <p>
              Thank you for being part of our journey. We continue to innovate and 
              bring you the latest trends in the world of caps.
            </p>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>120+</h3>
            <p>Exclusive Designs</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Countries Shipped</p>
          </div>
          <div className="stat-item">
            <h3>4.9/5</h3>
            <p>User Rating</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;