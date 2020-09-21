<template>
  <div class="post-details container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <h3 class="text-primary">{{blog.title}}</h3>
        <h6 class="text-warning">Created By: {{blog.creatorEmail}}</h6>
        <p>{{blog.body}}</p>
        <div v-if="isCreator" class="col-12">
        <i class="fa fa-pencil-alt" aria-hidden="true" @click="editToggle = !editToggle"></i>
          <form class="form-inline" @submit.prevent="editActiveBlog" v-if="editToggle">
          <input
            type="text"
            class="form-control"
            placeholder="New Blog Title..."
            aria-describedby="helpId"
            v-model="blogData.title"
          />
          <input
            type="text"
            class="form-control"
            placeholder="Blog Text..."
            aria-describedby="helpId"
            v-model="blogData.body"
          />
          <button type="submit" class="btn btn-warning">Edit Blog</button>
        </form>
        </div>
        <div class="col-12 mt-2" v-if="isCreator">
        <button class="btn btn-danger"  @click="deleteBlog">DELETE</button>
        <!-- $router.push({name: 'Home' }) -->
        </div>
        <div v-if="profile.email" class="col-12">
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
        </div>
        <div class="col-12 text-center">
          <h3 class="text-primary">Comments Section</h3>
          <ul class="list-group">
            <comment-component v-for="comment in comments" :key="comment.id" :commentProp="comment"/>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import commentComponent from "../components/CommentComponent";
export default {
  name: "blog-details",
  data(){
    return { blogData: {}, newComment: {}, editToggle: false };
  },
  beforeRouteUpdate(to, from, next){
    this.$store.dispatch("getActiveBlog",to.path.slice(1));
    next();
  },
  mounted(){
    this.$store.dispatch("getActiveBlog",this.$route.params.blogId);
    this.$store.dispatch("getActiveBlogComments", this.$route.params.blogId)
  },
  methods: {
    deleteBlog(){
      this.blogData.id = this.blog.id
      this.$store.dispatch("deleteBlog",this.blogData.id)
      this.$router.push({name: 'Home' })
    },
    editActiveBlog(){
      this.blogData.id = this.blog.id
      this.$store.dispatch("editActiveBlog",this.blogData);
      this.editToggle = false;
    },
    createComment(){
      let payload = {
        body: this.newComment.body,
        blog: this.$route.params.blogId,
        creatorEmail: this.profile.email
      }
      this.$store.dispatch("createComment", payload)
    },
  },
  computed: {
    blogs(){
      return this.$store.state.blogs
    },
    blog() {
      return this.$store.state.activeblog
    },
    comments(){
      return this.$store.state.activecomments
    },
    profile(){
      return this.$store.state.profile
    },
    isCreator(){
      return this.profile.email == this.blog.creatorEmail
    }

  },
  components: {
    commentComponent
  }
}
</script>

<style>

</style>