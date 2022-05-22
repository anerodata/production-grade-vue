<script>
import { h } from "vue"
export default {
  render() {
    const message = "Hello Frontend Masters!" 
    return h(`h${this.level}`, message)
  },
  props: {
    level: {
      type: Number,
      default: 1
    }
  }
}
</script>
<style></style>
