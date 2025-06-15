<template>
  <div class="welcome-screen">
    <div class="ascii-art">
      <pre class="logo-ascii">
██████╗  █████╗ ██████╗ ██╗      ██████╗ 
██╔══██╗██╔══██╗██╔══██╗██║     ██╔═══██╗
██████╔╝███████║██████╔╝██║     ██║   ██║
██╔═══╝ ██╔══██║██╔══██╗██║     ██║   ██║
██║     ██║  ██║██████╔╝███████╗╚██████╔╝
╚═╝     ╚═╝  ╚═╝╚═════╝ ╚══════╝ ╚═════╝ 
      </pre>
    </div>
    
    <div class="welcome-content">
      <h1 class="main-title">FRONT-END DEVELOPER & SEO SPECIALIST</h1>
      <p class="subtitle">Especializado en Vue.js, Nuxt.js y optimización web</p>
      
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-number">21</span>
          <span class="stat-label">AÑOS</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">1+</span>
          <span class="stat-label">AÑOS EXP</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">10+</span>
          <span class="stat-label">PROYECTOS</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">∞</span>
          <span class="stat-label">PASIÓN</span>
        </div>
      </div>
      
      <div class="download-section">
        <button class="download-btn" @click="downloadCV">
          <span class="btn-icon">⬇</span>
          DESCARGAR CV.PDF
        </button>
      </div>
      
      <div class="location">
        <span class="location-icon">📍</span>
        Granada, Andalucía, España
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

const downloadCV = () => {
  // Aquí puedes poner la ruta a tu CV PDF
  const link = document.createElement('a')
  link.href = '/pablo-alcalde-cv.pdf' // Coloca tu PDF en la carpeta public
  link.download = 'Pablo_Alcalde_Garcia_CV.pdf'
  link.click()
}

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo('.logo-ascii', 
    { opacity: 0, y: -50 }, 
    { opacity: 1, y: 0, duration: 1, ease: 'bounce.out' }
  )
  .fromTo('.main-title', 
    { opacity: 0, x: -100 }, 
    { opacity: 1, x: 0, duration: 0.8 }, 
    '-=0.5'
  )
  .fromTo('.subtitle', 
    { opacity: 0, x: 100 }, 
    { opacity: 1, x: 0, duration: 0.8 }, 
    '-=0.3'
  )
  .fromTo('.stat-item', 
    { opacity: 0, scale: 0.5 }, 
    { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }, 
    '-=0.3'
  )
  .fromTo('.download-btn', 
    { opacity: 0, y: 30 }, 
    { opacity: 1, y: 0, duration: 0.6 }, 
    '-=0.2'
  )
  .fromTo('.location', 
    { opacity: 0 }, 
    { opacity: 1, duration: 0.5 }
  )
})
</script>

<style scoped>
.welcome-screen {
  text-align: center;
  padding: 2rem 0;
}

.ascii-art {
  margin-bottom: 2rem;
}

.logo-ascii {
  color: #00ff41;
  font-size: 0.6rem;
  line-height: 1;
  text-shadow: 0 0 10px #00ff41;
  margin: 0 auto;
  white-space: pre;
}

.main-title {
  font-size: 2rem;
  color: #00ff41;
  margin-bottom: 1rem;
  text-shadow: 0 0 20px #00ff41;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2rem;
  color: #ffb000;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px #ffb000;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 2px solid #00ff41;
  border-radius: 10px;
  background: rgba(0, 255, 65, 0.1);
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: rgba(0, 255, 65, 0.2);
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 255, 65, 0.3);
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #00ff41;
  text-shadow: 0 0 15px #00ff41;
}

.stat-label {
  font-size: 0.9rem;
  color: #ffb000;
  margin-top: 0.5rem;
}

.download-section {
  margin-bottom: 2rem;
}

.download-btn {
  background: linear-gradient(45deg, #ff6b35, #ff8e35);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
}

.download-btn:hover {
  background: linear-gradient(45deg, #ff8e35, #ff6b35);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.6);
}

.btn-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.location {
  color: #00ffff;
  font-size: 1.1rem;
  text-shadow: 0 0 10px #00ffff;
}

.location-icon {
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .logo-ascii {
    font-size: 0.4rem;
  }
  
  .main-title {
    font-size: 1.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  .stat-number {
    font-size: 1.5rem;
  }
}
</style>