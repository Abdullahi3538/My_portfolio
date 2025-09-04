import { Code, Palette, GraduationCap, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Passionate about creating seamless web applications using the MERN stack"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Crafting visual identities and digital designs that tell compelling stories"
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Currently pursuing my degree while exploring cutting-edge technologies"
    },
    {
      icon: Heart,
      title: "Problem Solving",
      description: "Finding elegant solutions to complex challenges through code and creativity"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section font-[poppins] animate-gradient backdrop-blur-sm" >
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
            <h2 className="text-4xl font-bold font-[poppins] mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bridging the gap between technology and creativity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold font-display text-foreground mb-6">
                My Journey as a Developer & Designer
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm Abdullahi Mohamed, a dedicated student at <span className="text-primary font-medium">Jamhuriya University of Science and Technology</span>, 
                  where I'm pursuing my passion for technology and digital innovation.
                </p>
                <p>
                  My journey began with a curiosity about how digital products come to life. 
                  This led me to explore both the technical and creative sides of development, 
                  specializing in full-stack web development using the MERN stack and 
                  creating compelling visual designs.
                </p>
                <p>
                  What drives me is the intersection of <span className="text-accent font-medium">functionality and beauty</span>. 
                  I believe that great software should not only work flawlessly but also 
                  provide an exceptional user experience through thoughtful design.
                </p>
                <p>
                  When I'm not coding or designing, I'm exploring new technologies, 
                  contributing to open-source projects, and constantly learning to stay 
                  at the forefront of the ever-evolving tech landscape.
                </p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="group hover:shadow-card-hover hover-lift transition-all duration-500 bg-gradient-card border-0 glass backdrop-blur-sm hover:animate-breathe">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.div 
                          className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <highlight.icon className="h-5 w-5 text-primary" />
                        </motion.div>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;