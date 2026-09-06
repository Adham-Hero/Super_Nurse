import { locale } from "./data/locale";
import { nav } from "./data/nav";
import { hero } from "./data/hero";
import { quote } from "./data/quote";
import { about } from "./data/about";
import { studies } from "./data/studies";
import { history } from "./data/history";
import { services } from "./data/services";

export const content = {
  en: {
    ...locale.en,
    ...nav.en,
    ...hero.en,
    quote: quote.en,
    ...about.en,
    ...studies.en,
    ...history.en,
    ...services.en,
  },
  ar: {
    ...locale.ar,
    ...nav.ar,
    ...hero.ar,
    quote: quote.ar,
    ...about.ar,
    ...studies.ar,
    ...history.ar,
    ...services.ar,
  },
};
