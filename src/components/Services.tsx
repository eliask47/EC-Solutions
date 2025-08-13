import { Smartphone, Globe, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Lead Generation",
      description: "Full stack lead generation services for mobile detailers who specialize in ceramic coatings."
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      title: "CRM Solutions",
      description: "Ready to implement CRM system tailored to streamline your CRM proccess and convert more leads."
    },
    {
      icon: <BarChart className="w-10 h-10" />,
      title: "Marketing Consultations",
      description: "Expert audits to refine and strengthen your current marketing and advertisement strategy."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Learn more about what we bring to the table for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-2xl fade-in hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in">
          <p className="text-lg text-muted-foreground mb-8">
            Ready to transform your digital presence?
          </p>
          <div className="inline-flex p-1 rounded-full bg-gradient-to-r from-primary to-accent">
            <div className="bg-background rounded-full px-8 py-3">
              <span className="gradient-text font-semibold text-lg">
                Let's discuss your business
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
