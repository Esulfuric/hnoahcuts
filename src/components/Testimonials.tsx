import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus J.",
      rating: 5,
      text: "Hans delivers exceptional quality every time. Professional service and great attention to detail. Highly recommend!",
      avatar: "MJ"
    },
    {
      name: "Devon K.", 
      rating: 5,
      text: "Outstanding experience from start to finish. Hans takes pride in his work and it shows in the results.",
      avatar: "DK"
    },
    {
      name: "Tyler M.",
      rating: 5, 
      text: "Best barber in Mississauga. Consistent quality, fair prices, and excellent customer service every visit.",
      avatar: "TM"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <Quote className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Testimonials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read what our satisfied clients have to say about their experience at Hnoah Cuts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-shadow hover:scale-105 smooth-transition">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 accent-gradient rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">Verified Customer</div>
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
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Return Rate</div>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground">
            Experience the difference at Hnoah Cuts - where quality meets craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;