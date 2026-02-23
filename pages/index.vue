<template>
  <v-app>
    <v-main>
      <v-container>
        <PortfolioMain />
      </v-container>
    </v-main>
  </v-app>
</template>

export default { head() { return { title: 'Fernando Sobron | Barn Studio -
Producer Director & Illustrator', meta: [ { hid: 'description', name:
'description', content: 'Portfolio of Fernando Sobron PhD at Barn Studio.
Award-winning Advertising Creative, Producer Director, and Illustrator
specializing in unscripted TV and documentaries, Barn Studio, Heathfield, East
Sussex' }, { name: 'keywords', content: 'Fernando Sobron, Producer Director,
Unscripted TV, Producer, Podcasts, Documentary, Illustration, Barn Studio,
Heathfield, East Sussex' }, // Social Media (Open Graph) { property: 'og:title',
content: 'Fernando Sobron | Creative Producer & Illustrator' }, { property:
'og:description', content: 'Explore the work of Fernando Sobron PhD at Barn
Studio.' }, { property: 'og:image', content: '/path-to-your-og-image.jpg' } //
Link to a nice screenshot of your site ] } } }

<script>
import PortfolioMain from '@/components/Main'

export default {
  components: {
    PortfolioMain
  }
}
</script>

<style scoped>
/* Keep it empty for now to ensure a clean build */
</style>
