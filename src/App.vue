<template>
  <div>
    <app-Header></app-Header>
    <app-Footer></app-Footer>
   <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/shared/Footer";
import Footer from "./components/shared/Header";



export default {
  components: {
    appHeader: Header,
    appFooter: Footer,
  },
};
</script>

<style>
</style>