<template>
    <div class="home-wrapper cf">
        <Info></Info>
        <div class="tags-box">
            <Tags :blogTypes='blogTypes'></Tags>
        </div>
        <div class="view-box">
            <Blog :blogList='blogList'></Blog>
        </div>
    </div>
</template>
<script>
    export default {
        async asyncData({ app, params }) {
            let { data } = await app.$apiGet('client_demo_api/blog/list', { params: {type: params.type, pagesize: 10}})
            return {
                blogTypes: [ 
                    { name: '全部' },
                    { name: 'HTML' },
                    { name: 'CSS' },
                    { name: 'JavaScript' },
                    { name: 'Vue' },
                    { name: 'Webpack' },
                    { name: 'Node' },
                    { name: 'MongoDB' },
                    { name: '算法' },
                    { name: '工具' },
                    { name: '黑科技' }
                ],
                blogList: data.data
            }
        }
    }
</script>

<style lang="scss" scoped>
    @media screen and (min-width: 767px) {
        .tags-box {
            width: 30%;
            float: left;
        }
        .view-box {
            width: 67%;
            float: right;
        }
        .tags-wrapper{
            margin-left: 20px
        }
    }
</style>
