<template>
  <main>
    
   <TheHeader />
    <router-view></router-view>
    <router-link to="/natural" class="natural">More Natural, More Better!</router-link>
   

   </main>
</template>

<script>
import TheHeader from './components/layouts/TheNav.vue';
export default {
  components:{
    TheHeader,
    
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
.natural
{
   padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #8cc;
  border: 1px solid #8cc;
  color: white;
  cursor: pointer;
  text-decoration: none;
  margin:10px auto
}
</style>