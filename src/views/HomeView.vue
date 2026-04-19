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
        <div class="Project"
             @mouseenter="!isMobile && showProject(0)"
             @mouseleave="!isMobile && hideProject"
             @click="isMobile && toggleProject(0)">
          <span class="label yellow">WoodWorX</span>
          <img src="@/assets/images/Woodworx Preview image.png" alt="WoodWorX">
        </div>

        <div class="Project"
             @mouseenter="!isMobile && showProject(1)"
             @mouseleave="!isMobile && hideProject"
             @click="isMobile && toggleProject(1)">
          <span class="label orange">HaptiNav</span>
          <img src="@/assets/images/Haptinav Preview image.png" alt="HaptiNav">
        </div>

        <div class="Project"
             @mouseenter="!isMobile && showProject(2)"
             @mouseleave="!isMobile && hideProject"
             @click="isMobile && toggleProject(2)">
          <span class="label dark-orange">Ilitha</span>
          <img src="@/assets/images/Ilitha Preview image.png" alt="Ilitha">
        </div>

        <div class="Project"
             @mouseenter="!isMobile && showProject(3)"
             @mouseleave="!isMobile && hideProject"
             @click="isMobile && toggleProject(3)">
          <span class="label purple">Fa Tanimals</span>
          <img src="@/assets/images/fa tanimals Preview image.png" alt="Fa Tanimals">
        </div>

        <div class="Project"
             @mouseenter="!isMobile && showProject(4)"
             @mouseleave="!isMobile && hideProject"
             @click="isMobile && toggleProject(4)">
          <span class="label blue">Explorations</span>
          <img src="@/assets/images/Explorations Preview image.png" alt="Explorations">
        </div>
      </div>
    </section>

    <!-- PROJECT MODAL -->
    <div v-if="hoveredProject" class="project-modal" @click.self="hideProject">
      <div class="modal-content" @click.stop>
        <button class="modal-close" @click="hideProject">×</button>
        <h3>{{ hoveredProject.title }}</h3>
        <p>{{ hoveredProject.desc }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      hoveredProject: null,
      isMobile: false
    }
  },
  mounted() {
    this.checkMobile()
    window.addEventListener('resize', this.checkMobile)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile)
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth < 768
    },
    showProject(index) {
      const projects = [
        { title: 'WoodWorX', desc: 'WoodworX is a gamified mobile application that allows woodworkers to gain skills and progress in their woodworking journey in a fun and interactive manner.' },
        { title: 'HaptiNav', desc: 'Hapti Nav is a navigation application for visually impaired individuals. It links to a smart watch to use the watch as a multi sensory navigation guide.' },
        { title: 'Ilitha', desc: 'Ilitha Telecommunications required a clean, modern website to showcase their services and communicate professionalism in the telecom sector.' },
        { title: 'Fa Tanimals', desc: 'Fa Tanimals is a concept design for a brand that sells custom 3D sculptures of pets.' },
        { title: 'Explorations', desc: 'This is a collection of creative explorations across illustration, 3D, and digital painting. These projects reflect my love for experimentation and visual storytelling.' }
      ]
      this.hoveredProject = projects[index]
    },
    hideProject() {
      this.hoveredProject = null
    },
    toggleProject(index) {
      // For mobile: click opens / closes the same modal
      if (this.hoveredProject) {
        this.hideProject()
      } else {
        this.showProject(index)
      }
    }
  }
}
</script>

<style scoped>
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.modal-content {
  background: #111;
  color: white;
  padding: 45px 50px;
  border-radius: 24px;
  max-width: 520px;
  width: 90%;
  text-align: center;
  position: relative;
  box-shadow: 0 25px 70px rgba(0, 0, 0, 0.8);
  border: 4px solid #D8CF3C;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 25px;
  font-size: 42px;
  line-height: 1;
  color: #D8CF3C;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
}

.modal-content h3 {
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 34px;
  color: #D8CF3C;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.modal-content p {
  font-size: 18px;
  line-height: 1.65;
  color: #eee;
}
</style>