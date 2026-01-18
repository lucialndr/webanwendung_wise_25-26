import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  {
    number: '01',
    title: 'Leidenschaft',
    description: 'Wir lieben, was wir tun, und setzen uns mit ganzem Herzen für unvergessliche Gästeerlebnisse ein.',
  },
  {
    number: '02',
    title: 'Exzellenz',
    description: 'Perfektion ist unser Standard. Wir streben täglich danach, die Erwartungen zu übertreffen.',
  },
  {
    number: '03',
    title: 'Teamgeist',
    description: 'Gemeinsam erreichen wir Außergewöhnliches. Respekt und Zusammenarbeit prägen unseren Alltag.',
  },
  {
    number: '04',
    title: 'Innovation',
    description: 'Wir bleiben neugierig, entwickeln uns stetig weiter und setzen neue Maßstäbe in der Branche.',
  },
];

export function Culture() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-muted-foreground tracking-widest mb-4">UNSERE KULTUR</div>
          <h2 className="mb-6">Werte, die uns verbinden</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Unsere Unternehmenskultur basiert auf gemeinsamen Werten, die jeden Tag gelebt werden
            und uns zu einem außergewöhnlichen Team machen.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] rounded-sm overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1578366941741-9e517759c620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHRlYW0lMjBzdGFmZnxlbnwxfHx8fDE3NjU3OTQ2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Hotel team"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] rounded-sm overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1610957899934-fcc0db8d7287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBlbGVnYW50fGVufDF8fHx8MTc2NTcyMDQwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Elegant hotel restaurant"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 text-3xl text-muted">
                {value.number}
              </div>
              <div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}