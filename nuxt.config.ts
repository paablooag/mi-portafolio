export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  
  modules: [
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Courier+Prime': [400, 700],
      'Share+Tech+Mono': [400]
    }
  },

  app: {
    head: {
      title: 'Pablo Alcalde García - Front-end Developer & SEO Specialist',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Pablo Alcalde García - Desarrollador Front-end especializado en Vue.js, Nuxt.js y SEO. 21 años, Granada, España. Experiencia en Wegow y proyectos como easycvs.es y Kiko Burger.' },
        { name: 'keywords', content: 'Pablo Alcalde, Front-end Developer, Vue.js, Nuxt.js, SEO, Granada, Wegow, JavaScript, HTML, CSS, Django, Node.js, Astro, Svelte' },
        { name: 'author', content: 'Pablo Alcalde García' },
        { property: 'og:title', content: 'Pablo Alcalde García - Front-end Developer & SEO Specialist' },
        { property: 'og:description', content: 'Desarrollador Front-end especializado en Vue.js, Nuxt.js y SEO. Experiencia en migración de aplicaciones y optimización web.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://pabloalcalde.dev' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Pablo Alcalde García - Front-end Developer' },
        { name: 'twitter:description', content: 'Desarrollador Front-end especializado en Vue.js, Nuxt.js y SEO' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://pabloalcalde.dev' }
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Pablo Alcalde García",
            "jobTitle": "Front-end Developer",
            "description": "Desarrollador Front-end especializado en Vue.js, Nuxt.js y SEO",
            "url": "https://pabloalcalde.dev",
            "sameAs": [
              "https://www.linkedin.com/in/pabloalcaldegarcia",
              "https://github.com/paablooag"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Granada",
              "addressRegion": "Andalucía",
              "addressCountry": "España"
            },
            "email": "pablooalcaldegarcia@gmail.com",
            "telephone": "687361991"
          })
        }
      ]
    }
  }
})