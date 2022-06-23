<template>
  <section class="blog-wrapper">
    <div v-if="blogList.length > 0">
      <nuxt-link
        class="article note-bg"
        v-for="(v, index) in blogList"
        :key="index"
        :to="`/article/${v._id}`"
        :index="v._id"
      >
        <Github
          class="github mouse-pointer"
          background="rgba(186, 164, 119, 0.99)"
          :github="v.github"
          v-if="v.github"
        ></Github>
        <time>{{ v.releaseTime | parseTime("{y}-{m}-{d}") }}</time>
        <h2 class="name">{{ v.title }}</h2>
        <div class="desc">{{ v.desc }}</div>
        <div class="source">
          <Avatar v-if="v.source === 1" :width='30' :height='30' />
          <img
            v-else
            :src="
              require(`~/assets/images/source_single_${
                v.source === 2 ? 2 : 3
              }.png`)
            "
            alt=""
          />
        </div>
      </nuxt-link>
    </div>
    <NoneData v-else></NoneData>
  </section>
</template>
<script>
export default {
  props: {
    blogList: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>
<style lang="less" >
.blog-wrapper {
  @keyframes change {
    100% {
      opacity: 1;
    }
  }
  .article {
    display: block;
    width: 7rem;
    max-width: 500px;
    padding-bottom: 40px;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.08);
    margin: 30px auto;
    transition: box-shadow 0.4s;
    position: relative;
    opacity: 0.1;
    animation: change 1s;
    animation-fill-mode: forwards;
    color: #42484b;
    cursor: pointer;
    &:hover {
      box-shadow: 5px 15px 30px 5px rgba(0, 0, 0, 0.15);
    }
    time {
      position: absolute;
      bottom: 25px;
      left: 0;
      width: 150px;
      height: 34px;
      // background: rgba(186,164,119,0.99);
      background-image: url("~assets/images/date-bg.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      text-align: center;
      line-height: 34px;
      font-size: 14px;
      &:before {
        content: url("~assets/images/date-edge.svg");
        position: absolute;
        top: 0px;
        right: calc(100% - 2px);
        width: 11px;
        height: 100%;
      }
      &:after {
        content: url("~assets/images/date-tag.svg");
        position: absolute;
        top: 0;
        left: calc(100% - 1px);
        width: 13px;
        height: 100%;
      }
      @media screen and (max-width: 767px) {
        &:before {
          right: calc(100% - 0.07rem);
          top: -0.02rem;
        }
        &:after {
          left: calc(100% - 0.02rem);
        }
      }
    }
    .name {
      text-align: center;
      color: #db5640;
      line-height: 30px;
      width: 80%;
      padding-right: 20px;
      margin: 0 auto;
      padding-top: 10px;
    }
    .tags {
      display: block;
      text-align: center;
      font-size: 12px;
      line-height: 20px;
      padding-bottom: 5px;
      text-align: center;
    }
    .desc {
      width: 70%;
      min-height: 90px;
      margin: 0 auto;
      font-size: 14px;
      text-align: left;
      line-height: 30px;
      text-align: justify;
      span {
        color: #b2b2ae;
        font-size: 12px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    .source {
      width: 70%;
      margin: 0 auto;
      text-align: right;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      img {
        width: 30px;
        position: relative;
        border-radius: 50%;
        top: 10px;
        left: 60px;
      }
    }
    .btns {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 10px 0;
      text-align: right;
    }
  }
}
</style>
