import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center portfolio-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-card border-4 border-primary overflow-hidden hover-scale">
            <div className="w-full h-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white">
              JC
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Jesús José Camacho López
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          Ingeniero de Software
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
          Apasionado por la tecnología, con experiencia en desarrollo de software, 
          cloud computing y hackathons. Siempre buscando nuevas oportunidades para 
          aplicar mis habilidades técnicas y crecer profesionalmente.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToProjects}
            className="btn-portfolio-primary text-lg px-8 py-4"
          >
            Ver Proyectos
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-8 py-4 hover-scale"
          >
            Contactarme
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;