<template>
  <main>
    
   <TheHeader />
    <the-tree></the-tree>
   </main>
</template>

<script>

import TheHeader from './components/layouts/TheNav.vue';
export default {
  components:{
  
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