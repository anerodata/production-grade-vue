<template>
  <div>
    <label for="counter-value">Inserta un valor para aumentar o disminuir el contador: </label>
    <input min="0" id="counter-value" type="number" v-model="numToAddOrSubtract"/>
    <div>
      <button @click="add">+ {{ numToAddOrSubtract }}</button>
      <button v-on:click="minus">- {{ numToAddOrSubtract }}</button>
    </div>
    <h3>La cuenta: {{ counterValue }}</h3>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue"
export default {
  name: "Counter",
  setup () {
    const state = reactive({
      numToAddOrSubtract: 1,
      counterValue: 0
    })
    function add () {
      state.counterValue += state.numToAddOrSubtract
    }
    function minus () {
      state.counterValue -= state.numToAddOrSubtract
    }
    return {
      ...toRefs(state),
      add,
      minus
    }
  }
}
</script>

<style module>
</style>
