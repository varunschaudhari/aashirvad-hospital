import { motion } from "framer-motion";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";

const doctors = [
  { name: "Dr. Rajesh Kumar", role: "Chief Pediatrician", exp: "20+ years", img: doctor1 },
  { name: "Dr. Priya Sharma", role: "Neonatologist", exp: "15+ years", img: doctor2 },
  { name: "Dr. Anita Patel", role: "Child Neurologist", exp: "12+ years", img: doctor3 },
];

const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-800 text-foreground mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dedicated pediatric specialists committed to providing the best care for your children.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow border border-border group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6 -mt-4 relative">
                <h3 className="font-display text-xl font-700 text-foreground">{d.name}</h3>
                <p className="text-primary font-semibold text-sm">{d.role}</p>
                <p className="text-muted-foreground text-sm mt-1">{d.exp} experience</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
