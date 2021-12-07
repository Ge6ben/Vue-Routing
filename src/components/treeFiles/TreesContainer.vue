<template>
<base-card v-if="isLoading">Loading....</base-card>
<ul v-else>
  
   <trees-item v-for="tree in trees" :key='tree.id' :location='tree.Location' :place='tree.Place' :hint='tree.Hint' :id='tree.id'  ></trees-item> 
</ul>
</template>
<script>
import BaseCard from '../UI/BaseCard.vue';
import TreesItem from './TreesItem.vue';

export default{

props :['trees','isLoading'],
    components:{
        TreesItem,
        BaseCard
    },
methods:{
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
