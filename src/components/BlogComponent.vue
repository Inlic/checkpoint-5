<template>
  <div class="post-component col-4">
      <div class="card text-dark">
    <router-link :to="{name:'blog-details', params:{blogId: blogProp._id}}">
        <div class="card-body">
          <h4 class="card-title">{{blogProp.title}}</h4>
          <p>{{blogProp.creatorEmail}}</p>
        </div>
    </router-link>
          <button class="btn btn-danger" v-if="blogProp.creatorEmail == profile.email" @click="deleteBlog(blogProp._id)">DELETE</button>
      </div>
  </div>
</template>

<script>
export default {
  name: "blog-component",
  props: ["blogProp"],
  data(){
    return {};
  },
  methods: {
    deleteBlog(blogId){
      this.$store.dispatch("deleteBlog",blogId)
    }
  },
  computed:{
    profile(){
      return this.$store.state.profile
    }
  }
}
</script>

<style>

</style>