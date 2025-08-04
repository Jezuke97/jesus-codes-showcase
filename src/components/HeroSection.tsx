import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.jpg';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center portfolio-gradient relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image */}
        <div className="mb-8 animate-bounce-in">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden glass-card hero-glow pulse-glow relative group">
            <img 
              src={profileAvatar} 
              alt="Jesús José Camacho López - Ingeniero de Software" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Main Heading with Gradient Text */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up hero-gradient-text" style={{animationDelay: '0.3s'}}>
          Jesús José Camacho López
        </h1>
        
        {/* Animated Title */}
        <div className="mb-8 animate-slide-in-left" style={{animationDelay: '0.6s'}}>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary typing-text inline-block">
            Ingeniero de Software
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.9s'}}>
          Apasionado por la tecnología, con experiencia en desarrollo de software, 
          cloud computing y hackathons. Siempre buscando nuevas oportunidades para 
          aplicar mis habilidades técnicas y crecer profesionalmente.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-10 animate-slide-in-right" style={{animationDelay: '1.2s'}}>
          <a 
            href="https://github.com/jesusjcl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/20 group"
          >
            <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/jesusjcl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/20 group"
          >
            <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="mailto:jesus@example.com"
            className="glass-card p-3 rounded-full hover:scale-110 transition-all duration-300 hover:bg-primary/20 group"
          >
            <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{animationDelay: '1.5s'}}>
          <Button 
            onClick={scrollToProjects}
            className="relative text-lg px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 group overflow-hidden"
          >
            <span className="relative z-10">Ver Proyectos</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-card text-lg px-10 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 border-primary/20 hover:border-primary/40 hover:bg-primary/10"
          >
            Contactarme
          </Button>
        </div>

        {/* Floating Scroll Indicator */}
        <div className="mt-20 float-animation">
          <div className="glass-card p-3 rounded-full mx-auto w-fit">
            <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;