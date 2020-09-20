<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div>
      <h4>My Blogs</h4>
      <div class="row mt-3">
      <my-blogs-component v-for="blog in profileblogs" :key="blog.id" :myBlogProp="blog" />
    </div>
    </div>
    <div>
      <h4>My Comments</h4>
      <ul class="row">
      <my-comments-component v-for="comment in profilecomments" :key="comment.id" :myCommentProp="comment"/>
      </ul> 
    </div>
  </div>
</template>

<script>
import myBlogsComponent from "../components/MyBlogsComponent"
import myCommentsComponent from "../components/MyCommentsComponent"
export default {
  name: "Profile",
  data(){
    return {};
  },
  mounted(){
    console.log(this.$auth.isAuthenticated)
    if(!this.$auth.isAuthenticated){
      this.$router.push({name: 'Home'})
    } else{
      this.$store.dispatch("getProfileBlogs")
      this.$store.dispatch("getProfileComments")    
    }
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    profileblogs() {
      return this.$store.state.profileblogs;
    },
    profilecomments(){
      return this.$store.state.profilecomments;
    }
  },
  components: {
    myBlogsComponent,
    myCommentsComponent
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
