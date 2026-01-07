const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Deutsch mit Maria. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
