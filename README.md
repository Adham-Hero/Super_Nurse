# Super Nurse

A nursing education guide site built with React + Vite.

## Structure

```
src/
  main.jsx              entry point
  App.jsx                assembles all sections
  index.css               global styles + responsive rules
  theme.js                 dark/light color tokens (hospital blue)
  content.js                all English/Arabic copy + data
  context/
    AppContext.jsx          shares theme mode + language across the app
  hooks/
    useScrollTo.js            smooth-scroll helper for nav links
  components/
    Nav.jsx                   fixed nav bar, language + theme toggles
    Hero.jsx                  hero section
    Quote.jsx                 pull quote
    About.jsx                 about nursing section
    Studies.jsx                study & courses (grouped skill chips)
    History.jsx                 nursing history timeline list
    Services.jsx                 services for students (grid)
    ServiceCard.jsx               reusable card used by Services.jsx
    Footer.jsx                    footer

```

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Adding more services or courses

Open `src/content.js` and add a new entry to the `services` array (or
`stackGroups` items) under both the `en` and `ar` objects. `ServiceCard.jsx`
is fully data-driven, so no other file needs to change.

## Switching language / theme

Both are handled by `src/context/AppContext.jsx`. `Nav.jsx` calls
`toggleLang()` and `toggleMode()`, and every component reads the active
theme/copy via the `useApp()` hook.
