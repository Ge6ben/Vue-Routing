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
import TreesContainer from './TreesContainer.vue';
import AddTree from './AddTree.vue';
// import { v4 as uuidv4 } from 'uuidv4';
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';

// import firebase from 'firebase/compat/app'

export default {
  components: {
    TreesContainer,
    AddTree,
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

  methods: {
// handleDelelte(){
//     var db = firebase.database()

//     db.collection("addtree").doc(index).delete().then(() => {
//     console.log("Document successfully deleted!");
// }).catch((error) => {
//     console.error("Error removing document: ", error);
// });
// }
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
      // this.handleDelelte(0)
    this.getTrees();
  },
};



</script>