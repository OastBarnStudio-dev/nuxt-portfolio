<template>
  <v-hover v-slot:default="{ hover }">
    <v-card class="project" dark elevation="24" data-aos="fade-up">
      <v-img
        class="white--text align-end rounded-lg project-image-constrained"
        height="350px"
        contain
        :alt="project.title"
        :style="project.isRandomizer ? 'cursor: pointer;' : ''"
        :position="project.cover === '61_print.png' ? 'top' : 'center'"
        :src="
          project.isRandomizer && randomImageUrl
            ? randomImageUrl
            : project.cover.startsWith('http')
            ? project.cover
            : require(`@/assets/images/${project.cover}`)
        "
        @click="handleImageClick"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out v-card--reveal hover-content"
            style="height: 100%; width: 100%; flex-direction: column;"
          >
            <v-btn
              class="ma-2 view-project"
              depressed
              rounded
              large
              color="black"
              elevation="0"
              @click.stop="toggleModal"
            >
              Look at examples
            </v-btn>

            <p
              v-if="project.isRandomizer"
              class="white--text font-weight-bold mt-2 text-center"
              style="background: rgba(0,0,0,0.5); padding: 5px 10px; border-radius: 4px;"
            >
              Click image for another print
            </p>
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
            class="white--text align-end project-image-constrained mx-auto"
            max-height="500px"
            max-width="500px"
            contain
            :alt="project.title"
            :style="project.isRandomizer ? 'cursor: pointer;' : ''"
            :src="
              project.isRandomizer && randomImageUrl
                ? randomImageUrl
                : project.cover.startsWith('http')
                ? project.cover
                : require(`@/assets/images/${project.cover}`)
            "
            @click="handleImageClick"
            @error="generateRandomImage"
          >
          </v-img>

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
      dialog: false,
      randomImageUrl: '',
      maxFiles: 65, // Update this as you upload more
      cloudinaryBaseUrl: 'https://res.cloudinary.com/dxp5v7a5h/image/upload/'
    }
  },
  mounted() {
    // This is the correct way to call it when the component loads
    if (this.project.isRandomizer) {
      this.generateRandomImage()
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
    },
    generateRandomImage() {
      const randomNumber = Math.floor(Math.random() * this.maxFiles) + 1
      this.randomImageUrl = `${this.cloudinaryBaseUrl}f_auto,q_auto/${randomNumber}_print.png`
    },
    handleImageClick() {
      if (this.project.isRandomizer) {
        // 1. Change the current image immediately
        this.generateRandomImage()

        // 2. Pre-fetch a future image after 2 seconds so it's ready in the cache
        setTimeout(() => {
          // Safety check: ensure we don't pick a number higher than what's uploaded
          const nextRandom = Math.floor(Math.random() * this.maxFiles) + 1
          const img = new Image()
          img.src = `${this.cloudinaryBaseUrl}f_auto,q_auto/${nextRandom}_print.png`

          // Console log for your testing (you can remove this later)
          console.log(`Pre-loaded image: ${nextRandom}_print.png`)
        }, 2000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  cursor: pointer;
  max-width: 300px; // This keeps your cards in a nice grid
}

/* FIX: This ensures the image inside doesn't zoom or crop */
.project-image-constrained {
  ::v-deep .v-image__image {
    background-size: contain !important;
  }
}

.hover-content {
  height: 100%;
  flex-direction: column; /* Allows button and text to stack vertically */
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
