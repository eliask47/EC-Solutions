import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo (image from /public) */}
          <button
            onClick={() => scrollToSection('hero')}
            className="cursor-pointer inline-flex items-center justify-center focus:outline-none"
            aria-label="Go to top"
          >
            {/* Use your file: /favicon.ico, /images/logo.png, /logo.svg, etc. */}
            <img
              src="/favicon.ico"
              alt="EC logo"
              className="h-8 w-8 md:h-9 md:w-9 object-contain"
              draggable={false}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Button variant="nav" onClick={() => scrollToSection('hero')}>
              Home
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('about')}>
              About Us
            </Button>
            <Button variant="nav" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-card rounded-lg p-4 fade-in">
            <div className="flex flex-col space-y-2">
              <Button variant="nav" onClick={() => scrollToSection('hero')} className="justify-start">
                Home
              </Button>
              <Button variant="nav" onClick={() => scrollToSection('about')} className="justify-start">
                About Us
              </Button>
              <Button variant="nav" onClick={() => scrollToSection('contact')} className="justify-start">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
