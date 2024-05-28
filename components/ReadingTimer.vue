<template>
  <p>Czas czytania: {{ formattedTime }}</p>
</template>

<script>
export default {
  data() {
    return {
      elapsedTime: 0,
      intervalId: null,
    }
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.elapsedTime / 60000)
      const seconds = Math.floor((this.elapsedTime % 60000) / 1000)
      return `${minutes}m ${seconds}s`
    },
  },
  mounted() {
    this.loadElapsedTime()
    this.startTimer()
    document.addEventListener('visibilitychange', this.handleVisibilityChange)
  },
  beforeUnmount() {
    this.stopTimer()
    document.removeEventListener('visibilitychange', this.handleVisibilityChange)
  },
  methods: {
    startTimer() {
      this.intervalId = setInterval(this.updateElapsedTime, 1000)
    },
    stopTimer() {
      clearInterval(this.intervalId)
      this.intervalId = null
    },
    updateElapsedTime() {
      this.elapsedTime += 1000
      localStorage.setItem('debugTimerElapsedTime', this.elapsedTime)
    },
    loadElapsedTime() {
      const savedTime = localStorage.getItem('debugTimerElapsedTime')
      if (savedTime) {
        this.elapsedTime = parseInt(savedTime, 10)
      }
    },
    handleVisibilityChange() {
      if (document.hidden) {
        this.stopTimer()
      }
      else {
        this.startTimer()
      }
    },
  },
}
</script>

<style scoped>
p {
    font-size: 0.75em;
}
</style>
