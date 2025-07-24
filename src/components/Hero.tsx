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
        <div className="absolute inset-0 hero-gradient opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-secondary" />
            <span className="text-white font-medium">GTA's Cheapest & Cleanest Cuts</span>
            <Star className="w-4 h-4 text-secondary" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-funky">
            Fresh Cuts,
            <br />
            <span className="text-secondary">Unbeatable Prices</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Your boy Hans is serving up the most fire cuts in the GTA! 
            No cap 🧢 - cleanest fades, freshest styles, prices that won't break the bank.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              <Sparkles className="w-5 h-5 mr-2" />
              Book Your Cut
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              <Zap className="w-5 h-5 mr-2" />
              See Prices
            </Button>
          </div>
          
          {/* Fun Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">50+</div>
              <div className="text-white/80 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">$20</div>
              <div className="text-white/80 text-sm">Starting Price</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">⭐⭐⭐⭐⭐</div>
              <div className="text-white/80 text-sm">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float-animation">
        <div className="w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      </div>
      <div className="absolute bottom-20 right-10 float-animation" style={{animationDelay: '1s'}}>
        <div className="w-16 h-16 bg-accent/20 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
