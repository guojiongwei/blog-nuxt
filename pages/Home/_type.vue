<template>
  <div class="home-wrapper cf">
    <Info></Info>
    <div class="tags-box">
      <Tags :blogTypes="blogTypes"></Tags>
    </div>
    <div class="view-box">
      <Blog :blogList="blogList"></Blog>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ app, params }) {
    let { data } = await app.$apiGet("client_demo_api/blog/list", {
      params: { type: params.type, pagesize: 100 },
    });
    return {
      blogTypes: [
        { name: "全部" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JavaScript" },
        { name: "React" },
        { name: "Vue" },
        { name: "小程序" },
        { name: "Flutter" },
        { name: 'electron' },
        { name: "Webpack" },
        { name: "Node" },
        { name: "算法" },
        { name: "网络协议" },
        { name: "工具" },
      ],
      blogList: data.data,
    };
  }
};
</script>
