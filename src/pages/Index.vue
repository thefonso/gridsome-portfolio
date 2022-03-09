<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" id="thefonso" src="~/thefonso.jpg" width="135" />

    <h1>Hello, world!</h1>

    <p>
      I'm Fonso. I'm a web development software engineer experienced in production level app development, UI / UX design, and frontend skills with Vue and React. Being a developer now is great. So many tools are available now, makes building things crazy fun.
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
#thefonso{
  border-radius: 50%
}
.home-links a {
  margin-right: 1rem;
}
</style>
