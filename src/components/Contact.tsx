import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Consultations are 100% free of charge.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center glass-card p-12 rounded-2xl fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to transform your business?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Click the button below to access our full contact information and get in touch with our team.
            </p>
            
            <Button 
              variant="hero" 
              size="xl"
              onClick={handleContactClick}
              className="group"
            >
              Contact Us Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              No commitment required • Free consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
