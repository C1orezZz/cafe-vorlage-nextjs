# Café Rosenherz - Modern Cafe Website Template

Eine wunderschöne, moderne Website-Vorlage für Cafés und Restaurants. Perfekt für kleine, gemütliche Cafés mit romantischer Atmosphäre.

## 🌟 Features

- 🎨 Modernes, romantisches Design mit Rosen-Theme
- 📱 Vollständig responsive für alle Geräte
- ⚡ Optimiert für Performance mit Next.js 15
- ♿ Barrierefrei & Accessibility-freundlich
- 🔍 SEO-optimiert mit Structured Data
- 📧 Kontaktformular
- 🪑 Interaktives Reservierungssystem
- ✨ Smooth Animationen mit Framer Motion
- 🎭 Einzigartiges, asymmetrisches Layout

## 🚀 Technologien

- **Next.js 15** - React Framework mit App Router & Turbopack
- **React 19** - UI Library
- **TypeScript** - Typsichere Programmierung
- **Tailwind CSS** - Utility-first CSS Framework
- **Framer Motion** - Animation Library
- **Lucide React** - Icons
- **React Hook Form** - Formular-Handling
- **Zod** - Schema-Validierung

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Server starten
npm start
```

Die Website läuft dann unter `http://localhost:3000`

## 📁 Projektstruktur

```
cafe-website/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── about/        # Über uns Seite
│   │   ├── kontakt/      # Kontakt Seite
│   │   ├── reservierung/ # Reservierung Seite
│   │   ├── speisekarte/  # Speisekarte Seite
│   │   ├── layout.tsx    # Root Layout
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Globale Styles
│   ├── components/
│   │   ├── pages/        # Seitenkomponenten
│   │   ├── sections/     # Abschnitte (Header, Footer, Hero, etc.)
│   │   └── ui/           # UI Komponenten (Button, Input, etc.)
│   ├── data/             # Daten & Konfiguration
│   ├── lib/              # Utilities & SEO
│   └── types/            # TypeScript Typen
└── public/               # Statische Assets
```

## 🎨 Anpassung

### Café-Informationen ändern

Bearbeite die Datei `src/data/cafe.ts`:

```typescript
export const cafeInfo: CafeInfo = {
  name: 'Ihr Café Name',
  description: 'Ihre Beschreibung...',
  address: 'Ihre Adresse',
  phone: '+49 XXX XXX XXX',
  email: 'ihre@email.de',
  // ... weitere Informationen
}
```

### Farben anpassen

Ändere die Farbwerte in `src/app/globals.css`:

```css
:root {
  --primary: 340 65% 65%;  /* Hauptfarbe (Rose) */
  --secondary: 280 30% 85%; /* Sekundärfarbe (Lila) */
  /* ... */
}
```

### SEO anpassen

Bearbeite `src/lib/seo.ts` für Meta-Tags und Structured Data.

## 📄 Seiten

- `/` - Startseite mit Hero und Menü-Vorschau
- `/speisekarte` - Vollständige Menükarte
- `/reservierung` - Interaktives Reservierungsformular
- `/about` - Über uns & Geschichte
- `/kontakt` - Kontaktformular & Informationen

## 🎯 Features im Detail

### Interaktives Reservierungssystem
- Vollständiger Kalender mit Monatsnavigation
- Zeitslot-Auswahl
- Gäste-Counter mit +/- Buttons
- Live-Vorschau der Reservierung
- Bestätigungsseite mit Zusammenfassung

### Responsive Design
- Mobile-first Ansatz
- Optimiert für Tablet & Desktop
- Touch-freundliche Interaktionen

### Performance
- Automatische Code-Splitting
- Image-Optimization
- Lazy-Loading
- Font-Optimization

## 📝 Lizenz

Alle Rechte vorbehalten. Diese Vorlage ist für kommerzielle und private Nutzung verfügbar.

## 🤝 Support

Bei Fragen oder Problemen erstelle bitte ein Issue im Repository.
