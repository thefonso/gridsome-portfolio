<template>
<section id="education">
  <v-container>
    <v-row>
      <v-col>
        <h1>My Story</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-timeline reverse>
          <v-timeline-item
              v-for="(year, i) in years"
              :key="i"
              :color="year.color"
              small
          >
            <template v-slot:opposite>
              <span
                  :class="`headline font-weight-bold ${year.color}--text`"
                  v-text="year.year"
              ></span>
            </template>
            <div class="py-4">
              <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
                {{ year.Title }}
              </h2>
              <div>
                {{ year.content }}
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</section>

</template>

<script>
export default {
  name: "Education",
  data: () => ({
    years: [
      {
        color: 'cyan',
        year: '2020',
        Title: 'Cox Auto',
        content: 'Built an in-house application to be used as a style guide for React components used throughout many of the clients online properties.'
      },
      {
        color: 'green',
        year: '2018',
        Title: 'LaunchLab9',
        content: 'Started my own firm where I sourced and led teams of independent contractors to design and develop MVP apps.'
      },
      {
        color: 'pink',
        year: '2017',
        Title: 'DoclerMedia',
        content: 'At DoclerMedia I worked on a team to update legacy code to modern libraries like React.'
      },
      {
        color: 'amber',
        year: '2014',
        Title: 'General Assembly',
        content: 'Moved to Los Angeles and helped develop a curriculum for a 12 week immersive program which included AngularJS and Ruby on Rails.'
      },
    ],
  }),
}
</script>

<style scoped>

</style>
