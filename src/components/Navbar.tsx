import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Vinyl Pools", path: "/vinyl-pools" },
    { name: "Fiberglass", path: "/fiberglass-pools" },
    { name: "Concrete", path: "/concrete-pools" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        (scrolled || !isHomePage) ? "bg-slate-900/95 backdrop-blur-md shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src="/logo.png" alt="Bluestone Pool Construction Logo" className="h-12 w-12 rounded-full object-cover border-2 border-blue-600/20" />
          <div className="flex flex-col">
            <span className="font-bold text-xl leading-none text-white">
              Bluestone
            </span>
            <span className="text-xs font-medium tracking-wider uppercase text-blue-400">
              Pool Construction
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-blue-400",
                location.pathname === link.path ? "text-blue-400" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
            <a href="tel:6479655067" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              (647) 965-5067
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 shadow-xl p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-semibold",
                location.pathname === link.path ? "text-blue-400" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 text-lg">
            <a href="tel:6479655067" className="flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              (647) 965-5067
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;