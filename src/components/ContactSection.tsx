import { Mail, Phone, Github, Linkedin, MapPin, Send, Briefcase, Users, TrendingUp } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="section-title gradient-text text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let's connect and explore opportunities to collaborate on exciting data science projects
        </p>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-serif font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <ContactLink
                href="mailto:d.soumyashreedash@gmail.com"
                icon={<Mail size={20} />}
                label="Email"
                value="d.soumyashreedash@gmail.com"
              />
              <ContactLink
                href="tel:+917978175086"
                icon={<Phone size={20} />}
                label="Phone"
                value="+91 7978175086"
              />
              <ContactLink
                href="https://github.com/Shree-z"
                icon={<Github size={20} />}
                label="GitHub"
                value="Shree-z"
              />
              <ContactLink
                href="https://www.linkedin.com/in/soumyashreedash/"
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                value="soumyashreedash"
              />
              <ContactLink
                href="#"
                icon={<MapPin size={20} />}
                label="Location"
                value="Bhubaneswar, India"
              />
            </div>
          </div>

          {/* Collaborate Section */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-serif font-semibold mb-6">Let's Collaborate</h3>
            
            <p className="text-muted-foreground mb-6">
              I'm always interested in discussing new opportunities, innovative projects, 
              and collaborations in the field of data science and technology.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Whether you're looking for a data science intern, want to collaborate on a project, 
              or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-3 mb-8">
              <InterestBadge icon={<Briefcase size={16} />} text="Available for internships" />
              <InterestBadge icon={<Users size={16} />} text="Open to collaborations" />
              <InterestBadge icon={<TrendingUp size={16} />} text="Seeking data science opportunities" />
            </div>

            <a
              href="mailto:d.soumyashreedash@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium text-primary-foreground transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
              }}
            >
              <Send size={18} />
              Send Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactLink = ({
  href,
  icon,
  label,
  value,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/30 transition-colors group"
  >
    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      {icon}
    </div>
    <div>
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-sm font-medium text-foreground">{value}</div>
    </div>
  </a>
);

const InterestBadge = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2 text-sm text-muted-foreground">
    <span className="text-primary">{icon}</span>
    {text}
  </div>
);

export default ContactSection;
