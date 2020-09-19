<template>
  <li>{{commentProp.creatorEmail}} - {{commentProp.body}}<button v-if="commentProp.creatorEmail == profile.email" class="btn btn-danger" @click="deleteComment(commentProp._id)">DELETE</button>
  </li>
</template> 

<script>
export default {
  name: "comment-component",
  props: ["commentProp"],
  data(){
    return {}
  },
  methods: {
    deleteComment(commentId){
      this.$store.dispatch("deleteComment",commentId)
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
ul{
  list-style: none;
}
</style>