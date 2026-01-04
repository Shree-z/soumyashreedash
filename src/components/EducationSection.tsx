import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "ITER, SOA University",
    specialization: "Specialization: Data Science",
    period: "2023 - 2027",
    location: "Bhubaneswar, India",
    status: "Ongoing",
    description:
      "Pursuing Bachelor of Technology with specialization in Data Science. Focusing on advanced topics including Machine Learning, Data Analytics, and AI applications.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Jawahar Navodaya Vidyalaya",
    specialization: null,
    period: "2015 - 2022",
    location: "Puri, India",
    status: "Completed",
    description:
      "Completed secondary education with strong foundation in Mathematics, Physics, and Computer Science.",
  },
];

const EducationSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text text-center mb-4">Education</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My academic journey in computer science and engineering
        </p>

        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                  <GraduationCap size={28} className="text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        edu.status === "Ongoing"
                          ? "bg-primary/10 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  
                  <p className="text-primary font-medium mb-1">{edu.institution}</p>
                  {edu.specialization && (
                    <p className="text-sm text-secondary mb-3">{edu.specialization}</p>
                  )}
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
