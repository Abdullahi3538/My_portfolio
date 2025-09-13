import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "@/assets/logo.jpg"; // Ensure you have a logo image in the assets folder

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero animate-gradient backdrop-blur-sm">
      {/* Professional Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary to-accent rounded-full blur-3xl animate-float"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent to-primary rounded-full blur-3xl animate-float"
          animate={{ 
            scale: [1, 1.25, 1],
            opacity: [0.12, 0.25, 0.12],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 1 }}
        />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10  font-[Poppins]">
        <div className="grid lg:grid-cols-2 gap-12 items-center sm:pt-0 pt-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-foreground font-[Poppins] mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm{" "}
             <motion.span
  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-[Poppins]"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.5 }}
>
  Abdullahi Mohamed
</motion.span>

            </motion.h1>
            <motion.p 
              className="text-2xl text-primary mb-4 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack MERN Developer & Graphic Designer
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A passionate student at Jamhuriya University of Science and Technology, 
              crafting beautiful digital experiences through code and design with precision and creativity.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="group  flex bg-primary text-primary-foreground hover:bg-primary-dark shadow-glow transition-all duration-500 px-8 py-3"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className=" flex border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 backdrop-blur-sm transition-all duration-500 px-8 py-3"
                  onClick={() => scrollToSection('contact')}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { Icon: Github, href: "https://github.com/Abdullahi3538" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/abdullahi-mohamed-mohamud-433262352/" },
                { Icon: Mail, href: "mailto:Alimohammedmohamud20@gmail.com" }
              ].map(({ Icon, href }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="ghost" size="icon" className="text-foreground hover:bg-primary/10 hover:text-primary hover:shadow-glow transition-all duration-300" asChild>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 lg:w-96 lg:h-96 mx-auto rounded-3xl overflow-hidden shadow-portfolio-xl bg-gradient-card border border-primary/20 glass"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 25px 50px hsl(240 100% 65% / 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img className="w-full -mt-8 object-cover"
                  src={logo} 
                  alt="Abdullahi Mohamed - Full-Stack Developer & Designer"
                />
              </motion.div>
              {/* Professional floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30"
                animate={{ 
                  rotate: [0, 180, 360], 
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-accent/20 rounded-xl backdrop-blur-sm border border-accent/30"
                animate={{ 
                  rotate: [360, 180, 0], 
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 bg-primary/70 rounded-full mt-2"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;