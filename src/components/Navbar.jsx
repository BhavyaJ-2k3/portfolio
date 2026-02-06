const Navbar = () => {
  return (
    <header
      data-theme="dark-orange"
      className="fixed top-0 w-full h-16 border-b z-50"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        <h2 className="font-bold text-xl text-textPrimary">
          <span className="text-thirdtext">&lt;/</span>
          Bhavya
          <span className="text-thirdtext">&gt;</span>
        </h2>

        <nav className="flex gap-6 text-textSecondary">
          <a href="#home" className="hover:text-accent">
            Home
          </a>
          <a href="#about" className="hover:text-accent">
            About
          </a>
          <a href="#tech" className="hover:text-accent">
            Tech
          </a>
          <a href="#projects" className="hover:text-accent">
            Projects
          </a>
          <a href="#resume" className="hover:text-accent">
            Resume
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
