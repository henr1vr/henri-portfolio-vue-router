<template>
  <div id="app">
    <!-- Navigation -->
    <header>
      <nav class="nav">
        <!-- Checkbox + Hamburger -->
        <input type="checkbox" id="nav-toggle" class="nav-toggle" ref="navToggle">

        <label for="nav-toggle" class="hamburger">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </label>

        <!-- Menu -->
        <ul class="nav-menu">
          <li><router-link to="/" class="nav-link" @click="closeMobileMenu">My Work</router-link></li>
          <li><router-link to="/about" class="nav-link" @click="closeMobileMenu">About Me</router-link></li>
          <li><router-link to="/contact" class="nav-link cta" @click="closeMobileMenu">Get In Touch</router-link></li>
        </ul>
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
  name: 'App',
  methods: {
    closeMobileMenu() {
      if (this.$refs.navToggle) {
        this.$refs.navToggle.checked = false;
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Inter', system-ui, sans-serif;
  margin: 0;
  padding: 0;
}
</style>