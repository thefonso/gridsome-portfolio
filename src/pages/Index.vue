<template>
  <Layout>

    <About/>
    <Projects/>
    <Education/>
    <Contact/>

  </Layout>
</template>

<script>
import About from "@/components/About";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  components:{
    About,
    Projects,
    Education,
    Contact
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
