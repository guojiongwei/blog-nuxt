<template>
  <img alt="郭炯韦个人博客" :width="width" :height="height" src="/favicon.ico" />
</template>
<script>
  export default {
    name: 'avatar',
    props: {
      width: {
        type: Number,
        default: 80
      },
      height: {
        type: Number,
        default: 80
      }
    }
  }
</script>
