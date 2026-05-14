function Contact() {
  return (
    <>
      <style>{`
        .contact-section {
          padding: 60px 10%;
          font-family: 'Poppins', sans-serif;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .contact-info h2 {
          font-size: 40px;
          margin-bottom: 15px;
          color: #222;
        }

        .contact-info p {
          color: #777;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .details { margin-top: 30px; }
        
        .detail-box {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }

        .icon-circle {
          width: 45px;
          height: 45px;
          background: #fdf2e9;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: 20px;
        }

        .form-card {
          background: #fff;
          padding: 35px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .input-group {
          margin-bottom: 20px;
        }

        .input-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #333;
        }

        .input-group input, 
        .input-group textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          outline: none;
        }

        .input-group input:focus { border-color: #e67e22; }

        .send-btn {
          width: 100%;
          padding: 14px;
          background: #222;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: 0.3s;
        }

        .send-btn:hover { background: #e67e22; }

        @media (max-width: 768px) {
          .contact-container { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-section">
        <div className="contact-container">

          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>
              Have any questions about our caps or want to place a custom order?
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="details">
              <div className="detail-box">
                <div className="icon-circle">📍</div>
                <div>
                  <strong>Address</strong>
                  <p style={{ margin: 0 }}>Karachi, Pakistan</p>
                </div>
              </div>
              <div className="detail-box">
                <div className="icon-circle">📞</div>
                <div>
                  <strong>Phone</strong>
                  <p style={{ margin: 0 }}>+92 300 1234567</p>
                </div>
              </div>
              <div className="detail-box">
                <div className="icon-circle">✉️</div>
                <div>
                  <strong>Email</strong>
                  <p style={{ margin: 0 }}>capstore@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card">
            <form>
              <div className="input-group">
                <label for="name">Full Name</label>
                <input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div className="input-group">
                <label for="email">Email Address</label>
                <input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="input-group">
                <label for="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="send-btn">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;