import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MotifShowcase from "./components/MotifShowcase";
import Footer from "./components/Footer";
import ClassifierModal from "./components/ClassifierModal";

function BackgroundDecoration() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-batik-600/30 blur-3xl animate-blob" />
      <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-batik-400/20 blur-3xl animate-blob [animation-delay:3s]" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-batik-700/30 blur-3xl animate-blob [animation-delay:6s]" />
    </div>
  );
}

function App() {
  const [isClassifierOpen, setIsClassifierOpen] = useState(false);

  const openClassifier = () => setIsClassifierOpen(true);
  const closeClassifier = () => setIsClassifierOpen(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-batik-950 text-batik-50">
      <BackgroundDecoration />

      <Header onOpenClassifier={openClassifier} />

      <main className="relative z-10">
        <Hero onOpenClassifier={openClassifier} />
        <MotifShowcase />
      </main>

      <Footer />

      <ClassifierModal isOpen={isClassifierOpen} onClose={closeClassifier} />
    </div>
  );
}

export default App;
