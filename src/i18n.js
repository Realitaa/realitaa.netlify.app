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
        role2: 'Javascript Backend Developer',
        role3: 'AI Enthusiast',
        role4: 'Aspiring AI Engineer',
        role5: 'Prompt Engineering Practitioner',
      },
      CTA: 'Get in Touch',
    },
    about: {
      title: 'About Me',
      content:
        'I am a student and developer with a strong interest in backend development, and experience in building fullstack web applications. While I can work on both stacks, I most enjoy designing reliable and scalable backends. Beyond web development, I have a growing fascination with Artificial Intelligence. I plan to learn the creation process, up to deploying it into real production applications. In my daily life, I apply prompt engineering when using AI tools to enhance productivity. Currently, I want to keep learning and exploring potential opportunities. Not just writing code, but building real solutions, and exploring the world of cryptocurrency.',
    },
    education: 'Education',
    experience: 'Experience',
    timeline: {
      education: [
        {
          id: 1,
          time: 'Now',
          title: 'State University of Medan',
          description: 'Computer Science',
        },
        {
          id: 2,
          time: '2023-2025',
          title: 'SMK Negeri 9 Medan',
          description: 'Software Engineering',
        },
      ],
      experience: [
        {
          id: 1,
          time: 'Now',
          title: 'Freelancer at PT TELKOM INDONESIA REGIONAL 1 SUMATERA',
          description: 'Fullstack Web Developer',
        },
        {
          id: 2,
          time: 'Now',
          title: 'Freelancer at projects.co.id',
          description: 'Fullstack Web Developer',
        },
        {
          id: 3,
          time: 'November 2024 - March 2025',
          title: 'UDD PMI Kota Medan',
          description: 'Fullstack Web Developer dan IT Support',
        },
      ],
    },
    contact: 'Contact Me',
    message: {
      not_found:
        "You were looking for something, huh? It doesn't exist, or maybe it hasn't been added yet. Let's go back, shall we?",
    },
    button: {
      not_found: 'Back to Home',
    },
    see_detail: 'Click to see details',
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
        role1: 'Fullstack Web Developer',
        role2: 'Javascript Backend Developer',
        role3: 'Penggemar AI',
        role4: 'Calon AI Engineer',
        role5: 'Penerapan Prompt Engineering',
      },
      CTA: 'Hubungi Saya',
    },
    about: {
      title: 'Tentang Saya',
      content:
        'Saya adalah seorang mahasiswa dan developer dengan minat besar di bidang backend development, serta pengalaman dalam membangun aplikasi web fullstack. Meskipun dapat bekerja di kedua stack, saya paling menikmati merancang backend yang dapat diandalkan dan skalabel. Selain pengembangan web, saya juga memiliki ketertarikan yang semakin besar terhadap Artificial Intelligence. Saya berencana mempelajari proses pembuatannya, hingga dapat melakukan proses deployment ke aplikasi produksi nyata. Dalam keseharian, saya menerapkan prompt engineering ketika menggunakan AI tools untuk meningkatkan produktivitas. Saat ini saya ingin terus belajar dan mengeksplor kemungkinan peluang yang ada. Tidak hanya menulis kode, namun membangun solusi nyata, hingga eksplorasi dunia mata uang kripto.',
    },
    education: 'Pendidikan',
    experience: 'Pengalaman',
    contact: 'Hubungi Saya',
    timeline: {
      education: [
        {
          id: 1,
          time: 'Sekarang',
          title: 'Universitas Negeri Medan',
          description: 'Ilmu Komputer',
        },
        {
          id: 2,
          time: '2023-2025',
          title: 'SMK Negeri 9 Medan',
          description: 'Rekayasa Perangkat Lunak',
        },
      ],
      experience: [
        {
          id: 1,
          time: 'Sekarang',
          title: 'Freelancer di PT TELKOM INDONESIA REGIONAL 1 SUMATERA',
          description: 'Fullstack Web Developer',
        },
        {
          id: 2,
          time: 'Sekarang',
          title: 'Freelancer di projects.co.id',
          description: 'Fullstack Web Developer',
        },
        {
          id: 3,
          time: 'November 2024 - March 2025',
          title: 'UDD PMI Kota Medan',
          description: 'Fullstack Web Developer and IT Support',
        },
      ],
    },
    message: {
      not_found:
        'Kamu sedang mencari sesuatu, ya? Itu tidak ada, atau mungkin belum ditambahkan. Balik yuk?',
    },
    button: {
      not_found: 'Kembali ke Beranda',
    },
    see_detail: 'Klik untuk melihat detail',
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en', // Bahasa default
  fallbackLocale: 'en',
  messages,
})

export default i18n
