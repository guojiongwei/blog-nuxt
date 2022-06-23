<template>
  <div class="back-wrapper" @click="back">
    <!-- <Icon name="fanhui" class="back mouse-pointer"></Icon> -->
    <span class="mouse-pointer">Back</span>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
    },
  },
  methods: {
    back() {
      // this.$router.replace({
      //   path: "/",
      // });
      // return;
      if (
        navigator.userAgent.indexOf("MSIE") >= 0 &&
        navigator.userAgent.indexOf("Opera") < 0
      ) {
        // IE
        if (history.length > 1) {
          this.$router.go(-1);
        } else {
          this.$router.replace({
            path: "/",
          });
        }
      } else {
        //非IE浏览器
        if (
          navigator.userAgent.indexOf("Firefox") >= 0 ||
          navigator.userAgent.indexOf("Opera") >= 0 ||
          navigator.userAgent.indexOf("Safari") >= 0 ||
          navigator.userAgent.indexOf("Chrome") >= 0 ||
          navigator.userAgent.indexOf("WebKit") >= 0
        ) {
          if (window.history.length > 2) {
            this.$router.go(-1);
          } else {
            this.$router.replace({
              path: "/",
            });
          }
        } else {
          //未知的浏览器
          this.$router.go(-1);
        }
      }
    },
  },
};
</script>

<style lang="less" >
.back-wrapper {
  // padding: 20px 0;
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
  left: calc(50vw - 550px);

  > * {
    vertical-align: middle;
    color: rgba(186, 164, 119, 0.99);
  }

  &:hover {
    .back {
      color: #db5640;
    }
    span {
      color: #db5640;
    }
  }
  .back {
    font-size: 30px;
  }

  span {
    font-size: 12px;
  }
}
</style>
