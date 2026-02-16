<template>
  <v-container id="skills" fluid class="skills portfolio-container">
    <div>
      <div class="section-title">What we do</div>
      <v-row no-gutters class="px-5">
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="Adverts"
            class="skill-img"
            src="@/assets/images/frontend.png"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">Adverts</div>
          <div class="skill-description" data-aos="fade-up">
            Scriptwriting, campains concept creaion and production to TV, video,
            online and print.
          </div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="Video"
            class="skill-img"
            src="@/assets/images/backend.png"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">Video Production</div>
          <div class="skill-description" data-aos="fade-up">
            Self shoting producer director services, pre-edits and short edit
            with Resolve and final cut postproduction.
          </div>
        </v-col>
        <v-col class="text-center px-4" cols="12" sm="4">
          <img
            alt="Illustration and design"
            class="skill-img"
            src="@/assets/images/mobileapp.png"
            data-aos="fade-up"
          />
          <div class="skill-title" data-aos="fade-up">
            Illustration and design
          </div>
          <div class="skill-description" data-aos="fade-up">
            Sdvertising and Graphic Art Direction, Pencil, pen and ink
            Ilustration and digital using Adobe, Affinity or Procreate.
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.skills {
  color: white;
  margin-top: 3rem;
  .skill-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .skill-description {
    margin-bottom: 3.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #f5f5f7;
  }
  .skill-img {
    height: 7rem;
  }
}
</style>
