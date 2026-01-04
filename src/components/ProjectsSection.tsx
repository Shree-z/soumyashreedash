import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, HoverScale } from "./animations/AnimatedComponents";

const projects = [
  {
    title: "Sentiment Analysis",
    description:
      "Text classification project using Python, NLTK, and Scikit-learn with comprehensive data visualization to analyze sentiment patterns in textual data.",
    tags: ["Python", "NLTK", "Scikit-learn", "Data Visualization"],
  },
  {
    title: "Python for Data Science",
    description:
      "Comprehensive stock and revenue analysis using yFinance API, web scraping techniques, Pandas for data manipulation, and Plotly for interactive visualizations.",
    tags: ["Python", "yFinance", "Pandas", "Plotly", "Web Scraping"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="section-title gradient-text text-center mb-4">Featured Projects</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore my data science projects showcasing practical applications of machine learning and analytics
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.2}>
          {projects.map((project, idx) => (
            <StaggerItem key={project.title}>
              <HoverScale scale={1.03}>
                <motion.div
                  className="glass-card rounded-2xl p-8 h-full group cursor-pointer"
                  whileHover={{ 
                    boxShadow: "0 30px 60px rgba(45, 212, 191, 0.15)",
                  }}
                >
                  <motion.h3 
                    className="text-xl font-serif font-semibold mb-4 text-foreground group-hover:text-primary transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIdx * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(45, 212, 191, 0.2)" }}
                      >
                        {tag}
                      </motion.span>
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

export default ProjectsSection;
