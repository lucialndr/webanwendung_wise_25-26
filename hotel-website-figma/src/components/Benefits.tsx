import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Utensils, 
  GraduationCap, 
  Calendar, 
  Gift, 
  Dumbbell, 
  Globe 
} from 'lucide-react';

const benefits = [
  {
    icon: Utensils,
    title: 'Premium Verpflegung',
    description: 'Kostenlose Mahlzeiten in unserem Mitarbeiterrestaurant',
  },
  {
    icon: GraduationCap,
    title: 'Weiterbildung',
    description: 'Regelmäßige Trainings und Zertifizierungsprogramme',
  },
  {
    icon: Calendar,
    title: 'Work-Life-Balance',
    description: 'Flexible Arbeitszeiten und großzügige Urlaubsregelung',
  },
  {
    icon: Gift,
    title: 'Attraktive Benefits',
    description: 'Mitarbeiterrabatte, Bonusprogramme und mehr',
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Wellness',
    description: 'Kostenlose Nutzung unseres Spa- und Fitnessbereichs',
  },
  {
    icon: Globe,
    title: 'Internationale Chancen',
    description: 'Möglichkeiten in unserem globalen Hotelnetzwerk',
  },
];

export function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative h-[500px] rounded-sm overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1562839938-ef837ead7478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMHJlbGF4YXRpb258ZW58MXx8fHwxNzY1Nzk1MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Spa and wellness area"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Benefits Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="text-muted-foreground tracking-widest mb-4">BENEFITS</div>
            <h2 className="mb-6">Was wir dir bieten</h2>
            <p className="text-muted-foreground mb-10">
              Unsere Mitarbeiter sind unser größtes Kapital. Daher investieren wir in dein
              Wohlbefinden, deine Entwicklung und deine Zufriedenheit.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  <div>
                    <h4 className="mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}