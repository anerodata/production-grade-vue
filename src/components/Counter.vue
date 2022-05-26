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
import { useCounterMethod } from "@/features/useCounterMethod.js"
export default {
  name: "Counter",
  setup () {
    const { numToAddOrSubtract, counterValue, add, minus } = useCounterMethod()
    return {
      numToAddOrSubtract,
      counterValue,
      add,
      minus
    }
  }
}
</script>

<style module>
</style>
