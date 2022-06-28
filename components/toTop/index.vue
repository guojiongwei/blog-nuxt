<template>
  <div class="top-wrap" @click="$emit('click')">Top</div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
.top-wrap {
  width: 40px;
  height: 40px;
  display: inline-block;
  z-index: 999;
  border-radius: 50%;
  background: #f9f9f3;
  text-align: center;
  line-height: 40px;
  margin: 20px 0;
  position: fixed;
  left: calc(50vw + 550px);
  bottom: 40px;
  font-size: 12px;
  color: rgba(186, 164, 119, 0.99);
  cursor: pointer;
  transition: all .3s;
  &:hover {
    transform: scale(1.2);
  }
}
@media screen and(max-width: 1200px) {
  .top-wrap {
    right: 20px !important;
    z-index: 1 !important;
    background: #fff !important;
    left: unset !important;
  }
}
</style>
