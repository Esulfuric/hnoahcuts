import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Waves, Zap, Star, Crown, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Classic Cut",
      price: "$20",
      description: "Clean, timeless cut that suits any occasion. Professional styling with attention to detail.",
      features: ["Wash & Cut", "Basic Styling"],
      popular: false,
      gradient: "elegant-gradient"
    },
    {
      icon: Waves,
      title: "Fade Master",
      price: "$30", 
      description: "Precision fades executed with skill and artistry. The perfect blend for modern style.",
      features: ["Precision Fade", "Beard Trim", "Hot Towel"],
      popular: true,
      gradient: "accent-gradient"
    },
    {
      icon: Crown,
      title: "The Full Experience",
      price: "$40",
      description: "Complete grooming service with premium attention to every detail.",
      features: ["Premium Cut", "Beard Sculpt", "Eyebrow Trim", "Face Mask"],
      popular: false,
      gradient: "elegant-gradient"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Premium <span className="text-gradient">Services</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From classic cuts to complete transformations - quality craftsmanship 
            at honest, transparent prices.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative overflow-hidden card-shadow hover:scale-105 smooth-transition ${
                  service.popular ? 'ring-2 ring-primary elegant-shadow' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="relative">
                  <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <div className="text-3xl font-bold text-primary">{service.price}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Need guidance choosing the right service? Contact us for personalized recommendations.
          </p>
          <Button variant="accent" size="lg">
            <Sparkles className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;