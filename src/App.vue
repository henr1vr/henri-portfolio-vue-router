<template>
  <div id="app">
    <!-- Navigation -->
    <header>
      <nav class="nav">
        <ul class="nav-menu">
          <li><router-link to="/" class="nav-link">My Work</router-link></li>
          <li><router-link to="/about" class="nav-link">About Me</router-link></li>
          <li><router-link to="/contact" class="cta nav-link">Get In Touch</router-link></li>
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

/* NAV */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  padding: 20px 0;
}

.nav-menu {
  display: flex;
  justify-content: center;
  gap: 30px;
  background-color: white;
  border-radius: 0px;
  padding: 20px 20px;
  width: fit-content;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
}

.nav-link {
  color: #111;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  padding: 8px 22px;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: #f0f0f0;
}

/* Get In Touch - Yellow button */
.cta {
  background-color: #D8CF3C !important;
  color: #000 !important;
  font-family: 'Pixelify Sans', sans-serif;
  font-weight: 700 !important;
  padding: 8px 28px !important;
  border: 2px solid #000;
  border-radius: 0px;
}

/* Active link highlight */
.nav-link.router-link-active {
  background-color: #D8CF3C;
}

/* Mobile Hamburger */
@media (max-width: 767px) {
  .nav-menu {
    display: none;
  }
  .hamburger {
    display: flex;
  }
}

</style>