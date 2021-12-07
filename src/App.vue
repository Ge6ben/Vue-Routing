<template>
  <main>
    
   <TheHeader />
    <the-tree></the-tree>
   </main>
</template>

<script>
import TheTree from './components/treeFiles/TheTrees.vue';
import TheHeader from './components/layouts/TheNav.vue';
export default {
  components:{
    TheTree,
    TheHeader
    
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