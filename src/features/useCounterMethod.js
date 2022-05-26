import { reactive, toRefs } from "vue"
export const useCounterMethod = () => {
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
