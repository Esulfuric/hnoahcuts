import { Button } from "@/components/ui/button";
import { Scissors, MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-gradient">Hnoah Cuts</h1>
              <p className="text-xs text-muted-foreground">by Hans</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#location" className="text-foreground hover:text-primary transition-colors">Location</a>
            <Button variant="elegant" size="sm">Contact Us</Button>
          </nav>
          
          <div className="flex md:hidden items-center gap-2">
            <Button variant="elegant" size="sm">Contact</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;