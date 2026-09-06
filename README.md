# Super Nurse

A nursing education guide site built with React + Vite.

## Structure

```
src/
  main.jsx                 entry point
  App.jsx                  assembles all sections (Home → About → Studies → Services → History → Footer)
  index.css                global styles + responsive rules + card hover effects
  theme.js                 dark/light color tokens (hospital blue)
  content.js               merges every file in src/data/ into { en, ar }
  data/
    locale.js              text direction, font, language-toggle label
    nav.js                 brand name, nav links, contact email
    hero.js                hero headline, subtitle, CTA, stats
    quote.js               pull-quote text
    about.js               About Nursing section copy
    studies.js             course groups: name, description, resource links (per course)
    history.js             nursing history timeline entries
    services.js            services for students, incl. the GPA Calculator link
    footer.js              footer credit line — NOT split by language, same in EN/AR
  context/
    AppContext.jsx         shares theme mode + language, persists both to localStorage
  hooks/
    useScrollTo.js         smooth-scroll helper for nav links
  components/
    Nav.jsx                fixed nav bar, language + theme toggles, active-section highlight
    Hero.jsx                hero section with the illustration
    Quote.jsx                pull quote
    About.jsx                 about nursing section
    Studies.jsx                study & courses (card grid, grouped)
    CourseCard.jsx               reusable card used by Studies.jsx
    CourseModal.jsx                opens on click: description + resource links
    Services.jsx                    services for students (card grid)
    ServiceCard.jsx                   reusable card used by Services.jsx
    Footer.jsx                        footer (fixed text, same in both languages)
  assets/
    nurse-hero.png                     hero illustration (background removed)
```

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Editing content

Every section's text/data lives in its own file under `src/data/`. Open the
file for the section you want to change — e.g. add a course in
`src/data/studies.js`, or a service in `src/data/services.js` — and edit both
the `en` and `ar` objects. No component code needs to change.

**Exception:** `src/data/footer.js` is intentionally not split by language —
the footer credit line stays identical in English and Arabic.

## Persisted state

Theme mode and language are saved to `localStorage` (`sn_theme_mode`,
`sn_lang`) by `AppContext.jsx`, so a refresh keeps whatever the visitor last
selected.

## Replacing the hero illustration

`src/assets/nurse-hero.png` had its background removed and was cropped to the
figure. If you swap in a new image, a transparent PNG cropped close to the
subject will look best, since `Hero.jsx` renders it on top of a colored blob
shape rather than a plain box.
