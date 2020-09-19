<template>
  <li>{{commentProp.creatorEmail}} - {{commentProp.body}}
    <div v-if="isCreator">
      <i class="fa fa-pencil-alt" aria-hidden="true" @click="editToggle = !editToggle"></i>
        <form class="form-inline" @submit.prevent="editComment" v-if="editToggle">
          <input
            type="text"
            class="form-control"
            placeholder="Comment Text..."
            aria-describedby="helpId"
            v-model="commentData.body"
          />
          <button type="submit" class="btn btn-warning">Edit Comment</button>
        </form>
      <button class="btn btn-danger" @click="deleteComment">DELETE</button>
    </div>
  </li>
</template> 

<script>
export default {
  name: "comment-component",
  props: ["commentProp"],
  data(){
    return { commentData: {}, editToggle: false };
  },
  methods: {
    deleteComment(){
      console.log(this.commentProp.id)
      this.$store.dispatch("deleteComment",this.commentProp.id)
    },
    editComment(){
      this.commentData.id = this.commentProp.id
      this.commentData.blog = this.commentProp.blog
      this.$store.dispatch("editActiveComments",this.commentData);
      this.editToggle = false;
    }
  },
  computed:{
    profile(){
      return this.$store.state.profile
    },
    isCreator(){
      return this.profile.email == this.commentProp.creatorEmail
    }
  }
}
</script>

<style>
ul{
  list-style: none;
}
</style>