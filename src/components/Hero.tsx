import { Button } from "@/components/ui/button";
import { Sparkles, Star, Zap } from "lucide-react";
import heroImage from "@/assets/barbershop-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 elegant-gradient opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-white font-medium">Quality Cuts, Honest Prices</span>
            <Star className="w-4 h-4 text-accent" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Premium Cuts,
            <br />
            <span className="text-accent">Honest Prices</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Hans delivers precision cuts and authentic service in Mississauga. 
            Quality craftsmanship without the premium price tag.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              <Sparkles className="w-5 h-5 mr-2" />
              Contact Us
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Zap className="w-5 h-5 mr-2" />
              View Services
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-white/80 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">$20</div>
              <div className="text-white/80 text-sm">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">⭐⭐⭐⭐⭐</div>
              <div className="text-white/80 text-sm">Quality Service</div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;