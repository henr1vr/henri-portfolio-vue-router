<template>
  <div class="home">

    <!-- HERO SECTION -->
    <section class="hero">
      <h3 class="name">Henri van Rensburg</h3>
      <h1 class="heading">PORT<br class="mobile-break">FOLIO</h1>
      <h3 class="subtitle">I design digital experiences that balance usability, beauty, and storytelling.</h3>
      
      <div class="tags">
        <span class="tag red">UX Designer</span>
        <span class="tag purple">UI Designer</span>
        <span class="tag green">Graphic Designer</span>
        <span class="tag blue">Artist</span>
        <span class="tag yellow">Creative Thinker</span>
      </div>
    </section>

    <!-- MY WORK SECTION -->
    <section id="mywork" class="mywork">
      <h2>My Work</h2>
      <div class="Projects">
        <div class="Project" @mouseenter="showProject(0)">
          <span class="label yellow">W<br>o<br>o<br>d<br>W<br>o<br>r<br>X</span>
          <img src="@/assets/images/Woodworx Preview image.png" alt="WoodWorX">
        </div>
        <div class="Project" @mouseenter="showProject(1)">
          <span class="label orange">H<br>a<br>p<br>t<br>i<br>N<br>a<br>v</span>
          <img src="@/assets/images/Haptinav Preview image.png" alt="HaptiNav">
        </div>
        <div class="Project" @mouseenter="showProject(2)">
          <span class="label dark-orange">I<br>l<br>l<br>t<br>h<br>a</span>
          <img src="@/assets/images/Ilitha Preview image.png" alt="Ilitha">
        </div>
        <div class="Project" @mouseenter="showProject(3)">
          <span class="label purple">F<br>a<br><br>T<br>a<br>n<br>i<br>m<br>a<br>l<br>s</span>
          <img src="@/assets/images/fa tanimals Preview image.png" alt="Fa Tanimals">
        </div>
        <div class="Project" @mouseenter="showProject(4)">
          <span class="label blue">E<br>x<br>p<br>l<br>o<br>r<br>a<br>t<br>i<br>o<br>n<br>s</span>
          <img src="@/assets/images/Explorations Preview image.png" alt="Explorations">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    showProject(index) {
      const projects = [
        { title: 'WoodWorX', desc: 'Gamified mobile app for woodworking projects and craftsmanship.' },
        { title: 'HaptiNav', desc: 'Haptic navigation interface designed for smart watches.' },
        { title: 'Ilitha', desc: 'Design system and user interface for Ilitha project.' },
        { title: 'Fa Tanimals', desc: 'Branding and product design for Fa Tanimals.' },
        { title: 'Explorations', desc: 'Collection of creative experiments, sketches and visual explorations.' }
      ]
      const p = projects[index]
      alert(p.title + '\n\n' + p.desc)
    }
  }
}
</script>

<style scoped>
/* Temporary styles */
.home { min-height: 100vh; }
</style>