import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import future__path from "@/assets/future_path.jpg";
import Electroinc from "@/assets/electronic.jpg";
import cons from "@/assets/cons.jpg";
import brand from "@/assets/66.jpg";




import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
    
const Projects = () => {
  const projects = [
    {
      title: "Future path website ",
      description: "Full-stack Future path website built with React, Node.js, Express, and MongoDB. Features user authentication, course management, and payment integration using Stripe.",
      image: future__path,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "https://futurepath-7tu5.vercel.app/",
      githubUrl: "https://github.com/Abdullahi3538/future__path",
      category: "Development"
    },
    {
      title: "Electroinc Shop",
      description: "Real-time e-commerce platform for electronics using React, TypeScript, Node.js, and Socket.io. Features live inventory updates, chat support, and seamless checkout experience.",
      image: Electroinc,
      technologies: ["React", "TypeScript", "Node.js", "Express js"],
      liveUrl: "https://electronicapp-bice.vercel.app/",
      githubUrl: "#",
      category: "Development"
    },
    {
      title: "Brand Identity Design Package",
      description: "Complete brand identity design including logo, color palette, typography, business cards, and brand guidelines for a tech startup.",
      image: brand,
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      liveUrl: "/assets/brand.pdf",
      category: "Design"
    },
    {
   title: "Construction-Company",
description: "Responsive construction company website featuring project showcases, service pages, and contact forms, combined with full visual branding including logo design, marketing materials, and promotional assets.",

      image: cons,
      technologies: ["HTML", "CSS3", "JavaScript"],
      liveUrl: "https://abdullahi3538.github.io/Construction-Company/",
      githubUrl: "https://github.com/Abdullahi3538/Construction-Company",
      category: "Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-section animate-gradient backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-[poppins] text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my development and design work, combining technical expertise with creative vision
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="group overflow-hidden hover:shadow-card-hover hover-lift transition-all duration-500 bg-gradient-card  glass backdrop-blur-sm h-full hover:animate-breathe">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video bg-muted glass-dark">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="gap-2"
                          as="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="gap-2 border-white/30 text-white hover:bg-white hover:text-black"
                          as="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-3">
                      <Badge variant="secondary" className="mb-2 border-none text-1xl text-primary">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-semibold font-[poppins] text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs p-2 bg-primary/5 text-primary border-primary/20"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>

                <CardFooter className="px-6 pb-6 pt-0">
  <div className="flex gap-3 w-full">
    {/* Haddii uu yahay Design (PDF) */}
    {project.category === "Design" ? (
      <motion.div className="flex-1 items-center" whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
        <a
          className="w-full flex justify-center items-center gap-2 text-[16px] font-[poppins] bg-blue-500 text-white px-4 py-2 rounded-lg"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="h-4 w-4" />
          View PDF
        </a>
      </motion.div>
    ) : (
      <>
        {/* Live Demo */}
        <motion.div className="flex-1 items-center" whileHover={{ scale: 1 }} whileTap={{ scale: 0.95 }}>
          <a
            className="w-full flex justify-center items-center gap-2 text-[16px] font-[poppins] bg-blue-500 text-white px-4 py-2 rounded-lg"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="h-4 w-4" />
            View Project
          </a>
        </motion.div>

        {/* GitHub Code Link (oo kaliya haddii uu jiro) */}
        {project.githubUrl && project.githubUrl !== "#" && (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[16px] font-[poppins] text-gray-700 hover:text-black"
            >
              <Github className="h-4 w-4" />
              Code
            </a>
          </motion.div>
        )}
      </>
    )}
  </div>
</CardFooter>

                </Card>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-card rounded-2xl p-8 border-0 shadow-portfolio backdrop-blur-sm">
              <h3 className="text-2xl font-semibold  font-[poppins] text-foreground mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, creative projects, 
                or ways to bring your ideas to life through code and design.
              </p>
            
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;