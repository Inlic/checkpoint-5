<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col mt-3">
        <h3>Create a Blog</h3>
        <form class="form-inline" @submit.prevent="createBlog">
          <div class="form-group">
            <input
              type="text"
              v-model="newBlog.title"
              class="form-control"
              placeholder="Title"
              aria-describedby="helpId"
            />
            <input
              type="text"
              v-model="newBlog.body"
              class="form-control"
              placeholder="Body text..."
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="btn btn-success">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="row mt-3">
    <blog-component v-for="blog in blogs" :key="blog.id" :blogProp="blog" />
    </div>
  </div>
</template>

<script>
import blogComponent from "../components/BlogComponent";
export default {
  name: "home",
  data(){
    return {
      newBlog: {}
    };
  },
  mounted(){
    this.$store.dispatch("getAllBlogs");
  },
  methods: {
    createBlog(){
      this.$store.dispatch("createBlog", this.newBlog);
    }
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
