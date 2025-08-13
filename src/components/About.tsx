import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">ELIASCOPS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are pioneers in the digital space, combining cutting-edge technology with creative excellence 
            to deliver solutions that not only meet but exceed expectations.
          </p>
        </div>

        {/* Mission + Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side: Mission */}
          <div className="space-y-6 fade-in">
            <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At ELIASCOPS, we believe in the power of innovation to transform businesses and create 
              meaningful connections. Our mission is to bridge the gap between ambitious ideas and 
              exceptional execution.
            </p>
            
            <div className="space-y-4">
              {[
                "Innovative design and development",
                "Strategic digital transformation",
                "Comprehensive brand solutions",
                "Results-oriented approach"
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
              With a proven track record of successful projects and satisfied clients, we bring 
              a unique blend of creativity, technical expertise, and strategic thinking to every 
              challenge we tackle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
