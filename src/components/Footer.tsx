import { Heart, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#222222] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-quicksand font-semibold text-white">Kibuli Muslim Nursery School</h3>
            <p className="text-gray-300 text-sm">
              Nurturing young minds and building strong foundations for the future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-quicksand font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[{
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
            }].map(link => <li key={link.name}>
                  <Link to={link.path} className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-quicksand font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-primary" />
                123 School Lane, Kibuli
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-primary" />
                +256 123 456 789
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-primary" />
                info@kibulinursery.com
              </li>
            </ul>
          </div>

          {/* School Hours */}
          <div className="space-y-4">
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
            © {currentYear} Kibuli Nursery School. Made with{" "}
            <Heart className="w-4 h-4 text-red-500 inline" /> for our children.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;