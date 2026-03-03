import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-800 text-foreground mb-4">
            Book an Appointment
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Schedule a visit today. Our friendly staff will help you find the right doctor for your child.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Parent's Name" className="bg-muted/50" />
              <Input placeholder="Phone Number" className="bg-muted/50" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Child's Name" className="bg-muted/50" />
              <Input placeholder="Child's Age" className="bg-muted/50" />
            </div>
            <Input placeholder="Email Address" type="email" className="bg-muted/50" />
            <Textarea placeholder="Describe your concern..." rows={4} className="bg-muted/50" />
            <Button size="lg" className="w-full bg-gradient-hero hover:opacity-90 transition-opacity text-primary-foreground border-0 shadow-soft">
              Request Appointment
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Phone, label: "Emergency Helpline", value: "+91 123 456 7890", sub: "Available 24/7" },
              { icon: Mail, label: "Email Us", value: "care@littlestars.com", sub: "We reply within 2 hours" },
              { icon: MapPin, label: "Visit Us", value: "123 Health Avenue, Sector 5", sub: "New Delhi, India" },
              { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9 AM - 8 PM", sub: "Sunday: Emergency Only" },
            ].map((c) => (
              <div key={c.label} className="flex gap-4 items-start bg-card rounded-xl p-5 border border-border shadow-card">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-hero flex items-center justify-center">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-700 text-foreground text-sm">{c.label}</p>
                  <p className="text-foreground text-sm mt-0.5">{c.value}</p>
                  <p className="text-xs text-muted-foreground">{c.sub}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
