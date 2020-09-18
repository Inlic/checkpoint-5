<template>
  <div class="post-details container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <p>{{blog.title}}</p>
        <p>Created By: {{blog.creatorEmail}}</p>
        <p>{{blog.body}}</p>
        <!-- <vote-comp /> comments at some point? -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "blog-details",
  data(){
    return { blogData: {}}
  },
  mounted(){
    this.$store.dispatch("getActiveBlog",this.$route.params.blogId);
  },
  computed: {
    blog() {
      return this.$store.state.activeblog
    }
  }
}
</script>

<style>

</style>