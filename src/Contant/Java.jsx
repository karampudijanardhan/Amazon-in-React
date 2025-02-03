import React from "react";
import { Link } from "react-router-dom";

const Why = () => {
    return ( 
        <div className="amazon-in">
            <h2>WHY AMAZON.IN</h2>
            <p>Amazon is an e-commerce platform that allows users to buy and sell a wide range of products, including electronics, clothing, books, home appliances, and more. Here are some key uses of Amazon Apart from e-commerce, Amazon also provides cloud services (AWS)</p>
        </div>
     );
}
const Confindental = () => {
    return ( 
        <div className="confidental">
         <h2>Confidential & safe</h2>
         <p>All your private inforamation is safe with us</p>
         <div className="confidental-icon">
         <i class='bx bx-shield-quarter'></i>
         </div>
        </div>
     );
}

const Hidden = () => {
    return ( 
        <div className="hidden">
            <h2>no Hidden Fee</h2>
            <p>Everything is put before you with no hidden chargers or conditions</p>
            <i class='bx bx-hide'></i>
        </div>
     );
}
const Guaranted = () => {
    return ( 
        <div className="guaranted">
         <h2>Guaranteed Satisfaction</h2>
         <p>We ensure that you stay 100% satisfied with our offered</p>
         <i class='bx bx-smile'></i>
        </div>
     );
}
const Expert = () => {
    return ( 
        <div className="expert">
            <h2>Expert CA/CS Assistance</h2>
            <p>Prompt support from our in-House Expert professionals</p>
            <i class='bx bxs-user'></i>
        </div>
     );
}
const Secure = () => {
    return ( 
        <div className="secure">
            <h2>Secure Service</h2>
            <p>Your data is secure with us</p>
            <i class='bx bx-lock-alt'></i>
        </div>
     );
}
const Vedio = () => {
    return (  
        <div className="vidio">
            <div className="introduction">
                <h2>Our Video Introduction</h2>
                <ol>
                    <li>Founded & Headquarters – Amazon was founded by Jeff Bezos in 1994 and is headquartered in Seattle, Washington, USA.</li>
                    <li>E-Commerce Giant – It is one of the largest online retailers in the world, offering a vast range of products, including books, electronics, clothing, and groceries.</li>
                    <li>Amazon Web Services (AWS) – A major cloud computing platform providing services like hosting, storage, and AI solutions, contributing significantly to Amazon's revenue.</li>
                    <li>Prime Membership – Amazon Prime offers benefits like free shipping, exclusive discounts, and access to Prime Video and Music.</li>
                    <li>Global Presence – Operates in multiple countries with localized websites and services, making it a global marketplace.</li>
                    <li>Acquisitions – Acquired companies like Whole Foods, Zappos, and Twitch to expand its market presence.</li>
                    <li>Sustainability Initiatives – Committed to reducing carbon emissions through initiatives like "The Climate Pledge" and renewable energy projects.</li>
                    <li>Logistics & Delivery Network – Operates an extensive fulfillment and delivery network, including Amazon Air and drone delivery projects.</li>
                    <li>Competitive & Market Influence – Competes with companies like Walmart, Alibaba, and Google, shaping the future of online retail and cloud computing.</li>
                </ol>
                <a href="https://youtu.be/Qo84sV_6THY?si=ucVzoTlcHg6wmp2s"><img src="https://bsmedia.business-standard.com/_media/bs/img/article/2017-02/20/full/1487535165-2412.jpg?im=FeatureCrop,size=(826,465)"/> </a>
            </div>
             </div>
    );
}

const About = () => {
    return (  
        <div className="amazon">
            <h2>About Amazon</h2>
            <p>Amazon is one of the world's largest and most influential technology companies, originally founded by Jeff Bezos in 1994 as an online bookstore. 
                Over the years, it has expanded into a global e-commerce giant, offering millions of products across categories such as electronics, clothing, groceries, and more.
                 With services like Amazon Prime, the company has revolutionized online shopping by providing fast shipping, exclusive discounts, and access to digital entertainment. Amazon has also acquired
                  several businesses, including Whole Foods Market and Zappos, further strengthening its retail presence both online and in physical stores.
Beyond e-commerce, Amazon is a leader in cloud computing through Amazon Web Services (AWS), which provides computing power, storage, and AI solutions to businesses worldwide. AWS is a major
 source of Amazon’s revenue and powers companies, governments, and startups. Additionally, Amazon has made significant strides in artificial intelligence, developing voice-controlled smart devices like Alexa and the Echo 
 line. It also offers digital streaming services, including Amazon Prime Video and Amazon Music, competing with Netflix and Spotify in the entertainment industry.
Amazon’s impact on logistics and supply chain management is unparalleled, with a vast network of fulfillment centers, its own Amazon Air cargo fleet, and experiments in drone deliveries through Prime Air. The company 
continues to push the boundaries of innovation, investing in areas like healthcare, autonomous technology, and space exploration through Blue Origin (founded by Jeff Bezos). With Andy Jassy as CEO since 2021, Amazon remains at the forefront of technology and commerce, shaping the future of global business.
</p>
            <img src="https://assets.aboutamazon.com/67/26/e604c7c4483b9e927d612f799ca1/about-amazon-inline-amazon-girls-scouts-2023-1.jpg"/>
            <button>Learn More </button>
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
function Java() {
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
            <About/>
            <Why/>
            <div className="security">
                <Confindental/>
                <Hidden/>
                <Guaranted/>
                <Expert/>
                <Secure/>
            </div>
            <Vedio/>
            <Footer/>
    </div>
     );
}

export default Java ;