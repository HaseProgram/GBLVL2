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
    background: rgb(90, 90, 230);
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
  }
</style>
