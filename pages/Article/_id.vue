<template>
  <article v-if="blogInfo" class="article-wrap">
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
    <ul class="sidebar-meuns">
      <li v-for="(item, index) in meuns" :key="index">
        <span @click="onScrollTo(item.offsetTop)" :style="{color: activeMeuns === item.offsetTop ? '#db5640' : 'rgba(186,164,119,.99)'}">{{item.title}}</span>
        <span  class="sub-meuns" v-for="(subItem, subIndex) in item.children" :key="subIndex"
         @click="onScrollTo(subItem.offsetTop)" :style="{color: activeMeuns === subItem.offsetTop ? '#db5640' : 'rgba(186,164,119,.99)'}"
        >{{subItem.title}}</span>
      </li>
    </ul>
  </article>
</template>

<script>
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
      scrollTopList: []
    };
  },
  mounted() {
    this.onCreateMeuns()
    this.onScrollTop()
  },
  methods: {
    onScrollTop() {
      let that = this
      let flag = false
      let target = document.querySelector('.bolg-wrap')
      let sidebarMeuns = document.querySelector('.sidebar-meuns')
      target.onscroll = onScrollTop

      function onScrollTop(e) {
        if(flag) return
        flag = true
        setTimeout(() => flag = false, 300)
        for(let i = 0; i < that.scrollTopList.length; i ++) {
          if(that.scrollTopList[i] > e.target.scrollTop) {
            that.activeMeuns = that.scrollTopList[i-1] || that.scrollTopList[i]
            sidebarMeuns.scrollTop = i * 30 -150
            return
          }
        }
      }
      onScrollTop({target})
    },
    onScrollTo(offsetTop) {
      this.activeMeuns = offsetTop
      let target = document.querySelector('.bolg-wrap')
      target.scrollTop = offsetTop + 80
    },
    onCreateMeuns() {
      const bolgInfo = document.getElementById('bolg-info')
      let childrens = bolgInfo.childNodes
      const meuns = []
      let current
      for(let i = 0; i < childrens.length; i ++) {
        const child = childrens[i]
        if(child.nodeName === 'H2') {
          current = {
            title: child.textContent,
            offsetTop: child.offsetTop,
            children: []
          }
          if(!this.activeMeuns) {
            this.activeMeuns = child.offsetTop
          }
          meuns.push(current)
          this.scrollTopList.push(child.offsetTop)
        } else if(child.nodeName === 'H3') {
          current.children.push({
            title: child.textContent,
            offsetTop: child.offsetTop,
          })
          this.scrollTopList.push(child.offsetTop)
        }
      }
      this.meuns = meuns
    }
  }
};
</script>


<style lang="less" >
.title {
  text-align: center;
  margin: 20px 0;
}
.article-wrapper {
  width: 7rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 0;
  .content {
    width: 100%;
    padding: 10px;
    text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.25);

    .box {
      padding: 0.3rem 0.3rem;
      border: 1px dashed #c9c9c7;
      position: relative;
      .github {
        position: absolute;
        right: 0;
        top: 0;
      }

      .entry {
        line-height: 30px;
        h1 {
          margin-bottom: 20px;
          text-align: center;
          color: #db5640;
          font-size: 28px;
        }
        time {
          color: #b2b2ae;
          font-size: 12px;
          margin-bottom: 20px;
          display: block;
          text-align: center;
        }
        .intro {
          overflow-x: scroll;
          font-size: 14px;
          @media screen and (max-width: 767px) {
            font-size: 12px;
          }
        }
      }

      .logo {
        margin-top: 30px;
        margin-right: -20px;
        text-align: right;
        // padding-right: 0.3rem;
        img {
          width: 50px;
          border-radius: 50%;
        }
      }
    }
  }
}
.bolg-wrap {
  height: 100vh;
  overflow: auto;
}
.article-wrap {
  position:relative;
}
.sidebar-meuns {
  position: fixed;
  top:140px;
  left: calc(50vw + 500px);
  max-height: 2rem;
  overflow: auto;
  min-width: 200px;
  font-size: 14px;
  span{
    display: block;
    color: rgba(186,164,119,.99);
    cursor: pointer;
  }
  .sub-meuns {
    text-indent: 0.1rem;
  }
}
</style>
