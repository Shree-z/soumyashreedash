import { Award, ExternalLink } from "lucide-react";

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
        <h2 className="section-title gradient-text text-center mb-4">Certifications</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Professional certifications that validate my expertise in data science and technology
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <div
              key={cert.title}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-gold/10">
                  <Award size={20} className="text-gold" />
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-primary">
                  <ExternalLink size={12} />
                  Verified
                </span>
              </div>
              <h3 className="text-lg font-serif font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
