import { motion } from "framer-motion";
import { GraduationCap, MapPin, Brain } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./animations/AnimatedComponents";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center mb-12">About Me</h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Info Cards */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6 mb-12" staggerDelay={0.15}>
            <StaggerItem>
              <InfoCard
                icon={<GraduationCap size={24} />}
                title="B.Tech Student"
                subtitle="SOA University"
              />
            </StaggerItem>
            <StaggerItem>
              <InfoCard
                icon={<MapPin size={24} />}
                title="Location"
                subtitle="Bhubaneswar, India"
              />
            </StaggerItem>
            <StaggerItem>
              <InfoCard
                icon={<Brain size={24} />}
                title="Specialization"
                subtitle="Data Science"
              />
            </StaggerItem>
          </StaggerContainer>

          {/* Bio */}
          <AnimatedSection delay={0.3}>
            <div className="glass-card rounded-2xl p-8 mb-8">
              <motion.p 
                className="text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                I am a passionate Computer Science and Engineering undergraduate student at ITER, 
                SOA University, with a specialization in Data Science. My journey in technology 
                is driven by a deep curiosity about how data can be transformed into meaningful insights.
              </motion.p>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                My interests span across Data Analysis, Machine Learning, and Artificial Intelligence. 
                I believe in the power of data-driven decision making.
              </motion.p>
            </div>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={0.4}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-serif font-semibold mb-6">Languages</h3>
              <StaggerContainer className="grid grid-cols-3 gap-4" staggerDelay={0.1}>
                <StaggerItem>
                  <LanguageCard language="Odia" level="Native" />
                </StaggerItem>
                <StaggerItem>
                  <LanguageCard language="Hindi" level="Advanced" />
                </StaggerItem>
                <StaggerItem>
                  <LanguageCard language="English" level="Intermediate" />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <HoverScale>
    <motion.div 
      className="glass-card rounded-xl p-6 text-center h-full"
      whileHover={{ 
        boxShadow: "0 20px 40px rgba(45, 212, 191, 0.15)",
        borderColor: "rgba(45, 212, 191, 0.3)"
      }}
    >
      <motion.div 
        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-semibold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </motion.div>
  </HoverScale>
);

const LanguageCard = ({ language, level }: { language: string; level: string }) => (
  <HoverScale scale={1.08}>
    <motion.div 
      className="text-center p-4 rounded-lg bg-muted/30"
      whileHover={{ backgroundColor: "rgba(45, 212, 191, 0.1)" }}
    >
      <div className="font-semibold text-foreground">{language}</div>
      <div className="text-xs text-primary">{level}</div>
    </motion.div>
  </HoverScale>
);

export default AboutSection;
