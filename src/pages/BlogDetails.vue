<template>
  <div class="post-details container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <p>{{blog.title}}</p>
        <p>Created By: {{blog.creatorEmail}}</p>
        <p>{{blog.body}}</p>
        <button class="btn btn-danger" v-if="blog.creatorEmail == profile.email" @click="deleteBlog(blog.id);$router.push({name: 'Home' });">DELETE</button>
        <form class="form-inline" @submit.prevent="createComment">
          <div class="form-group">
            <input
              type="text"
              v-model="newComment.body"
              class="form-control"
              placeholder="Your Comment Here..."
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="btn btn-success">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
        <ul>
        <comment-component v-for="comment in comments" :key="comment.id" :commentProp="comment"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import commentComponent from "../components/CommentComponent";
export default {
  name: "blog-details",
  data(){
    return { blogData: {}, newComment: {}}
  },
  mounted(){
    this.$store.dispatch("getActiveBlog",this.$route.params.blogId);
    this.$store.dispatch("getActiveBlogComments", this.$route.params.blogId)
  },
  methods: {
    deleteBlog(blogId){
      this.$store.dispatch("deleteBlog",blogId)
    },
    createComment(){
      let payload = {
        body: this.newComment.body,
        blog: this.$route.params.blogId,
        creatorEmail: this.profile.email
      }
      this.$store.dispatch("createComment", payload)
    }
  },
  computed: {
    blog() {
      return this.$store.state.activeblog
    },
    comments(){
      return this.$store.state.activecomments
    },
    profile(){
      return this.$store.state.profile
    }
  },
  components: {
    commentComponent
  }
}
</script>

<style>

</style>