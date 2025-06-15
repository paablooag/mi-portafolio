<template>
  <div class="navigation-bar">
    <div class="nav-tabs">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        @click="navigate(tab.id)"
        :class="['nav-tab', { active: currentSection === tab.id }]"
      >
        <span class="tab-icon">{{ tab.icon }}</span>
        <span class="tab-label">{{ tab.label }}</span>
      </button>
    </div>
    
    <div class="nav-info">
      <div class="system-stats">
        <span class="stat">CPU: {{ cpuUsage }}%</span>
        <span class="stat">MEM: {{ memUsage }}%</span>
        <span class="stat">{{ currentTime }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  currentSection: String
})

const emit = defineEmits(['navigate'])

const tabs = ref([
  { id: 'welcome', label: 'INICIO', icon: '🏠' },
  { id: 'about', label: 'ABOUT', icon: '👨‍💻' },
  { id: 'experience', label: 'EXPERIENCIA', icon: '💼' },
  { id: 'projects', label: 'PROYECTOS', icon: '🚀' },
  { id: 'contact', label: 'CONTACTO', icon: '📧' }
])

const cpuUsage = ref(0)
const memUsage = ref(0)
const currentTime = ref('')

let statsInterval = null
let timeInterval = null

const navigate = (section) => {
  emit('navigate', section)
}

const updateStats = () => {
  cpuUsage.value = Math.floor(Math.random() * 20) + 15
  memUsage.value = Math.floor(Math.random() * 30) + 40
}

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString('es-ES', { 
    hour12: false,
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  updateTime()
  updateStats()
  
  timeInterval = setInterval(updateTime, 1000)
  statsInterval = setInterval(updateStats, 3000)
})

onUnmounted(() => {
  if (timeInterval) clearInterval(timeInterval)
  if (statsInterval) clearInterval(statsInterval)
})
</script>

<style scoped>
.navigation-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, #1a1a2e, #16213e);
  border-top: 3px solid #00ff41;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.nav-tabs {
  display: flex;
  gap: 0.5rem;
}

.nav-tab {
  background: rgba(0, 255, 65, 0.1);
  border: 2px solid #00ff41;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  color: #00ff41;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'Courier Prime', monospace;
  font-size: 0.9rem;
  font-weight: bold;
}

.nav-tab:hover {
  background: rgba(0, 255, 65, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 65, 0.3);
}

.nav-tab.active {
  background: rgba(0, 255, 65, 0.3);
  color: #00ff41;
  text-shadow: 0 0 10px #00ff41;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);
}

.tab-icon {
  font-size: 1.1rem;
}

.nav-info {
  display: flex;
  align-items: center;
}

.system-stats {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.stat {
  color: #ffb000;
  font-size: 0.8rem;
  font-family: 'Courier Prime', monospace;
  background: rgba(255, 176, 0, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  border: 1px solid #ffb000;
}

@media (max-width: 768px) {
  .navigation-bar {
    padding: 0.75rem 1rem;
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-tabs {
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .nav-tab {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
  
  .tab-label {
    display: none;
  }
  
  .system-stats {
    gap: 0.5rem;
  }
  
  .stat {
    font-size: 0.7rem;
  }
}

@media (max-width: 480px) {
  .nav-tab {
    padding: 0.5rem;
  }
  
  .tab-icon {
    font-size: 1rem;
  }
}
</style>