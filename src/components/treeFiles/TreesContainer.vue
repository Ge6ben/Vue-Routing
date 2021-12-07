<template>
<ul>
  <trees-item v-for="tree in trees" :key='tree.id' :location='tree.location' :place='tree.place' :Hint='tree.Hint' :id='tree.id' ></trees-item> 
</ul>
</template>
<script>
import TreesItem from './TreesItem.vue';
export default{
    inject :['trees'],
    components:{
        TreesItem
    }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
