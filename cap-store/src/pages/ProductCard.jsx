import { Link } from 'react-router-dom';

function ProductCard({ id, title, price, image }) {
  return (
    <>
      <style>{`
        .card {
          background: #fff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          transition: all 0.4s ease;
          border: 1px solid #eee;
          font-family: 'Poppins', sans-serif;
          max-width: 320px;
          display: flex;
          flex-direction: column;
        }

        /* Card Hover Effect */
        .card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          border-color: #e67e22;
        }

        /* Image Container */
        .card-image {
          width: 100%;
          height: 260px;
          overflow: hidden;
          background-color: #f9f9f9;
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .card:hover .card-image img {
          transform: scale(1.1);
        }

        /* Info Section */
        .card-info {
          padding: 20px;
          text-align: center;
        }

        .card-title {
          font-size: 19px;
          font-weight: 700;
          color: #222;
          margin-bottom: 8px;
          text-transform: capitalize;
        }

        .card-price {
          font-size: 22px;
          font-weight: 800;
          color: #e67e22; 
          margin-bottom: 15px;
        }

        /* Action Buttons */
        .card-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .add-to-cart {
          width: 100%;
          padding: 12px;
          background-color: #222;
          color: #fff;
          border: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: 0.3s;
        }

        .add-to-cart:hover {
          background-color: #e67e22;
        }

         .view-detail {
          text-decoration: none;
        }

      `}</style>

      <Link to={`/productcard/${id}`} className='view-detail'>
        <div className="card">
          <div className="card-image">
            <img
              src={image}
              alt={title}
            />
          </div>

          <div className="card-info">
            <h3 className="card-title">{title}</h3>
            <div className="card-price">Rs. {price}</div>

            <div className="card-actions">
              <button className="add-to-cart">
                Add to Cart
              </button>

            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;