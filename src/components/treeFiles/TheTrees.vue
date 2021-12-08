<template>
  <base-card>
    <base-button @click="setSelectedTab('trees-container')" :mode="treesMode"
      >Trees Already Exist</base-button
    >

    <base-button @click="setSelectedTab('add-tree')" :mode="addTreeMode"
      >Add new Trees</base-button
    >
  </base-card>
<trees-container></trees-container>
 
</template>
<script>
import TreesContainer from './TreesContainer.vue';
// import AddTree from './AddTree.vue';
// import { v4 as uuidv4 } from 'uuidv4';
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';

// import firebase from 'firebase/compat/app'

export default {
  components: {
    TreesContainer,
    // AddTree,
    BaseButton,
    BaseCard,
  },

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

};



</script>