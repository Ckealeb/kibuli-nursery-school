import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [{
    name: "Home",
    path: "/"
  }, {
    name: "About Us",
    path: "/about"
  }, {
    name: "Programs",
    path: "/programs"
  }, {
    name: "Gallery",
    path: "/gallery"
  }, {
    name: "Admissions",
    path: "/admissions"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-blue-300 hover:bg-blue-200">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/lovable-uploads/9dbb516f-d0e0-4034-b9fc-3c50f50f3d47.png" alt="Kibuli Muslim Nursery School Logo" className="h-16 w-auto" />
              <div className="flex flex-col">
                <span className="font-quicksand font-bold text-lg text-zinc-950">Kibuli Muslim</span>
                <span className="text-lg font-quicksand font-medium">Nursery School</span>
                <span className="text-xs text-gray-600 italic">Education is Divine</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map(item => <Link key={item.name} to={item.path} className="font-quicksand text-gray-600 hover:bg-primary/5 px-3 py-2 rounded-md transition-colors duration-200">
                {item.name}
              </Link>)}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary transition-colors duration-200">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && <div className="md:hidden absolute top-20 inset-x-0 bg-white/95 backdrop-blur-sm shadow-lg animate-fade-up">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map(item => <Link key={item.name} to={item.path} className="block px-4 py-2 text-gray-600 hover:bg-primary/5 hover:text-primary font-quicksand transition-colors duration-200" onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>)}
          </div>
        </div>}
    </nav>;
};
export default Navbar;