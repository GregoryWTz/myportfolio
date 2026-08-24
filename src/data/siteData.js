// Central place for site copy & links, split by language.
// Add a new language by adding another key here (e.g. "id", "en", "jp"...).

export const translations = {
  en: {
    nav: {
      brand: "GregoryWTz",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
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
        "My name is Gregorius William Tanuwijaya, a fifth-semester Information Technology student at Universitas Multimedia Nusantara with a strong interest in cybersecurity and digital system security. I am passionate about exploring both the offensive and defensive sides of cybersecurity, including Red Team operations, penetration testing, ethical hacking, SOC, and Capture The Flag (CTF). My curiosity about how systems can be exploited motivates me to continuously learn through CTF challenges and self-directed exploration, while also strengthening my technical skills in areas such as Linux and Python. I believe that understanding how attacks work is an essential part of building stronger defenses. Therefore, I aim to continuously grow as a cybersecurity enthusiast and apply my skills to help create more secure websites, applications, and digital systems.",
    },
    cv: {
      title: "Curriculum Vitae",
      description:
        "Download my resume to see the full details of my educational background, experience, and skills.",
      buttonLabel: "Download CV",
      file: "/files/Gregorius-William-Tanuwijaya-CV.pdf",
    },
    exp: {
      title: "Experience",
      description: "Download my experience document to see the full details of my work experience, projects, and achievements.",
      buttonLabel: "Download Experience",
      file: "/files/Gregorius-William-Tanuwijaya-Experience.pdf",
    },
    edu: {
      title: "Education",
      entries: [
        {
          image: {
            src: "/images/umn.jpg",
            alt: "Universitas Multimedia Nusantara Logo",
          },
          degree: "Bachelor of Informatics",
          institution: "Universitas Multimedia Nusantara",
          gpa: "3.89",
          period: "2024 - 2028",
          subjects: [
            "Data Structures and Algorithms",
            "Database Systems",
            "Web Development",
            "Computer Networks",
            "Computer Security",
            "Operating Systems",
            // "Cybersecurity",
            // "Mobile Application Development",
            "Software Engineering",
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      featured: ["react", "javascript", "tailwind", "nodejs", "express", "mysql"],
      categories: [
        {
          name: "Frontend",
          items: [
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "JavaScript", icon: "javascript" },
            { name: "React", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind" },
          ],
        },
        {
          name: "Backend",
          items: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express", icon: "express" },
            { name: "MySQL", icon: "mysql" },
            { name: "MongoDB", icon: "mongodb" },
          ],
        },
        {
          name: "Languages",
          items: [
            { name: "Python", icon: "python" },
            { name: "Kotlin", icon: "kotlin" },
          ],
        },
        {
          name: "Security",
          note: "Learned through CTF challenges and self-study.",
          items: [
            { name: "Web Exploitation" },
            { name: "Cryptography Basics" },
            { name: "Network Fundamentals" },
          ],
        },
      ],
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
        "Saya Gregorius William Tanuwijaya, mahasiswa semester 5 jurusan Sistem Informasi di Universitas Multimedia Nusantara yang memiliki ketertarikan kuat pada cybersecurity dan keamanan sistem digital. Saya tertarik mengeksplorasi sisi ofensif maupun defensif keamanan siber, mulai dari Red Team, penetration testing, dan ethical hacking hingga SOC dan CTF. Rasa ingin tahu tentang bagaimana sebuah sistem dapat dieksploitasi mendorong saya untuk terus belajar melalui CTF dan eksplorasi secara mandiri, sekaligus memperdalam kemampuan teknis seperti Linux dan Python. Saya percaya bahwa memahami cara sebuah serangan bekerja adalah bagian penting dalam membangun pertahanan yang lebih baik. Karena itu, saya ingin terus berkembang sebagai seorang cybersecurity enthusiast dan menggunakan kemampuan yang saya miliki untuk membantu menciptakan website, aplikasi, dan sistem digital yang lebih aman.",
    },
    cv: {
      title: "Curriculum Vitae",
      description:
        "Unduh resume saya untuk melihat rincian lengkap mengenai latar belakang pendidikan, pengalaman, dan keahlian.",
      buttonLabel: "Unduh CV",
      file: "/files/Gregorius-William-Tanuwijaya-CV.pdf",
    },
    exp: {
      title: "Pengalaman",
      description: "Unduh dokumen pengalaman saya untuk melihat rincian lengkap mengenai pengalaman kerja, proyek, dan pencapaian saya.",
      buttonLabel: "Unduh Pengalaman",
      file: "/files/Gregorius-William-Tanuwijaya-Experience.pdf",
    },
    edu: {
      title: "Pendidikan",
      entries: [
        {
          image: {
            src: "/images/umn.jpg",
            alt: "Universitas Multimedia Nusantara Logo",
          },
          degree: "Sarjana Teknik Informatika",
          institution: "Universitas Multimedia Nusantara",
          gpa: "3.89",
          period: "2024 - 2028",
          subjects: [
            "Struktur Data dan Algoritma",
            "Sistem Basis Data",
            "Pengembangan Web",
            "Jaringan Komputer",
            "Keamanan Komputer",
            "Sistem Operasi",
            // "Keamanan Siber",
            // "Pengembangan Aplikasi Seluler",
            "Rekayasa Perangkat Lunak",
          ]
        }
      ]
    },
    skills: {
      title: "Skills",
      featured: ["react", "javascript", "tailwind", "nodejs", "express", "mysql"],
      categories: [
        {
          name: "Frontend",
          items: [
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "JavaScript", icon: "javascript" },
            { name: "React", icon: "react" },
            { name: "Tailwind CSS", icon: "tailwind" },
          ],
        },
        {
          name: "Backend",
          items: [
            { name: "Node.js", icon: "nodejs" },
            { name: "Express", icon: "express" },
            { name: "MySQL", icon: "mysql" },
            { name: "MongoDB", icon: "mongodb" },
          ],
        },
        {
          name: "Bahasa Pemrograman",
          items: [
            { name: "Python", icon: "python" },
            { name: "Kotlin", icon: "kotlin" },
          ],
        },
        {
          name: "Security",
          note: "Belajar melalui tantangan CTF dan studi mandiri.",
          items: [
            { name: "Exploitasi Web" },
            { name: "Dasar Kriptografi" },
            { name: "Jaringan Komputer" },
          ],
        },
      ],
    },
  },
};
