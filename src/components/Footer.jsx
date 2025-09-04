import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    label: "About",
    href: "#about"
  }, {
    label: "Skills",
    href: "#skills"
  }, {
    label: "Projects",
    href: "#projects"
  }, {
    label: "Experience",
    href: "#experience"
  }, {
    label: "Contact",
    href: "#contact"
  }];
  const socialLinks = [{
    icon: Github,
    href: "https://github.com/Abdullahi3538",
    label: "GitHub"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abdullahi-mohamed-mohamud-433262352/",
    label: "LinkedIn"
  }, {
    icon: Mail,
    href: "mailto:Alimohammedmohamud20@gmail.com",
    label: "Email"
  }];
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <footer className="bg-gradient-section text-background py-16 font-[poppins]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold  font-[poppins] text-primary mb-4">Abdullahi Mohamed</h3>
              <p className="mb-6 leading-relaxed max-w-md text-slate-50">
                Full-Stack MERN Developer & Graphic Designer passionate about creating 
                beautiful digital experiences. Always ready for new challenges and exciting projects.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => <Button key={index} variant="ghost" size="icon" className="text-background/70 hover:text-primary hover:bg-primary/10" asChild>
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>)}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold  font-[poppins] text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => <li key={index}>
                    <button onClick={() => scrollToSection(link.href)} className="transition-colors duration-300 text-sm text-slate-50">
                      {link.label}
                    </button>
                  </li>)}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-primary mb-4 font-[poppins] ">Get In Touch</h4>
              <div className="space-y-2 text-sm text-background/70">
                <p className="text-slate-50">Mogadishu, Somalia</p>
                <p className="text-slate-50">Alimohammedmohamud20@gmail.com</p>
                <p className="text-slate-50">+252 61 96 3538</p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-50">Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t text-white border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2  text-sm ">
              <span>© {currentYear} Abdullahi Mohamed</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            </div>
            
            <div className="flex items-center space-x-6 text-xs ">
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;