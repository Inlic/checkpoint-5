import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeblog: {},
    activecomments: [],
    profileblogs: [],
    profilecomments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setProfileBlogs(state,blogs){
      state.profileblogs = blogs
    },
    setProfileComments(state,comments){
      state.profilecomments = comments
    },
    setBlogs(state, blogs){
      state.blogs = blogs;
    },
    setActiveBlog(state, blog){
      state.activeblog = blog;
    },
    removeBlog(state, id){
      state.blogs = state.blogs.filter(b => b.id != id)
      state.profileblogs = state.profileblogs.filter(b => b.id != id)
    },
    setComments(state, comments){
      state.activecomments = comments;
    },
    removeComment(state, id){
      state.activecomments = state.activecomments.filter(c => c.id != id)
      state.profilecomments = state.profilecomments.filter(c => c.id != id)
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getProfileBlogs({commit}) {
      try {
        let res = await api.get("profile/blogs")
        commit("setProfileBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getProfileComments({commit}) {
      try {
        let res = await api.get("profile/comments")
        commit("setProfileComments", res.data)  
      } catch (error) {
        console.error(error)
      }
    },
    async getAllBlogs({commit}){
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getActiveBlog({commit}, blogId){
      try {
        let res = await api.get("blogs/"+blogId)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createBlog({commit, state},blog){
      try {
        let res = await api.post("blogs", blog)
        commit("setBlogs", [...state.blogs, res.data])
      } catch (error) {
        console.error(error)
      }
    },
    async editBlog({commit, state},blog){
      try {
        let res = await api.put('blogs/'+blog.id, blog)
        commit("setBlogs", [...state.blogs.filter(b => b.id != blog.id), res.data])
        commit("setProfileBlogs", [...state.profileblogs.filter(b => b.id != blog.id), res.data])
      } catch (error) {
        console.error(error)
      }
    },
    async editActiveBlog({commit},blog){
      try {
        let res = await api.put('blogs/'+blog.id, blog)
        console.log(res)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBlog({commit},blogId){
      try {
        await api.delete('blogs/'+blogId)
        commit("removeBlog",blogId)
      } catch (error) {
        console.error(error)
      }
    },
    async getActiveBlogComments({commit},blogId){
      try {
        let res = await api.get('blogs/'+blogId+'/comments')
        commit("setComments", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createComment({commit, state},comment){
      try {
        let res = await api.post('comments',comment)
        commit("setComments", [...state.activecomments, res.data])        
      } catch (error) {
        console.error(error)
      }
    },
    async editActiveComments({commit, state},comment){
      try {
        let res = await api.put('comments/'+comment.id, comment)
        commit("setComments", [...state.activecomments.filter(c => c.id != comment.id), res.data])
        commit("setProfileComments",[...state.profilecomments.filter(c => c.id != comment.id), res.data])
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment({commit},commentId){
      try {
        await api.delete('comments/'+commentId)
        commit("removeComment",commentId)
      } catch (error) {
        console.error(error)
      }
    },
  },
});
