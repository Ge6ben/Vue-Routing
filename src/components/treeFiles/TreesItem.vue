<template>
    <li>
        <base-card>
            <header>
                <h3> {{place}}</h3>
                <base-button >Delete</base-button>

            </header>
        
        <p>{{hint}}</p>
        <nav>
            <a :href="location">Location on Google map</a>
        </nav>
</base-card>    </li>
</template>
<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue'


export default {
props:['id','location' ,'place', 'hint' ],
components:{
  BaseCard,BaseButton
}

}

</script>

<style scoped>
li {
   
  margin:  auto;
  max-width: 40rem;

}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #8cc;
}

a:hover,
a:active {
  color: #c89300;
}
</style>