<template>
  <div id="app">
    <!-- Navigation -->
    <header>
      <nav class="nav">
        <input type="checkbox" id="nav-toggle" class="nav-toggle">
        <label for="nav-toggle" class="hamburger">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </label>

        <!-- Menu -->
        <ul class="nav-menu">
          <li><router-link to="/" class="nav-link">My Work</router-link></li>
          <li><router-link to="/about" class="nav-link">About Me</router-link></li>
          <li><router-link to="/contact" class="nav-link cta">Get In Touch</router-link></li>
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
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Inter', system-ui, sans-serif;
  margin: 0;
  padding: 0;
}
</style>