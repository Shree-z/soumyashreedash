import { Briefcase, Heart } from "lucide-react";

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
        <h2 className="section-title gradient-text text-center mb-12">Experience</h2>

        <div className="max-w-4xl mx-auto">
          {/* Professional Experience */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Briefcase size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Professional Experience</h3>
            </div>

            <div className="space-y-6">
              {professionalExperience.map((exp, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
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
                        <li key={hIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-secondary/10">
                <Heart size={20} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold">Volunteer Experience</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {volunteerExperience.map((exp, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-1">{exp.title}</h4>
                  <p className="text-secondary font-medium mb-1">{exp.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
