
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Shield, Phone, Mail, User, Check, Star, ArrowDown, Home } from "lucide-react";

const Index = () => {
  const [activeService, setActiveService] = useState("matrimonial");

  const services = [
    {
      id: "matrimonial",
      title: "Matrimonial Disputes",
      description: "Comprehensive legal support for divorce, custody, alimony, and property disputes",
      features: [
        "False dowry harassment defense",
        "Child custody rights protection",
        "Property division advocacy",
        "Maintenance dispute resolution",
        "Domestic violence false allegations",
        "Mutual consent divorce facilitation"
      ]
    },
    {
      id: "harassment",
      title: "Workplace Sexual Harassment",
      description: "Defending men against false allegations and ensuring fair treatment",
      features: [
        "False allegation defense strategy",
        "Workplace rights protection",
        "Evidence collection and analysis",
        "Internal complaint handling",
        "Reputation management",
        "Settlement negotiations"
      ]
    },
    {
      id: "assault",
      title: "Sexual Assault Defense",
      description: "Experienced criminal defense for serious allegations",
      features: [
        "24/7 emergency consultation",
        "Comprehensive case investigation",
        "Expert witness coordination",
        "Plea bargain negotiations",
        "Trial representation",
        "Appeals and post-conviction relief"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Michael R.",
      case: "Matrimonial Dispute",
      text: "After two years of legal battles, Shield & Justice helped me secure fair custody of my children. Their expertise in men's rights made all the difference.",
      rating: 5
    },
    {
      name: "David K.",
      case: "Workplace Harassment",
      text: "When I faced false allegations at work, their team acted swiftly to protect my career and reputation. Professional and discreet throughout.",
      rating: 5
    },
    {
      name: "James M.",
      case: "Criminal Defense",
      text: "In my darkest hour, they stood by me with unwavering support. Their expertise and dedication helped clear my name completely.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary">Shield & Justice</h1>
              <p className="text-xs text-muted-foreground">For Men</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</a>
            <Button size="sm">
              <Phone className="h-4 w-4 mr-2" />
              Emergency Consultation
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6">
            <Shield className="h-3 w-3 mr-1" />
            Defending Men's Rights Since 2010
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Legal Shield in
            <span className="text-primary block">Life's Toughest Battles</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Specialized legal representation for men facing matrimonial disputes, workplace harassment allegations, 
            and serious criminal charges. We understand your unique challenges and fight relentlessly for your rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Free Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <ArrowDown className="h-5 w-5 mr-2" />
              Learn More
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Cases Won</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Our Practice Areas</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal services tailored specifically for men facing complex legal challenges. 
              Our expertise spans three critical areas where men often need specialized representation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeService === service.id ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="bg-background">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {services.find(s => s.id === activeService)?.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {services.find(s => s.id === activeService)?.description}
                  </p>
                  <Button>
                    Schedule Consultation
                  </Button>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">What We Cover:</h4>
                  <ul className="space-y-3">
                    {services.find(s => s.id === activeService)?.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Fighting for Men's Rights with Experience & Compassion
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                For over a decade, Shield & Justice for Men has been the trusted legal advocate for men 
                facing their most challenging moments. We understand that the legal system can sometimes 
                feel stacked against men, especially in family courts and harassment cases.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of experienced attorneys specializes exclusively in cases affecting men, 
                giving us unique insights and strategies that general practice firms simply cannot match. 
                We've seen every scenario, and we know how to fight and win.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="font-medium">13+ Years of Specialized Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-primary" />
                  <span className="font-medium">Male-Focused Legal Strategies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="font-medium">Proven Track Record of Success</span>
                </div>
              </div>
            </div>
            <div className="bg-muted/50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Confidential & Discreet</h4>
                  <p className="text-muted-foreground">We understand the sensitive nature of your case and maintain the highest standards of confidentiality.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Available When You Need Us</h4>
                  <p className="text-muted-foreground">24/7 emergency consultation for urgent matters. We're here when your world feels like it's falling apart.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Aggressive Representation</h4>
                  <p className="text-muted-foreground">We fight aggressively for your rights while maintaining the highest ethical standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real stories from real clients who trusted us with their most important legal battles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-background">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.case}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Get the Help You Need Today</h2>
              <p className="text-xl text-muted-foreground">
                Don't face this alone. Contact us now for a confidential consultation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Emergency Hotline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary mb-2">1-800-SHIELD-1</p>
                  <p className="text-muted-foreground mb-4">Available 24/7 for urgent matters</p>
                  <Button className="w-full">Call Now</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">contact@shieldandjusticeformen.com</p>
                  <p className="text-muted-foreground mb-4">Confidential email consultation</p>
                  <Button variant="outline" className="w-full">Send Email</Button>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-primary text-primary-foreground">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold mb-4">Free Initial Consultation</h3>
                <p className="text-lg mb-6 opacity-90">
                  Your first consultation is completely free. We'll listen to your situation and provide 
                  honest advice about your legal options - no obligation, no pressure.
                </p>
                <Button size="lg" variant="secondary">
                  Schedule Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6" />
                <div>
                  <div className="font-bold">Shield & Justice</div>
                  <div className="text-sm opacity-80">For Men</div>
                </div>
              </div>
              <p className="text-sm opacity-80">
                Dedicated legal representation for men facing their toughest legal challenges.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Practice Areas</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Matrimonial Disputes</li>
                <li>Workplace Harassment</li>
                <li>Criminal Defense</li>
                <li>Family Court</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>1-800-SHIELD-1</li>
                <li>contact@shieldandjusticeformen.com</li>
                <li>24/7 Emergency Line</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Attorney Disclaimer</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 opacity-20" />
          <div className="text-center text-sm opacity-80">
            <p>&copy; 2024 Shield & Justice for Men. All rights reserved. | Licensed to practice in all 50 states.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
