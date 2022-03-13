<template>
  <section>
  <h1>New Zen Blog page</h1>
    <hr>
  <div v-for="edge in $page.posts.edges" :key="edge.node.id">
    <h2>{{ edge.node.title }}</h2>
  </div>
  </section>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>

<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
