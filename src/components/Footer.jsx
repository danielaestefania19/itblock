const Footer = () => {
    return (
        <footer className="bg-white py-10">
            <div className="max-w-[1250px] mx-auto px-4 flex flex-col"> 
                <div className="flex justify-between mb-8"> 
                    <div className="flex items-center">
                        <h2 className="text-4xl font-bold text-black">itblock</h2>
                    </div> 
                    <nav className="flex flex-col mr-52 font-inter text-[14px] font-light"> 
                        <a href="#" className="text-black hover:text-black mb-1">About</a>
                        <a href="#" className="text-black hover:text-black mb-1">Who</a>
                        <a href="#" className="text-black hover:text-black mb-1">What We Do</a>
                        <a href="#" className="text-black hover:text-black mb-1">Portfolio</a>
                        <a href="#" className="text-black hover:text-black mb-1">Contact Us</a>
                    </nav>
                </div>
                <div className="border-t border-black w-full my-4"></div> 
                <div className="flex justify-between mb-16 mt-4">
                    <nav className="flex flex-col items-start font-inter text-[14px] font-light">
                        <a href="#" className="text-black hover:text-black mb-1">Terms and Conditions</a>
                        <a href="#" className="text-black hover:text-black mb-1">Privacy Policy</a>
                        <a href="#" className="text-black hover:text-black mb-1">Cookie Policy</a>
                        <a href="#" className="text-black hover:text-black mb-1">Acceptable Use</a>
                    </nav>
                    <div className="flex flex-col mr-12 font-inter font-light"> 
                        <p className="text-black text-sm mb-1">&copy; 2024. Todos los derechos reservados.</p>
                        <p className="text-black text-sm">Diseño: Never Know Defeat</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
