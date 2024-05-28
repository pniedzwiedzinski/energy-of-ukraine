<template>
  <p>Czas czytania: {{ formattedTime }}</p>
</template>

<script>
export default {
  data() {
    return {
      elapsedTime: 0, // Time in milliseconds
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
    // Load elapsed time from localStorage
    this.loadElapsedTime()
    // Start an interval to update the elapsed time every second
    this.intervalId = setInterval(this.updateElapsedTime, 1000)
  },
  beforeUnmount() {
    // Clear the interval when the component is destroyed
    clearInterval(this.intervalId)
  },
  methods: {
    updateElapsedTime() {
      this.elapsedTime += 1000 // Increment by 1000 milliseconds (1 second)
      localStorage.setItem('debugTimerElapsedTime', this.elapsedTime)
    },
    loadElapsedTime() {
      const savedTime = localStorage.getItem('debugTimerElapsedTime')
      if (savedTime) {
        this.elapsedTime = parseInt(savedTime, 10)
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
