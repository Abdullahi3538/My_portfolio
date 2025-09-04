import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "skill-progress" },
        { name: "JavaScript", level: 90, color: "skill-progress" },
        { name: "HTML5 & CSS3", level: 100, color: "skill-progress" },
        { name: "Tailwind CSS", level: 100, color: "skill-progress" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 95, color: "accent" },
        { name: "Express.js", level: 90, color: "accent" },
        { name: "MongoDB", level: 85, color: "accent" },
      ]
    },
    {
      title: "Design & Creative Tools",
      skills: [
        { name: "Adobe Illustrator", level: 98, color: "primary" },
        { name: "Adobe Photoshop", level: 88, color: "primary" },
        { name: "Adobe Premiere Pro", level: 80, color: "primary" },
        { name: "UI/UX Design", level: 80, color: "primary" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-skills font-[poppins] animate-gradient backdrop-blur-sm">
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
            <h2 className="text-4xl font-bold  text-foreground font-[poppins] mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl  mx-auto">
              A comprehensive overview of my technical skills and creative capabilities
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="group  hover:shadow-card-hover hover-lift transition-all duration-500 bg-gradient-card border-0 glass backdrop-blur-sm h-full hover:animate-breathe">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-[poppins] text-foreground group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex} 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (categoryIndex * 4 + skillIndex) * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="relative">
                          <Progress 
                            value={skill.level} 
                            className="h-2 bg-muted"
                          />
                          <motion.div 
                            className="absolute top-0 left-0 h-2 rounded-full skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: (categoryIndex * 4 + skillIndex) * 0.1, ease: "easeOut" }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-card rounded-2xl p-8 border-0 shadow-portfolio backdrop-blur-sm">
              <h3 className="text-2xl font-semibold font-[poppins] text-foreground mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices. 
                I continuously expand my skill set through online courses, personal projects, and hands-on experience 
                with emerging technologies.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {["Git", "Docker", "AWS", "GraphQL", "Next.js", "Figma" ,"Mobile App"].map((tech, index) => (
                  <motion.span 
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;