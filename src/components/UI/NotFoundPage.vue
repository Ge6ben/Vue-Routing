<template>
<div>
<img :src="notFoundImage">

</div>

     <base-card>           
            <base-button  class="btn">Return To home Page</base-button>  
</base-card> 
</template>

<script>
import notFound from '../../assests/notfound.png'
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue'

export default {
    components:{
        BaseCard,
        BaseButton
    },
    data(){
return{
    notFoundImage:notFound
}
    }
}
</script>


<style scoped>
div{

    width: 700px;
    margin: 1em auto;
}
img{
    width: 100%;
}
.btn{
    margin: 0 auto;
}
</style>