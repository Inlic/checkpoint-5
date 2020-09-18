<template>
  <div class="home">
    <h1>Welcome</h1>
    <blog-component v-for="blog in blogs" :key="blog.id" :blogProp="blog" />
  </div>
</template>

<script>
import blogComponent from "../components/BlogComponent";
export default {
  name: "home",
  data(){
    return {};
  },
  mounted(){
    this.$store.dispatch("getAllBlogs")
  },
  computed: {
    blogs(){
      return this.$store.state.blogs;
    }
  },
  components: {
    blogComponent,
  }
};
</script>
