<template>
  <nuxt-link v-if="path" :to="path === '全部' ? '/' : `/Home/${path}`"  class="tag-wrapper"><i></i>{{ text }}</nuxt-link>
</template>

<script>
export default {
  name: "Tag",
  props: {
    path: '',
    text: '',
    color: {
      type: String,
      default: "#4cae4c",
    },
  },
  methods: {
    go() {
      if (this.path == "全部") {
        this.$router.push("/");
      } else {
        this.$router.push(`/Home/${this.path}`);
      }
    },
  },
};
</script>
<style lang="less" >
.tag-wrapper {
  font-size: 12px;
  display: inline-block;
  text-decoration: none;
  font-weight: normal;
  font-size: 10px;
  color: #fff;
  height: 18px;
  line-height: 18px;
  padding: 0 5px 0px 10px;
  position: relative;
  border-radius: 0 5px 5px 0;
  margin: 5px 9px 5px 8px;
  cursor: pointer;
  background: #4cae4c;
  i {
    position: absolute;
    right: 100%;
    font-size: 0;
    line-height: 0;
    border: 9px solid transparent;
    border-right-color: #4cae4c;
  }

  &:after {
    content: " ";
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    -webkit-box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 7px;
    left: 2px;
  }
}
</style>
