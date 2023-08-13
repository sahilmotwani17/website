import React,{useEffect} from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import About from './components/about';
import Spage from './components/spage';
import Portfolio from './components/portfolio';
import Orgo from './components/orgo';
import Dnba from './components/dnba';
import Walker from './components/walker';
import Cooler from './components/cooler';
import Kaatni from './components/kaatni';
import Bus from './components/bus';
import Playkitchen from './components/playkitchen';
import Expo from './components/expo';
import Serresearch from './components/serresearch';
import Serindustrial from './components/serindustrial';
import Seruseri from './components/seruseri';
import Serusere from './components/serusere';
import Serservice from './components/serservice';
import Serspace from './components/serspace';
import ContactForm from './components/ContactForm';
import StartProject from './components/startProjectForm';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {

  return (
    <Router>
      <ScrollToTop />
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Spage />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/dnba" element={<Dnba />} />
      <Route path="/walker" element={<Walker />} />
      <Route path="/orgo" element={<Orgo />} />
      <Route path="/cooler" element = {<Cooler />} />
      <Route path="/kaatni" element = {<Kaatni />}/>
      <Route path="/bus" element = {<Bus />}/>
      <Route path ="/playkitchen" element = {<Playkitchen/>}/> 
      <Route path ="/expo" element ={<Expo/>}/>
      <Route path ="/serresearch" element={<Serresearch/>}/>
      <Route path="/serindustrial" element={<Serindustrial/>}/>
      <Route path="/seruseri" element={<Seruseri/>}/>
      <Route path="/serusere" element={<Serusere/>}/>
      <Route path="/serservice" element={<Serservice/>}/>
      <Route path="/serspace" element={<Serspace/>}/>
      <Route path="/spage" element={<Spage/>}/>
      {/* <Route exact path="/contact" element={<ContactForm/>}/> */}
      <Route exact path="/startProject" element={<StartProject/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
