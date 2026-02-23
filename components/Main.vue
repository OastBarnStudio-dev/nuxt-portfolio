<template>
  <v-container fluid>
    <Home />

    <div data-aos="fade-up">
      <Technologies />
    </div>
    <Skills />
    <Works />
    <About />
    <Hireme />
    <Contact />
  </v-container>
</template>

<script>
import Home from '@/components/Home'
import Skills from '@/components/Skills'
import Works from '@/components/Works'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Hireme from '@/components/Hireme'
import Technologies from '@/components/Technologies'

export default {
  components: {
    Home,
    Skills,
    Works,
    About,
    Contact,
    Hireme,
    Technologies
  },
  data() {
    return {
      showMenu: false
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: #232020;
}
.portfolio-content {
  background-color: #232020;
  height: 100vh;
}
.wrapper {
  position: relative;
}
</style>
