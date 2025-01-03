import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-[#020617] text-white font-interTight">
      <div className="text-3xl font-bold">
        <span className="border-b-2 border-white pb-0">itblock</span>
      </div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-white text-[16px] font-interTight font-normal">About</Link>
        <Link to="#who" className="hover:text-white text-[16px] font-interTight font-normal">Who</Link>
        <Link to="#what-we-do" className="hover:text-white text-[16px] font-interTight font-normal">What We Do</Link>
        <Link to="/web3" className="hover:text-white text-[16px] font-interTight font-normal">Web3</Link>
        <Link to="#contact-us" className="hover:text-white text-[16px] font-interTight font-normal">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
