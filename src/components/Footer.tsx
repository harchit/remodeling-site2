import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/logo.png" alt="Bluestone Logo" className="h-12 w-12 rounded-full border border-blue-400/30" />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-white">
                Bluestone
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-blue-400">
                Pool Construction
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed">
            Premium custom pool builders serving Houston, Dallas, and San Antonio. 
            We turn your backyard dreams into reality with expert craftsmanship.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg">Our Pools</h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/vinyl-pools" className="hover:text-blue-400 transition-colors">Vinyl Liner Pools</Link></li>
            <li><Link to="/fiberglass-pools" className="hover:text-blue-400 transition-colors">Fiberglass Pools</Link></li>
            <li><Link to="/concrete-pools" className="hover:text-blue-400 transition-colors">Custom Concrete Pools</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h3 className="text-white font-bold text-lg">Contact Info</h3>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-400 shrink-0" />
              <span>Proudly serving Houston, Dallas, & San Antonio areas</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-400 shrink-0" />
              <a href="tel:6479655067" className="hover:text-blue-400 transition-colors">(647) 965-5067</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-400 shrink-0" />
              <a href="mailto:info@bluestonepoolconstruction.com" className="hover:text-blue-400 transition-colors">info@bluestonepools.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© {currentYear} Bluestone Pool Construction. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;