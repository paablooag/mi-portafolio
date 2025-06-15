<template>
  <div class="about-section">
    <h2 class="section-title">ABOUT_ME.EXE</h2>
    
    <div class="about-content">
      <div class="personal-info">
        <div class="info-block">
          <h3 class="block-title">INFORMACIÓN PERSONAL</h3>
          <div class="info-grid">
            <div class="info-item">
              <span class="label">Nombre:</span>
              <span class="value">Pablo Alcalde García</span>
            </div>
            <div class="info-item">
              <span class="label">Edad:</span>
              <span class="value">21 años</span>
            </div>
            <div class="info-item">
              <span class="label">Ubicación:</span>
              <span class="value">Granada, España</span>
            </div>
            <div class="info-item">
              <span class="label">Email:</span>
              <span class="value">pablooalcaldegarcia@gmail.com</span>
            </div>
            <div class="info-item">
              <span class="label">Teléfono:</span>
              <span class="value">687361991</span>
            </div>
          </div>
        </div>
        
        <div class="info-block">
          <h3 class="block-title">ESPECIALIZACIÓN</h3>
          <div class="specialization">
            <div class="spec-item">
              <span class="spec-icon">🚀</span>
              <div>
                <h4>Front-end Development</h4>
                <p>Vue.js, Nuxt.js, JavaScript, HTML5, CSS3</p>
              </div>
            </div>
            <div class="spec-item">
              <span class="spec-icon">📈</span>
              <div>
                <h4>SEO Specialist</h4>
                <p>Optimización web, análisis keywords, SSR</p>
              </div>
            </div>
            <div class="spec-item">
              <span class="spec-icon">⚡</span>
              <div>
                <h4>Full-stack Development</h4>
                <p>Django, Node.js, Astro, Svelte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="tech-stack-section">
        <h3 class="block-title">TECNOLOGÍAS</h3>
        <div class="tech-categories">
          <div class="tech-category">
            <h4 class="category-title">Frontend (Especialización)</h4>
            <div class="tech-tags">
              <span class="tech-tag primary">Vue.js</span>
              <span class="tech-tag primary">Nuxt.js</span>
              <span class="tech-tag">JavaScript</span>
              <span class="tech-tag">HTML5</span>
              <span class="tech-tag">CSS3</span>
              <span class="tech-tag">GSAP</span>
            </div>
          </div>
          
          <div class="tech-category">
            <h4 class="category-title">Backend & Frameworks</h4>
            <div class="tech-tags">
              <span class="tech-tag">Django</span>
              <span class="tech-tag">Node.js</span>
              <span class="tech-tag">Astro</span>
              <span class="tech-tag">Svelte</span>
            </div>
          </div>
          
          <div class="tech-category">
            <h4 class="category-title">SEO & Tools</h4>
            <div class="tech-tags">
              <span class="tech-tag">SEO</span>
              <span class="tech-tag">SSR</span>
              <span class="tech-tag">Git</span>
              <span class="tech-tag">Jira</span>
              <span class="tech-tag">SCRUM</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="passion-section">
        <h3 class="block-title">MI PASIÓN</h3>
        <div class="passion-text">
          <p>
            La programación y el desarrollo front-end son mi verdadera pasión. 
            Me encanta crear interfaces intuitivas y visualmente atractivas que 
            proporcionen una experiencia de usuario excelente.
          </p>
          <p>
            Siempre estoy motivado por aprender nuevas tecnologías y frameworks 
            que me permitan llevar mis proyectos al siguiente nivel. Ver cómo un 
            diseño cobra vida a través del código es algo que siempre me inspira.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo('.section-title', 
    { opacity: 0, y: -30 }, 
    { opacity: 1, y: 0, duration: 0.8 }
  )
  .fromTo('.info-block', 
    { opacity: 0, x: -50 }, 
    { opacity: 1, x: 0, duration: 0.6, stagger: 0.2 }
  )
  .fromTo('.spec-item', 
    { opacity: 0, scale: 0.8 }, 
    { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }
  )
  .fromTo('.tech-category', 
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
  )
  .fromTo('.passion-text p', 
    { opacity: 0, y: 20 }, 
    { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
  )
})
</script>

<style scoped>
.about-section {
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

.about-content {
  display: grid;
  gap: 2rem;
}

.info-block {
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid #00ff41;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.block-title {
  color: #ffb000;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #ffb000;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 255, 65, 0.3);
}

.label {
  color: #00ffff;
  font-weight: bold;
}

.value {
  color: #00ff41;
}

.specialization {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.spec-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.spec-item:hover {
  background: rgba(0, 255, 255, 0.2);
  transform: translateX(10px);
}

.spec-icon {
  font-size: 2rem;
}

.spec-item h4 {
  color: #00ffff;
  margin-bottom: 0.25rem;
}

.spec-item p {
  color: #00ff41;
  font-size: 0.9rem;
}

.tech-stack-section {
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 10px;
  padding: 1.5rem;
}

.tech-categories {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tech-category {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 1rem;
}

.category-title {
  color: #00ffff;
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(0, 255, 65, 0.2);
  color: #00ff41;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  border: 1px solid #00ff41;
  transition: all 0.3s ease;
}

.tech-tag.primary {
  background: rgba(255, 176, 0, 0.3);
  color: #ffb000;
  border-color: #ffb000;
  font-weight: bold;
}

.tech-tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 255, 65, 0.3);
}

.passion-section {
  background: rgba(255, 176, 0, 0.1);
  border: 2px solid #ffb000;
  border-radius: 10px;
  padding: 1.5rem;
}

.passion-text p {
  color: #00ff41;
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: justify;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
  
  .info-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .spec-item {
    flex-direction: column;
    text-align: center;
  }
  
  .tech-tags {
    justify-content: center;
  }
}
</style>