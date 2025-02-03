import React from "react";
import { Link } from "react-router-dom";
const Regi = () => {
    return ( 
        <div className="regi">
            <p>WHY AMAZON.IN</p>
            <h2>Some Numbers Are Important</h2>
        </div>
     );
}
const Star = () => {
    return ( 
        <div className="star">
            <p><h2>1M+</h2><br></br>Customer</p>
            <p><h2>12+</h2><br></br>Years of Excellence</p>
            <p><h2>41+</h2><br></br>R&D Engineers</p>
            <p><h2>78+</h2><br></br>Countries</p>
            <p><h2>3287+</h2><br></br>Partners</p>
            <p><h2>42+</h2><br></br>Awards Received</p>
        </div>
     );
}
const Image = () => {
    return (
        <div className="star-in">
                <img src="https://ecomclips.com/blog/wp-content/uploads/2024/05/ppcdisplayadsazguidecopy-ezgif.com-png-to-webp-converter.webp"/>
            </div>
      );
}
const Footer = () => {
    return (
      <footer className="footer">
           <div className="footer-details-cont">
              <div className="social-logos-cont">
                  <p>Design outstanding interfaces with
                      advanced Figma features in a matter of minites.
                  </p>
                  <i class='bx bxl-facebook-circle'></i>
                  <i class='bx bxl-google'></i>
                  <i class='bx bxl-apple'></i>
                  <i class='bx bxl-instagram'></i>
              </div>
              <div style={{display:'flex', flexDirection:'column', gap:'20px',flexWrap:'wrap'}}>
                  <div style={{display:'flex',gap:'50px',flexWrap:'wrap'}}>
                      <div>
                          <h2>START A BUSINESS</h2>
                          <ul>
                              <li>Features</li>
                              <li>Solutions</li>
                              <li>Integration</li>
                              <li>Enterprise</li>
                              <li>Prizes</li>
                          </ul>
                      </div>
                      <div>
                          <h2>GOVERNMENT REGISTRATION</h2>
                          <ol>
                              <li>Partners</li>
                              <li>Community</li>
                              <li>Developers</li>
                              <li>App</li>
                              <li>Blog</li>
                          </ol>
                      </div>
                  </div>
                  <div style={{display:'flex',gap:'50px',flexWrap:'wrap'}}>
                      <div>
                          <h2>COMPLIANCE & TAX</h2>
                          <ul>
                          <li><a href="">Channels</a></li>
                          <li><a href="">Scale</a></li>
                          <li><a href="">Watch the Demo</a></li>
                          <li><a href="">Our Competition</a></li>
                          </ul>
                      </div>
                      <div>
                          <h2>BIS & CDSCO</h2>
                          <ol>
                              <li><a href="">About Us</a></li>
                              <li><a href="">News</a></li>
                              <li><a href="">Leadership</a></li>
                              <li><a href="">Media Kit</a></li>
                          </ol>
                      </div>
                  </div>
              </div>
           </div>
           <div className="copyright-cont">
              <i class='bx bx-down-arrow-alt'></i>
              <p>@2025 Amazon.All rights Reserved</p>
           </div>
          </footer>
    )
}



function Live() {
    return ( 
                <div>
                    <header>
                    <img src="https://assets.upstox.com/content/assets/images/cms/202451/Amazon%20logo.png"/>
                    <input type="checkbox" id="check"></input>
                    <label for="check" className="checkbut">
                    <i class='bx bx-menu'></i>
                    </label>
                    <nav>
                    <Link to="/Home">Home</Link>
                <Link to="/Java">About us</Link>
                <Link to="/Client">Clients</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Faq">Questions</Link>
                <Link to="/Live">LiveCount</Link>
                <Link to="/Form">Form</Link>
                    </nav>
                    </header>
                    <Regi/>
                    <Star/>
                    <Image/>
                    <Footer/>
                    </div>
     );
}

export default Live;