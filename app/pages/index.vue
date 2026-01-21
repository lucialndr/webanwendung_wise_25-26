<template>
  <main class="bg-background text-foreground">
    <!-- Hero -->
    <section class="relative h-[90vh] w-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80"
        alt="Luxuriöser Hotellobby"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div class="relative z-10 flex h-full flex-col">
        <nav class="flex items-center justify-between px-6 py-6 md:px-12">
          <span class="text-white tracking-[0.2em] text-sm md:text-base">HOTEL EXCELLENCE</span>
          <a
            href="#jobs"
            class="rounded border border-white/40 px-5 py-2 text-white hover:bg-white/10 backdrop-blur transition"
          >
            Jetzt bewerben
          </a>
        </nav>

        <div class="flex flex-1 flex-col items-center justify-center px-6 text-center md:px-12">
          <h1 class="mb-4 max-w-4xl text-3xl text-white md:text-5xl">
            Werde Teil unserer exzellenten Gastgeber-Familie
          </h1>
          <p class="mb-8 max-w-2xl text-lg text-white/90">
            Erlebe Hotellerie auf höchstem Niveau. Wir suchen leidenschaftliche Menschen, die unsere Vision von
            außergewöhnlicher Gastfreundschaft teilen.
          </p>
          <div class="flex flex-col items-center gap-3 sm:flex-row">
            <a href="#jobs" class="bg-white px-8 py-3 text-primary shadow hover:bg-white/90 transition">Offene Positionen</a>
            <a href="#warum" class="rounded border border-white px-8 py-3 text-white hover:bg-white/10 transition">
              Mehr erfahren
            </a>
          </div>
        </div>

        <div class="flex justify-center pb-8">
          <button
            class="text-white/70 transition hover:text-white"
            aria-label="Weiter scrollen"
            @click="scrollToContent"
          >
            <span class="inline-block animate-bounce text-3xl">⌄</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Warum wir -->
    <section id="warum" class="bg-background px-6 py-16 md:px-12 md:py-24">
      <div class="mx-auto max-w-6xl text-center">
        <p class="mb-3 tracking-[0.3em] text-sm text-gray-500">WARUM WIR</p>
        <h2 class="mb-4 text-3xl md:text-4xl">Deine Zukunft in der Luxus-Hotellerie</h2>
        <p class="mb-12 text-lg text-muted-foreground">
          Wir bieten mehr als nur einen Job. Bei uns findest du eine Gemeinschaft, die Leidenschaft, Professionalität und
          persönliches Wachstum vereint.
        </p>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="reason in reasons"
            :key="reason.title"
            class="rounded-lg bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <span class="text-xl text-primary">{{ reason.icon }}</span>
            </div>
            <h3 class="mb-2 text-lg font-medium">{{ reason.title }}</h3>
            <p class="text-sm text-muted-foreground">{{ reason.description }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section id="benefits" class="bg-white px-6 py-16 md:px-12 md:py-24">
      <div class="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
        <div class="order-2 lg:order-1">
          <div class="relative h-[420px] overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1562839938-ef837ead7478?auto=format&fit=crop&w=1200&q=80"
              alt="Spa und Wellness Bereich"
              class="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <p class="mb-3 tracking-[0.3em] text-sm text-muted-foreground">BENEFITS</p>
          <h2 class="mb-4 text-3xl md:text-4xl">Was wir dir bieten</h2>
          <p class="mb-8 text-muted-foreground">
            Unsere Mitarbeiter sind unser größtes Kapital. Daher investieren wir in dein Wohlbefinden, deine Entwicklung
            und deine Zufriedenheit.
          </p>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="flex gap-3 rounded-md border border-border bg-secondary/40 p-4"
            >
              <div class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                {{ benefit.icon }}
              </div>
              <div>
                <h4 class="font-medium">{{ benefit.title }}</h4>
                <p class="text-sm text-muted-foreground">{{ benefit.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Jobs -->
    <section id="jobs" class="bg-background px-6 py-16 md:px-12 md:py-24">
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 text-center">
          <p class="mb-3 tracking-[0.3em] text-sm text-muted-foreground">KARRIERE</p>
          <h2 class="mb-4 text-3xl md:text-4xl">Offene Positionen</h2>
          <p class="text-muted-foreground">
            Finde deine perfekte Rolle in unserem Team. Wir suchen talentierte Persönlichkeiten für verschiedene Bereiche
            unseres Hotels.
          </p>
        </div>

        <div class="space-y-6">
          <article
            v-for="position in positions"
            :key="position.title"
            class="rounded-lg border border-border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div class="space-y-3">
                <div class="flex flex-wrap items-center gap-3">
                  <h3 class="text-xl font-semibold">{{ position.title }}</h3>
                  <span class="rounded-full bg-accent px-3 py-1 text-sm text-primary">{{ position.department }}</span>
                </div>
                <p class="text-muted-foreground">{{ position.description }}</p>
                <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span class="flex items-center gap-2">📍 {{ position.location }}</span>
                  <span class="flex items-center gap-2">⏰ {{ position.type }}</span>
                  <span class="flex items-center gap-2">💼 Unbefristet</span>
                </div>
              </div>

              <NuxtLink
                :to="`/jobs/${position.slug}`"
                class="flex h-fit items-center gap-2 rounded bg-primary px-5 py-3 text-white shadow hover:bg-primary/90 transition"
              >
                Bewerben
                <span aria-hidden="true">→</span>
              </NuxtLink>
            </div>
          </article>
        </div>

        <div class="mt-10 text-center">
          <p class="mb-4 text-muted-foreground">Deine Position ist nicht dabei?</p>
          <a href="#kontakt" class="btn inline-flex items-center gap-2">Initiativbewerbung senden</a>
        </div>
      </div>
    </section>

    <!-- Kultur -->
    <section id="kultur" class="bg-white px-6 py-16 md:px-12 md:py-24">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12 text-center">
          <p class="mb-3 tracking-[0.3em] text-sm text-muted-foreground">UNSERE KULTUR</p>
          <h2 class="mb-4 text-3xl md:text-4xl">Werte, die uns verbinden</h2>
          <p class="text-muted-foreground">
            Unsere Unternehmenskultur basiert auf gemeinsamen Werten, die jeden Tag gelebt werden und uns zu einem
            außergewöhnlichen Team machen.
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-2">
          <div class="h-[320px] overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1578366941741-9e517759c620?auto=format&fit=crop&w=1200&q=80"
              alt="Hotelteam"
              class="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
          <div class="h-[320px] overflow-hidden rounded-md">
            <img
              src="https://images.unsplash.com/photo-1610957899934-fcc0db8d7287?auto=format&fit=crop&w=1200&q=80"
              alt="Restaurant"
              class="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <div
            v-for="value in values"
            :key="value.number"
            class="flex gap-4 rounded-lg border border-border bg-secondary/40 p-5"
          >
            <span class="text-2xl font-semibold text-muted">{{ value.number }}</span>
            <div>
              <h3 class="text-lg font-medium">{{ value.title }}</h3>
              <p class="text-muted-foreground">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontakt CTA -->
    <section id="kontakt" class="bg-primary px-6 py-16 text-white md:px-12 md:py-24">
      <div class="mx-auto max-w-4xl text-center">
        <p class="mb-3 tracking-[0.3em] text-sm text-white/70">WERDE TEIL DES TEAMS</p>
        <h2 class="mb-4 text-3xl md:text-4xl">Bereit für den nächsten Schritt?</h2>
        <p class="mb-10 text-white/90">
          Bewirb dich jetzt und starte deine Karriere in einem der führenden Luxushotels. Wir freuen uns darauf, dich
          kennenzulernen.
        </p>

        <div class="mb-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a href="mailto:karriere@hotel-excellence.de" class="btn bg-white text-primary hover:bg-white/90">
            Jetzt bewerben
          </a>
          <a
            href="mailto:karriere@hotel-excellence.de"
            class="rounded border border-white/40 px-6 py-3 text-white hover:bg-white/10 backdrop-blur transition"
          >
            Initiativbewerbung
          </a>
        </div>

        <div class="border-t border-white/25 pt-6 text-white/80">
          <p class="mb-4">Du hast Fragen? Wir sind für dich da.</p>
          <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="mailto:karriere@hotel-excellence.de" class="hover:text-white">karriere@hotel-excellence.de</a>
            <span class="hidden text-white/50 sm:inline">•</span>
            <a href="tel:+4940123456789" class="hover:text-white">+49 (0) 40 123 456 789</a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const reasons = [
  {
    icon: "★",
    title: "Exzellenz leben",
    description: "Wir setzen die höchsten Standards und fördern kontinuierliche Weiterentwicklung.",
  },
  {
    icon: "♡",
    title: "Wertschätzung",
    description: "Jedes Teammitglied ist wertvoll – Anerkennung und Respekt stehen im Mittelpunkt.",
  },
  {
    icon: "↗",
    title: "Karrierechancen",
    description: "Individuelle Entwicklungspläne und klare Aufstiegsmöglichkeiten in einem wachsenden Unternehmen.",
  },
  {
    icon: "👥",
    title: "Starkes Team",
    description: "Arbeite mit den Besten der Branche zusammen und profitiere von einem unterstützenden Umfeld.",
  },
]

const benefits = [
  { icon: "🍽", title: "Premium Verpflegung", description: "Kostenlose Mahlzeiten im Mitarbeiterrestaurant." },
  { icon: "🎓", title: "Weiterbildung", description: "Regelmäßige Trainings und Zertifizierungen." },
  { icon: "🗓", title: "Work-Life-Balance", description: "Flexible Arbeitszeiten und großzügiger Urlaub." },
  { icon: "🎁", title: "Attraktive Benefits", description: "Mitarbeiterrabatte, Bonusprogramme und mehr." },
  { icon: "🏋", title: "Fitness & Wellness", description: "Kostenlose Nutzung von Spa- und Fitnessbereich." },
  { icon: "🌍", title: "Internationale Chancen", description: "Möglichkeiten in unserem globalen Hotelnetzwerk." },
]

const positions = [
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

const values = [
  {
    number: "01",
    title: "Leidenschaft",
    description: "Wir lieben, was wir tun, und schaffen unvergessliche Gästeerlebnisse.",
  },
  {
    number: "02",
    title: "Exzellenz",
    description: "Perfektion ist unser Standard – wir übertreffen Erwartungen jeden Tag.",
  },
  {
    number: "03",
    title: "Teamgeist",
    description: "Respekt und Zusammenarbeit prägen unseren Alltag und unser Miteinander.",
  },
  {
    number: "04",
    title: "Innovation",
    description: "Wir bleiben neugierig und setzen neue Maßstäbe in der Branche.",
  },
]

const scrollToContent = () => {
  if (typeof window === "undefined") return
  window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
}
</script>

<style scoped>
.animate-bounce {
  animation: bounce 1.6s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
}
</style>
