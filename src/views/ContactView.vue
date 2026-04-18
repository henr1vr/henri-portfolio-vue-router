<template>
  <div class="contact">

    <section id="getintouch" class="contact-section">
      <div class="contact-container">

        <!-- Left side -->
        <div class="contact-left">
          <h2>Get In Touch</h2>
          <p>Open to freelance, full-time, or just a great conversation.</p>
          
          <!-- Purple gradient box -->
          <div class="build-box">
            Let’s Build<br>Something!
          </div>
        </div>

        <!-- Right side: Form -->
        <div class="contact-right">
          <form @submit.prevent="submitForm" class="contact-form">

            <div class="form-group">
              <label>Name *</label>
              <input v-model="form.name" type="text" placeholder="Your full name" required>
              <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </div>

            <div class="form-group">
              <label>Email *</label>
              <input v-model="form.email" type="email" placeholder="you@email.com" required>
              <span v-if="errors.email" class="error">{{ errors.email }}</span>
            </div>

            <div class="form-group">
              <label>Message *</label>
              <textarea v-model="form.message" rows="6" placeholder="Tell me about your project..." required></textarea>
              <span v-if="errors.message" class="error">{{ errors.message }}</span>
            </div>

            <button type="submit" class="submit-btn" :disabled="!isFormValid">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <h3>Thank You!</h3>
        <p>Your message has been received. Here’s what you sent:</p>
        <div class="modal-details">
          <strong>Name:</strong> {{ form.name }}<br>
          <strong>Email:</strong> {{ form.email }}<br><br>
          <strong>Message:</strong><br>
          {{ form.message }}
        </div>
        <button @click="closeModal" class="submit-btn">Close</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      errors: {
        name: '',
        email: '',
        message: ''
      },
      showModal: false
    }
  },
  computed: {
    isFormValid() {
      return this.form.name.trim() !== '' &&
             /^[a-zA-Z\s]+$/.test(this.form.name) &&
             /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email) &&
             this.form.message.trim().length >= 10
    }
  },
  methods: {
    validateForm() {
      this.errors = { name: '', email: '', message: '' }

      if (!this.form.name.trim()) this.errors.name = 'Name is required'
      else if (!/^[a-zA-Z\s]+$/.test(this.form.name)) this.errors.name = 'Name can only contain letters and spaces'

      if (!this.form.email.trim()) this.errors.email = 'Email is required'
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) this.errors.email = 'Please enter a valid email'

      if (!this.form.message.trim()) this.errors.message = 'Message is required'
      else if (this.form.message.trim().length < 10) this.errors.message = 'Message must be at least 10 characters'
    },
    submitForm() {
      this.validateForm()
      if (this.isFormValid) {
        this.showModal = true
      }
    },
    closeModal() {
      this.showModal = false
      this.form = { name: '', email: '', message: '' }
      this.errors = { name: '', email: '', message: '' }
    }
  },
  watch: {
    'form.name'() { this.validateForm() },
    'form.email'() { this.validateForm() },
    'form.message'() { this.validateForm() }
  }
}
</script>

<style scoped>
/* Temporary styles */
.contact-container {
  display: flex;
  gap: 60px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 40px;
}

.contact-left { flex: 1; max-width: 380px; }
.contact-right { flex: 1; }

.build-box {
  width: 320px;
  height: 320px;
  background: linear-gradient(135deg, #7c3aed, #db2777);
  border-radius: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 42px;
  font-weight: 300;
  color: white;
  box-shadow: 0 0 40px rgba(192, 38, 211, 0.6);
}

.modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background: #111;
  color: white;
  padding: 40px;
  border-radius: 16px;
  max-width: 500px;
  width: 90%;
}
</style>