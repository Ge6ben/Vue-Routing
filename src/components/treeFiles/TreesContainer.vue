<template>
  <base-card v-if="isLoading">Loading....</base-card>
  <base-card v-else-if="error">Faild to fetch data please try again later</base-card>
  <base-card v-else-if="storedTrees.length==0">There is no Tree Kindly Add some!</base-card>
  <ul v-else>
    <trees-item
      v-for="tree in storedTrees"
      :key="tree.id"
      :location="tree.Location"
      :place="tree.Place"
      :hint="tree.Hint"
      :id="tree.id"
      @handleDeleteItem="handleRemoveItem($event)"
    ></trees-item>
  </ul>
</template>
<script>
import BaseCard from '../UI/BaseCard.vue';
import TreesItem from './TreesItem.vue';

import axios from 'axios'

export default {
  data() {
    return {
      isLoading: false,
      error: false,
      storedTrees: [],
    };
  },

  components: {
    TreesItem,
    BaseCard,
  },
  methods: {
   async getTrees() {
      this.isLoading = true;
     await fetch(
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
          this.isLoading = false;
          this.error = true;
        });
      
    },

    async handleRemoveItem(_id) {
    await axios.delete("https://breathe-free-daa83-default-rtdb.firebaseio.com/addtree/"
           + _id +  ".json"
        )
      // this.storedTrees=this.storedTrees.filter(tree => tree.id !== _id)
      // OR
      const selectedId = this.storedTrees.findIndex(res => res.id === _id);
       this.storedTrees.splice(selectedId,1)
    },
  },

  mounted() {
    this.getTrees();
  },
};
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
