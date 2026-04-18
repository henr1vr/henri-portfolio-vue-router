<template>
  <div class="about">

    <!-- ABOUT ME SECTION -->
    <section id="aboutme" class="aboutme">
      <div class="about-container">
        
        <!-- Left column: Bio -->
        <div class="about-left">
          <h2>About Me</h2>
          <p class="bio">
            I’m a designer driven by curiosity, creativity, and a love for building experiences that make people’s lives easier. 
            With a degree in Interaction Design and experience across UX, UI, and visual design, I thrive on solving problems with simplicity and creativity.
            <br><br>
            Outside the screen, I’m an enthusiast for craftsmanship, from sketching to 3D printing and experimenting with product design. 
            For me, design is not just work, it’s how I see and interact with the world.
          </p>
        </div>

        <!-- Right column: Timeline -->
        <div class="about-right">
          <div class="timeline">
            <h3>Experience Timeline</h3>
            
            <div class="timeline-item">
              <div class="bar green">2020–2022</div>
              <div class="content">
                <strong>Open Window Institute</strong><br>
                Bachelor’s Degree in Creative Technologies.<br>
                Major in Interaction Design.
              </div>
            </div>

            <div class="timeline-item">
              <div class="bar yellow">2023</div>
              <div class="content">
                <strong>Articulate-IT</strong><br>
                UX/UI Design Intern.
              </div>
            </div>

            <div class="timeline-item">
              <div class="bar red">2025</div>
              <div class="content">
                <strong>University of Pretoria</strong><br>
                Studied architecture to broaden spatial and systems thinking.
              </div>
            </div>

            <div class="timeline-item">
              <div class="bar green">2026</div>
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
/* Temporary styles */
.about-container {
  display: flex;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
}

.about-left {
  flex: 1;
  max-width: 420px;
}

.about-right {
  flex: 1;
}

.timeline {
  background: #000;
  color: white;
  padding: 40px;
  border-radius: 12px;
}

.timeline h3 {
  color: #D8CF3C;
  margin-bottom: 40px;
  font-size: 24px;
}

.timeline-item {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  align-items: flex-start;
}

.bar {
  width: 80px;
  padding: 8px 16px;
  text-align: center;
  border-radius: 6px;
  font-weight: bold;
  color: #000;
}

.green  { background: #48963B; }
.yellow { background: #D8CF3C; }
.red    { background: #CC2F1B; }
</style>