<template>
  <article v-if="blogInfo" class="article-wrap" ref="articleWrap">
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
            <div class="intro fmt" id="bolg-info" v-html="blogHtml"></div>
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
    <ul class="sidebar-meuns" ref="meuns">
      <li v-for="(item, index) in meuns" :key="index">
        <span @click="onScrollTo(item)" :style="{color: activeMeuns === item.offsetTop ? '#db5640' : 'rgba(186,164,119,.99)'}">{{item.title}}</span>
        <span  class="sub-meuns" v-for="(subItem, subIndex) in item.children" :key="subIndex"
         @click="onScrollTo(subItem)" :style="{color: activeMeuns === subItem.offsetTop ? '#db5640' : 'rgba(186,164,119,.99)'}"
        >{{subItem.title}}</span>
      </li>
    </ul>
    <BeiAn />
    <toTop @click="onTop"></toTop>
  </article>
</template>

<script>

import './index.less'
export default {
  head() {
    return {
      title: this.blogInfo.title,
      meta: [
        {
          name: "keywords",
          hid: "keywords",
          content: "个人博客，简约博客，郭炯韦个人博客，郭炯韦,郭炯韦",
        },
        {
          name: "description",
          hid: "description",
          content: this.blogInfo.title,
        },
      ],
    };
  },
  async asyncData({ app, params }) {
    let { data } = await app.$apiGet("client_demo_api/blog/info", {
      params: { _id: params.id },
    });
    return {
      blogInfo: data.data,
      blogHtml: data.data.html
        .replace(/<a /gi, `<a target='_blank'`)
        .replace(/<img /g, '<img lazyload="auto" loading="lazy"'),
      meuns: [],
      activeMeuns: '',
      scrollTopList: [],
      flag: false,
      titleEleMap: {}
    };
  },
  mounted() {
    this.onCreateMeuns()
    this.onScrollTop()
  },
  methods: {
    onScrollTop() {
      let that = this
      let target = this.$refs.articleWrap
      let sidebarMeuns = this.$refs.meuns
      target.onscroll = onScrollTop

      function onScrollTop(e) {
        if(that.flag) return
        that.flag = true
        setTimeout(() => that.flag = false, 1000)
        for(let i = 0; i < that.scrollTopList.length; i ++) {
          if(that.scrollTopList[i] > e.target.scrollTop) {
            that.activeMeuns = that.scrollTopList[i-1] || that.scrollTopList[0]
            sidebarMeuns.scrollTop = i * 30 -150
            return
          }
        }
      }
      this.$once('hook:beforeDestroy', () => target.onscroll = null)
    },
    onScrollTo(item) {
      this.activeMeuns = item.offsetTop
      this.flag = true
      setTimeout(() => this.flag = false, 300)
      let target = this.$refs.articleWrap
      target.scrollTop = this.titleEleMap[item.index].offsetTop
    },
    onCreateMeuns() {
      setTimeout(() => {
        const bolgInfo = document.getElementById('bolg-info')
        let childrens = bolgInfo.childNodes
        const meuns = []
        let current
        let index = 0
        for(let i = 0; i < childrens.length; i ++) {
          const child = childrens[i]
          if(child.nodeName === 'H2') {
            current = {
              title: child.textContent,
              offsetTop: child.offsetTop,
              children: [],
              index
            }
            if(!this.activeMeuns) {
              this.activeMeuns = child.offsetTop
            }
            meuns.push(current)
            this.scrollTopList.push(child.offsetTop)
            this.titleEleMap[index] = child
            index ++
          } else if(child.nodeName === 'H3') {
            current.children.push({
              title: child.textContent,
              offsetTop: child.offsetTop,
              index
            })
            this.scrollTopList.push(child.offsetTop)
            this.titleEleMap[index] = child
            index ++
          }
        }
        this.meuns = meuns
      }, 100)
    },
    onTop() {
      this.flag = true
      setTimeout(() => this.flag = false, 300)
      let target = this.$refs.articleWrap
      this.activeMeuns = this.scrollTopList[0]
      this.$refs.meuns.scrollTop = 0
      const scrollToTop = () => {
        const c = target ? target.scrollTop : document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollToTop);
          target.scrollTo(0, c - c / 4);
        }
      }
      scrollToTop()
    }
  }
};
</script>
