import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-slate-900/80 sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-cyan-400">Mercy Nzisa</a>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-cyan-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-cyan-400">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;