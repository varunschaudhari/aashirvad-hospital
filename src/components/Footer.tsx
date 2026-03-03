import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <span className="font-display text-xl font-800 flex items-center gap-2 mb-4">
              🏥 LittleStars
            </span>
            <p className="text-sm opacity-70 leading-relaxed">
              Dedicated to providing exceptional pediatric healthcare with compassion and excellence.
            </p>
          </div>
          <div>
            <h4 className="font-display font-700 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Home", "Services", "Doctors", "About", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-700 mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-70">
              {["Newborn Care", "Vaccination", "General Pediatrics", "Emergency Care"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-700 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>+91 123 456 7890</li>
              <li>care@littlestars.com</li>
              <li>123 Health Avenue, Sector 5</li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs opacity-60">© 2026 LittleStars Children's Hospital. All rights reserved.</p>
          <p className="text-xs opacity-60 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 fill-accent text-accent" /> for healthier children
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
