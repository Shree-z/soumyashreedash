import { motion } from "framer-motion";
import { Briefcase, Heart } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./animations/AnimatedComponents";

const professionalExperience = [
  {
    title: "Computer Hardware & Networking Trainee",
    company: "Central Tool Room & Training Centre (MSME) Government of India",
    location: "Bhubaneswar, Odisha",
    period: "July 2025 - August 2025",
    description: "Learned basics of Computer Hardware, Networking, System Management, Server handling, and Troubleshooting.",
    highlights: [
      "Computer Hardware Troubleshooting",
      "Computer Hardware Installation & Assembly",
      "Computer Networking",
      "Operating System Installation",
      "Server Handling",
      "Red Hat Linux",
    ],
  },
  {
    title: "Python Development Intern",
    company: "Cognifyz Technologies",
    location: "",
    period: "June 2025 - July 2025",
    description: "Developed multiple Python applications focusing on data analysis and automation.",
    highlights: [
      "Developed multiple Python applications",
      "Worked on data analysis projects",
      "Implemented automation solutions",
    ],
  },
  {
    title: "Contributor",
    company: "Google Cloud Skill Boost",
    location: "",
    period: "April 2025 - June 2025",
    description: "Completed multiple badges focusing on machine learning and cloud technologies.",
    highlights: ["Completed ML badges", "Mastered cloud technologies", "Enhanced GCP expertise"],
  },
];

const volunteerExperience = [
  {
    title: "NSS Volunteer",
    organization: "National Service Scheme",
    period: "September 2023 - Present",
    description: "Actively participating in community service activities and social development programs.",
  },
  {
    title: "GDSC Member",
    organization: "Google Developer Student Clubs",
    period: "September 2023 - Present",
    description: "Contributing to tech community events and learning initiatives focused on Google technologies.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center mb-12">Experience</h2>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Professional Experience */}
          <AnimatedSection delay={0.1}>
            <div className="mb-12">
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="p-2 rounded-lg bg-primary/10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Briefcase size={20} className="text-primary" />
                </motion.div>
                <h3 className="text-2xl font-serif font-semibold">Professional Experience</h3>
              </motion.div>

              <StaggerContainer className="space-y-6" staggerDelay={0.15}>
                {professionalExperience.map((exp, idx) => (
                  <StaggerItem key={idx}>
                    <HoverScale scale={1.01}>
                      <motion.div 
                        className="glass-card rounded-2xl p-6 relative overflow-hidden"
                        whileHover={{ 
                          boxShadow: "0 20px 40px rgba(45, 212, 191, 0.1)",
                        }}
                      >
                        <motion.div 
                          className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          viewport={{ once: true }}
                          style={{ transformOrigin: "top" }}
                        />
                        <div className="pl-4">
                          <h4 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h4>
                          <p className="text-primary font-medium mb-1">{exp.company}</p>
                          {exp.location && (
                            <p className="text-sm text-muted-foreground mb-1">{exp.location}</p>
                          )}
                          <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          <ul className="grid grid-cols-2 gap-2">
                            {exp.highlights.map((highlight, hIdx) => (
                              <motion.li 
                                key={hIdx} 
                                className="text-sm text-muted-foreground flex items-start gap-2"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: hIdx * 0.05 }}
                                viewport={{ once: true }}
                              >
                                <span className="text-primary mt-1">•</span>
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>

          {/* Volunteer Experience */}
          <AnimatedSection delay={0.2}>
            <div>
              <motion.div 
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="p-2 rounded-lg bg-secondary/10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart size={20} className="text-secondary" />
                </motion.div>
                <h3 className="text-2xl font-serif font-semibold">Volunteer Experience</h3>
              </motion.div>

              <StaggerContainer className="grid md:grid-cols-2 gap-6" staggerDelay={0.15}>
                {volunteerExperience.map((exp, idx) => (
                  <StaggerItem key={idx}>
                    <HoverScale>
                      <motion.div 
                        className="glass-card rounded-2xl p-6 h-full"
                        whileHover={{ 
                          boxShadow: "0 20px 40px rgba(236, 72, 153, 0.1)",
                        }}
                      >
                        <h4 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h4>
                        <p className="text-secondary font-medium mb-1">{exp.organization}</p>
                        <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                        <p className="text-muted-foreground text-sm">{exp.description}</p>
                      </motion.div>
                    </HoverScale>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
