<template>
  <button @click="onClick">Clicked {{ counter }} times!</button>
</template>

<script>
export default {
  data () {
    return {
      counter: 0,
    }
  },
  props: {
    id: Number,
  },
  methods: {
    onClick () {
      this.counter++
      this.$emit('clicked', { cnt: this.counter, id: this.id })
    },
    onBodyClick () {
      console.log('clicked!')
    }
  },
  beforeCreate() {
    console.log('Before create')
    this.counter = 1
  },
  created () {
    console.log('Created')
    this.counter = 2
  },
  mounted () {
    console.log(this.$el)
    document.body.addEventListener('click', this.onBodyClick)
  },
  beforeUpdate() {
    
  },
  updated() {

  },
  beforeDestroy() {
    console.log('Before destroy!')
    document.body.removeEventListener('click', this.onBodyClick)
  },
  destroyed() {
    console.log('Destrouyed!')
  },
}
</script>

<style>

</style>
