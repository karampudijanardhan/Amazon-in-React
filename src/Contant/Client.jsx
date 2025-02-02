
const Happy = () => {
    return ( 
        <div className="happy">
            <img src="https://register-karo-front-end-development-internship-website.vercel.app/cli.png"/>
        </div>
     );
}
const Bar = () => {
    return ( 
            <div className="application">
                <i class='bx bx-spreadsheet'></i>
            <p>Fill up Application Form</p>
            </div>
     );
}
const Payment = () => {
    return (
        <div className="payment">
            <i class='bx bx-wallet-alt'></i>
            <p>Make Online Payment</p>
        </div>
      );
}
const User = () => {
    return ( 
        <div className="user">
            <i class='bx bxs-user'></i>
            <p>Executive Will process Application</p>
        </div>
     );
}
const Mail = () => {
    return ( 
        <div className="mail">
            <i class='bx bxl-gmail'></i>
            <p>Get Confirm Mail</p>
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


function Client() {
    return ( 
                <div>
                    <header>
                    <img src="https://assets.upstox.com/content/assets/images/cms/202451/Amazon%20logo.png"/>
                    <input type="checkbox" id="check"></input>
                    <label for="check" className="checkbut">
                    <i class='bx bx-menu'></i>
                    </label>
                    <nav>
                        <a href="">Home</a>
                        <a href="">About Us</a>
                        <a href="">Clients</a>
                        <a href="">Blog</a>
                        <a href="">Questions</a>
                        <a href="">liveCount</a>
                        <a href="">Form</a>
                    </nav>
                    </header>
                    <Happy/>
                    <div className="bar">
                        <Bar/>
                        <Payment/>
                        <User/>
                        <Mail/>
                    </div>
                    <Footer/>
                    </div>
     );
}

export default Client;