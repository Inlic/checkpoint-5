<template>
  <div class="post-component col-4">
      <div class="card text-dark">
        <div class="card-body">
          <router-link :to="{name:'blog-details', params:{blogId: myBlogProp._id}}">
          <h2 class="card-title mt-2">{{myBlogProp.title}}</h2>
          </router-link>
          <i class="fa fa-pencil-alt" aria-hidden="true" @click="editToggle = !editToggle"></i>
          <form class="form-inline" @submit.prevent="editBlog" v-if="editToggle">
          <input
            type="text"
            class="form-control"
            placeholder="New Blog Title..."
            aria-describedby="helpId"
            v-model="myBlogData.title"
          />
          <button type="submit" class="btn btn-warning">Edit Blog Title</button>
        </form>
          <p>{{myBlogProp.creatorEmail}}</p>
          <div class="mt-3">
          <button class="btn btn-danger"  @click="deleteBlog">DELETE</button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "my-blogs-component",
  props: ["myBlogProp"],
  data(){
    return { myBlogData: {}, editToggle: false};
  },
  methods: {
    deleteBlog(){
      this.$store.dispatch("deleteBlog",this.myBlogProp._id)
    },
    editBlog(){
      this.myBlogData.id = this.myBlogProp._id;
      this.$store.dispatch("editBlog",this.myBlogData);
      this.editToggle = false;
    }
  },
  computed:{
    profile(){
      return this.$store.state.profile
    },
  }
}
</script>

<style>

</style>