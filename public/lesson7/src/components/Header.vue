<template>
  <div :class="[$style.myheader]">{{ message }}</div>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style module>
  .myheader {
    color: blue;
  }
</style>
