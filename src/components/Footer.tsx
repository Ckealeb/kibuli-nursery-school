
import { Heart, Mail, MapPin, Phone, Instagram, Twitter, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 bg-slate-950 hover:bg-slate-800 transition-all duration-[8s] transform hover:scale-[1.02]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="space-y-4 transition-all duration-[8s] transform hover:scale-105">
            <h3 className="text-xl font-quicksand font-semibold text-white">
              Kibuli Muslim Nursery School
            </h3>
            <p className="text-gray-300 text-sm">
              Nurturing young minds and building strong foundations for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 transition-all duration-[8s] transform hover:scale-105">
            <h3 className="text-xl font-quicksand font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "Gallery", path: "/gallery" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 transition-all duration-[8s] transform hover:scale-105">
            <h3 className="text-xl font-quicksand font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                <a 
                  href="https://maps.google.com/?q=Kibuli+Muslim+Nursery+School,+Prince+Badru+Kakungulu+Road,+Kampala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Off Pr. Badru Kakungulu Rd, opp Kibuli Hspt.
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+256701748194"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +256 701 748 194
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MessageSquare className="w-4 h-4 text-primary" />
                <a 
                  href="https://wa.me/256701748194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  WhatsApp: +256 701 748 194
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:kibulimuslimnurseryschool@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  kibulimuslimnurseryschool@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Instagram className="w-4 h-4 text-primary" />
                <a 
                  href="https://instagram.com/kibulimuslimnurseryschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  @kibulimuslimnurseryschool
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Twitter className="w-4 h-4 text-primary" />
                <a 
                  href="https://x.com/kibulimuslimnurseryschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  @kibulimuslimnurseryschool
                </a>
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div className="space-y-4 transition-all duration-[8s] transform hover:scale-105">
            <h3 className="text-xl font-quicksand font-semibold text-white">
              School Hours
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-300">
                Monday - Friday: 7:00 AM - 5:00 PM
              </li>
              <li className="text-sm text-gray-300">
                Saturday - Sunday: Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-300">
            © {currentYear} Kibuli Muslim Nursery School. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 inline" /> for our children.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
