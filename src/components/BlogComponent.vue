<template>
  <div class="post-component col-4">
      <div class="card text-dark">
        <div class="card-body">
          <router-link :to="{name:'blog-details', params:{blogId: blogProp._id}}">
          <h2 class="card-title">{{blogProp.title}}</h2>
          </router-link>
          <i class="fa fa-pencil-alt" aria-hidden="true" @click="editToggle = !editToggle" v-if="isCreator"></i>
          <form class="form-inline" @submit.prevent="editBlog" v-if="editToggle">
          <input
            type="text"
            class="form-control"
            placeholder="New Blog Title..."
            aria-describedby="helpId"
            v-model="blogData.title"
          />
          <button type="submit" class="btn btn-warning">Edit Blog Title</button>
        </form>
          <p class="text-warning">{{blogProp.creatorEmail}}</p>
          <div v-if="isCreator">
          <button class="btn btn-danger"  @click="deleteBlog">DELETE</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "blog-component",
  props: ["blogProp"],
  data(){
    return { blogData: {}, editToggle: false };
  },
  methods: {
    deleteBlog(){
      this.$store.dispatch("deleteBlog",this.blogProp._id)
    },
    editBlog(){
      this.blogData.id = this.blogProp._id;
      this.$store.dispatch("editBlog",this.blogData);
      this.editToggle = false;
    }
  },
  computed:{
    profile(){
      return this.$store.state.profile
    },
    isCreator(){
      return this.profile.email == this.blogProp.creatorEmail;
    }
  }
}
</script>

<style>

</style>