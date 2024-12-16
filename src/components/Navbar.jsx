import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-8 bg-[#020617] text-white font-karma">
      {/* Logo */}
      <div className="text-3xl font-bold">
        <span className="border-b-2 border-white pb-0">itblock</span>
      </div>

      {/* Links */}
      <div className="flex space-x-6">
        <Link to="#about" className="hover:text-gray-400">About</Link>
        <Link to="#who" className="hover:text-gray-400">Who</Link>
        <Link to="#what-we-do" className="hover:text-gray-400">What We Do</Link>
        <Link to="/web3" className="hover:text-gray-400">Web3</Link> {/* Navega a /web3 */}
        <Link to="#contact-us" className="hover:text-gray-400">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
