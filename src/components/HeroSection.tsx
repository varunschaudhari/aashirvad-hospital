import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDays, Shield } from "lucide-react";
import heroImg from "@/assets/hero-doctor.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-0 min-h-screen flex items-center overflow-hidden bg-gradient-soft">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="py-12 md:py-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-6">
            🌟 Trusted Pediatric Care
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-900 leading-tight text-foreground mb-6">
            Caring for Your{" "}
            <span className="text-gradient-hero">Little Stars</span>{" "}
            with Love
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Expert pediatric care in a warm, child-friendly environment. 
            Our experienced doctors ensure your child's health and happiness come first.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild className="bg-gradient-hero hover:opacity-90 transition-opacity shadow-soft text-primary-foreground border-0">
              <a href="#contact">
                <CalendarDays className="w-5 h-5 mr-2" />
                Book Appointment
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">
                <Shield className="w-5 h-5 mr-2" />
                Our Services
              </a>
            </Button>
          </div>

          <div className="flex gap-8 mt-10">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10K+", label: "Happy Families" },
              { value: "24/7", label: "Emergency Care" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-display font-800 text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-elevated">
            <img src={heroImg} alt="Pediatric doctor caring for a happy child" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card flex items-center gap-3 animate-float">
            <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
              <span className="text-xl">👶</span>
            </div>
            <div>
              <p className="font-display font-700 text-foreground">500+</p>
              <p className="text-xs text-muted-foreground">Newborn Care</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
