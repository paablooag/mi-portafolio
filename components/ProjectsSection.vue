<template>
  <div class="projects-section">
    <h2 class="section-title">PROJECTS.DIR</h2>
    
    <div class="projects-grid">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <div class="project-header">
          <h3 class="project-title">{{ project.name }}</h3>
          <div class="project-status" :class="project.status">
            {{ project.status === 'live' ? 'LIVE' : 'DEV' }}
          </div>
        </div>
        
        <div class="project-description">
          <p>{{ project.description }}</p>
        </div>
        
        <div class="project-highlights">
          <h4>Logros destacados:</h4>
          <ul>
            <li v-for="highlight in project.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </div>
        
        <div class="tech-stack">
          <span class="tech-tag" v-for="tech in project.technologies" :key="tech">
            {{ tech }}
          </span>
        </div>
        
        <div class="project-links" v-if="project.links">
          <a v-if="project.links.live" :href="project.links.live" target="_blank" class="project-link live">
            <span class="link-icon">🌐</span>
            Ver Proyecto
          </a>
          <a v-if="project.links.github" :href="project.links.github" target="_blank" class="project-link github">
            <span class="link-icon">💻</span>
            Código
          </a>
        </div>
      </div>
    </div>
    
    <div class="additional-work">
      <h3 class="subsection-title">OTROS PROYECTOS</h3>
      <div class="work-grid">
        <div class="work-item" v-for="(work, index) in additionalWork" :key="index">
          <h4 class="work-title">{{ work.title }}</h4>
          <p class="work-description">{{ work.description }}</p>
          <div class="work-tech">
            <span v-for="tech in work.technologies" :key="tech" class="work-tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const projects = ref([
  {
    name: 'easycvs.es',
    status: 'live',
    description: 'Plataforma web que utiliza inteligencia artificial para crear CVs personalizados de manera automática y profesional.',
    highlights: [
      'Interfaz intuitiva con Vue.js/Nuxt.js',
      'Integración de IA para generación de contenido',
      'SEO optimizado para búsquedas locales',
      'Sistema de plantillas dinámicas'
    ],
    technologies: ['Nuxt.js', 'Vue.js', 'AI Integration', 'SEO', 'CSS3'],
    links: {
      live: 'https://easycvs.es'
    }
  },
  {
    name: 'Kiko Burger',
    status: 'live',
    description: 'Desarrollo de la página web para restaurante local, enfocada en mejorar la presencia online y aumentar las ventas.',
    highlights: [
      'Aumento de ventas del 200%',
      'SEO local optimizado',
      'Diseño responsive y atractivo',
      'Integración con redes sociales',
      'Sistema de pedidos online'
    ],
    technologies: ['Nuxt.js', 'Vue.js', 'Local SEO', 'E-commerce', 'Responsive Design'],
    links: {
      live: 'https://kikoundefiledburger.com'
    }
  }
])

const additionalWork = ref([
  {
    title: 'Migración Vue.js a Nuxt.js',
    description: 'Experiencia en migración de aplicaciones SPA a SSR para mejorar SEO y performance.',
    technologies: ['Vue.js', 'Nuxt.js', 'SSR', 'Performance']
  },
  {
    title: 'Implementación de Píxeles de Seguimiento',
    description: 'Integración de tracking pixels para Meta, TikTok y otras plataformas sociales.',
    technologies: ['JavaScript', 'Meta Pixel', 'TikTok Pixel', 'Analytics']
  },
  {
    title: 'Optimización SEO',
    description: 'Estrategias de SEO técnico y de contenido para mejorar rankings orgánicos.',
    technologies: ['SEO', 'Schema Markup', 'Core Web Vitals', 'Analytics']
  }
])

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo('.section-title', 
    { opacity: 0, y: -30 }, 
    { opacity: 1, y: 0, duration: 0.8 }
  )
  .fromTo('.project-card', 
    { opacity: 0, y: 50, rotateX: -15 }, 
    { opacity: 1, y: 0, rotateX: 0, duration: 0.6, stagger: 0.2 }
  )
  .fromTo('.work-item', 
    { opacity: 0, scale: 0.9 }, 
    { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1 }
  )
})
</script>

<style scoped>
.projects-section {
  padding: 2rem 0;
}

.section-title {
  color: #00ff41;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-shadow: 0 0 15px #00ff41;
  border-left: 4px solid #00ff41;
  padding-left: 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid #00ff41;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 65, 0.1), transparent);
  transition: left 0.5s ease;
}

.project-card:hover::before {
  left: 100%;
}

.project-card:hover {
  background: rgba(0, 255, 65, 0.15);
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 255, 65, 0.3);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-title {
  color: #00ff41;
  font-size: 1.5rem;
  font-weight: bold;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
}

.project-status.live {
  background: rgba(0, 255, 65, 0.3);
  color: #00ff41;
  border: 1px solid #00ff41;
}

.project-status.dev {
  background: rgba(255, 176, 0, 0.3);
  color: #ffb000;
  border: 1px solid #ffb000;
}

.project-description {
  margin-bottom: 1.5rem;
}

.project-description p {
  color: #00ff41;
  line-height: 1.6;
}

.project-highlights {
  margin-bottom: 1.5rem;
}

.project-highlights h4 {
  color: #00ffff;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.project-highlights ul {
  list-style: none;
  padding: 0;
}

.project-highlights li {
  color: #00ff41;
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.project-highlights li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: #ffb000;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid #00ffff;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.project-link.live {
  background: rgba(0, 255, 65, 0.2);
  color: #00ff41;
  border: 2px solid #00ff41;
}

.project-link.live:hover {
  background: rgba(0, 255, 65, 0.3);
  transform: translateY(-2px);
}

.project-link.github {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
  border: 2px solid #00ffff;
}

.project-link.github:hover {
  background: rgba(0, 255, 255, 0.3);
  transform: translateY(-2px);
}

.additional-work {
  border-top: 2px solid #00ff41;
  padding-top: 2rem;
}

.subsection-title {
  color: #ffb000;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px #ffb000;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.work-item {
  background: rgba(255, 176, 0, 0.1);
  border: 2px solid #ffb000;
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.work-item:hover {
  background: rgba(255, 176, 0, 0.15);
  transform: translateY(-5px);
}

.work-title {
  color: #ffb000;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.work-description {
  color: #00ff41;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.work-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.work-tech-tag {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
  padding: 0.15rem 0.4rem;
  border-radius: 10px;
  font-size: 0.7rem;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-card {
    padding: 1.5rem;
  }
  
  .project-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>