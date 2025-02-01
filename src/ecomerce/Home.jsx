
const Boxes = () => {
    return ( 
        <div className="box">
        <i class='bx bxs-cog'></i>
        <h2>company formation</h2>
        <p>Amazon is a multinational technology company specializing in e-commerce, cloud computing, digital streaming, and artificial intelligence. Founded by Jeff Bezos in 1994, it started as an online bookstore and has since expanded into various industries</p>
       <a href=""><button>Learn more</button></a>
        </div>
     );
}
const Company = () => {
    return ( 
        <div className="com">
            <i class='bx bx-bar-chart'></i>
            <h2>Company secretarial Service</h2>
<p>Amazon's company secretarial services ensure
     compliance with corporate governance, regulatory requirements, 
     and legal obligations across its global operations. </p>
     <button>Learn more</button>
        </div>
     );
}

const Virtual = () => {
    return ( 
        <div className="vir">
            <i class='bx bx-building-house'></i>
            <h2>Virtual Office Address</h2>
         <p>An Amazon Virtual Office Address is a service that provides businesses with a professional mailing address, often in a prime location,
             without requiring a physical office space. This is particularly useful for e-commerce sellers, remote workers</p>
             <button>Learn more</button>
        </div>
     );
}

const Annual = () => {
    return ( 
        <div className="anul">
            <i class='bx bxs-cube-alt'></i>
            <h2>Annual Compliance</h2>
         <p>An Amazon Virtual Office Address is a service that provides businesses with a professional mailing address, often in a prime location, without requiring a physical office space. This is particularly
             useful for e-commerce sellers, remote workers</p>
             <button>Learn more</button>
        </div>
     );
}
const Payroll = () => {
    return ( 
        <div className="pay">
            <i class='bx bxs-cart'></i>
            <h2>Payroll Serices</h2>
       <p>Amazon Payroll Services efficiently manages employee compensation, ensuring timely and accurate salary payments, tax withholdings, and compliance with labor laws.
         The service supports various payment methods, direct deposits</p>
         <button>Learn more</button>
        </div>
     );
}
const Cooking = () => {
    return (
        <div className="book">
            <i class='bx bx-file'></i>
            <h2>Bookkeeping Services</h2>
        <p>Amazon offers a range of booking services, allowing customers to reserve travel, entertainment,
             and professional services conveniently. Through platforms like Amazon Explore, users can book virtual experiences, while Amazon Home Services </p>
            <a ><button>Learn more</button></a>
        </div>
      );
}


const All = () => {
    return ( 
        <div className="all">
        <button>See All Services</button>
        </div>
     );
}

export const Footer = () => {
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

function Home() {
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
            <div className="page">
                <img src="https://register-karo-front-end-development-internship-website.vercel.app/poster.png" />
            </div>
            <div className="wel">
                <h1>WELCOME TO AMAZON.IN</h1>
                <i class='bx bx-down-arrow-circle'></i>
                <h2>Explore Our Services</h2>
            </div>
            <div className="boxs">
                <Boxes/>
                <Company/>
                <Annual/>
                <Payroll/>
                <Virtual/>
                <Cooking/>
            </div>
            <div className="button-all">
                <All/>
            </div>
            <Footer/>
        </div>
      );
}

export default Home;