import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "TO-Do List App",
      description: "Aplicación de gestión de tareas con funcionalidades CRUD completas, desarrollada con JavaScript vanilla y almacenamiento local.",
      image: "/placeholder.svg",
      technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      title: "ckPayment - Hackathon Project",
      description: "Sistema de pagos desarrollado durante hackathon, integrando tecnologías blockchain para transacciones seguras.",
      image: "/placeholder.svg",
      technologies: ["Solidity", "Web3", "React", "Ethereum"],
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      title: "Business Card Digital",
      description: "Tarjeta de presentación digital interactiva con diseño responsive y animaciones modernas.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      githubUrl: "#",
      demoUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Personal",
      description: "Este mismo portafolio, desarrollado con React, TypeScript y Tailwind CSS, con modo oscuro y animaciones.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      githubUrl: "#",
      demoUrl: "#",
      featured: false
    }
  ];

  const getTechColor = (tech: string) => {
    const colors = {
      "JavaScript": "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      "React": "bg-blue-500/10 text-blue-600 border-blue-500/20",
      "TypeScript": "bg-blue-700/10 text-blue-700 border-blue-700/20",
      "Solidity": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "HTML5": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "CSS3": "bg-blue-400/10 text-blue-500 border-blue-400/20",
      "Tailwind CSS": "bg-teal-500/10 text-teal-600 border-teal-500/20",
      "Web3": "bg-indigo-500/10 text-indigo-600 border-indigo-500/20",
      "Ethereum": "bg-gray-500/10 text-gray-600 border-gray-500/20",
      "LocalStorage": "bg-green-500/10 text-green-600 border-green-500/20",
      "Vite": "bg-violet-500/10 text-violet-600 border-violet-500/20"
    };
    return colors[tech as keyof typeof colors] || "bg-gray-500/10 text-gray-600 border-gray-500/20";
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Proyectos Destacados
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo 
            de software y tecnologías emergentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="portfolio-card group">
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="aspect-video flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-primary/50" />
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Destacado
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="default" size="sm" className="flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Ver Código
                  </Button>
                  
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button variant="outline" className="hover-scale">
            <Github className="w-4 h-4 mr-2" />
            Ver más en GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;