<template>
  <div>
    <CartItem
      v-for="id in getItemsOnPage"
      :id="id"
      :key="id"
    />
    <Button @clicked="loadMoreData">Загрузить еще!</Button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartItem from './CartItem.vue'
import Button from './Button.vue'

export default {
  components: {
    CartItem,
    Button,
  },
  data () {
    return {
      page: 0,
    }
  },
  methods: {
    ...mapActions([
      'requestData'
    ]),
    loadMoreData () {
      this.page++
      this.requestData(this.page)
    }
  },
  computed: {
    ...mapGetters([
      'getItemsOnPage',
      'getFullPrice'
    ]),
  },
  created () {
    this.loadMoreData()
  }
}
</script>

<style>

</style>
