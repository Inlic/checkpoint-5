<template>
  <li class="col-3">
    <div class="card mt-3">
      {{myCommentProp.creatorEmail}} - {{myCommentProp.body}}
      <i class="fa fa-pencil-alt" aria-hidden="true" @click="editToggle = !editToggle"></i>
        <form class="form-inline" @submit.prevent="editComment" v-if="editToggle">
          <input
            type="text"
            class="form-control"
            placeholder="Comment Text..."
            aria-describedby="helpId"
            v-model="myCommentData.body"
          />
          <button type="submit" class="btn btn-warning">Edit Comment</button>
        </form>
      <button class="btn btn-danger" @click="deleteComment">DELETE</button>
    </div>
  </li>
</template>

<script>
export default {
  name: "my-comment-component",
  props: ["myCommentProp"],
  data(){
    return { myCommentData: {}, editToggle: false };
  },
  methods: {
    deleteComment(){
      this.$store.dispatch("deleteComment",this.myCommentProp.id)
    },
    editComment(){
      this.myCommentData.id = this.myCommentProp.id
      this.myCommentData.blog = this.myCommentProp.blog
      this.$store.dispatch("editActiveComments",this.myCommentData);
      this.editToggle = false;
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