<template>
  <!-- S -->
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortunatly input value is invalid</p>
      <p>
        Please check all inputs and make sure to enter at least one character
      </p>
    </template>

    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>

  <!-- E -->



    <base-card>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="place">Address</label>
        <input type="text" id="place" name="place" ref="placeInp" />
      </div>

      <div class="form-control">
        <label for="hint">Hint</label>
        <textarea id="hint" name="hint" rows="3" ref="hintInp"></textarea>
      </div>

      <div class="form-control">
        <label for="location">Location</label>
        <input type="text" id="location" name="location" ref="locationInp" />
      </div>

        
        <div>
        <base-button type="submit">Add Tree</base-button>
       <p v-if="error">{{error}}</p> 
      
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import BaseDialog from '../UI/BaseDialog.vue';

export default {
  components: {
    BaseCard,
    BaseButton,
    BaseDialog,
  },
  
  data() {
    return {
      inputIsInvalid: false,
      error:null,
    };
  },
  methods: {
  async  handleSubmit() {
      const enteredPlace = this.$refs.placeInp.value;
      const enteredLocation = this.$refs.locationInp.value;
      const enteredHint = this.$refs.hintInp.value;
      if (
        enteredPlace.trim() === '' ||
        enteredLocation.trim() === '' ||
        enteredHint.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      }
    await  fetch(
        'https://breathe-free-daa83-default-rtdb.firebaseio.com/addtree.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Place: enteredPlace,
            Hint: enteredHint,
            Location: enteredLocation,
          }),
        }
      ).then((res)=>{
        if(res.ok){
          console.log(res)
        }
        else{
          throw new Error('Couldnt save Data')
        }
      }).catch((err)=>{
        console.log(err)
        this.error = err.message
      })
     this.$router.push('/')
     },

    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>



<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>