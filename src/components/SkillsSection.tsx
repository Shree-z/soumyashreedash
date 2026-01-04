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
        <h2 className="section-title gradient-text text-center mb-4">Skills & Expertise</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical skills and proficiency levels
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-lg font-serif font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-foreground">{name}</span>
      <span className="text-xs text-primary font-semibold">{level}%</span>
    </div>
    <div className="skill-bar">
      <div
        className="skill-bar-fill"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export default SkillsSection;
