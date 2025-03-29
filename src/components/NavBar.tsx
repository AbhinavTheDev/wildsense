import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "../components/ui/button";
import { cn } from '../lib/utils.ts';
import { GiTigerHead } from 'react-icons/gi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10",
        isScrolled 
          ? "py-3 glass" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <GiTigerHead className="h-7 w-7 text-nature-600 group-hover:text-nature-700 transition-colors" />
          <span className="font-display text-xl font-semibold tracking-tight">
            <span className="text-nature-600 group-hover:text-nature-700 transition-colors">Wild</span>
            <span className="text-foreground">Sense</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/lifespan-predictor">Lifespan Predictor</NavLink>
          <NavLink to="/conservation-status">Conservation Status</NavLink>
          <Button asChild variant="default" size="sm" className="ml-2 bg-nature-600 hover:bg-nature-700">
            <Link to="/about">Learn More</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 glass border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        )}
      >
        <nav className="flex flex-col px-6 gap-4">
          <MobileNavLink to="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
          <MobileNavLink to="/lifespan-predictor" onClick={toggleMobileMenu}>Lifespan Predictor</MobileNavLink>
          <MobileNavLink to="/conservation-status" onClick={toggleMobileMenu}>Conservation Status</MobileNavLink>
          <Button asChild variant="default" size="sm" className="mt-2 bg-nature-600 hover:bg-nature-700">
            <Link to="/about" onClick={toggleMobileMenu}>Learn More</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="text-foreground font-medium hover:text-nature-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-nature-500 after:transition-all"
    >
      {children}
    </Link>
  );
};

const MobileNavLink = ({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) => {
  return (
    <Link 
      to={to} 
      className="text-foreground font-medium py-2 hover:text-nature-600 transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;