import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/ddc8a2f8d483094f0f45957933059e600871037b.png';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'studio', label: 'Studio' },
    { id: 'works', label: 'Works' },
    { id: 'team', label: 'Team' },
    { id: 'collaborations', label: 'Collaborations' },
    { id: 'clientele', label: 'Clientele' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, page: string) => {
    // Allow default browser behavior for modifier keys (new tab, new window, etc.)
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
      return;
    }
    e.preventDefault();
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <a
            href="?page=home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="transition-opacity hover:opacity-60 duration-500 block"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            <img src={logo} alt="Studio9DN" className="h-8 md:h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.slice(1).map((item) => (
              <a
                key={item.id}
                href={`?page=${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`transition-all duration-500 text-[11px] tracking-[0.04em] uppercase ${
                  currentPage === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                style={{ fontFamily: 'var(--font-primary)', fontWeight: 400 }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-foreground transition-opacity hover:opacity-60 duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`?page=${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`block w-full text-left transition-all duration-500 text-[11px] tracking-[0.04em] uppercase ${
                  currentPage === item.id
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                }`}
                style={{ fontFamily: 'var(--font-primary)', fontWeight: 400 }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
