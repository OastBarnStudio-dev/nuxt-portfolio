<template>
  <v-app>
    <v-main>
      <v-container>
        <PortfolioMain />
      </v-container>
    </v-main>
  </v-app>
</template>

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
