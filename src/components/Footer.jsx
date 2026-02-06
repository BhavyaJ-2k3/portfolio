const Footer = () => {
  return (
    <footer
      data-theme="dark-orange"
      className="bg-bg-footer border-border-color bottom-0 w-full h-16 border-t z-50"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-center">
        <p className="text-sm text-textSecondary text-secondtext ">
          &copy; {new Date().getFullYear()} Bhavya Jain. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
