// Central place for site copy & links, split by language.
// Add a new language by adding another key here (e.g. "id", "en", "jp"...).

export const translations = {
  en: {
    nav: {
      brand: "GregoryWTz",
      links: [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "About", href: "#about" },
      ],
    },
    hero: {
      greeting: "Gregorius William Tanuwijaya",
      titleLine1Accent: "IT Student",
      titleLine2: "Cybersecurity Enthusiast",
      description:
        "I'm an IT student based in Indonesia, currently learning how to become a successful person in the IT field. I have a passion for technology, specifically in Cybersecurity.",
      primaryCta: { label: "Get In Touch", href: "#contact" },
      secondaryCta: { label: "Browse Projects", href: "#projects" },
      photo: {
        src: "/images/profile1.png",
        alt: "Portrait of Greg, IT student",
      },
    },
    about: {
      title: "About Me",
      text1:
        "I am a computer science undergraduate with a strong foundation in the IT world and a growing passion for cybersecurity. Through hands on university projects, I've built full-stack applications with a focus on clean architecture, responsive design, and clear functionality.",
    },
  },

  id: {
    nav: {
      brand: "GregoryWTz",
      links: [
        { label: "Beranda", href: "#home" },
        { label: "Proyek", href: "#projects" },
        { label: "Tentang", href: "#about" },
      ],
    },
    hero: {
      greeting: "Gregorius William Tanuwijaya",
      titleLine1Accent: "Mahasiswa IT",
      titleLine2: "Penggemar Keamanan Siber",
      description:
        "Saya seorang mahasiswa IT yang berdomisili di Indonesia, sedang belajar untuk menjadi orang yang sukses di bidang IT. Saya memiliki passion terhadap teknologi, khususnya di bidang Cybersecurity.",
      primaryCta: { label: "Hubungi Saya", href: "#contact" },
      secondaryCta: { label: "Lihat Proyek", href: "#projects" },
      photo: {
        src: "/images/profile1.png",
        alt: "Potret Greg, mahasiswa IT",
      },
    },
    about: {
      title: "Tentang Saya",
      text1:
        "Saya seorang mahasiswa ilmu komputer dengan dasar yang kuat di dunia IT dan passion yang terus berkembang di bidang keamanan siber. Melalui proyek-proyek kuliah, saya telah membangun aplikasi full-stack dengan fokus pada arsitektur yang bersih, desain yang responsif, dan fungsionalitas yang jelas.",
    },
  },
};
