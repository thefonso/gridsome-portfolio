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
          <v-img
              class="align-end"
              height="200px"
              :src="project.image"
          />
          <v-card-title>{{project.name}}</v-card-title>
          <v-card-subtitle class="pb-0">
            {{project.name}}:
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{project.description}}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
                color="orange"
                text
                :href="project.github"
            >
              Github Repo
            </v-btn>

            <v-btn
                color="orange"
                text
                :href="project.url"
            >
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
          name: 'Twitch24',
          github: 'https://github.com/badbabykosh/twitch24',
          url: 'https://twitchtv-81469.firebaseapp.com/',
          description: 'Prof of concept to experiment with qunit, pure javascript, AMD module design and requireJS with Bootstrap. Launch it. Select you favorite channels and see when they are online.',
          image: 'http://thefonso.com/img/portfolio/fullsize/twitch24.png'
        },
        {
          name: 'Pomodoro',
          github: 'https://github.com/badbabykosh/pomodoro',
          url: 'http://pomodoro.s3-website-us-west-1.amazonaws.com/',
          description: 'Experimental application utilizing the D3 and jquery libraries and the Bootstrap framework. Launch it in a new window and play with it for fun. Take a look at the code on github',
          image: 'http://thefonso.com/img/portfolio/fullsize/koshodoro.png'
        },
        {
          name: 'Cox Auto Prism',
          github: '',
          url: 'https://prs-demo.netlify.com/',
          description: 'Is an application built in React. It\'s purpose is to demo each React component built for the system. PRISM is a React component library style guide. The library is meant to harmonize look and feel across all cox auto properties.',
          image: 'http://thefonso.com/img/portfolio/fullsize/prism_big.png'
        },
      ]
    }
  },
}
</script>

<style scoped>
.project-section{
background-color:  #d8c593;
}
.v-image{
  border-bottom:  #708160 1px solid;
}
</style>
