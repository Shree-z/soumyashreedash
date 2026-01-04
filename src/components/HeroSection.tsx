import { FileText, Github, Linkedin, Mail, Phone, ChevronDown, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Profile Image */}
            <div className="relative flex-shrink-0">
              <div className="gradient-border p-1 rounded-2xl">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-xl overflow-hidden bg-card">
                  <img
                    src="https://soumyashree.lovable.app/lovable-uploads/professional_image_sd.jpg"
                    alt="Soumyashree Dash"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <Sparkles size={16} className="text-primary animate-pulse" />
                <span className="text-sm text-primary font-medium">Open to Opportunities</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                <span className="gradient-text">Soumyashree</span>
                <br />
                <span className="text-foreground">Dash</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-primary font-medium mb-4">
                Aspiring Data Scientist | Python Developer
              </p>

              {/* Description */}
              <p className="text-muted-foreground max-w-xl mb-8">
                Passionate about leveraging data science to solve real-world problems. 
                Currently pursuing B.Tech at SOA University.
              </p>

              {/* Resume Button */}
              <a
                href="https://soumyashree.lovable.app/Soumyashree_Dash_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 rounded-xl font-medium text-primary-foreground mb-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                }}
              >
                <FileText size={20} />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download</div>
                  <div className="font-semibold">My Resume</div>
                </div>
              </a>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <SocialLink href="https://github.com/Shree-z" icon={<Github size={18} />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/soumyashreedash/" icon={<Linkedin size={18} />} label="LinkedIn" />
                <SocialLink href="mailto:d.soumyashreedash@gmail.com" icon={<Mail size={18} />} label="Email" />
                <SocialLink href="tel:+917978175086" icon={<Phone size={18} />} label="Contact Me" variant="primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={28} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ 
  href, 
  icon, 
  label, 
  variant = "default" 
}: { 
  href: string; 
  icon: React.ReactNode; 
  label: string; 
  variant?: "default" | "primary";
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
      variant === "primary"
        ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
        : "border border-border bg-card/50 text-foreground hover:border-primary/50"
    }`}
  >
    {icon}
    {label}
  </a>
);

export default HeroSection;
