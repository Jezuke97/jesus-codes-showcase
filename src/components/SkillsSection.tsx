import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Database, 
  Cloud, 
  Smartphone, 
  Wrench, 
  Palette,
  Server,
  Shield
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: [
        { name: "C#", level: 85 },
        { name: "ASP.NET", level: 80 },
        { name: "Python", level: 75 },
        { name: "Node.js", level: 70 },
        { name: "API REST", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: [
        { name: "Oracle Cloud", level: 80 },
        { name: "Microsoft Azure", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Git", level: 90 },
        { name: "GitHub Actions", level: 65 }
      ]
    },
    {
      title: "Blockchain & Web3",
      icon: <Shield className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: [
        { name: "Solidity", level: 75 },
        { name: "Web3.js", level: 70 },
        { name: "Ethereum", level: 70 },
        { name: "Smart Contracts", level: 75 },
        { name: "DApps", level: 65 }
      ]
    },
    {
      title: "Bases de Datos",
      icon: <Database className="w-6 h-6" />,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      skills: [
        { name: "SQL Server", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "Entity Framework", level: 75 }
      ]
    },
    {
      title: "Herramientas",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-teal-500",
      bgColor: "bg-teal-500/10",
      skills: [
        { name: "Visual Studio", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Figma", level: 70 },
        { name: "Jira", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones innovadoras y eficientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="portfolio-card group">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                  <div className={category.color}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="portfolio-card max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <p className="text-muted-foreground">Años de Experiencia</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">10+</div>
                <p className="text-muted-foreground">Proyectos Completados</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <p className="text-muted-foreground">Hackathons Participados</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;