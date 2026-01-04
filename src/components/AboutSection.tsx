import { GraduationCap, MapPin, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text text-center mb-12">About Me</h2>

        <div className="max-w-4xl mx-auto">
          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <InfoCard
              icon={<GraduationCap size={24} />}
              title="B.Tech Student"
              subtitle="SOA University"
            />
            <InfoCard
              icon={<MapPin size={24} />}
              title="Location"
              subtitle="Bhubaneswar, India"
            />
            <InfoCard
              icon={<Brain size={24} />}
              title="Specialization"
              subtitle="Data Science"
            />
          </div>

          {/* Bio */}
          <div className="glass-card rounded-2xl p-8 mb-8">
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate Computer Science and Engineering undergraduate student at ITER, 
              SOA University, with a specialization in Data Science. My journey in technology 
              is driven by a deep curiosity about how data can be transformed into meaningful insights.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My interests span across Data Analysis, Machine Learning, and Artificial Intelligence. 
              I believe in the power of data-driven decision making.
            </p>
          </div>

          {/* Languages */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-serif font-semibold mb-6">Languages</h3>
            <div className="grid grid-cols-3 gap-4">
              <LanguageCard language="Odia" level="Native" />
              <LanguageCard language="Hindi" level="Advanced" />
              <LanguageCard language="English" level="Intermediate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) => (
  <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300">
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{subtitle}</p>
  </div>
);

const LanguageCard = ({ language, level }: { language: string; level: string }) => (
  <div className="text-center p-4 rounded-lg bg-muted/30">
    <div className="font-semibold text-foreground">{language}</div>
    <div className="text-xs text-primary">{level}</div>
  </div>
);

export default AboutSection;
