import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Calendar, MapPin } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2023 Certified Foundations Associate",
      organization: "Oracle",
      date: "2023-2025",
      type: "Certificación Cloud",
      description: "Fundamentos de infraestructura en la nube, servicios core y mejores prácticas de Oracle Cloud.",
      link: "#",
      featured: true,
      icon: "🏆"
    },
    {
      title: "NASA Space Apps Hackathon",
      organization: "NASA",
      date: "2022",
      type: "Hackathon Global",
      description: "Participación en el hackathon global más grande de la NASA, desarrollando soluciones tecnológicas innovadoras.",
      link: "#",
      featured: true,
      icon: "🚀"
    },
    {
      title: "Encode Solidity Bootcamp",
      organization: "Encode Club",
      date: "2023",
      type: "Bootcamp Blockchain",
      description: "Bootcamp intensivo en desarrollo de Smart Contracts con Solidity y tecnologías Web3.",
      link: "https://encode.club",
      featured: true,
      icon: "⛓️"
    },
    {
      title: "Microsoft C# ASP.NET Certification",
      organization: "Microsoft",
      date: "2024",
      type: "Certificación Desarrollo",
      description: "Certificación en desarrollo web con C# y ASP.NET Framework/Core.",
      link: "#",
      featured: false,
      icon: "💻"
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      organization: "Microsoft",
      date: "2024",
      type: "Certificación Cloud",
      description: "Fundamentos de Microsoft Azure, servicios en la nube y conceptos básicos.",
      link: "#",
      featured: false,
      icon: "☁️"
    },
    {
      title: "Data Science Fundamentals",
      organization: "Coursera",
      date: "2023",
      type: "Curso Especializado",
      description: "Fundamentos de ciencia de datos, análisis estadístico y machine learning básico.",
      link: "#",
      featured: false,
      icon: "📊"
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      "Certificación Cloud": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "Hackathon Global": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Bootcamp Blockchain": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Certificación Desarrollo": "bg-green-500/10 text-green-600 border-green-500/20",
      "Curso Especializado": "bg-teal-500/10 text-teal-600 border-teal-500/20"
    };
    return colors[type as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
  };

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Certificaciones y Logros
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Certificaciones y participaciones que validan mi conocimiento y experiencia 
            en diversas tecnologías y eventos de la industria.
          </p>
        </div>

        {/* Featured Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Certificaciones Destacadas
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.filter(cert => cert.featured).map((cert, index) => (
              <Card key={index} className="portfolio-card group">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{cert.icon}</div>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                
                <p className="text-primary font-medium mb-2">
                  {cert.organization}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {cert.date}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                
                {cert.link !== "#" && (
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Certificado
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* All Certifications Timeline */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Todas las Certificaciones
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
              
              {/* Timeline Items */}
              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                    
                    {/* Content */}
                    <div className="ml-16 flex-1">
                      <Card className="portfolio-card">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{cert.icon}</span>
                            <div>
                              <h4 className="text-lg font-semibold text-foreground">
                                {cert.title}
                              </h4>
                              <p className="text-primary font-medium">
                                {cert.organization}
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 mt-2 md:mt-0">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(cert.type)}`}>
                              {cert.type}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {cert.date}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {cert.description}
                        </p>
                        
                        {cert.link !== "#" && (
                          <div className="mt-4">
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Ver Certificado
                            </Button>
                          </div>
                        )}
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;