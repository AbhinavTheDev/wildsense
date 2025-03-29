import { Heart, Github } from 'lucide-react';
import { GiTigerHead } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <GiTigerHead className="h-6 w-6 text-nature-600" />
              <span className="font-display text-xl font-semibold tracking-tight">
                <span className="text-nature-600">Wild</span>
                <span>Sense</span>
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Advancing wildlife conservation through AI-powered insights, data visualization, 
              and educational resources for a sustainable coexistence.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/lifespan-predictor" className="text-muted-foreground hover:text-foreground transition-colors">
                  Lifespan Predictor
                </Link>
              </li>
              <li>
                <Link to="/conservation-status" className="text-muted-foreground hover:text-foreground transition-colors">
                  Conservation Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Learn More</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.worldwildlife.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  World Wildlife Fund
                </a>
              </li>
              <li>
                <a 
                  href="https://www.iucn.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  IUCN Red List
                </a>
              </li>
              <li>
                <a 
                  href="https://www.conservation.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Conservation International
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} WildSense. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0 space-x-6">
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-destructive" /> for wildlife
            </span>
            <a 
              href="https://github.com/AbhinavTheDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
