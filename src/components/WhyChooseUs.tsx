import { motion } from "framer-motion";
import { Clock, Award, Heart, Users } from "lucide-react";

const features = [
  { icon: Clock, title: "24/7 Availability", desc: "Round-the-clock emergency pediatric services for your peace of mind." },
  { icon: Award, title: "Certified Experts", desc: "Board-certified pediatricians with advanced training in child healthcare." },
  { icon: Heart, title: "Child-Friendly", desc: "A warm, playful environment designed to make children feel comfortable and safe." },
  { icon: Users, title: "Family-Centered", desc: "We involve the whole family in the child's care journey and treatment plan." },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-800 text-foreground mb-4">
              Your Child Deserves the Best Care
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              At LittleStars Children's Hospital, we combine medical excellence with genuine compassion. 
              Every child is unique, and we tailor our approach to meet their individual needs.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-gradient-hero flex items-center justify-center">
                    <f.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-700 text-foreground text-sm">{f.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-primary-foreground">
              <h3 className="font-display text-2xl font-800 mb-6">Our Promise</h3>
              <ul className="space-y-4">
                {[
                  "Gentle and compassionate treatment for every child",
                  "Transparent communication with parents at every step",
                  "Latest medical technology and evidence-based practices",
                  "Affordable care with flexible payment options",
                  "Follow-up care and ongoing health monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-lg">✓</span>
                    <span className="text-sm opacity-95">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
