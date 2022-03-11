<template>
  <section>
    <v-container class="contact-section">
      <v-row>
        <v-col>
          <h1 class="text-center">Contact Information</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="6" offset-sm="3" class="d-flex justify-space-around ">
          <v-icon x-large>fa-github</v-icon>
          <v-icon x-large>mdi-linkedin</v-icon>
          <v-icon x-large>mdi-youtube</v-icon>
          <v-icon x-large>mdi-codepen</v-icon>
          <v-icon x-large>mdi-twitch</v-icon>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.contact-section{
  background-color: #d8c593;
}
</style>
