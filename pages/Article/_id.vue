<template>
    <article v-if="blogInfo">
        <!-- <h1 class="title">{{blogInfo.title}}</h1> -->
        <div class="article-wrapper">
            <Back></Back>
            <div class="content">
                <div class="box">
                    <Github class="github" :link="blogInfo.github" v-if="blogInfo.github"></Github>
                    <div class="entry">
                        <h1>{{blogInfo.title}}</h1>
                        <time>{{blogInfo.releaseTime | parseTime('{y}-{m}-{d}')}}</time>
                        <div class="intro fmt" v-html="blogHtml"></div>
                    </div>
                    <div class="logo">
                        <img :src="require(`~/assets/images/source_single_${blogInfo.source === 1?1:blogInfo.source === 2?2:3}.png`)" alt="">
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import axios from 'axios'
export default {
    async asyncData({ params }) {
        let { data } = await axios.get('http://guojiongwei.com/client_demo_api/blog/info', { params: {_id: params.id}})
        return {
            blogInfo: data.data,
            blogHtml: data.data.html.replace(/<a /gi, `<a target='_blank'`)
        }
    }
}
</script>


<style lang="scss" scoped>
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
            background: #f9f9f3 url('~assets/images/note-bg.jpg');
            text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.25);
            

            .box {
                padding: 0.3rem 0.6rem;
                border: 1px dashed #c9c9c7;
                position: relative;
                .github {
                    position: absolute;
                    right:0;top:0;
                }

                .entry {
                    line-height: 30px;
                    h1 {
                        margin-bottom: 20px;
                        text-align: center;
                        color: #db5640;
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
                        @media screen and (max-width: 767px){
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
                    }
                }
            }
        }
    }
</style>
