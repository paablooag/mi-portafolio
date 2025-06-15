<template>
  <div class="experience-section">
    <h2 class="section-title">EXPERIENCE.LOG</h2>
    
    <div class="timeline">
      <div class="timeline-item" v-for="(job, index) in experience" :key="index">
        <div class="timeline-marker">
          <div class="timeline-dot"></div>
        </div>
        <div class="timeline-content">
          <div class="job-header">
            <h3 class="job-title">{{ job.position }}</h3>
            <span class="job-period">{{ job.period }}</span>
          </div>
          <h4 class="company">{{ job.company }}</h4>
          <p class="location">{{ job.location }}</p>
          <div class="job-description">
            <p v-for="(desc, i) in job.description" :key="i">{{ desc }}</p>
          </div>
          <div class="tech-stack" v-if="job.technologies">
            <span class="tech-tag" v-for="tech in job.technologies" :key="tech">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="education-section">
      <h3 class="subsection-title">FORMACIÓN</h3>
      <div class="education-grid">
        <div class="education-item" v-for="(edu, index) in education" :key="index">
          <h4 class="edu-title">{{ edu.title }}</h4>
          <p class="edu-institution">{{ edu.institution }}</p>
          <span class="edu-period">{{ edu.period }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const experience = ref([
  {
    position: 'Desarrollador Front-end',
    company: 'Wegow',
    period: 'Nov 2024 - Presente',
    location: 'Granada, Andalucía, España',
    description: [
      'Desarrollador frontend utilizando Vue.js y Nuxt.js, participando tanto en la creación de interfaces orientadas al usuario como en herramientas internas de backoffice.',
      'Enfocado en la mejora del SEO y el rendimiento mediante técnicas como el renderizado del lado del servidor (SSR) con Nuxt.',
      'Implementación de píxeles de seguimiento para distintas plataformas de redes sociales (Meta, TikTok, etc.).',
      'Integración de Stay22, una solución de alojamiento que permitió aumentar la rentabilidad de la plataforma y mejorar la conversión de usuarios a ventas.'
    ],
    technologies: ['Vue.js', 'Nuxt.js', 'JavaScript', 'SSR', 'SEO', 'Jira', 'Taiga']
  },
  {
    position: 'Desarrollador Full Stack',
    company: 'BuyBack s.l.',
    period: 'Feb 2024 - May 2024',
    location: 'Granada, Andalucía, España',
    description: [
      'Desarrollo de aplicaciones web completas.',
      'Trabajo con tecnologías frontend y backend.',
      'Implementación de funcionalidades de negocio.'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'Backend Development']
  }
])

const education = ref([
  {
    title: 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma',
    institution: 'Escuela Arte Granada (EAG)',
    period: '2022 - 2024'
  },
  {
    title: 'Máster en SEO y Posicionamiento Web',
    institution: 'Udemy',
    period: '2024'
  },
  {
    title: 'Certificación Google HTML/CSS',
    institution: 'Google',
    period: '2024'
  },
  {
    title: 'Certificación Google Ciberseguridad',
    institution: 'Google',
    period: '2024'
  }
])

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo('.section-title', 
    { opacity: 0, y: -30 }, 
    { opacity: 1, y: 0, duration: 0.8 }
  )
  .fromTo('.timeline-item', 
    { opacity: 0, x: -100 }, 
    { opacity: 1, x: 0, duration: 0.6, stagger: 0.3 }
  )
  .fromTo('.education-item', 
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
  )
})
</script>

<style scoped>
.experience-section {
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

.timeline {
  position: relative;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, #00ff41, #00ffff);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
}

.timeline-marker {
  position: absolute;
  left: -2rem;
  top: 0;
}

.timeline-dot {
  width: 16px;
  height: 16px;
  background: #00ff41;
  border-radius: 50%;
  border: 3px solid #001100;
  box-shadow: 0 0 15px #00ff41;
}

.timeline-content {
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid #00ff41;
  border-radius: 10px;
  padding: 1.5rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  background: rgba(0, 255, 65, 0.15);
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 255, 65, 0.3);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.job-title {
  color: #00ff41;
  font-size: 1.3rem;
  font-weight: bold;
}

.job-period {
  color: #ffb000;
  font-size: 0.9rem;
  background: rgba(255, 176, 0, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
}

.company {
  color: #00ffff;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.location {
  color: #ffb000;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.job-description p {
  color: #00ff41;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  text-align: justify;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background: rgba(0, 255, 255, 0.2);
  color: #00ffff;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid #00ffff;
}

.education-section {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid #00ff41;
}

.subsection-title {
  color: #ffb000;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px #ffb000;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.education-item {
  background: rgba(255, 176, 0, 0.1);
  border: 2px solid #ffb000;
  border-radius: 10px;
  padding: 1rem;
  transition: all 0.3s ease;
}

.education-item:hover {
  background: rgba(255, 176, 0, 0.15);
  transform: translateY(-3px);
}

.edu-title {
  color: #ffb000;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.edu-institution {
  color: #00ff41;
  margin-bottom: 0.25rem;
}

.edu-period {
  color: #00ffff;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 1rem;
  }
  
  .timeline::before {
    left: 0.5rem;
  }
  
  .timeline-marker {
    left: -1.5rem;
  }
  
  .timeline-content {
    margin-left: 0.5rem;
  }
  
  .job-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>