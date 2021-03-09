<template>
  <div>
    <Header :message="msg" />
    <List />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'

export default {
  data () {
    return {
      msg: 'My Header From App.vue',
    }
  },
  components: {
    Header,
    List,
  },
  methods: {
  },
}
</script>

<style module>
  .myheader {
    color: red;
  }
</style>
