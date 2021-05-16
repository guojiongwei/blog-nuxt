<template>
  <div class="tags-wrapper">
    <Tag v-for="(tag, index) in blogTypes" :key="index" :text="tag.name" :path="tag.name"></Tag>
  </div>
</template>
<script>
export default {
  props: ["blogTypes"],
};
</script>
<style lang="less" >
.tags-wrapper {
  max-width: 7rem;
  margin: 20px auto;
  margin-bottom: 0;
}
</style>
