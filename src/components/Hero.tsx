import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

 return (
  <section id="hero" className="py-40 flex items-center justify-center relative">
    {/* Background image from /public/images/bg.png */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/bg.png)' }}
    ></div>

    {/* Gradient overlay */}
    <div className="absolute inset-0 animated-gradient opacity-75"></div>

    {/* Your hero content */}
    <div className="text-center z-10">
      {/* ...your hero text/buttons */}
    </div>
  </section>
);

      <div className="text-center z-10 max-w-4xl mx-auto px-4 fade-in">
        <h1 className="text-6xl md:text-8xl font-bold text-foreground mb-6 tracking-tight">
          EC <span className="gradient-text">Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Lead generation that drives more cars to your front steps.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('about')}
            className="min-w-[200px]"
          >
            Learn More
          </Button>
          
          <Button 
            variant="glass" 
            size="xl"
            onClick={() => scrollToSection('contact')}
            className="min-w-[200px]"
          >
            Get in Touch
          </Button>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
