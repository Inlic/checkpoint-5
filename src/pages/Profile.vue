<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div>
      My Blogs
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
      this.$store.dispatch("getProfileBlogs")
      this.$store.dispatch("getProfileComments")    
  },
  computed: {
    blogs(){
      return this.$store.state.blogs;
    },
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
