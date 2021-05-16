<template>
  <section class="info-wrapper df-center banner-bg">
    <div class="info-box">
      <Avatar class="avatar" :width='80' :height='80' />
      <h2 class="name">郭炯韦的个人博客</h2>
    </div>
  </section>
</template>
<style lang="less" >
/* 垂直居中 */
.df-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.info-wrapper {
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center center;
  height: 6rem;
  max-height: 500px;
  position: relative;
  text-align: center;
  .avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid rgba(186, 164, 119, 0.99);
    background-size: 100% 100%;
    margin: 0 auto;
    &:hover {
      animation: btnGroups 1s linear;
    }
  }
  .name {
    margin: 30px 0 10px 0;
    font-size: 20px;
    color: rgba(186, 164, 119, 1);
  }
}
</style>
