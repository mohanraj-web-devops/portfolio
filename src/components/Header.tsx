
import React from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, X } from 'lucide-react';

const Header = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    // { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    // { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold text-primary">
          <span className="text-foreground">Mohan</span>raj
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Button asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Toggle menu"
        >
          {navOpen ? <X /> : <MenuIcon />}
        </Button>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden py-4 px-4 bg-background border-b border-border">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setNavOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button asChild onClick={() => setNavOpen(false)}>
              <a href="#contact">Get In Touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
