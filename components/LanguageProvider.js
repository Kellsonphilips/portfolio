'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const languages = {
  en: {
    about: "About Me",
    hero: {
      title: "Hi, I'm Philip Kelechukwu Orji",
      subtitle: "ICT Solution Provider, Software Engineer & Data Analyst",
      description: "Welcome to my professional space, where I showcase my projects, skills, and capabilities. I help businesses transform their ideas into digital reality.",
      getInTouch: "Get in Touch",
      viewProjects: "View Projects"
    },
    about: {
      title: "About Me",
      description: "Hello! I'm Philip Kelechukwu Orji, an ICT Solution Provider, Software Engineer, and Data Analyst with a passion for transforming complex business challenges into elegant, efficient, and scalable digital solutions. My passion in building, and helping businesses shaped my journey in learning technology, and that has been driven by a relentless curiosity and a commitment to my continuous learning."
    }
  },
  es: {
    about: "Sobre Mí",
    hero: {
      title: "Hola, soy Philip Kelechukwu Orji",
      subtitle: "Proveedor de Soluciones TIC, Ingeniero de Software y Analista de Datos",
      description: "Bienvenido a mi espacio profesional, donde muestro mis proyectos, habilidades y capacidades. Ayudo a las empresas a transformar sus ideas en realidad digital.",
      getInTouch: "Contactar",
      viewProjects: "Ver Proyectos"
    },
    about: {
      title: "Sobre Mí",
      description: "¡Hola! Soy Philip Kelechukwu Orji, un Proveedor de Soluciones TIC, Ingeniero de Software y Analista de Datos con pasión por transformar desafíos empresariales complejos en soluciones digitales elegantes, eficientes y escalables. Mi pasión por construir y ayudar a las empresas ha moldeado mi viaje en el aprendizaje de la tecnología, y eso ha sido impulsado por una curiosidad implacable y un compromiso con mi aprendizaje continuo."
    }
  },
  fr: {
    about: "À Propos",
    hero: {
      title: "Bonjour, je suis Philip Kelechukwu Orji",
      subtitle: "Fournisseur de Solutions TIC, Ingénieur Logiciel & Analyste de Données",
      description: "Bienvenue dans mon espace professionnel, où je présente mes projets, compétences et capacités. J'aide les entreprises à transformer leurs idées en réalité numérique.",
      getInTouch: "Me Contacter",
      viewProjects: "Voir les Projets"
    },
    about: {
      title: "À Propos",
      description: "Bonjour ! Je suis Philip Kelechukwu Orji, un Fournisseur de Solutions TIC, Ingénieur Logiciel et Analyste de Données passionné par la transformation des défis commerciaux complexes en solutions numériques élégantes, efficaces et évolutives. Ma passion pour la construction et l'aide aux entreprises a façonné mon parcours dans l'apprentissage de la technologie, et cela a été motivé par une curiosité incessante et un engagement envers mon apprentissage continu."
    }
  }
};

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language);
    
    // Trigger Google Translate
    if (window.google && window.google.translate) {
      const select = document.querySelector('.goog-te-combo');
      if (select) {
        select.value = language;
        select.dispatchEvent(new Event('change'));
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 