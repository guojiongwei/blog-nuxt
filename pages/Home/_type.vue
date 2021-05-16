<template>
  <div class="home-wrapper cf">
    <Info></Info>
    <Tags :blogTypes="blogTypes"></Tags>
    <Blog :blogList="blogList"></Blog>
  </div>
</template>
<script>
export default {
  async asyncData({ app, params }) {
    let { data } = await app.$apiGet("client_demo_api/blog/list", {
      params: { type: params.type, pagesize: 10 },
    });
    return {
      blogTypes: [
        { name: "全部" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "Vue" },
        { name: "react" },
        { name: "Webpack" },
        { name: "Node" },
        { name: "算法" },
        { name: "网络协议" },
      ],
      blogList: data.data,
    };
  }
};
</script>

<style lang="less" >
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
</style>
