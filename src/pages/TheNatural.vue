<template>
   <base-card>
   <ul>
      <NaturalItem  v-for="natural in naturalItems" :key="natural.id" :naturalItem="naturalItems[natural.id]" />
   </ul>
   </base-card>
</template>
<script>
import axios from 'axios'
import NaturalItem from '../components/natural/NaturalItem.vue';
import BaseCard from '../components/UI/BaseCard.vue'
export default {
    data(){
        return{
naturalItems:[]
        }
    },
    components:{
        NaturalItem,BaseCard
    },
     async mounted(){
await axios.get(' http://localhost:8000/natural').then( res => this.naturalItems = res.data).catch((e) => console.log("Hi I am ERROR Lelelele 😋!! ", e))
    
      }
}
</script>