<template>
  <v-app>
    <v-main>
      <v-container>
        <PortfolioMain />
      </v-container>
    </v-main>
  </v-app>
</template>

export default { head() { return { title: 'Fernando Sobron | Creative Producer,
Director & Illustrator', meta: [ { hid: 'description', name: 'description',
content: 'Portfolio of Fernando Sobron PhD, an award-winning Advertising
Creative, Producer, Director, and Illustrator specializing in unscripted TV and
documentaries at Barn Studio, Heathfield, East Sussex, UK.' }, { name:
'keywords', content: 'Fernando Sobron, Producer, Unscripted TV Director,
Documentary Filmmaker, Illustrator, Advertising Creative, Nuxt Portfolio' }, //
Social Media (Open Graph) { property: 'og:title', content: 'Fernando Sobron |
Creative Producer & Illustrator' }, { property: 'og:description', content:
'Explore the work of Fernando Sobron at Barn Studio.' }, { property: 'og:image',
content: '/path-to-your-og-image.jpg' } // Link to a nice screenshot of your
site ] } } }

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
