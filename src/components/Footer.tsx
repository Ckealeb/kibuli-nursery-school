
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-quicksand font-bold mb-4">Kibuli Muslim Nursery School</h3>
          <p className="mb-4 text-gray-300">
            Nurturing and empowering learners to become devout, literary and responsible global citizens.
          </p>
          <div className="flex space-x-4">
            <a href="https://instagram.com/kibulimuslimnurseryschool" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/kibulimuslimnurseryschool" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-quicksand font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Off Prince Badru Kakungulu Rd. Opp Kibuli Hospt.</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+256701748194" className="hover:text-primary">+256 701 748 194</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:kibulimuslimnurseryschool@gmail.com" className="hover:text-primary">kibulimuslimnurseryschool@gmail.com</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-quicksand font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
            </li>
            <li>
              <Link to="/programs" className="text-gray-300 hover:text-primary transition-colors">Programs</Link>
            </li>
            <li>
              <Link to="/admissions" className="text-gray-300 hover:text-primary transition-colors">Admissions</Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800">
        <p className="text-center text-gray-400">
          © {currentYear} Kibuli Muslim Nursery School. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
