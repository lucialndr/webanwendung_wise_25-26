import { motion } from 'motion/react';
import { Award, Heart, TrendingUp, Users } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Exzellenz leben',
    description: 'Wir setzen die höchsten Standards in der Hotellerie und fördern kontinuierliche Weiterentwicklung.',
  },
  {
    icon: Heart,
    title: 'Wertschätzung',
    description: 'Jedes Teammitglied ist wertvoll. Wir pflegen eine Kultur der Anerkennung und des Respekts.',
  },
  {
    icon: TrendingUp,
    title: 'Karrierechancen',
    description: 'Individuelle Entwicklungspläne und klare Aufstiegsmöglichkeiten in einem wachsenden Unternehmen.',
  },
  {
    icon: Users,
    title: 'Starkes Team',
    description: 'Arbeite mit den Besten der Branche zusammen und profitiere von einem unterstützenden Umfeld.',
  },
];

export function WhyUs() {
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
          <div className="text-gray-500 tracking-widest mb-4">WARUM WIR</div>
          <h2 className="mb-6">Deine Zukunft in der Luxus-Hotellerie</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Wir bieten mehr als nur einen Job. Bei uns findest du eine Gemeinschaft,
            die Leidenschaft, Professionalität und persönliches Wachstum vereint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-accent rounded-full">
                <reason.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}