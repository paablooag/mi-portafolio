<template>
  <div class="contact-section">
    <h2 class="section-title">CONTACT.SYS</h2>
    
    <div class="contact-content">
      <div class="contact-info">
        <div class="info-card">
          <h3 class="card-title">INFORMACIÓN DE CONTACTO</h3>
          <div class="contact-details">
            <div class="contact-item">
              <span class="contact-icon">📧</span>
              <a href="mailto:pablooalcaldegarcia@gmail.com" class="contact-link">
                pablooalcaldegarcia@gmail.com
              </a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📱</span>
              <a href="tel:+34687361991" class="contact-link">
                687361991
              </a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span class="contact-text">Granada, Andalucía, España</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">💼</span>
              <a href="https://www.linkedin.com/in/pabloalcaldegarcia" target="_blank" class="contact-link">
                LinkedIn Profile
              </a>
            </div>
            <div class="contact-item">
              <span class="contact-icon">💻</span>
              <a href="https://github.com/paablooag" target="_blank" class="contact-link">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
        
        <div class="availability-card">
          <h3 class="card-title">DISPONIBILIDAD</h3>
          <div class="status-indicator">
            <span class="status-dot"></span>
            <span class="status-text">Disponible para proyectos</span>
          </div>
          <div class="availability-details">
            <p>🚀 Front-end Development (Vue.js/Nuxt.js)</p>
            <p>📈 SEO Consulting</p>
            <p>⚡ Performance Optimization</p>
            <p>🔄 Full-stack Development</p>
          </div>
        </div>
      </div>
      
      <div class="contact-form-wrapper">
        <div class="terminal-window">
          <div class="terminal-header">
            <div class="terminal-buttons">
              <span class="btn red"></span>
              <span class="btn yellow"></span>
              <span class="btn green"></span>
            </div>
            <span class="terminal-title">contact_form.exe</span>
          </div>
          
          <div class="terminal-body">
            <form @submit.prevent="sendMessage" class="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">$ echo "Nombre":</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="form-input"
                  required
                  placeholder="Tu nombre completo"
                >
              </div>
              
              <div class="form-group">
                <label for="email" class="form-label">$ echo "Email":</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="form-input"
                  required
                  placeholder="tu.email@ejemplo.com"
                >
              </div>
              
              <div class="form-group">
                <label for="subject" class="form-label">$ echo "Asunto":</label>
                <input
                  type="text"
                  id="subject"
                  v-model="form.subject"
                  class="form-input"
                  required
                  placeholder="¿En qué puedo ayudarte?"
                >
              </div>
              
              <div class="form-group">
                <label for="message" class="form-label">$ echo "Mensaje":</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  class="form-textarea"
                  rows="5"
                  required
                  placeholder="Cuéntame sobre tu proyecto..."
                ></textarea>
              </div>
              
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <span class="btn-icon">{{ isSubmitting ? '⏳' : '📤' }}</span>
                {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
              </button>
            </form>
            
            <div class="terminal-output" v-if="submitMessage">
              <p class="output-line" :class="submitSuccess ? 'success' : 'error'">
                > {{ submitMessage }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const sendMessage = async () => {
  isSubmitting.value = true
  submitMessage.value = ''

  try {
    const response = await fetch('https://formspree.io/f/mjkrrrky', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      })
    })

    const data = await response.json()

    if (data.ok || data.success) {
      submitMessage.value = 'Mensaje enviado correctamente. Te contactaré pronto!'
      submitSuccess.value = true
      form.value = { name: '', email: '', subject: '', message: '' }
    } else {
      throw new Error(data.error || 'Error desconocido')
    }
  } catch (error) {
    console.error('Error sending message:', error)
    submitMessage.value = 'Error al enviar el mensaje. Inténtalo de nuevo.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}

onMounted(() => {
  const tl = gsap.timeline()
  
  tl.fromTo('.section-title', 
    { opacity: 0, y: -30 }, 
    { opacity: 1, y: 0, duration: 0.8 }
  )
  .fromTo('.info-card', 
    { opacity: 0, x: -50 }, 
    { opacity: 1, x: 0, duration: 0.6 }
  )
  .fromTo('.availability-card', 
    { opacity: 0, x: -50 }, 
    { opacity: 1, x: 0, duration: 0.6 }, 
    '-=0.3'
  )
  .fromTo('.terminal-window', 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 0.8 }, 
    '-=0.4'
  )
  
  // Animación del status dot
  gsap.to('.status-dot', {
    scale: 1.2,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  })
})
</script>

<style scoped>
.contact-section {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: start;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-card, .availability-card {
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid #00ff41;
  border-radius: 15px;
  padding: 1.5rem;
}

.card-title {
  color: #00ff41;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #00ff41;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.contact-icon {
  font-size: 1.2rem;
  width: 2rem;
}

.contact-link {
  color: #00ffff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-link:hover {
  color: #00ff41;
  text-shadow: 0 0 10px #00ff41;
}

.contact-text {
  color: #00ff41;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.status-dot {
  width: 12px;
  height: 12px;
  background: #00ff41;
  border-radius: 50%;
  box-shadow: 0 0 15px #00ff41;
}

.status-text {
  color: #00ff41;
  font-weight: bold;
}

.availability-details p {
  color: #00ffff;
  margin-bottom: 0.5rem;
}

.terminal-window {
  background: rgba(0, 0, 0, 0.8);
  border: 2px solid #00ff41;
  border-radius: 10px;
  overflow: hidden;
}

.terminal-header {
  background: linear-gradient(90deg, #333, #555);
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.terminal-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.btn.red { background: #ff5f56; }
.btn.yellow { background: #ffbd2e; }
.btn.green { background: #27ca3f; }

.terminal-title {
  color: #00ff41;
  font-size: 0.9rem;
}

.terminal-body {
  padding: 2rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  color: #00ff41;
  font-size: 0.9rem;
}

.form-input, .form-textarea {
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid #00ff41;
  border-radius: 5px;
  padding: 0.75rem;
  color: #00ff41;
  font-family: 'Courier Prime', monospace;
  font-size: 0.9rem;
}

.form-input:focus, .form-textarea:focus {
  outline: none;
  background: rgba(0, 255, 65, 0.15);
  box-shadow: 0 0 15px rgba(0, 255, 65, 0.3);
}

.form-input::placeholder, .form-textarea::placeholder {
  color: rgba(0, 255, 65, 0.5);
}

.submit-btn {
  background: linear-gradient(45deg, #ff6b35, #ff8e35);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.submit-btn:hover:not(:disabled) {
  background: linear-gradient(45deg, #ff8e35, #ff6b35);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.terminal-output {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

.output-line {
  font-family: 'Courier Prime', monospace;
  font-size: 0.9rem;
}

.output-line.success {
  color: #00ff41;
}

.output-line.error {
  color: #ff4444;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .terminal-body {
    padding: 1rem;
  }
  
  .contact-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
}
</style>