import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      achievements: 'Achievements',
      hobby: 'Hobby',
    },
    hero: {
      tagline: {
        role1: 'Fullstack Web Developer',
        role2: 'Prompt Engineer',
        role3: 'AI Enthusiast',
      },
      CTA: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      content:
        'I am a full-stack developer who is developing and passionate about creating better and more efficient websites. With a focus on continuous learning and improvement, I strive to deliver high-quality web solutions that meet the needs and expectations of users. I am also passionate about the development of AI and strive to implement it to improve productivity and quality.',
    },
    education: 'Education',
    experience: 'Experience',
    contact: 'Contact Me',
    message: {
      not_found:
        "You were looking for something, huh? It doesn't exist, or maybe it hasn't been added yet. Let's go back, shall we?",
    },
    button: {
      not_found: 'Back to Home',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      projects: 'Proyek',
      achievements: 'Pencapaian',
      hobby: 'Hobi',
    },
    hero: {
      tagline: {
        role1: 'Pengembang Web Fullstack',
        role2: 'Penulis Perintah AI',
        role3: 'Penggemar AI',
      },
      CTA: 'Hubungi Saya',
    },
    about: {
      title: 'Tentang Saya',
      content:
        'Saya adalah pengembang full-stack yang sedang berkembang dan bersemangat untuk menciptakan situs web yang lebih baik dan lebih efisien. Dengan fokus pada pembelajaran dan peningkatan berkelanjutan, saya berusaha untuk memberikan solusi web berkualitas tinggi yang memenuhi kebutuhan dan harapan pengguna. Saya juga berantusias dengan perkembangan AI dan berusaha untuk mengimplementasikannya untuk meningkatkan produktivitas dan kualitas.',
    },
    education: 'Pendidikan',
    experience: 'Pengalaman',
    contact: 'Hubungi Saya',
    message: {
      not_found:
        'Kamu sedang mencari sesuatu, ya? Itu tidak ada, atau mungkin belum ditambahkan. Balik yuk?',
    },
    button: {
      not_found: 'Kembali ke Beranda',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en', // Bahasa default
  fallbackLocale: 'en',
  messages,
})

export default i18n
