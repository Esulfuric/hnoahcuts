import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Navigation, Calendar } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-2 mb-4">
            <MapPin className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Find Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Visit Us in <span className="text-gradient">Mississauga</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conveniently located with easy access and parking. Quality service in a welcoming environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <div className="relative">
            <Card className="card-shadow overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">4991 Rathkeale Road</h3>
                  <p className="text-muted-foreground">Mississauga, Ontario</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => window.open('https://www.google.com/maps/place/4991+Rathkeale+Rd,+Mississauga,+ON+L5V+2G9/', '_blank')}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Our Location</h3>
                    <p className="text-muted-foreground mb-2">
                      4991 Rathkeale Road<br />
                      Mississauga, Ontario
                    </p>
                    <p className="text-sm text-primary font-medium">
                      🅿️ Free parking available • 🚌 TTC accessible
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 elegant-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4">Operating Hours</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">10:00 AM - 8:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">11:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                    <p className="text-sm text-primary font-medium mt-3">
                      ⚡ Walk-ins welcome • 📱 Online booking preferred
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="card-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
                    <p className="text-muted-foreground mb-3">
                      Call, text, or slide into the DMs - I'm here for you! 
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="w-4 h-4 mr-2" />
                        (647)-123-4567
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Calendar className="w-4 h-4 mr-2" />
                        Contact Us
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
            <span className="text-2xl">🚗</span>
            <span className="font-medium">Easy access from QEW, 403, and 401</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-6">
            Can't make it to the shop? Ask about mobile cuts for groups of 3+ people!
          </p>
          
          <Button variant="elegant" size="lg">
            <MapPin className="w-5 h-5 mr-2" />
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Location;