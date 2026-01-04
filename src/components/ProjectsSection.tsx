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
        <h2 className="section-title gradient-text text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Explore my data science projects showcasing practical applications of machine learning and analytics
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 group"
            >
              <h3 className="text-xl font-serif font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
