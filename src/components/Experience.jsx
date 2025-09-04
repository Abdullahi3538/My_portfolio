import { GraduationCap, Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Experience = () => {
  const timeline = [
    {
      type: "education",
      title: "Bachelor's in Computer Science",
      organization: "Jamhuriya University of Science and Technology",
      location: "Mogadishu, Somalia",
      period: "2023 - Present",
      description: "Currently pursuing my Bachelor's degree with a focus on software engineering, web development, and computer systems. Maintaining excellent academic performance while building practical skills through projects and internships.",
      highlights: ["Software Engineering", "Database Systems", "Web Development", "Algorithms & Data Structures"]
    },
    {
      type: "work",
      title: "Freelance Full-Stack Developer",
      organization: "Self-Employed",
      location: "Remote",
      period: "2024 - Present",
      description: "Providing full-stack web development services to local businesses and international clients. Specializing in MERN stack applications and custom web solutions.",
      highlights: ["React & Node.js Development", "Database Design", "Client Communication", "Project Management"]
    },
    {
      type: "work",
      title: "Graphic Design Intern",
      organization: "Creative Solutions Agency",
      location: "Mogadishu, Somalia",
      period: "Summer 2023",
      description: "Gained hands-on experience in professional graphic design workflows, working on branding projects, marketing materials, and digital assets for various clients.",
      highlights: ["Brand Identity Design", "Print Design", "Digital Marketing Assets", "Adobe Creative Suite"]
    },
    {
      type: "education",
      title: "Web Development Bootcamp",
      organization: "Rise Academy",
      location: "Remote",
      period: "2023",
      description: "Intensive full-stack web development program covering modern JavaScript frameworks, backend technologies, and deployment strategies.",
      highlights: ["MERN Stack", "RESTful APIs", "Git & GitHub", "Responsive Design"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-skills font-[poppins] animate-gradient backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold font-[poppins] text-foreground mb-4">Experience & Education</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey of learning, growing, and building expertise in technology and design
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className="relative animate-fade-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-sm hidden md:block"></div>
                  
                  <Card className="md:ml-20 bg-gradient-card border-0 shadow-portfolio hover:shadow-card-hover hover-lift transition-all duration-300 group glass backdrop-blur-sm hover:animate-breathe">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                              {item.type === "education" ? (
                                <GraduationCap className="h-4 w-4 text-primary" />
                              ) : (
                                <Briefcase className="h-4 w-4 text-primary" />
                              )}
                            </div>
                            <span className="text-sm text-accent">
                              {item.type === "education" ? "Education" : "Work Experience"}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold  font-[poppins] group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-primary font-medium">{item.organization}</p>
                        </div>
                        
                        <div className="text-right text-sm text-muted-foreground">
                          <div className="flex items-center gap-1 mb-1">
                            <Calendar className="h-3 w-3" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground">Key Highlights:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {item.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Current Focus */}
          <div className="mt-16 animate-fade-up">
            <Card className="bg-gradient-primary border-0 shadow-glow text-white glass animate-breathe">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-semibold  mb-4">Currently Focused On</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Completing my final year at Jamhuriya University while actively seeking internship 
                  opportunities and freelance projects to further develop my skills in full-stack 
                  development and design.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                    Advanced React Patterns
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                    Cloud Architecture
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                    Mobile Development
                  </span>
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                    UX Research
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;