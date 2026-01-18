import { motion } from 'motion/react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export function ApplicationCTA() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-primary text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-white/70 tracking-widest mb-4">WERDE TEIL DES TEAMS</div>
          <h2 className="mb-6 text-white">Bereit für den nächsten Schritt?</h2>
          <p className="text-white/90 mb-12 max-w-2xl mx-auto">
            Bewirb dich jetzt und starte deine Karriere in einem der führenden Luxushotels.
            Wir freuen uns darauf, dich kennenzulernen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 bg-white text-primary hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2 group">
              Jetzt bewerben
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              Initiativbewerbung
            </button>
          </div>

          {/* Contact Info */}
          <div className="pt-12 border-t border-white/20">
            <p className="text-white/70 mb-6">Du hast Fragen? Wir sind für dich da.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:karriere@hotel-excellence.de" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Mail size={18} />
                karriere@hotel-excellence.de
              </a>
              <a 
                href="tel:+4940123456789" 
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Phone size={18} />
                +49 (0) 40 123 456 789
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}