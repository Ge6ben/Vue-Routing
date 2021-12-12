<template>
  <li > 
      <span >{{naturalItem.description }}</span>
      <div>
<img  :src="naturalItem.imageUrl" alt="No images" />
      </div>
      
  </li>
</template>

<script>
export default {
  props: ['naturalItem'],
};

// console.log(this.naturalItem.id)
</script>
<style scoped>
li {
    margin: 1em auto;
    list-style: none;
    text-align: center;
    /* justify-content: space-between;
    flex-direction: column;
    justify-items: center; */
}
div{
    margin: 0 auto;
    width: 300px;
    height: 100%;
    
}
li span{
    margin: 20px;
    font-size: 16px;
    color: #8cc;
}
img{
    width: 100%;
    /* height: 200px; */
}
</style>