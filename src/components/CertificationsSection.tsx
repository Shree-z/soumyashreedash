import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./animations/AnimatedComponents";

const certifications = [
  {
    title: "Data Analytics",
    issuer: "Google (Coursera)",
    description: "Comprehensive certification covering data analysis, visualization, and statistical methods.",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    description: "Participated in a comprehensive data analytics simulation, creating interactive Tableau dashboards.",
  },
  {
    title: "Gen AI Exchange Program",
    issuer: "Google",
    description: "Specialized program focusing on Generative AI technologies and applications.",
  },
  {
    title: "Geoprocessing with Python",
    issuer: "ISRO",
    description: "Advanced certification in geospatial data processing using Python programming.",
  },
  {
    title: "Computer Hardware & Networking",
    issuer: "CTTC",
    description: "Fundamental certification in computer hardware components and networking principles.",
  },
];

const CertificationsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center mb-4">Certifications</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Professional certifications that validate my expertise in data science and technology
          </p>
        </AnimatedSection>

        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          staggerDelay={0.1}
        >
          {certifications.map((cert, idx) => (
            <StaggerItem key={cert.title}>
              <HoverScale scale={1.03}>
                <motion.div
                  className="glass-card rounded-2xl p-6 h-full group cursor-pointer"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(212, 175, 55, 0.15)",
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <motion.div 
                      className="p-2 rounded-lg bg-gold/10"
                      whileHover={{ rotate: 15 }}
                    >
                      <Award size={20} className="text-gold" />
                    </motion.div>
                    <motion.span 
                      className="inline-flex items-center gap-1 text-xs text-primary"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ExternalLink size={12} />
                      Verified
                    </motion.span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </motion.div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default CertificationsSection;
