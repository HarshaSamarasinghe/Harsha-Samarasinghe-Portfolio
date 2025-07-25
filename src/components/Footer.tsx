
import { Linkedin, Github, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Harsha Samarasinghe. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/harsha-samarasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/HarshaSamarasinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.facebook.com/harsha.samarasinghe.351"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/harsha_25_samarasinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
