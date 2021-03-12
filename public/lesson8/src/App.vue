<template>
  <div>
    <Header :message="msg" />
    <List />
    <AddForm />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import AddForm from './components/AddForm.vue'

export default {
  data () {
    return {
      msg: 'My Header From App.vue',
    }
  },
  components: {
    Header,
    List,
    AddForm,
  },
  methods: {
  },
}
</script>

<style module>
  * {
    padding: 0;
    margin: 0;
  }
</style>
