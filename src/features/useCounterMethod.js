// reactive
// import { reactive, toRefs } from "vue"
import { ref } from "vue"
export const useCounterMethod = () => {
  // reactive
  /* const state = reactive({
    numToAddOrSubtract: 1,
    counterValue: 0
  }) */
  const numToAddOrSubtract = ref(1)
  const counterValue = ref(0)
  // reactive
  /*
  function add () {
    state.counterValue += state.numToAddOrSubtract
  }
  function minus () {
    state.counterValue -= state.numToAddOrSubtract
  }
  */
  function add () {
    counterValue.value += numToAddOrSubtract.value
  }
  function minus () {
    counterValue.value -= numToAddOrSubtract.value
  }
  // reactive
  /* return {
    ...toRefs(state),
    add,
    minus
  } */
  return {
    numToAddOrSubtract,
    counterValue,
    add,
    minus
  }
}
