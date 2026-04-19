<template>
  <div class="not-found">
    <!-- Full hero-style background -->
    <div class="hero-background">
      <div class="not-found-content">
        <h1 class="not-found-title">404 - Page Not Found</h1>
        <p class="not-found-subtitle">Sorry, that page doesn't exist.</p>
        
        <router-link to="/" class="home-btn">
          ← Back to Home
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
.not-found {
  min-height: 100vh;
}

.hero-background {
  background-image: url('@/assets/images/Hero background image.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

/* Dark overlay for better readability */
.hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 1;
}

.not-found-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 600px;
  padding: 0 20px;
}

.not-found-title {
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 92px;
  line-height: 1;
  letter-spacing: 8px;
  margin-bottom: 20px;
  color: #D8CF3C;
}

.not-found-subtitle {
  font-size: 22px;
  margin-bottom: 40px;
  opacity: 0.95;
}

.home-btn {
  display: inline-block;
  background-color: #D8CF3C;
  color: #000;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 18px;
  font-weight: 700;
  padding: 16px 40px;
  border-radius: 50px;
  text-decoration: none;
  border: 2px solid #000;
  transition: all 0.3s ease;
}

.home-btn:hover {
  background-color: #fff;
  transform: scale(1.05);
}
</style>