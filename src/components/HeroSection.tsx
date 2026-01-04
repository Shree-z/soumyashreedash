import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, Phone, ChevronDown, Sparkles } from "lucide-react";
import professionalPhoto from "@/assets/professional-photo.jpg";
import { FadeIn, ScaleIn, SlideIn, FloatingElement, HoverScale } from "./animations/AnimatedComponents";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Profile Image */}
            <ScaleIn delay={0.2}>
              <div className="relative flex-shrink-0">
                <motion.div 
                  className="gradient-border p-1 rounded-2xl"
                  animate={{ 
                    boxShadow: [
                      "0 0 30px rgba(45, 212, 191, 0.2)",
                      "0 0 50px rgba(168, 85, 247, 0.3)",
                      "0 0 30px rgba(236, 72, 153, 0.2)",
                      "0 0 50px rgba(45, 212, 191, 0.2)",
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-xl overflow-hidden bg-card">
                    <img
                      src={professionalPhoto}
                      alt="Soumyashree Dash"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </motion.div>
              </div>
            </ScaleIn>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <SlideIn delay={0.3} direction="right">
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles size={16} className="text-primary" />
                  </motion.div>
                  <span className="text-sm text-primary font-medium">Open to Opportunities</span>
                </motion.div>
              </SlideIn>

              {/* Name */}
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span 
                  className="gradient-text inline-block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Soumyashree
                </motion.span>
                <br />
                <motion.span 
                  className="text-foreground inline-block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Dash
                </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-lg md:text-xl text-primary font-medium mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Aspiring Data Scientist | Python Developer
              </motion.p>

              {/* Description */}
              <motion.p 
                className="text-muted-foreground max-w-xl mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Passionate about leveraging data science to solve real-world problems. 
                Currently pursuing B.Tech at SOA University.
              </motion.p>

              {/* Resume Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <HoverScale scale={1.05}>
                  <a
                    href="https://soumyashree.lovable.app/Soumyashree_Dash_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-medium text-primary-foreground mb-8 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                    }}
                  >
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <FileText size={20} />
                    </motion.div>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download</div>
                      <div className="font-semibold">My Resume</div>
                    </div>
                  </a>
                </HoverScale>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex flex-wrap justify-center lg:justify-start gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {[
                  { href: "https://github.com/Shree-z", icon: <Github size={18} />, label: "GitHub", delay: 0 },
                  { href: "https://www.linkedin.com/in/soumyashreedash/", icon: <Linkedin size={18} />, label: "LinkedIn", delay: 0.1 },
                  { href: "mailto:d.soumyashreedash@gmail.com", icon: <Mail size={18} />, label: "Email", delay: 0.2 },
                  { href: "tel:+917978175086", icon: <Phone size={18} />, label: "Contact Me", variant: "primary" as const, delay: 0.3 },
                ].map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 + link.delay }}
                  >
                    <SocialLink {...link} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <FloatingElement duration={2}>
          <motion.div 
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <ChevronDown size={28} className="text-primary" />
          </motion.div>
        </FloatingElement>
      </div>
    </section>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  label, 
  variant = "default" 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  variant?: "default" | "primary";
  delay?: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
      variant === "primary"
        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
        : "border border-border bg-card/50 text-foreground hover:border-primary/50"
    }`}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
  >
    {icon}
    {label}
  </motion.a>
);

export default HeroSection;
