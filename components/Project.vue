<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="project" dark elevation="24" data-aos="fade-up">
      <v-img
        class="white--text align-end"
        height="200px"
        :alt="project.title"
        :position="project.cover === 'tabasco_small.png' ? 'top' : 'center'"
        :src="
          project.cover.startsWith('http')
            ? project.cover
            : require(`@/assets/images/${project.cover}`)
        "
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal hover-content"
          >
            <v-btn
              absolute
              class="ma-2 view-project"
              depressed
              rounded
              large
              color="black"
              elevation="0"
              @click="toggleModal"
            >
              View Project
            </v-btn>
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-text class="text--primary">
        <h2 class="font-weight-black pb-2">{{ project.title }}</h2>
        <div class="pb-2 tech-stack">{{ project.techStack.join(', ') }}</div>
      </v-card-text>

      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="800"
      >
        <v-card v-if="dialog" class="project-modal">
          <div class="close-btn" @click="toggleModal">
            <v-icon>mdi-close</v-icon>
          </div>

          <div
            v-if="project.vimeo"
            style="padding:56.25% 0 0 0; position:relative;"
          >
            <iframe
              :src="project.vimeo"
              style="position:absolute; top:0; left:0; width:100%; height:100%;"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>

          <div v-else-if="project.video" style="background-color: black;">
            <video
              width="100%"
              height="auto"
              controls
              style="width: 100%; height: auto; display: block;"
              :poster="project.cover"
            >
              <source :src="project.video" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <v-img
            v-else
            height="200"
            cover
            :alt="project.title"
            :src="project.cover"
          ></v-img>

          <v-card-title>{{ project.title }}</v-card-title>

          <v-card-text>
            <p>
              <v-chip
                v-for="tech in project.techStack"
                :key="tech"
                small
                class="mr-2"
                label
              >
                {{ tech }}
              </v-chip>
            </p>
            <p>{{ project.description }}</p>

            <div
              v-if="project.isConfidential"
              class="pb-4 text-caption grey--text"
            >
              * Note: Project details may be restricted.
            </div>

            <v-btn
              class="my-2 view-project"
              depressed
              rounded
              large
              color="black"
              elevation="0"
              :disabled="!project.url"
              @click="viewProject"
            >
              <v-icon v-if="project.isConfidential" left>mdi-lock</v-icon>
              View code
            </v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    viewProject() {
      if (this.project.url) {
        window.open(this.project.url, '_blank')
      }
    },
    toggleModal() {
      this.dialog = !this.dialog
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  cursor: pointer;
  max-width: 300px;
}
.hover-content {
  height: 100%;
}
.view-project {
  opacity: 1 !important;
  z-index: 2;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  background: #323030e0;
}
.tech-stack {
  height: 2.5rem;
}
.project-modal {
  background: #323030;
  position: relative;
}
.close-btn {
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 1;
  height: 30px;
  cursor: pointer;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #323030;
}
@media screen and (max-width: 767px) {
  .project {
    max-width: 100% !important;
  }
}
</style>
