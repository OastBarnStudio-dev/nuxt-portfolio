<template>
  <!-- TODO: add v-waypoint="{ active: true, callback: onWaypoint }" -->
  <v-container fluid class="about portfolio-container">
    <div id="about" class="px-4">
      <div class="section-title">About Fernando</div>
      <div class="mb-6 text-center" data-aos="fade-up">
        <img class="me-img" src="@/assets/images/me.jpg" />
      </div>
      <div class="quotes text-center mb-10" data-aos="fade-up">
        <q>
          When you do what you love doing, time flies, says Zac while sipping
          his tea.
        </q>
        <br />
      </div>
      <div class="content" data-aos="fade-up">
        <p>
          I, Fernando, am an international award-winning advertising Creative
          and a professional Producer/Director specializing in unscripted
          television and documentaries. I hold a Doctor of Philosophy focused on
          creativity in the documentary mode, with research exploring the
          creative input in representations portraying the historical real. I
          began my career at a very young age training as an illustrator, and I
          continue to love drawing and creating illustrations and comics. Within
          these pages, you will find selected examples of my work across
          advertising, print, television, film and video. Zac, my partner and
          friend is a Wirehair Drahthaar. A well charactered charmer, he is
          really good fun to be around.
        </p>
        <p>
          I also love to sketch and do crafts. These skills made me believe in
          "A problem visualised is a problem halved."
        </p>
        <p>
          These pages are stil in development at 16/02/2026 and will be
          gradually populate with work in the coming days. Please, use our
          contact page for any queries.
        </p>
      </div>
      <div data-aos="fade-up">
        <Technologies />
      </div>
    </div>
  </v-container>
</template>

<script>
import Technologies from '@/components/Technologies'

export default {
  components: {
    Technologies
  }
}
</script>

<style lang="scss" scoped>
.about {
  color: white;

  .content {
    padding: 0 3rem;
    p {
      font-size: 1.2rem;
      line-height: 150%;
    }
  }

  .quotes {
    margin: 2rem auto 0;
    font-size: 2rem;
    max-width: 50rem;
  }

  .me-img {
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    border: 2px solid rgb(54, 51, 51);
    object-fit: cover;
  }
}
@media screen and (max-width: 767px) {
  .content {
    padding: 0 !important;
  }
}
</style>
