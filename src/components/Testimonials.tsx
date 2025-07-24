import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus T.",
      age: "19",
      text: "Yooo Hans is actually goated 🐐 My fade was so clean my girl couldn't stop staring. And $20?? BRO that's cheaper than my lunch!",
      rating: 5,
      style: "Skin Fade + Beard Trim"
    },
    {
      name: "Alex K.",
      age: "23", 
      text: "Been going to Hans for 6 months now. Dude never misses! Always fresh, always on point. My coworkers keep asking where I get my cuts done 💯",
      rating: 5,
      style: "Classic Cut"
    },
    {
      name: "Jamal R.",
      age: "21",
      text: "Hans saved my hairline AND my bank account 😭 Other places wanted $50+ for the same cut. This man is a legend fr",
      rating: 5,
      style: "The Full Experience"
    },
    {
      name: "Tyler M.",
      age: "20",
      text: "First time getting a fade and Hans walked me through everything. Super chill vibes, no judgment, just pure skill. Already booked my next appointment!",
      rating: 5,
      style: "Fade Master"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 rounded-full px-4 py-2 mb-4">
            <Quote className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium">What People Say</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Reviews Speak <span className="text-gradient">For Themselves</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - see what the community is saying about hnoahcuts! 📱✨
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-shadow hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-secondary fill-current" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground mb-2">Age {testimonial.age}</div>
                  <div className="text-xs text-primary font-medium bg-primary/10 rounded-full px-2 py-1 inline-block">
                    {testimonial.style}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center">
          <div className="inline-flex items-center gap-8 bg-muted rounded-2xl px-8 py-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Google Reviews</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">98%</div>
              <div className="text-sm text-muted-foreground">Return Rate</div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Join the hnoahcuts family - where every cut is a masterpiece! 🎨✂️
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;