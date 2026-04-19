<template>
  <div class="about-page">
    <section id="aboutme">
      <div class="about-container">

        <!-- LEFT COLUMN -->
        <div class="about-left">
          <!-- Photo -->
          <div class="photo">
            <img src="@/assets/images/New Headshot.png" alt="Henri van Rensburg">
          </div>

          <!-- Name card -->
          <div class="name-card">
            Hey, I'm <span class="henri">HENRI</span>.
          </div>

          <!-- Download CV -->
          <a href="#" class="cv-btn">
            Download_CV <span class="arrow">→</span>
          </a>

          <!-- Software Skills -->
          <div class="skills">
            <div class="skills-title">Software Skills</div>
            <div class="skills-grid">
              <img src="@/assets/images/figma icon.png" alt="Figma">
              <img src="@/assets/images/framer icon.png" alt="Framer">
              <img src="@/assets/images/photoshop icon.png" alt="Photoshop">
              <img src="@/assets/images/illustrator icon.png" alt="Illustrator">
              <img src="@/assets/images/xd icon.png" alt="Xd">
              <img src="@/assets/images/procreate icon.png" alt="Procreate">
              <img src="@/assets/images/shaper3d icon.png" alt="Shaper3D">
              <img src="@/assets/images/nomadsculpt icon.png" alt="Nomad Sculpt">
              <img src="@/assets/images/excel icon.png" alt="Excel">
              <img src="@/assets/images/Word icon.png" alt="Word">
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN - Bio + Timeline -->
        <div class="about-right">
          <p class="bio">
            I’m a designer driven by curiosity, creativity, and a love for building experiences that make people’s lives easier. 
            With a degree in Interaction Design and experience across UX, UI, and visual design, I thrive on solving problems with simplicity and creativity. 
            <br><br>
            Outside the screen, I’m an enthusiast for craftsmanship, from sketching to 3D printing and experimenting with product design. 
            For me, design is not just work, it’s how I see and interact with the world.
          </p>

          <div class="timeline">
            <h3>Experience_timeline</h3>
            
            <div class="timeline-item">
              <div class="year">2020–2022</div>
              <div class="bar Green"></div>
              <div class="content">
                <strong>Open Window Institute</strong><br>
                Bachelor’s Degree in Creative Technologies.<br>
                Major in Interaction Design.
              </div>
            </div>

            <div class="timeline-item">
              <div class="year">2023</div>
              <div class="bar Yellow"></div>
              <div class="content">
                <strong>Articulate-IT</strong><br>
                UX/UI Design Intern.
              </div>
            </div>

            <div class="timeline-item">
              <div class="year">2025</div>
              <div class="bar Red"></div>
              <div class="content">
                <strong>University of Pretoria</strong><br>
                Studied architecture to broaden spatial and systems thinking.
              </div>
            </div>

            <div class="timeline-item">
              <div class="year">2026</div>
              <div class="bar Green"></div>
              <div class="content">
                <strong>Red & Yellow Creative School of Business</strong><br>
                Front-End Web Development Certificate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
</style>