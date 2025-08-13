import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="pt-20 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We turn cold leads into booked clients. Proven lead generation and ad strategies built specifically for detailing, tint, wrap, and PPF shops.
          </p>
        </div>

        {/* Mission + Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side: Mission */}
          <div className="space-y-6 fade-in">
            <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our #1 priority is to help YOUR business convert higher and profit more. From innovating your marketing strategies to booking appointments, we handle the full marketing, lead generation, and customer relation management process for you, A-Z.
            </p>
            
            <div className="space-y-4">
              {[
                "Drive quality leads for detailing and coating jobs.",
                "Ad creatives that are built to convert.",
                "Full CRM system ready to be implemented into your business.",
                "Strategies focused on filling your schedule."
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Why Choose Us */}
          <div className="glass-card p-8 rounded-2xl fade-in">
            <h4 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h4>
            <p className="text-muted-foreground leading-relaxed">
              EC Solutions is built by marketers with years of experience scaling campaigns to multiple 6-figures in revenues and over a decade of experience 
              in scaling businesses across multiple industries. Our readiness gives us the tools needed to confidently and properly consult and boost YOUR business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
