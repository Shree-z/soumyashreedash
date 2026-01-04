import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, MapPin, Send, Briefcase, Users, TrendingUp } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./animations/AnimatedComponents";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center mb-4">Get In Touch</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Let's connect and explore opportunities to collaborate on exciting data science projects
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={0.2}>
          {/* Contact Info */}
          <StaggerItem>
            <motion.div 
              className="glass-card rounded-2xl p-8 h-full"
              whileHover={{ boxShadow: "0 25px 50px rgba(45, 212, 191, 0.1)" }}
            >
              <h3 className="text-xl font-serif font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <ContactLink
                  href="mailto:d.soumyashreedash@gmail.com"
                  icon={<Mail size={20} />}
                  label="Email"
                  value="d.soumyashreedash@gmail.com"
                  delay={0}
                />
                <ContactLink
                  href="tel:+917978175086"
                  icon={<Phone size={20} />}
                  label="Phone"
                  value="+91 7978175086"
                  delay={0.1}
                />
                <ContactLink
                  href="https://github.com/Shree-z"
                  icon={<Github size={20} />}
                  label="GitHub"
                  value="Shree-z"
                  delay={0.2}
                />
                <ContactLink
                  href="https://www.linkedin.com/in/soumyashreedash/"
                  icon={<Linkedin size={20} />}
                  label="LinkedIn"
                  value="soumyashreedash"
                  delay={0.3}
                />
                <ContactLink
                  href="#"
                  icon={<MapPin size={20} />}
                  label="Location"
                  value="Bhubaneswar, India"
                  delay={0.4}
                />
              </div>
            </motion.div>
          </StaggerItem>

          {/* Collaborate Section */}
          <StaggerItem>
            <motion.div 
              className="glass-card rounded-2xl p-8 h-full"
              whileHover={{ boxShadow: "0 25px 50px rgba(236, 72, 153, 0.1)" }}
            >
              <h3 className="text-xl font-serif font-semibold mb-6">Let's Collaborate</h3>
              
              <motion.p 
                className="text-muted-foreground mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in the field of data science and technology.
              </motion.p>
              
              <motion.p 
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Whether you're looking for a data science intern, want to collaborate on a project, 
                or just want to connect, feel free to reach out!
              </motion.p>

              <div className="space-y-3 mb-8">
                {[
                  { icon: <Briefcase size={16} />, text: "Available for internships", delay: 0 },
                  { icon: <Users size={16} />, text: "Open to collaborations", delay: 0.1 },
                  { icon: <TrendingUp size={16} />, text: "Seeking data science opportunities", delay: 0.2 },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + item.delay }}
                    viewport={{ once: true }}
                  >
                    <InterestBadge icon={item.icon} text={item.text} />
                  </motion.div>
                ))}
              </div>

              <HoverScale scale={1.05}>
                <motion.a
                  href="mailto:d.soumyashreedash@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                  }}
                  whileHover={{ boxShadow: "0 10px 30px rgba(45, 212, 191, 0.3)" }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={18} />
                  </motion.div>
                  Send Message
                </motion.a>
              </HoverScale>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
};

const ContactLink = ({
  href,
  icon,
  label,
  value,
  delay,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) => (
  <motion.a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/30 transition-colors group"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    whileHover={{ x: 5 }}
  >
    <motion.div 
      className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      {icon}
    </motion.div>
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-medium text-foreground">{value}</div>
    </div>
  </motion.a>
);

const InterestBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <motion.div 
    className="flex items-center gap-2 text-sm text-muted-foreground"
    whileHover={{ x: 5, color: "hsl(var(--primary))" }}
  >
    <span className="text-primary">{icon}</span>
    {text}
  </motion.div>
);

export default ContactSection;
