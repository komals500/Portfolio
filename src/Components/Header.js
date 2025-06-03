import React, { useState, useEffect } from "react";
import "./Header.css";
import { Divider } from "antd";

export const handleScroll = (id) => {
  console.log(id, "jnfjenfek")
  const element = document.getElementById(id);
  if (element) {
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    })
  }
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  const openCV = () => {
    window.open("/komal_saini_pdf.pdf", "_blank");
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(curr => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <header className="header">
      <div className="header-left">
        <a href="/">Komal</a>
      </div>

      <div className={`header-right ${menuOpen ? "open" : ""}`}>

        <nav className="header-nav">
          <div className="nav-items-wrapper">
            <ul style={{ cursor: "pointer" }}>
              <p onClick={(id) => { handleScroll('/home'); setMenuOpen(false); }}>Home</p>
              <p onClick={(id) => { handleScroll('/about'); setMenuOpen(false); }}>About</p>
              <p onClick={(id) => { handleScroll('/experience'); setMenuOpen(false); }}>Experience</p>
              <p onClick={(id) => { handleScroll('/work'); setMenuOpen(false); }}>Work</p>
              <p onClick={(id) => { handleScroll('/contact'); setMenuOpen(false); }}>Contact</p>
            </ul>
            <Divider className="header-divider" type="vertical" />
            <button
              onClick={toggleTheme}
              style={{
                top: 20,
                right: 20,
                zIndex: 999,
                padding: '8px 16px',
                cursor: 'pointer',
                borderRadius: '18px',
                border: 'none',
                backgroundColor: theme === 'light' ? '#222' : '#eee',
                color: theme === 'light' ? '#eee' : '#222',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙 ' : '☀️ '}
            </button>
            <button
              className="download-cv"
              onClick={() => {
                openCV();
                setMenuOpen(false);
              }}
              style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              Resume
            </button>
          </div>
        </nav>
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

    </header>
  );
};

export default Header;
