import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Meera Gupta", text: "The doctors at LittleStars are incredibly patient and caring. My son actually looks forward to his check-ups now!", rating: 5 },
  { name: "Amit Singh", text: "When our newborn needed emergency care at 2 AM, the team responded immediately. We're forever grateful for their dedication.", rating: 5 },
  { name: "Sneha Reddy", text: "Best pediatric hospital in the city. The child-friendly environment and expert doctors make all the difference.", rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-800 text-foreground mb-4">
            What Parents Say
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-warm text-warm" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
              <p className="font-display font-700 text-foreground text-sm">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
