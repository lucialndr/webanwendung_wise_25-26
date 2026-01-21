<template>
  <main class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Job Header -->
    <section class="bg-primary px-6 py-16 text-white md:px-12">
      <div class="mx-auto max-w-4xl">
        <NuxtLink to="/" class="mb-6 inline-flex items-center gap-2 text-white/80 hover:text-white transition">
          ← Zurück zu allen Positionen
        </NuxtLink>
        
        <div v-if="job">
          <div class="mb-4 flex flex-wrap items-center gap-3">
            <span class="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur">{{ job.department }}</span>
            <span class="text-white/70">•</span>
            <span class="text-white/90">{{ job.type }}</span>
            <span class="text-white/70">•</span>
            <span class="text-white/90">📍 {{ job.location }}</span>
          </div>
          
          <h1 class="mb-4 text-4xl md:text-5xl font-bold">{{ job.title }}</h1>
          <p class="text-xl text-white/90">{{ job.description }}</p>
        </div>

        <div v-else class="text-center">
          <h1 class="text-3xl font-bold">Position nicht gefunden</h1>
          <p class="mt-4 text-white/80">Diese Stelle existiert nicht oder ist nicht mehr verfügbar.</p>
        </div>
      </div>
    </section>

    <!-- Job Details -->
    <section v-if="job" class="px-6 py-16 md:px-12">
      <div class="mx-auto max-w-4xl">
        <div class="grid gap-8 lg:grid-cols-3">
          <!-- Main Content -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Aufgaben -->
            <div class="rounded-lg bg-white p-8 shadow-sm">
              <h2 class="mb-4 text-2xl font-semibold">Deine Aufgaben</h2>
              <ul class="space-y-3 text-gray-700">
                <li class="flex gap-3">
                  <span class="text-primary">✓</span>
                  <span>Betreuung unserer internationalen Gäste mit höchster Servicequalität</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">✓</span>
                  <span>Koordination und Führung des Serviceteams während deiner Schicht</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">✓</span>
                  <span>Beratung zu unseren Speisen und Getränken mit Fachkompetenz</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">✓</span>
                  <span>Sicherstellung reibungsloser Abläufe im Restaurant</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">✓</span>
                  <span>Aktive Mitgestaltung unvergesslicher Gästeerlebnisse</span>
                </li>
              </ul>
            </div>

            <!-- Anforderungen -->
            <div class="rounded-lg bg-white p-8 shadow-sm">
              <h2 class="mb-4 text-2xl font-semibold">Das bringst du mit</h2>
              <ul class="space-y-3 text-gray-700">
                <li class="flex gap-3">
                  <span class="text-primary">•</span>
                  <span>Abgeschlossene Ausbildung in der Hotellerie oder Gastronomie</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">•</span>
                  <span>Mehrjährige Berufserfahrung im gehobenen Service</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">•</span>
                  <span>Sehr gute Deutsch- und Englischkenntnisse</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">•</span>
                  <span>Leidenschaft für exzellenten Service und Gastfreundschaft</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">•</span>
                  <span>Gepflegtes Erscheinungsbild und souveränes Auftreten</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-primary">•</span>
                  <span>Teamgeist und Flexibilität</span>
                </li>
              </ul>
            </div>

            <!-- Was wir bieten -->
            <div class="rounded-lg bg-white p-8 shadow-sm">
              <h2 class="mb-4 text-2xl font-semibold">Was wir dir bieten</h2>
              <div class="grid gap-4 sm:grid-cols-2">
                <div class="flex items-start gap-3">
                  <span class="text-2xl">💰</span>
                  <div>
                    <h3 class="font-medium">Attraktive Vergütung</h3>
                    <p class="text-sm text-gray-600">Leistungsgerechtes Gehalt plus Prämien</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">📚</span>
                  <div>
                    <h3 class="font-medium">Weiterbildung</h3>
                    <p class="text-sm text-gray-600">Schulungen und Entwicklungsprogramme</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🏋</span>
                  <div>
                    <h3 class="font-medium">Wellness & Fitness</h3>
                    <p class="text-sm text-gray-600">Kostenlose Nutzung unserer Spa-Bereiche</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🍽️</span>
                  <div>
                    <h3 class="font-medium">Verpflegung</h3>
                    <p class="text-sm text-gray-600">Kostenlose Mitarbeitermahlzeiten</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">🗓</span>
                  <div>
                    <h3 class="font-medium">Work-Life-Balance</h3>
                    <p class="text-sm text-gray-600">Flexible Arbeitszeiten, 30 Tage Urlaub</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <span class="text-2xl">👥</span>
                  <div>
                    <h3 class="font-medium">Tolles Team</h3>
                    <p class="text-sm text-gray-600">Familiäres Arbeitsklima</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <div class="sticky top-6 space-y-6">
              <!-- Quick Facts -->
              <div class="rounded-lg bg-white p-6 shadow-sm">
                <h3 class="mb-4 text-lg font-semibold">Auf einen Blick</h3>
                <div class="space-y-3 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Abteilung:</span>
                    <span class="font-medium">{{ job.department }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Standort:</span>
                    <span class="font-medium">{{ job.location }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Arbeitszeit:</span>
                    <span class="font-medium">{{ job.type }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Vertrag:</span>
                    <span class="font-medium">Unbefristet</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Start:</span>
                    <span class="font-medium">Ab sofort</span>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="rounded-lg bg-primary p-6 text-white shadow-lg">
                <h3 class="mb-3 text-lg font-semibold">Interessiert?</h3>
                <p class="mb-4 text-sm text-white/90">
                  Bewirb dich jetzt und werde Teil unseres Teams!
                </p>
                <NuxtLink
                  to="/carreer"
                  class="block w-full rounded bg-white px-6 py-3 text-center font-semibold text-primary transition hover:bg-white/90"
                >
                  Jetzt bewerben
                </NuxtLink>
              </div>

              <!-- Kontakt -->
              <div class="rounded-lg bg-gray-50 p-6">
                <h3 class="mb-3 text-lg font-semibold">Fragen?</h3>
                <p class="mb-4 text-sm text-gray-600">
                  Unser HR-Team hilft dir gerne weiter.
                </p>
                <div class="space-y-2 text-sm">
                  <a href="mailto:karriere@hotel-excellence.de" class="block text-primary hover:underline">
                    karriere@hotel-excellence.de
                  </a>
                  <a href="tel:+4940123456789" class="block text-gray-700 hover:text-primary">
                    +49 (0) 40 123 456 789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Weitere Positionen -->
    <section v-if="job" class="bg-white px-6 py-16 md:px-12">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-8 text-center text-3xl font-semibold">Weitere offene Positionen</h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="otherJob in otherJobs"
            :key="otherJob.slug"
            :to="`/jobs/${otherJob.slug}`"
            class="group rounded-lg border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span class="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs text-primary">
              {{ otherJob.department }}
            </span>
            <h3 class="mb-2 text-lg font-semibold group-hover:text-primary transition">
              {{ otherJob.title }}
            </h3>
            <p class="mb-3 text-sm text-gray-600">{{ otherJob.description }}</p>
            <div class="flex items-center gap-2 text-sm text-primary">
              <span>Mehr erfahren</span>
              <span>→</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug

// Alle Positionen (sollten idealerweise aus einer API oder zentralen Datei kommen)
const allPositions = [
  {
    slug: "chef-de-rang",
    title: "Chef de Rang (m/w/d)",
    department: "Restaurant & Service",
    location: "Hamburg",
    type: "Vollzeit",
    description: "Für unser Gourmet-Restaurant suchen wir einen erfahrenen Chef de Rang mit Leidenschaft für Service.",
  },
  {
    slug: "rezeptionist",
    title: "Rezeptionist (m/w/d)",
    department: "Front Office",
    location: "Hamburg",
    type: "Vollzeit",
    description: "Du repräsentierst unsere Werte von Herzlichkeit und Professionalität als erste Kontaktperson.",
  },
  {
    slug: "sous-chef",
    title: "Sous Chef (m/w/d)",
    department: "Küche",
    location: "Hamburg",
    type: "Vollzeit",
    description: "Unterstütze unseren Küchenchef bei der Kreation außergewöhnlicher kulinarischer Erlebnisse.",
  },
  {
    slug: "housekeeping-supervisor",
    title: "Housekeeping Supervisor (m/w/d)",
    department: "Housekeeping",
    location: "Hamburg",
    type: "Vollzeit",
    description: "Verantworte makellose Sauberkeit und höchste Standards in unseren Suiten.",
  },
  {
    slug: "spa-therapeut",
    title: "Spa Therapeut (m/w/d)",
    department: "Wellness & Spa",
    location: "Hamburg",
    type: "Voll- oder Teilzeit",
    description: "Verwöhne unsere Gäste mit erstklassigen Wellness-Behandlungen in unserem Spa-Bereich.",
  },
  {
    slug: "night-auditor",
    title: "Night Auditor (m/w/d)",
    department: "Front Office",
    location: "Hamburg",
    type: "Vollzeit (Nachtschicht)",
    description: "Sorge für einen reibungslosen Ablauf während der Nacht und sei Ansprechpartner für Gäste.",
  },
]

// Aktuelle Position finden
const job = computed(() => allPositions.find(p => p.slug === slug))

// Andere Positionen (max 3)
const otherJobs = computed(() => 
  allPositions
    .filter(p => p.slug !== slug)
    .slice(0, 3)
)

// SEO
useHead({
  title: job.value ? `${job.value.title} - Hotel Excellence` : 'Position nicht gefunden',
  meta: [
    { name: 'description', content: job.value?.description || 'Karriere bei Hotel Excellence' }
  ]
})
</script>
