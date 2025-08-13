import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@eliascops.com",
      action: "mailto:info@eliascops.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 (213) 298-5783",
      action: "tel:+12132985783"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      content: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      action: null
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
              EC Solutions
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
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose your preferred way to get in touch with our team.
            </p>
          </div>


          {/* Contact Information */}
<div className="grid md:grid-cols-2 gap-12 items-start">
  {/* Left */}
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
                <a href={info.action} className="text-muted-foreground hover:text-primary transition-colors">
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

  {/* Right */}
  <div className="fade-in">
    {/* Heading moved OUTSIDE the card to mirror left column */}
    <h2 className="text-3xl font-bold text-foreground mb-8">Why Work With Us?</h2>
    <div className="glass-card p-6 rounded-2xl">
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-foreground mb-2">Expert Team</h4>
          <p className="text-muted-foreground">Our experienced team functions as a plug-and-play solution for every business to supercharge revenues.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Proven Results</h4>
          <p className="text-muted-foreground">We have multiple years of experience of scaling marketing campaigns to multiple 6-figures in revenues.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Ongoing Support</h4>
          <p className="text-muted-foreground">We aim to build a long-term and mutually profitable relationship with our partners.</p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2">Money Back Guarantee</h4>
          <p className="text-muted-foreground">Contact us to explore our different offers, all of which include a money back guarantee clause.</p>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
      </main>
    </div>
  );
};

export default ContactPage;
