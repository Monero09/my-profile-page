import { useState } from 'react';

const links = ['about', 'skills', 'projects', 'contact'];

function Navbar({ name, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="logo">
          {name.split(' ')[0]}<span className="logo-dot">.dev</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <a key={link} href={`#${link}`} onClick={() => setOpen(false)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <button className="theme-btn" onClick={onToggleTheme}>
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;