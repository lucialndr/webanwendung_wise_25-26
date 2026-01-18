import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="tracking-wider mb-4">HOTEL EXCELLENCE</div>
            <p className="text-sm text-muted-foreground mb-6">
              Außergewöhnliche Gastfreundschaft seit 1985.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h4 className="mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#karriere" className="hover:text-primary transition-colors">Karriere</a></li>
                <li><a href="#kontakt" className="hover:text-primary transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#impressum" className="hover:text-primary transition-colors">Impressum</a></li>
                <li><a href="#datenschutz" className="hover:text-primary transition-colors">Datenschutz</a></li>
                <li><a href="#agb" className="hover:text-primary transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hotel Excellence. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}