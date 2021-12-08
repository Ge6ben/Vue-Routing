<template>
  <base-card>
    <div>
      <img :src="notFoundImage" />
    
    <base-button class="btn">
      <router-link to="/">Return To home Page</router-link>
    </base-button>
    
    </div>

    
  </base-card>
</template>

<script>
import notFound from '../assests/notfound.png';
import BaseCard from '../components/UI/BaseCard.vue';
import BaseButton from '../components/UI/BaseButton.vue';

export default {
  components: {
    BaseCard,
    BaseButton,
  },
  data() {
    return {
      notFoundImage: notFound,
    };
  },
};
</script>


<style scoped>

img {
  width: 100%;
}
.btn {
  margin: 0 auto;
}
a {
  color: #fff;
  text-decoration: none;
}
button a{
     color: #fff;
  text-decoration: none;
}
</style>