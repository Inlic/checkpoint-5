<template>
  <li>This is a comment </li>
</template>

<script>
export default {
  name: "comment-component",
  // FIXME need to pass down blog id from parent
  data(){
    return {}
  },
  mounted(){
    this.$store.dispatch("getActiveBlogComments", blog.id)
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