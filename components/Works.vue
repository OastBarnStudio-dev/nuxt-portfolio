<template>
  <v-container id="works" fluid class="works portfolio-container">
    <div class="px-4">
      <div class="section-title">Works past and present</div>

      <v-row class="px-5">
        <v-col
          v-for="(project, index) in projects"
          :key="index"
          cols="12"
          sm="4"
        >
          <Project :project="project" />
        </v-col>
      </v-row>

      <div class="text-center pa-4 ma-4">
        <v-btn color="white" :href="moreProjects" target="_blank" outlined dark>
          View more
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script>
import Project from '@/components/Project'
import Constants from '@/constants'

export default {
  components: {
    Project
  },
  data() {
    return {
      projects: Constants.PROJECTS,
      moreProjects: Constants.GITHUB_LINK
    }
  }
}
</script>

<style lang="scss" scoped>
.works {
  .work-img {
    height: 6rem;
  }
  .work-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .works-description {
    font-size: 1.3rem;
    line-height: 2rem;
    margin-bottom: 2rem;
  }
  .work-traits {
    margin-top: 5rem;
  }
}
</style>
