import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar1';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import ContacForm from './components/ContacUs';
import Footer from './components/Footer';
import HeroWeb3 from './web3/HeroWeb3'; // Importa el componente HeroWeb3
import './index.css';
import Future from './web3/Future';
//import ServicesWeb3 from './web3/ServicesWeb3';
//import FeaturesSection from './web3/FeaturesSection'
import Info from './web3/Info';
import ServicesWeb3 from './web3/ServicesWeb3';
import Methodology from './web3/Methodology';
import BlockchainNetworks from './web3/BlockchainNetworks'
function App() {
  return (
    <Router>
      <div>
        <Navbar1 />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Features />
               <Services />
              <ContacForm />
            </>
          } />
          <Route path="/web3" element={
            <>
              <HeroWeb3 />
              <Info/>
              <Future/>
              <ServicesWeb3/>
              <BlockchainNetworks/>
              <Methodology/>

              <ContacForm />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
