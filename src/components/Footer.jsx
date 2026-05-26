import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// Footer component with company info, quick links, and social media
const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-gold font-bold text-xl mb-4">BuildPro Construction</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building dreams into reality since 1995. We deliver excellence in every project,
              from residential homes to commercial complexes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-gold" />
                <span>123 Construction Ave, New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <FaPhone className="text-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-300 text-sm">
                <FaEnvelope className="text-gold" />
                <span>info@buildpro.com</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-gold font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold text-xl transition-colors" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold text-xl transition-colors" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold text-xl transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold text-xl transition-colors" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Stay connected with us for updates on our latest projects and industry news.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} BuildPro Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
