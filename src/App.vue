<template>
  <main>
    
   <TheHeader />
    <!-- <the-tree></the-tree> -->
    <router-view></router-view>
    <!-- <not-found></not-found> -->
   </main>
</template>

<script>
// import TheTree from './components/treeFiles/TheTrees.vue';
import TheHeader from './components/layouts/TheNav.vue';
// import notFound from './components/UI/NotFoundPage.vue'
export default {
  components:{
    // TheTree,
    TheHeader,
    // notFound
    
  }
}
</script> 

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>