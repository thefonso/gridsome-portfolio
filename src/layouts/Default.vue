<template>
    <v-app>
      <v-navigation-drawer permanent app color="blue-grey lighten-5" width="200">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Alfonso Rush
            </v-list-item-title>
            <v-list-item-subtitle>
              Software Developer
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.url"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="layout">
        <slot/>
      </v-main>
    </v-app>
</template>

<script>
export default {

  data () {
    return {
      items: [
        { title: 'About Me', icon: 'mdi-human-greeting-variant', url:'#about-me' },
        { title: 'Projects', icon: 'mdi-view-dashboard', url:'#projects' },
        { title: 'Blog', icon: 'mdi-book', url:'blog' },
        { title: 'Education', icon: 'mdi-school', url:'#education'},
        { title: 'Contact', icon: 'mdi-at', url:'#contact' },
      ],
      right: null,
    }
  },
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  /*TODO: what width you want as max*/
  /*max-width: 760px;*/
  margin: 20px;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
