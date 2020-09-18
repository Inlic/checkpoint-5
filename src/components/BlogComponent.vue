<template>
  <div class="post-component col-4">
    <router-link :to="{name:'blog-details', params:{blogId: blogProp._id}}">
      <div class="card text-dark">
        <div class="card-body">
          <h4 class="card-title">{{blogProp.title}}</h4>
          <p>{{blogProp.creatorEmail}}</p>
          <button class="btn btn-danger" v-if="blogProp.creatorEmail == profile.email">DELETE</button>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "blog-component",
  props: ["blogProp"],
  data(){
    return {};
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