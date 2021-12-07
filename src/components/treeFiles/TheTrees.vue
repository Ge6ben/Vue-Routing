<template>
    <base-card>
     <base-button @click="setSelectedTab('trees-container')" :mode="treesMode" >Trees Already Exist</base-button>
    
    <base-button @click="setSelectedTab('add-tree')" :mode='addTreeMode'>Add new Trees</base-button>
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
</template>
<script>
import TreesContainer from './TreesContainer.vue'; 
import AddTree from './AddTree.vue'; 
import { v4 as uuidv4 } from 'uuid';
import BaseButton from '../UI/BaseButton.vue'
import BaseCard from '../UI/BaseCard.vue';

export default {
    components:{
        TreesContainer,AddTree,
        BaseButton,BaseCard},
    
data(){
  return{
       selectedTab:'trees-container' ,
    storedTrees:[
      {id: 1 , location:'https://www.google.com/maps/place/Sami+Abdulrahman+Park/@36.1910915,43.9830161,17z/data=!3m1!4b1!4m5!3m4!1s0x400722f26411b81d:0x2d199f28766e8aab!8m2!3d36.1910915!4d43.9852101' , place : 'Erbil-100m',Hint:'Need to changing Potting Soil' },
      {id:2 , location:'https://www.google.com/maps/place/Sami+Abdulrahman+Park/@36.1910915,43.9830161,17z/data=!3m1!4b1!4m5!3m4!1s0x400722f26411b81d:0x2d199f28766e8aab!8m2!3d36.1910915!4d43.9852101' , place : 'Erbil-150m',Hint:'Need Watering' },
      
    ] ,
    
     }
 
},
provide(){
    return{
     trees:this.storedTrees  ,
      addNewTree:this.addNewTree,
      deleteTree:this.removeTree
    }
},
 computed:{
        treesMode(){
            
            return this.selectedTab === 'trees-container' ? null : 'flat'
        },
         addTreeMode(){
             
            return this.selectedTab === 'add-tree' ? null : 'flat'
         },
    }

,    methods:{
        setSelectedTab(tab){
            this.selectedTab = tab
        },
        addNewTree(place , hint,location){
            const newTree = {
                id: uuidv4(),
                location:location,
                place:place,
                Hint:hint
            }
            this.storedTrees.unshift(newTree)
            this.selectedTab= 'trees-container'
        },
    removeTree(treeId){
        const treeIndex =  this.storedTrees.findIndex(tree => tree.id === treeId)
        this.storedTrees.splice(treeIndex,1)
    }
    },
   
}
</script>