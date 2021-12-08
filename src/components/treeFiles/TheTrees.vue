<template>
  <base-card>
    <base-button @click="setSelectedTab('trees-container')" :mode="treesMode"
      >Trees Already Exist</base-button
    >

    <base-button @click="setSelectedTab('add-tree')" :mode="addTreeMode"
      >Add new Trees</base-button
    >
  </base-card>

  <keep-alive>
      <component :is="selectedTab" :trees="storedTrees" :isLoading='isLoading'></component>
  </keep-alive>
</template>
<script>
// import db from '../../firebase/firebaseInit';

import TreesContainer from './TreesContainer.vue';
import AddTree from './AddTree.vue';
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';
// import {
//   doc,deleteDoc
// } from 'firebase/firestore'



export default {
  components: {
    TreesContainer,
    AddTree,
    BaseButton,
    BaseCard,
  },
provide(){
  return{
handle_Delete: this.handleDelelte
}},
  data() {
    return {
      isLoading: false,
      error: null,
      selectedTab: 'trees-container',
      storedTrees: [],
    };
  },
  
  computed: {
    treesMode() {
      return this.selectedTab === 'trees-container' ? null : 'flat';
    },
    addTreeMode() {
      return this.selectedTab === 'add-tree' ? null : 'flat';
    },
   

  },

  methods: {
     handleDelelte(id){
     console.log(id)
   },
// async
// handleDelelte(id){
  
//   console.log(id)
  // db.firestore()
  //         .collection('addtree')
  //         .doc(id)
  //         .delete()
  //         .then(() => {
  //           console.log('Deleted');
  //         }).catch((e)=>
  //         console.log(e,'================'))
  
// },
      getTrees() {
      this.isLoading = true;
      this.error = null;
      //    this.storedTrees =[]
      fetch(
        'https://breathe-free-daa83-default-rtdb.firebaseio.com/addtree.json'
      )
        .then((res) => {
          if (res.ok) return res.json();
        })
        .then((data) => {
          this.isLoading = false;
          var treesInfo = [];
          for (const id in data) {
            treesInfo.push({
              id: id,
              Place: data[id].Place,
              Hint: data[id].Hint,
              Location: data[id].Location,
            });
          }
          this.storedTrees = treesInfo;
        })
        .catch((err) => {
          console.log(err);
          this.isLoading=false;
          this.error = 'Faild to fetch data please try again later';
        });
    },

    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
  mounted() {
      this.getTrees();
  },
};



</script>