<template>
  <article v-if="blogInfo">
    <!-- <h1 class="title">{{blogInfo.title}}</h1> -->
    <div class="article-wrapper">
      <Back></Back>
      <div class="content note-bg">
        <div class="box">
          <Github
            class="github"
            :github="blogInfo.github"
            v-if="blogInfo.github"
          ></Github>
          <div class="entry">
            <h1>{{ blogInfo.title }}</h1>
            <time>{{ blogInfo.releaseTime | parseTime("{y}-{m}-{d}") }}</time>
            <div class="intro fmt" v-html="blogHtml"></div>
          </div>
          <div class="logo">
            <Avatar :width='30' :height='30'
              v-if="blogInfo.source === 1"
            />
            <img
              v-else
              :src="
                require(`~/assets/images/source_single_${
                  blogInfo.source === 2 ? 2 : 3
                }.png`)
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <BeiAn />
  </article>
</template>

<script>
import './index.less'
export default {
  head() {
    return {
      title: `郭炯韦博客-${this.blogInfo.title}`,
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          hid: "description",
          content:
            "width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=0",
        },
        {
          name: "keywords",
          hid: "description",
          content: `${this.blogInfo.title}`,
        },
        {
          name: "description",
          hid: "description",
          content: `${this.blogInfo.title}`,
        },
        { name: "author", hid: "author", content: "郭炯韦" },
      ],
    };
  },
  async asyncData({ app, params }) {
    let { data } = await app.$apiGet("client_demo_api/blog/info", {
      params: { _id: params.id },
    });
    return {
      blogInfo: data.data,
      blogHtml: data.data.html.replace(/<a /gi, `<a target='_blank'`),
    };
  },
};
</script>
