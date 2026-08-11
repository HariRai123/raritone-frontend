import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <section className="hero">

        <div className="hero-content">
          <p className="hero-subtitle">
            WELCOME TO RARITONE
          </p>

          <h1>
            Discover
            <span> Something Rare.</span>
          </h1>

          <p className="hero-description">
            Explore our curated collection of unique products
            designed to bring style and quality into your everyday life.
          </p>

          <div className="hero-buttons">
            <Link to="/products" className="hero-button">
              Shop Collection
            </Link>

            <a href="#try-on" className="try-on-outline-button">
              Try On
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-circle">
            R
          </div>
        </div>

      </section>


      {/* FEATURES */}
      <section className="features">

        <div className="feature">
          <div>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable shipping.</p>
          </div>
        </div>

        <div className="feature">
          <div>
            <h3>Premium Quality</h3>
            <p>Products carefully selected for you.</p>
          </div>
        </div>

        <div className="feature">
          <div>
            <h3>Secure Shopping</h3>
            <p>Your shopping experience matters.</p>
          </div>
        </div>

      </section>

      <section className="try-on-section" id="try-on">

        <div className="try-on-container">
          <div className="try-on-content">

            <p className="section-label">
              VIRTUAL EXPERIENCE
            </p>

            <h2>
              See It.
              <br />
              <span>Try It.</span>
              <br />
              Love It.
            </h2>

            <p className="try-on-description">
              Experience your favorite Raritone products
              before you buy. Upload your photo and discover
              how your selected style looks on you.
            </p>

            <button className="try-on-button">
            Start Virtual Try On
            </button>

            <p className="try-on-note">
              No account required to preview
            </p>

          </div>
          <div className="try-on-preview">

            <div className="preview-header">
              <div>
                <span className="preview-dot"></span>
                Virtual Try On
              </div>

              <span className="preview-close">×</span>
            </div>


            <div className="preview-body">

              {/* USER PHOTO PLACEHOLDER */}
              <div className="person-preview">

                <div className="person-placeholder">

                  <div className="person-head"></div>

                  <div className="person-body">
                    <span>YOUR PHOTO</span>
                  </div>

                </div>

                <div className="camera-frame"></div>

              </div>

              <div className="product-selector">

                <div className="selector-title">
                  <span>Select a style</span>
                  <span className="selector-arrow">→</span>
                </div>

                <div className="mini-products">

                  <div className="mini-product active">
                    <div className="mini-product-image">
                      kids
                    </div>
                  </div>

                  <div className="mini-product">
                    <div className="mini-product-image">
                      women
                    </div>
                  </div>

                  <div className="mini-product">
                    <div className="mini-product-image">
                       mens
                    </div>  
                  </div>

                  <div className="mini-product">
                    <div className="mini-product-image">
                      shirts
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div className="preview-footer">

              <div className="upload-preview">
                <span className="upload-icon">↑</span>

                <div>
                  <strong>Upload your photo</strong>
                  <small>JPG or PNG</small>
                </div>
              </div>

              <button className="preview-try-button">
                Try Now
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="how-it-works">

        <div className="how-header">
          <p className="section-label">
            SIMPLE & EASY
          </p>

          <h2>
            How Try On Works
          </h2>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>

            <h3>Upload</h3>

            <p>
              Add a photo of yourself to start
              your virtual experience.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>

            <h3>Choose</h3>

            <p>
              Pick your favorite product from
              our collection.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>

            <h3>Try On</h3>

            <p>
              Preview your selected style before
              making your purchase.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;

