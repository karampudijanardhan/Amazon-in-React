import React from "react";
import { Link } from "react-router-dom";
const Digital = () => {
    return ( 
        <div className="digital">
            <p>Explore Our Blogs</p>
            <h2>Accelerate Digital Transforamtion</h2>
        </div>
     );
}
const Comapanybox= () => {
    return ( 
        <div className="company-box">
            <img src="https://register-karo-front-end-development-internship-website.vercel.app/blog1.jpeg"/>
            <p>Prabhash Mishra .1 jan 2024 - Today</p>
            <h2>Small Business & Startuo </h2>
            <p>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowel Wining Dynasty?</p>
            <button>tax & Audit</button>
            <button>Management</button>
        </div>
     );
}
const Offer= () => {
    return ( 
        <div className="company-box">
            <img src="https://register-karo-front-end-development-internship-website.vercel.app/blog2.jpeg"/>
            <p>Prabhash Mishra .1 jan 2024 - Today</p>
            <h2>Scale-up Company Offer </h2>
            <p>Mental models are simple expression of complex process or relationship</p>
            <button>Tax</button>
            <button>Compliance</button>
        </div>
     );
}
const Package= () => {
    return ( 
        <div className="company-box">
            <img src="https://register-karo-front-end-development-internship-website.vercel.app/6b913ddf85158d3f3246fba7da982400.jpeg"/>
            <p>Prabhash Mishra .1 jan 2024 - Today</p>
            <h2>Growing Business Package </h2>
            <p>Introduction to wireFraming and its Principles Learn From the best in the industry</p>
            <button>Audit</button>
            <button>Money Back</button>
        </div>
     );
}
const Verma= () => {
    return ( 
        <div className="company-box">
            <img src="https://register-karo-front-end-development-internship-website.vercel.app/ab8c0e971321e0daafdbc3bc3adffb48.jpeg"/>
            <p>Prabhash Mishra .1 jan 2024 - Today</p>
            <h2>Growing Business Package </h2>
            <p>Introduction to wireFraming and its Principles Learn From the best in the industry</p>
            <button>Audit</button>
            <button>Money Back</button>
        </div>
     );
}
const Rakhi= () => {
    return ( 
        <div className="company-box">
            <img src="https://register-karo-front-end-development-internship-website.vercel.app/blog5.jpg"/>
            <p>Prabhash Mishra .1 jan 2024 - Today</p>
            <h2>Growing Business Package </h2>
            <p>Introduction to wireFraming and its Principles Learn From the best in the industry</p>
            <button>Audit</button>
            <button>Money Back</button>
        </div>
     );
}
const Verm= () => {
    return ( 
        <div className="company-box">
            <img src="https://register-karo-front-end-development-internship-website.vercel.app/blog2.jpeg"/>
            <p>Prabhash Mishra .1 jan 2024 - Today</p>
            <h2>Growing Business Package </h2>
            <p>Introduction to wireFraming and its Principles Learn From the best in the industry</p>
            <button>Audit</button>
            <button>Money Back</button>
        </div>
     );
}
const Button = () => {
    return ( 
        <div className="button-bx">
            <button>Show more blogs<i class='bx bx-right-arrow-alt'></i></button>
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


function Blog() {
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
                    <Digital/>
                    <div className="Business">
                        <Comapanybox/>
                        <Offer/>
                        <Package/>
                        <Verma/>
                        <Rakhi/>
                        <Verm/>
                    </div>
                    <Button/>
                    <Footer/>
                    </div>
     );
}

export default Blog;