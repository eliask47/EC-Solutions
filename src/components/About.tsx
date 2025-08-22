import { CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

const About = () => {
  const dashboardRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const dashboard = dashboardRef.current;
    if (!dashboard) return;

    let animationFrameId: number;
    const startTime = Date.now();

    const updateTransform = () => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000; // Convert to seconds
      
      // Calculate floating effect (synchronized with original CSS timing)
      const floatingOffset = Math.sin(elapsed * 0.8) * 8; // 8px amplitude, slower frequency
      
      const rect = dashboard.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      const elementHeight = rect.height;

      // Calculate rotation based on scroll position
      let rotationX = 0;
      if (elementBottom > 0 && elementTop < viewportHeight) {
        // Element is in viewport
        const elementCenter = elementTop + elementHeight / 2;
        const viewportCenter = viewportHeight / 2;
        
        // Calculate scroll progress (-1 to 1, where 0 is center of viewport)
        const scrollProgress = (viewportCenter - elementCenter) / viewportHeight;
        
        // Apply rotation based on scroll position with mobile enhancement
        const isMobile = window.innerWidth <= 768;
        const baseRotation = scrollProgress * -30; // Max 30 degrees rotation (reversed)
        const mobileMultiplier = isMobile ? 1.6 : 1; // 60% stronger on mobile
        rotationX = baseRotation * mobileMultiplier;
        
        // Clamp rotation (wider range for mobile)
        const maxRotation = isMobile ? 35 : 25;
        const minRotation = isMobile ? -28 : -20;
        rotationX = Math.max(minRotation, Math.min(maxRotation, rotationX));
      }
      
      // Apply both rotation and floating in a single transform
      dashboard.style.transform = `rotateX(${rotationX}deg) translateY(${floatingOffset}px)`;
      
      // Continue animation
      animationFrameId = requestAnimationFrame(updateTransform);
    };

    // Start the animation loop
    updateTransform();
    
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
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

        {/* Analytics Dashboard with 3D Scroll Effect */}
        <div className="flex justify-center mb-20 fade-in">
          <div className="analytics-3d-container">
            <img 
              ref={dashboardRef}
              src="/lovable-uploads/5a5bbc86-698d-4ec4-86c9-08388b81e069.png" 
              alt="Live Analytics Dashboard showing $332,582.79 in earnings with conversion tracking"
              className="analytics-dashboard rounded-2xl shadow-2xl max-w-4xl w-full h-auto"
            />
          </div>
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
