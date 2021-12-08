<template>
 <button :class="mode">
     <slot></slot>
     </button>   
</template>

<script>
export default {
    props:['mode']
}
</script>

<style scoped >
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #8cc;
  border: 1px solid #8cc;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #cc8;
  border-color: #cc8;
}

.flat {
  background-color: transparent !important;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
.justfyBetween{
  display: flex;
  justify-content: space-between
  ;
}
</style>