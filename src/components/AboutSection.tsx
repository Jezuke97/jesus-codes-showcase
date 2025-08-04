import { Card } from '@/components/ui/card';
import { Calendar, MapPin, Code, Cloud } from 'lucide-react';

const AboutSection = () => {
  const experiences = [
    {
      title: "Estancia Profesional",
      company: "STEAM HUB México",
      location: "Guadalajara",
      duration: "6 meses",
      icon: <MapPin className="w-5 h-5 text-primary" />,
      description: "Desarrollo de habilidades prácticas en tecnología y innovación"
    },
    {
      title: "Bootcamps & Hackathons",
      company: "Múltiples organizaciones",
      location: "Virtual/Presencial",
      duration: "2022-2024",
      icon: <Code className="w-5 h-5 text-secondary" />,
      description: "Participación activa en eventos de programación y desarrollo"
    },
    {
      title: "Aprendizaje Continuo",
      company: "Autodidacta",
      location: "Remoto",
      duration: "Continuo",
      icon: <Cloud className="w-5 h-5 text-primary" />,
      description: "Estudio constante de nuevas tecnologías y herramientas"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Acerca de Mí
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="animate-slide-in-from-bottom">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mi curiosidad y pasión por la tecnología me han llevado a participar 
                en hackathons, bootcamps y cursos especializados en desarrollo de software, 
                cloud computing y aprendizaje autónomo.
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Busco constantemente oportunidades para aplicar mis habilidades técnicas 
                y blandas en proyectos desafiantes que generen un impacto positivo. 
                Mi experiencia abarca desde el desarrollo frontend y backend hasta 
                tecnologías emergentes como blockchain y cloud computing.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                En mi tiempo libre, me dedico a estudiar herramientas futuras y 
                mantenerme actualizado con las últimas tendencias tecnológicas, 
                siempre con la meta de crecer profesionalmente y aportar valor 
                a cada proyecto en el que participo.
              </p>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="animate-slide-in-from-bottom">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Experiencia
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="portfolio-card">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {exp.icon}
                    </div>
                    
                    <div className="flex-grow">
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {exp.title}
                      </h4>
                      
                      <p className="text-primary font-medium mb-1">
                        {exp.company}
                      </p>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.duration} • {exp.location}
                      </div>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;