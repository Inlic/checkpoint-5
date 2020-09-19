<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    }
  }
};

//FIXME user profile should grab all blogposts and comments
//Same edit/delete functionality as other sections

</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
