<template>
  <header>
    <h1>Help Earth To Breathe Free 🌲 For A Better Tomorrow</h1>
  </header>
  <base-card class="justfyBetween">
    <base-button @click="setSelectedTab('trees-container')" :mode="treesMode">
      <router-link to="/trees">Trees Already Exist</router-link>
    </base-button>

    <base-button @click="setSelectedTab('add-tree')" :mode="addTreeMode">
      <router-link to="/addtree">Add new Trees </router-link>
    </base-button>
  </base-card>
</template>


<script>
import BaseButton from '../UI/BaseButton.vue';
import BaseCard from '../UI/BaseCard.vue';

export default {
  components: {
    BaseButton,
    BaseCard,
  },
  data() {
    return {
      selectedTab: 'trees-container',
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
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

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #8cc;
  display: flex;
  justify-content: center;
  align-items: center;
}
header h1 {
  color: white;
  margin: 0;
}
a{
  color:#3a0061;
text-decoration: none;

}
.justfyBetween
{
  display: flex;
    justify-content: space-between;
}

</style>