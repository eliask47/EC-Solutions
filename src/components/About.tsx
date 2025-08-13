import { CheckCircle, Users, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our diverse team brings years of experience in digital innovation and creative problem-solving."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creative Solutions",
      description: "We craft unique, tailored solutions that stand out in today's competitive digital landscape."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "Every project is approached with clear objectives and measurable outcomes in mind."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">ELIASCOPS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are pioneers in the digital space, combining cutting-edge technology with creative excellence 
            to deliver solutions that not only meet but exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
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

          <div className="glass-card p-8 rounded-2xl fade-in">
            <h4 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h4>
            <p className="text-muted-foreground leading-relaxed">
              With a proven track record of successful projects and satisfied clients, we bring 
              a unique blend of creativity, technical expertise, and strategic thinking to every 
              challenge we tackle.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl text-center fade-in hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6 text-primary-foreground">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">{feature.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;