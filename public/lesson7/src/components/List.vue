<template>
  <div>
    <CartItem
      v-for="id in getItemsOnPage"
      :id="id"
      :key="id"
    />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import CartItem from './CartItem.vue'

export default {
  components: {
    CartItem,
  },
  methods: {
    // ...mapMutations([
    //   'setData'
    // ]),
    ...mapActions([
      'requestData'
    ])
  },
  computed: {
    ...mapGetters([
      'getItemsOnPage',
      'getFullPrice'
    ]),
  },
  created () {
    this.requestData(1)
  }
}
</script>

<style>

</style>
