<template>
  <li>This is a comment </li>
</template>

<script>
export default {
  name: "comment-component",
  // FIXME need to pass down blog id from parent, blog not defined here
  data(){
    return {}
  },
  mounted(){
    this.$store.dispatch("getActiveBlogComments", this.blog.id)
  },
  computed: {
    blog(){
      return this.$store.state.activeblog
    }
  }
}
</script>

<style>

</style>