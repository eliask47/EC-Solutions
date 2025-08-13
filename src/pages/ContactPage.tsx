import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hello@eliascops.com",
      action: "mailto:hello@eliascops.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office",
      content: "123 Innovation Drive, Tech City, TC 12345",
      action: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      action: null
    }
  ];

  const contactMethods = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant answers to your questions through our live chat support.",
      buttonText: "Start Chat",
      available: true
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Meeting",
      description: "Book a free 30-minute consultation to discuss your project in detail.",
      buttonText: "Book Meeting",
      available: true
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Send Proposal",
      description: "Send us your project details and we'll provide a custom proposal.",
      buttonText: "Send Details",
      available: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-card py-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Button>
            
            <div className="text-2xl font-bold gradient-text">
              ELIASCOPS
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16 fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="gradient-text">ELIASCOPS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're here to help bring your vision to life. Choose your preferred way to get in touch with our team.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl text-center fade-in hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6 text-primary-foreground">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{method.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{method.description}</p>
                <Button 
                  variant="gradient" 
                  className="w-full"
                  disabled={!method.available}
                >
                  {method.buttonText}
                </Button>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        {info.action ? (
                          <a 
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="fade-in">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-foreground mb-6">Why Work With Us?</h2>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
                    <p className="text-muted-foreground">Our experienced professionals bring diverse skills and fresh perspectives to every project.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
                    <p className="text-muted-foreground">We have a track record of delivering successful projects that exceed client expectations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Ongoing Support</h4>
                    <p className="text-muted-foreground">Our relationship doesn't end at project delivery. We provide continued support and maintenance.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Transparent Process</h4>
                    <p className="text-muted-foreground">We believe in clear communication and transparency throughout the entire project lifecycle.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 fade-in">
            <div className="glass-card p-12 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and explore how ELIASCOPS can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="xl">
                  Start Your Project
                </Button>
                <Button variant="glass" size="xl">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;