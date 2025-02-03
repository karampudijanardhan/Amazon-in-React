
import React, { useState } from 'react';
import { Link } from 'react-router-dom';




const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I recover Deleted files from desktop with this software?",
      answer: "Yes this software is designed to recover deleted files from desktop Ensure that the drive is't  overwritten before using the tool",
    },
    {
      question: "Is this software free to use?",
      answer: "Amazon's response would depend on the specific software you're asking about. Here are a few possible Yes, this software is free to use. You can access it without any charges.This software offers a free tier with basic features. However, additional features may require a paid subscription."     
    },
    {
        question:"Does it work on both Windows and Mac?",
        answer:"Absolutly! the software is compatable with both Windows and Mac operating Systems",
      },
      {
        question:"What is AWS (Amazon Web Services)?",
        answer:"AWS is Amazon’s cloud computing platform that provides services like storage, computing power, and databases for businesses and developers worldwide.",
      },
      {
        question:"Does Amazon have a physical store?",
        answer:"Yes, Amazon has physical stores like Amazon Fresh, Amazon Go, and Amazon 4-star, along with Whole Foods Market, which it owns.",
      },
      {
        question:"How can I contact Amazon customer service?",
        answer:"You can contact Amazon customer service through the Help section on the website or app, where you can choose to chat, call, or email Amazon support",
      },
      {
        question:" Does Amazon sell second-hand or refurbished products?",
        answer:"Yes, Amazon offers refurbished and used products through Amazon Renewed and third-party sellers on its marketplace.",
      },
      {
        question:"Who is the founder of Amazon?",
        answer:"Amazon was founded by Jeff Bezos on July 5, 1994 in Bellevue, Washington.",
      },
      
  ];


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



  return (
    <div>

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
                    </div>

<div className='faq-container'>
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button 
            onClick={() => toggleAnswer(index)}
            aria-expanded={activeIndex === index}
            className="faq-question"
          >
            {item.question}
            <span>{activeIndex === index ? '−' : '+'}</span>
          </button>
          {activeIndex === index && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
        </div>
        <Footer/>
    </div>
  );
};

export default Faq;