<template>
  <div class="bolg-wrap">
    <nuxt />
    <div class="beian">
      郭炯韦个人博客 备案号:<a
        rel="noopener"
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=豫ICP备17048833号-1&token=2be051c1-22dd-44ec-9f4b-d41155f2d855"
      >
        豫ICP备17048833号-1
      </a>
    </div>
  </div>
</template>

<style>

@media screen and (min-width: 767px) {
  .tags-box {
    width: 30%;
    float: left;
  }
  .view-box {
    width: 67%;
    float: right;
  }
  .tags-wrapper {
    margin-left: 20px;
  }
}
.beian {
  text-align: center;
  font-size: 13px;
  width: 100%;
  overflow: hidden;
  color: rgba(186, 164, 119, 0.99);
}
.beian a {
  color: rgba(186, 164, 119, 0.99);
}
.beian a:hover {
  color: #db5640;
}
</style>
