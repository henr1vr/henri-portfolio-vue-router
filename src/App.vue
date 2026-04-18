<template>
  <div id="app">
    <!-- Navigation -->
    <header>
      <nav class="nav">
        <router-link to="/" class="nav-link">My Work</router-link>
        <router-link to="/about" class="nav-link">About Me</router-link>
        <router-link to="/contact" class="nav-link">Get In Touch</router-link>
      </nav>
    </header>

    <!-- Page Content -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Inter', system-ui, sans-serif;
  margin: 0;
  padding: 0;
}

header {
  background-color: rgba(255, 255, 255, 0.85);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav {
  display: flex;
  justify-content: center;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-link {
  color: #000;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 24px;
  border-radius: 8px;
  transition: all 0.3s;
}

.nav-link:hover,
.nav-link.router-link-active {
  background-color: #D8CF3C;
  color: #000;
}

main {
  padding-top: 100px; /* space for fixed header */
}
</style>
