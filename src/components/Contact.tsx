import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

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
            Ready to start your next project? We'd love to hear from you. 
            Let's create something amazing together.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8 rounded-2xl fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-4">
                  <MessageSquare className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Let's Talk</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're looking to build a new digital presence, redesign your current 
                website, or explore innovative solutions, we're here to help bring your vision to life.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Free initial consultation</li>
                <li>• Custom project proposals</li>
                <li>• Flexible engagement models</li>
                <li>• Ongoing support and maintenance</li>
              </ul>
            </div>

            <div className="glass-card p-8 rounded-2xl fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Quick Response</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We understand that time is valuable. That's why we're committed to responding 
                to all inquiries within 24 hours during business days.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 24-hour response guarantee</li>
                <li>• Detailed project timelines</li>
                <li>• Transparent pricing</li>
                <li>• Regular progress updates</li>
              </ul>
            </div>
          </div>

          <div className="text-center glass-card p-12 rounded-2xl fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
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