import logo from './logo.svg';
import'./ecomerce/Home.css';
import './Contant/Java.css';
import './Contant/Client.css';
import './Contant/Form.css';
import Home from './ecomerce/Home';
import './Contant/Live.css'
import  './Contant/Blog.css'
import   './Contant/Faq.css'
import Java from './Contant/Java';
import Client from './Contant/Client';
import Blog from './Contant/Blog';
import Live from './Contant/Live';
import Form from './Contant/Form';
import Faq from  './Contant/Faq'
import {Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
<Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Form" element={<Form/>}/>
        <Route path="/Blog" element={<Blog/>}/>
        <Route path="/Client" element={<Client/>}/>
        <Route path="/Java" element={<Java/>}/>
        <Route path="/Live" element={<Live/>}/>
        <Route path='/Faq'  element={<Faq/>}/>
      </Routes>
    </div>
  );
}

export default App;
