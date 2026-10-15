import { useState, useEffect } from 'react';
import { Menu, X, Recycle } from 'lucide-react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#guia', label: 'Guia de Reciclagem' },
  { href: '#descarte', label: 'Descarte Consciente' },
  { href: '#economia', label: 'Economia Sustentável' },
  { href: '#saude', label: 'Meio Ambiente e Saúde' },
  { href: '#quiz', label: 'Quiz' },
  { href: '#sobre', label: 'Sobre' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2'
          : 'bg-white/80 backdrop-blur-sm py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          href="#inicio"
          className="flex items-center gap-2 text-xl font-bold font-heading text-brand-700 hover:text-brand-800 transition-colors"
          aria-label="ReciclaTech — Página inicial"
        >
          <Recycle className="w-7 h-7 text-brand-600" aria-hidden="true" />
          <span>ReciclaTech</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-brand-800 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-brand-700 rounded-lg hover:bg-brand-50 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden animate-slide-down">
          <ul className="max-w-7xl mx-auto px-4 py-4 bg-white border-t border-brand-100 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-brand-800 rounded-lg hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
