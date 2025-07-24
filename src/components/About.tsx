import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Clock, Heart } from "lucide-react";
import hansAvatar from "@/assets/hans-avatar.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image & Badge */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <img 
                src={hansAvatar} 
                alt="Hans the Barber" 
                className="w-full h-full object-cover rounded-3xl card-shadow"
              />
              <div className="absolute -top-4 -right-4 accent-gradient text-white px-4 py-2 rounded-full font-bold text-sm bounce-subtle">
                ✨ Master Barber
              </div>
              <div className="absolute -bottom-4 -left-4 hero-gradient text-white px-4 py-2 rounded-full font-bold text-sm float-animation">
                🏆 GTA's Best
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Meet <span className="text-gradient">Hans</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              I'm Hans, your dedicated barber committed to precision and quality. 
              With over 2 years of experience, I focus on delivering exceptional cuts that enhance your natural style.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              My philosophy is simple: premium service shouldn't come with premium prices. 
              Every client deserves to look their best without compromise.
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="card-shadow">
                <CardContent className="p-4 text-center">
                  <Trophy className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-bold text-2xl text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-4 text-center">
                  <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="font-bold text-2xl text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <div className="font-bold text-2xl text-secondary">30min</div>
                  <div className="text-sm text-muted-foreground">Avg Cut Time</div>
                </CardContent>
              </Card>
              
              <Card className="card-shadow">
                <CardContent className="p-4 text-center">
                  <Heart className="w-8 h-8 text-destructive mx-auto mb-2" />
                  <div className="font-bold text-2xl text-destructive">100%</div>
                  <div className="text-sm text-muted-foreground">Love for Craft</div>
                </CardContent>
              </Card>
            </div>
            
            <Button variant="elegant" size="lg">
              Contact Hans
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;