<template>
  <div class="technologies">
    <div class="technologies-title d-flex justify-center align-center">
      Skills and Services we offer
      <img
        src="https://res.cloudinary.com/dxp5v7a5h/image/upload/v1771868906/favicon_FS_small.jpg"
      />
    </div>

    <carousel :autoplay="true" :nav="false" :loop="true" :items="1">
      <div v-for="skill in skills" :key="skill.name">
        <v-card class="tech-card text--primary" flat>
          <v-row>
            <v-col v-for="item in skill.items" :key="item.name" cols="6" md="4">
              <div class="tech">
                <div
                  v-if="item.image.startsWith('mdi-')"
                  class="icon-square d-flex align-center justify-center mb-2"
                >
                  <v-icon size="30" color="white">
                    {{ item.image }}
                  </v-icon>
                </div>

                <img
                  v-else
                  class="technologies-logo mb-2"
                  :src="
                    'https://res.cloudinary.com/dxp5v7a5h/image/upload/' +
                      item.image +
                      '.jpg'
                  "
                />

                <p>{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </carousel>
  </div>
</template>

<script>
import Constants from '@/constants'

export default {
  data() {
    return {
      skills: Constants.SKILLS
    }
  }
}
</script>

<style lang="scss" scoped>
.technologies {
  .technologies-title {
    font-size: 1.4375rem;
    font-weight: bold;
    margin-top: 3rem;
  }

  // This ensures your Cloudinary logos are the right size
  .technologies-logo {
    height: 3rem;
    width: 3rem;
    object-fit: contain;
    margin: 1rem; // Reduced from 2rem to look tighter
  }

  // NEW: This creates the black square for MDI icons
  .icon-square {
    height: 3rem;
    width: 3rem;
    background-color: #000000;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem; // Matches the logo margin above
  }

  .tech-card {
    background: #131313;
    .tech {
      flex-direction: column;
      display: flex;
      align-items: center;
      background: #323030;
      border-radius: 4px;
      margin-bottom: 1rem;
      padding: 10px;
    }
  }

  .roller {
    height: 2.4375rem;
  }
}
</style>
