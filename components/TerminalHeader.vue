<template>
  <div class="terminal-header">
    <div class="terminal-title">
      <span class="cursor-blink">></span> 
      <span class="typed-text">{{ displayText }}</span>
      <span class="cursor" v-show="showCursor">|</span>
    </div>
    <div class="system-info">
      <span class="date">{{ currentDate }}</span>
      <span class="status">ONLINE</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const displayText = ref('')
const showCursor = ref(true)
const currentDate = ref('')
const fullText = 'PABLO ALCALDE GARCÍA - PORTFOLIO SYSTEM'

onMounted(() => {
  // Actualizar fecha
  currentDate.value = new Date().toLocaleDateString('es-ES')
  
  // Animación de escritura
  const chars = fullText.split('')
  let i = 0
  
  const typeWriter = () => {
    if (i < chars.length) {
      displayText.value += chars[i]
      i++
      setTimeout(typeWriter, 50)
    }
  }
  
  // Cursor parpadeante
  gsap.to('.cursor', {
    opacity: 0,
    duration: 0.5,
    repeat: -1,
    yoyo: true
  })
  
  setTimeout(typeWriter, 1000)
})
</script>

<style scoped>
.terminal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 2px solid #00ff41;
  margin-bottom: 2rem;
}

.terminal-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00ff41;
  text-shadow: 0 0 10px #00ff41;
}

.cursor-blink {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.system-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.9rem;
}

.date {
  color: #ffb000;
  margin-bottom: 0.25rem;
}

.status {
  color: #00ff41;
  font-weight: bold;
}

@media (max-width: 768px) {
  .terminal-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .terminal-title {
    font-size: 1.2rem;
  }
  
  .system-info {
    flex-direction: row;
    gap: 1rem;
  }
}
</style>