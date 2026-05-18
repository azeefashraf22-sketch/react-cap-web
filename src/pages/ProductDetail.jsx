import { useParams } from "react-router-dom";
import { products } from "../product";

function ProductDetail() {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Product Not Found!</h2>;
  }

  return (
    <div style={{ padding: "80px 10%", display: "flex", gap: "50px", fontFamily: 'Poppins' }}>
      <div style={{ flex: 1 }}>
        <img src={product.image} alt={product.title} style={{ width: "100%", borderRadius: "15px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }} />
      </div>

      <div style={{ flex: 1 }}>
        <h1 style={{ fontSize: "45px", marginBottom: "10px" }}>{product.title}</h1>
        <h2 style={{ color: "#e67e22", fontSize: "30px", marginBottom: "20px" }}>Rs. {product.price}</h2>
        <p style={{ color: "#666", lineHeight: "1.8", fontSize: "17px", marginBottom: "30px" }}>
          This premium {product.title} is crafted with high-quality materials to ensure
          durability and comfort. Perfect for any outdoor activity or casual day out.
        </p>
        <button className='btn-hover' style={{
          padding: "15px 40px",
          backgroundColor: "#222",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: "700",
          cursor: "pointer"
        }}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;