import { motion } from 'motion/react';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';

const positions = [
  {
    title: 'Chef de Rang (m/w/d)',
    department: 'Restaurant & Service',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Für unser Gourmet-Restaurant suchen wir einen erfahrenen Chef de Rang mit Leidenschaft für exzellenten Service.',
  },
  {
    title: 'Rezeptionist (m/w/d)',
    department: 'Front Office',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Als erste Kontaktperson unserer Gäste repräsentierst du unsere Werte von Herzlichkeit und Professionalität.',
  },
  {
    title: 'Sous Chef (m/w/d)',
    department: 'Küche',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Unterstütze unseren Küchenchef bei der Kreation außergewöhnlicher kulinarischer Erlebnisse.',
  },
  {
    title: 'Housekeeping Supervisor (m/w/d)',
    department: 'Housekeeping',
    location: 'Hamburg',
    type: 'Vollzeit',
    description: 'Übernimm die Verantwortung für makellose Sauberkeit und höchste Standards in unseren Suiten.',
  },
  {
    title: 'Spa Therapeut (m/w/d)',
    department: 'Wellness & Spa',
    location: 'Hamburg',
    type: 'Voll- oder Teilzeit',
    description: 'Verwöhne unsere Gäste mit erstklassigen Wellness-Behandlungen in unserem luxuriösen Spa-Bereich.',
  },
  {
    title: 'Night Auditor (m/w/d)',
    department: 'Front Office',
    location: 'Hamburg',
    type: 'Vollzeit (Nachtschicht)',
    description: 'Sorge für einen reibungslosen Ablauf während der Nacht und sei Ansprechpartner für unsere Gäste.',
  },
];

export function Positions() {
  return (
    <section className="py-24 md:py-32 px-8 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-muted-foreground tracking-widest mb-4">KARRIERE</div>
          <h2 className="mb-6">Offene Positionen</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Finde deine perfekte Rolle in unserem Team. Wir suchen talentierte Persönlichkeiten
            für verschiedene Bereiche unseres Hotels.
          </p>
        </motion.div>

        <div className="grid gap-6 max-w-5xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={position.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border hover:border-primary transition-all duration-300 p-8 bg-white hover:shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl">{position.title}</h3>
                    <span className="text-sm text-muted-foreground px-3 py-1 bg-accent rounded-full">
                      {position.department}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">
                    {position.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {position.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      Unbefristet
                    </div>
                  </div>
                </div>

                <button className="flex-shrink-0 flex items-center gap-2 px-6 py-3 border border-primary bg-primary text-white hover:bg-primary/90 transition-all duration-300 group-hover:gap-3">
                  Bewerben
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Deine Position ist nicht dabei?
          </p>
          <button className="px-8 py-4 bg-primary text-white hover:bg-primary/90 transition-all duration-300">
            Initiativbewerbung senden
          </button>
        </motion.div>
      </div>
    </section>
  );
}