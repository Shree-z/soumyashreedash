import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="py-8 border-t border-border/50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.p 
          className="text-sm text-muted-foreground"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          © 2025 Soumyashree Dash. Built with passion for data science.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
