import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./animations/AnimatedComponents";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "C", level: 60 },
      { name: "C++", level: 50 },
    ],
  },
  {
    title: "Data Tools",
    skills: [
      { name: "Tableau", level: 85 },
      { name: "Excel", level: 80 },
      { name: "Plotly", level: 75 },
      { name: "Jupyter Notebook", level: 90 },
    ],
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "Google Cloud", level: 70 },
      { name: "IBM Cloud", level: 65 },
    ],
  },
  {
    title: "Hardware & Networking",
    skills: [
      { name: "Computer Hardware", level: 90 },
      { name: "Computer Networking", level: 88 },
      { name: "Server Handling", level: 85 },
      { name: "Red Hat Linux", level: 85 },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Web Scraping", level: 80 },
      { name: "APIs", level: 75 },
      { name: "Adobe Illustrator", level: 60 },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center mb-4">Skills & Expertise</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </AnimatedSection>

        <StaggerContainer 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          staggerDelay={0.1}
        >
          {skillCategories.map((category, idx) => (
            <StaggerItem key={category.title}>
              <HoverScale scale={1.02}>
                <motion.div
                  className="glass-card rounded-2xl p-6 h-full"
                  whileHover={{ 
                    boxShadow: "0 25px 50px rgba(45, 212, 191, 0.1)",
                  }}
                >
                  <motion.h3 
                    className="text-lg font-serif font-semibold mb-6 text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {category.title}
                  </motion.h3>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <SkillBar 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        delay={skillIdx * 0.1}
                      />
                    ))}
                  </div>
                </motion.div>
              </HoverScale>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <motion.span 
          className="text-xs text-primary font-semibold"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.25, 0.4, 0.25, 1] }}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
