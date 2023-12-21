<template>
  <section id="projects" class="project-section">
    <v-container>
      <v-row>
        <v-col>
          <h1>Projects</h1>
        </v-col>
      </v-row>
      <v-row class="justify-space-around">
        <v-card
          v-for="project in projects"
          :key="project.name"
          max-width="300px"
        >
          <v-img class="align-end" height="200" :src="project.image" />
          <v-card-title>{{ project.name }}</v-card-title>
          <v-card-subtitle class="pb-0"> {{ project.tech }}: </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ project.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text :href="project.github">
              Github Repo
            </v-btn>

            <v-btn color="orange" text :href="project.url">
              Live
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          name: "Twitch24",
          github: "https://github.com/badbabykosh/twitch24",
          url: "https://twitchtv-81469.firebaseapp.com/",
          tech: "Javascript ES5, requireJS, Bootstrap",
          description:
            "Experimental app built with qunit, pure javascript, AMD module design and requireJS with Bootstrap. Launch it. Select you favorite channels and see when they are online.",
          image: require('@/assets/images/twitch24.png'),
        },
        {
          name: "Pomodoro",
          github: "https://github.com/badbabykosh/pomodoro",
          url: "http://pomodoro.s3-website-us-west-1.amazonaws.com/",
          tech: "React, Bootstrap",
          description:
            "Experimental application utilizing the D3 and jquery libraries and the Bootstrap framework. Launch it in a new window and play with it for fun. Take a look at the code on github",
          image: require('@/assets/images/fonsodoro.jpg'),
        },
        {
          name: "Cox Auto Prism",
          github: "",
          url: "https://prs-demo.netlify.com/",
          tech: "React, GraphQL, GatsbyJS, React-strap",
          description:
            "Production application built in React. It's purpose is to demo each React component built for the system. PRISM is a React component library style guide. The library is meant to harmonize look and feel across all cox auto properties.",
          image: require('@/assets/images/prism.png'),
        },
        {
          name: "3D Demo 1",
          github: "https://github.com/thefonso/unclefonso_3d_demo",
          url: "https://unclefonso-3d-demo-uecg.vercel.app/",
          tech: "React, Spline",
          description:
            "A design created in Figma and ported over to 3D and presented inside a React app for demo purposes.",
          image: require('@/assets/images/figma3d.png'),
        },
        {
          name: "Covid Tracker",
          github: "https://github.com/thefonso/vue-covid-tracker",
          url: "https://vue-covid-tracker-theta.vercel.app/",
          tech: "Vue 3, external API",
          description:
            "Experimental api consumer demo. An exercise to explore Vue 3 capabilities.",
          image: require('@/assets/images/covid_tracker.png'),
        },
        {
          name: "SonicBox",
          github: "",
          url: "https://sonicbox.com/en/chat-html5/AshBellBGB/",
          tech: "MVC architecture in php, React",
          description:
            "Production: SonicBox is a production level app with tons of users. Built to create an online community for artist.",
          image: require('@/assets/images/sonicbox_short.jpg'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.project-section {
  background-color: #d8c593;
}
.v-image {
  border-bottom: #708160 1px solid;
}
</style>
