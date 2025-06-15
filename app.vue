<template>
  <div id="app">
    <NuxtRouteAnnouncer />
    <div class="computer-container">
      <div class="computer-frame">
        <div class="computer-top">
          <div class="brand">PABLO-OS v2.1</div>
          <div class="power-light"></div>
        </div>
        <div class="screen-frame">
          <div class="screen">
            <div class="scanlines"></div>
            <div class="screen-content">
              <TerminalHeader />
              <main class="terminal-body">
                <WelcomeScreen v-if="currentSection === 'welcome'" />
                <AboutSection v-else-if="currentSection === 'about'" />
                <ExperienceSection v-else-if="currentSection === 'experience'" />
                <ProjectsSection v-else-if="currentSection === 'projects'" />
                <ContactSection v-else-if="currentSection === 'contact'" />
              </main>
              <NavigationBar @navigate="handleNavigation" :current-section="currentSection" />
            </div>
          </div>
        </div>
        <div class="computer-base">
          <div class="speaker speaker-left"></div>
          <div class="logo">PABLO-TECH</div>
          <div class="speaker speaker-right"></div>
        </div>
      </div>
    </div>
    
    <!-- Easter Egg Modal -->
    <div v-if="showEasterEgg" class="easter-egg-overlay" @click="closeEasterEgg">
      <div class="easter-egg-modal" @click.stop>
        <div class="easter-egg-header">
          <h2 class="easter-egg-title">🎉 EASTER EGG ACTIVATED! 🎉</h2>
          <button @click="closeEasterEgg" class="close-btn">×</button>
        </div>
        <div class="easter-egg-content">
          <div class="secret-about">
            <div class="matrix-bg"></div>
            <div class="secret-content">
              <h3 class="secret-title">MODO DESARROLLADOR ACTIVADO</h3>
              <div class="secret-stats">
                <div class="secret-stat">
                  <span class="stat-icon">☕</span>
                  <span class="stat-text">Cafés consumidos: 9999+</span>
                </div>
                <div class="secret-stat">
                  <span class="stat-icon">🌙</span>
                  <span class="stat-text">Noches programando: ∞</span>
                </div>
                <div class="secret-stat">
                  <span class="stat-icon">🐛</span>
                  <span class="stat-text">Bugs solucionados: 42</span>
                </div>
                <div class="secret-stat">
                  <span class="stat-icon">💡</span>
                  <span class="stat-text">Ideas a las 3AM: 1337</span>
                </div>
              </div>
              
              <div class="secret-message">
                <p class="glitch-text" data-text="¡Has encontrado el secreto!">¡Has encontrado el secreto!</p>
                <p>Como verdadero desarrollador, sabes que Ctrl/Cmd + Plus no es solo para hacer zoom... 😉</p>
                <p>Aquí tienes algunos datos curiosos sobre mi proceso de desarrollo:</p>
              </div>
              
              <div class="secret-skills">
                <h4>HABILIDADES SECRETAS:</h4>
                <div class="skill-bars">
                  <div class="skill-bar">
                    <span class="skill-name">Debugging a las 3AM</span>
                    <div class="skill-progress">
                      <div class="skill-fill" style="width: 95%"></div>
                    </div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">Googlear errores</span>
                    <div class="skill-progress">
                      <div class="skill-fill" style="width: 99%"></div>
                    </div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">Explicar por qué funciona</span>
                    <div class="skill-progress">
                      <div class="skill-fill" style="width: 30%"></div>
                    </div>
                  </div>
                  <div class="skill-bar">
                    <span class="skill-name">Procrastinar con CSS</span>
                    <div class="skill-progress">
                      <div class="skill-fill" style="width: 100%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const currentSection = ref('welcome')
const showEasterEgg = ref(false)

const handleNavigation = (section) => {
  currentSection.value = section
}

const handleKeyDown = (event) => {
  // Detectar Ctrl/Cmd + Plus (+ o =)
  if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '=')) {
    event.preventDefault()
    showEasterEgg.value = true
    triggerEasterEggAnimation()
  }
  
  // Cerrar con Escape
  if (event.key === 'Escape') {
    closeEasterEgg()
  }
}

const triggerEasterEggAnimation = () => {
  // Animación de entrada del easter egg
  gsap.fromTo('.easter-egg-overlay', 
    { opacity: 0 },
    { opacity: 1, duration: 0.3 }
  )
  
  gsap.fromTo('.easter-egg-modal', 
    { scale: 0.5, rotationY: 180, opacity: 0 },
    { scale: 1, rotationY: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' }
  )
  
  // Animación de las estadísticas secretas
  setTimeout(() => {
    gsap.fromTo('.secret-stat', 
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
    )
    
    gsap.fromTo('.skill-fill', 
      { width: '0%' },
      { width: (i, target) => target.style.width, duration: 1, stagger: 0.2, delay: 0.5 }
    )
    
    // Efecto glitch en el texto
    gsap.to('.glitch-text', {
      textShadow: '2px 0 #ff00ff, -2px 0 #00ffff',
      duration: 0.1,
      repeat: 5,
      yoyo: true,
      delay: 1
    })
  }, 300)
}

const closeEasterEgg = () => {
  gsap.to('.easter-egg-overlay', {
    opacity: 0,
    duration: 0.3,
    onComplete: () => {
      showEasterEgg.value = false
    }
  })
}

onMounted(() => {
  // Animación inicial de la pantalla
  gsap.fromTo('.computer-frame', 
    { scale: 0.8, opacity: 0 },
    { scale: 1, opacity: 1, duration: 1.5, ease: 'back.out(1.7)' }
  )
  
  gsap.fromTo('.power-light',
    { opacity: 0 },
    { opacity: 1, duration: 0.5, delay: 1, repeat: -1, yoyo: true }
  )
  
  // Efecto de encendido de pantalla
  gsap.fromTo('.screen-content',
    { opacity: 0, scaleY: 0.1 },
    { opacity: 1, scaleY: 1, duration: 0.8, delay: 0.5, ease: 'power2.out' }
  )
  
  // Agregar event listener para el teclado
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  min-height: 100vh;
  font-family: 'Courier Prime', monospace;
  overflow-x: hidden;
}

.computer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.computer-frame {
  background: linear-gradient(145deg, #2a2a3e, #1a1a2e);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.5),
    inset 0 2px 4px rgba(255, 255, 255, 0.1);
  max-width: 1200px;
  width: 100%;
}

.computer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(90deg, #333366, #2a2a3e);
  border-radius: 10px;
  margin-bottom: 1rem;
}

.brand {
  color: #00ff41;
  font-weight: bold;
  font-size: 1.2rem;
  text-shadow: 0 0 10px #00ff41;
}

.power-light {
  width: 12px;
  height: 12px;
  background: #00ff41;
  border-radius: 50%;
  box-shadow: 0 0 20px #00ff41;
}

.screen-frame {
  background: #000;
  border-radius: 15px;
  padding: 1.5rem;
  position: relative;
  box-shadow: inset 0 0 20px rgba(0, 255, 65, 0.3);
}

.screen {
  background: #001100;
  border-radius: 10px;
  min-height: 600px;
  position: relative;
  overflow: hidden;
}

.scanlines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 255, 65, 0.03) 2px,
    rgba(0, 255, 65, 0.03) 4px
  );
  pointer-events: none;
  z-index: 1000;
}

.screen-content {
  padding: 2rem;
  height: 100%;
  color: #00ff41;
  position: relative;
  z-index: 1;
}

.computer-base {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(90deg, #2a2a3e, #333366);
  border-radius: 10px;
  margin-top: 1rem;
}

.speaker {
  width: 60px;
  height: 20px;
  background: repeating-linear-gradient(
    90deg,
    #444,
    #444 2px,
    #222 2px,
    #222 4px
  );
  border-radius: 10px;
}

.logo {
  color: #ffb000;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0 0 10px #ffb000;
}

.terminal-body {
  min-height: 400px;
  margin: 2rem 0;
}

/* Easter Egg Styles */
.easter-egg-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
}

.easter-egg-modal {
  background: linear-gradient(145deg, #1a1a2e, #0f1419);
  border: 3px solid #00ff41;
  border-radius: 20px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 
    0 0 50px rgba(0, 255, 65, 0.5),
    inset 0 0 20px rgba(0, 255, 65, 0.1);
}

.easter-egg-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 2px solid #00ff41;
  background: linear-gradient(90deg, #2a2a3e, #1a1a2e);
}

.easter-egg-title {
  color: #00ff41;
  font-size: 1.5rem;
  text-shadow: 0 0 15px #00ff41;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.close-btn {
  background: none;
  border: 2px solid #ff4444;
  color: #ff4444;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-btn:hover {
  background: #ff4444;
  color: white;
  transform: rotate(90deg);
}

.easter-egg-content {
  padding: 2rem;
}

.secret-about {
  position: relative;
  overflow: hidden;
}

.matrix-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.05) 2px,
      rgba(0, 255, 65, 0.05) 4px
    ),
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 255, 65, 0.05) 2px,
      rgba(0, 255, 65, 0.05) 4px
    );
  animation: matrix-scroll 20s linear infinite;
}

@keyframes matrix-scroll {
  0% { transform: translateY(0); }
  100% { transform: translateY(20px); }
}

.secret-content {
  position: relative;
  z-index: 1;
}

.secret-title {
  color: #ff00ff;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 20px #ff00ff;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 20px #ff00ff; }
  to { text-shadow: 0 0 30px #ff00ff, 0 0 40px #ff00ff; }
}

.secret-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
}

.secret-stat {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(0, 255, 255, 0.1);
  border: 2px solid #00ffff;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.secret-stat:hover {
  background: rgba(0, 255, 255, 0.2);
  transform: translateY(-5px);
}

.stat-icon {
  font-size: 2rem;
}

.stat-text {
  color: #00ffff;
  font-weight: bold;
}

.secret-message {
  text-align: center;
  margin-bottom: 2rem;
}

.glitch-text {
  font-size: 1.5rem;
  color: #00ff41;
  font-weight: bold;
  margin-bottom: 1rem;
}

.secret-message p {
  color: #00ff41;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.secret-skills h4 {
  color: #ffb000;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #ffb000;
}

.skill-bars {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-bar {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skill-name {
  color: #00ffff;
  font-size: 0.9rem;
}

.skill-progress {
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid #00ff41;
  border-radius: 10px;
  height: 20px;
  overflow: hidden;
}

.skill-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ff41, #00ffff);
  border-radius: 10px;
  transition: width 1s ease;
  box-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
}

/* Responsive */
@media (max-width: 768px) {
  .computer-container {
    padding: 1rem;
  }
  
  .computer-frame {
    padding: 1rem;
  }
  
  .screen-content {
    padding: 1rem;
  }
  
  .brand, .logo {
    font-size: 0.9rem;
  }
  
  .screen {
    min-height: 500px;
  }
  
  .easter-egg-modal {
    width: 95%;
  }
  
  .easter-egg-title {
    font-size: 1.2rem;
  }
  
  .secret-stats {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .computer-top, .computer-base {
    padding: 0.5rem;
  }
  
  .speaker {
    width: 40px;
    height: 15px;
  }
  
  .screen {
    min-height: 450px;
  }
  
  .easter-egg-content {
    padding: 1rem;
  }
}
</style>