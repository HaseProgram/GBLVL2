<template>
  <div>
    <Header :message="msg" />
    <button @click="changeMsg">Click me</button>
    <br><br>
    <ButtonCounter @clicked="onClick" :id="1" v-if="flag" />
    <ButtonCounter @clicked="onClick" :id="2" />
    <ButtonCounter @clicked="onClick" :id="3" />
    <button @click="flag = !flag">Change flag</button>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ButtonCounter from './components/ButtonCounter.vue'

export default {
  data () {
    return {
      msg: 'My Header From App.vue',
      flag: true,
    }
  },
  components: {
    Header,
    ButtonCounter,
  },
  methods: {
    changeMsg () {
      this.msg = 'My new message from App.vue'
    },
    onClick ({ cnt, id }) {
      console.log(cnt, id)
    }
  },
}
</script>

<style module>
  .myheader {
    color: red;
  }
</style>
