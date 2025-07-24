import { Button } from "@/components/ui/button";
import { Scissors, MapPin, Phone, Clock, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">hnoahcuts</h3>
                <p className="text-sm text-muted">by Hans ✂️</p>
              </div>
            </div>
            <p className="text-muted mb-6 max-w-md">
              Fresh cuts, unbeatable prices, and vibes that can't be matched. 
              Your neighborhood barber serving the GTA with love and precision since day one! 💯
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="bg-transparent border-muted hover:bg-muted/10">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="bg-transparent border-muted hover:bg-muted/10">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted hover:text-background transition-colors">About Hans</a></li>
              <li><a href="#services" className="text-muted hover:text-background transition-colors">Services & Prices</a></li>
              <li><a href="#location" className="text-muted hover:text-background transition-colors">Location</a></li>
              <li><a href="#" className="text-muted hover:text-background transition-colors">Book Online</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted text-sm">4991 Rathkeale Rd, Mississauga</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted text-sm">(416) 555-HANS</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted text-sm">Mon-Fri: 10AM-8PM</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-muted/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm">
              © 2024 hnoahcuts. All rights reserved. Made with ❤️ in the GTA.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted hover:text-background transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted hover:text-background transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;