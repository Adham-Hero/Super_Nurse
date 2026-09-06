import React from "react";
import { AppProvider, useApp } from "./context/AppContext";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Quote from "./components/Quote";
import About from "./components/About";
import Studies from "./components/Studies";
import Services from "./components/Services";
import History from "./components/History";
import Footer from "./components/Footer";

function Page() {
  const { t, s } = useApp();

  return (
    <div
      dir={s.dir}
      style={{
        background: t.bg,
        color: t.text,
        fontFamily: s.font,
        minHeight: "100vh",
        width: "100%",
        transition: "background .2s ease, color .2s ease",
      }}
    >
      <Nav />
      <Hero />
      <Quote />
      <About />
      <Studies />
      <Services />
      <History />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Page />
    </AppProvider>
  );
}
