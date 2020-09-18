import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeblog: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs){
      state.blogs = blogs;
    },
    setActiveBlog(state, blog){
      state.activeblog = blog;
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
    async getAllBlogs({commit}){
      try {
        let res = await api.get("blogs")
        console.log(res)
        commit("setBlogs", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getActiveBlog({commit}, blogId){
      try {
        let res = await api.get("blogs/"+blogId)
        console.log(res)
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
    }
  },
});
