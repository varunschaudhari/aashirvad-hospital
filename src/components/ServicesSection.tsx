import { motion } from "framer-motion";
import { Baby, Stethoscope, Syringe, Brain, HeartPulse, Pill } from "lucide-react";

const services = [
  { icon: Baby, title: "Newborn Care", desc: "Specialized neonatal care with state-of-the-art NICU facilities for premature and critical newborns." },
  { icon: Syringe, title: "Vaccination", desc: "Complete immunization programs following national schedules to protect your child from diseases." },
  { icon: Stethoscope, title: "General Pediatrics", desc: "Routine check-ups, growth monitoring, and treatment for common childhood illnesses." },
  { icon: Brain, title: "Child Development", desc: "Developmental assessments and early intervention for speech, motor, and cognitive milestones." },
  { icon: HeartPulse, title: "Emergency Care", desc: "24/7 pediatric emergency services with trained specialists ready for any urgent situation." },
  { icon: Pill, title: "Allergy & Asthma", desc: "Expert diagnosis and management of childhood allergies, asthma, and respiratory conditions." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-800 text-foreground mb-4">
            Comprehensive Child Healthcare
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From routine check-ups to specialized treatments, we provide everything your child needs to grow healthy and strong.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-shadow border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <s.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-700 text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
