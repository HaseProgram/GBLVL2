<template>
  <div>
    <span :class="[$style.name]">{{ getItemData.name }}</span> = 
    <span :class="[$style.price]">{{ getItemData.price }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    id: String,
  },
  computed: {
    ...mapGetters([
      'getData'
    ]),
    getItemData () {
      return this.getData[this.id] || {}
    }
  },
}
</script>

<style module>
.name {
  font-weight: bold;
}
.price {
}
</style>
