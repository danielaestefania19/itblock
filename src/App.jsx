import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
// import Services from './components/Services';
import ContacForm from './components/ContacUs';
import Footer from './components/Footer';
import HeroWeb3 from './web3/HeroWeb3'; // Importa el componente HeroWeb3
import './index.css';
import Future from './web3/Future';
import ServicesWeb3 from './web3/ServicesWeb3';
import FeaturesSection from './web3/FeaturesSection'
import Info from './web3/Info';
import Services from './web3/Services';
import Methodology from './web3/Methodology';
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
              {/* <Services /> */}
              <ContacForm />
            </>
          } />
          <Route path="/web3" element={
            <>
              <HeroWeb3 />
              <Info/>
              <Future/>
              <Services/>
              <Methodology/>
              <ServicesWeb3/>
              <FeaturesSection/>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
