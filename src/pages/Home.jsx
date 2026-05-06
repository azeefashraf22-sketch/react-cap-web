import ProductCard from './ProductCard';
import { products } from '../product';

function Home() {
  return (
    <>
      <style>{`
        .home-container {
          font-family: 'Poppins', sans-serif;
          color: #222;
        }

        /* Hero Section */
        .hero {
          height: 80vh;
          background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                      url('https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 20px;
        }

        .hero h1 {
          font-size: 60px;
          font-weight: 800;
          margin-bottom: 15px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero p {
          font-size: 20px;
          margin-bottom: 30px;
          max-width: 600px;
          font-weight: 300;
        }

        .shop-now-btn {
          padding: 15px 40px;
          background-color: #e67e22;
          color: white;
          text-decoration: none;
          font-weight: 700;
          border-radius: 5px;
          transition: 0.3s;
          text-transform: uppercase;
        }

        .shop-now-btn:hover {
          background-color: #fff;
          color: #222;
        }

        /*  Features Section  */
        .features {
          display: flex;
          justify-content: space-around;
          padding: 60px 10%;
          background: #fff;
          text-align: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .feature-box h3 {
          font-size: 18px;
          margin-top: 10px;
          color: #e67e22;
        }

        .feature-box p {
          color: #777;
          font-size: 14px;
        }

        /*  Products Section Placeholder  */
        .products-section {
          padding: 60px 10%;
          background-color: #f9f9f9;
        }

        .section-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-title h2 {
          font-size: 36px;
          font-weight: 800;
          position: relative;
          display: inline-block;
          padding-bottom: 10px;
        }

        .section-title h2::after {
          content: '';
          position: absolute;
          width: 60%;
          height: 4px;
          background-color: #e67e22;
          bottom: 0;
          left: 20%;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero h1 { font-size: 40px; }
          .hero p { font-size: 16px; }
        }
      `}</style>

      <div className="home-container">

        
        <section className="hero">
          <h1>Upgrade Your Style</h1>
          <p>Discover our exclusive collection of premium caps designed for comfort and trend.</p>
          <a href="#shop" className="shop-now-btn">Shop Collection</a>
        </section>

        <section className="features">
          <div className="feature-box">
            <span>🚚</span>
            <h3>Free Shipping</h3>
            <p>On all orders over $50</p>
          </div>
          <div className="feature-box">
            <span>🛡️</span>
            <h3>Secure Payment</h3>
            <p>100% safe checkout</p>
          </div>
          <div className="feature-box">
            <span>⭐</span>
            <h3>Premium Quality</h3>
            <p>Crafted with best materials</p>
          </div>
        </section>

        <section id="shop" className="products-section">
          <div className="section-title">
            <h2>Our Best Sellers</h2>
            <p>Explore the most popular caps this season</p>
          </div>

          <div className="product-grid">
            {
              products.map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}     
                  title={item.title}
                  price={item.price}
                  image={item.image}
                />
              ))
            }
          </div>
        </section>

      </div>
    </>
  );
}

export default Home;