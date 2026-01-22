const Footer = () => {
  return (
    <footer className="bg-slate-800/50 py-6">
      <div className="container mx-auto px-4 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} Mercy Nzisa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;