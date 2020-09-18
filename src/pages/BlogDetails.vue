<template>
  <div class="post-details container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <p>{{blog.title}}</p>
        <p>Created By: {{blog.creatorEmail}}</p>
        <p>{{blog.body}}</p>
        <button class="btn btn-danger" v-if="blog.creatorEmail == profile.email" @click="deleteBlog(blog.id);$router.push({name: 'Home' });">DELETE</button>
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
  methods: {
    deleteBlog(blogId){
      this.$store.dispatch("deleteBlog",blogId)
    }
  },
  computed: {
    blog() {
      return this.$store.state.activeblog
    },
    profile(){
      return this.$store.state.profile
    }
  }
}
</script>

<style>

</style>