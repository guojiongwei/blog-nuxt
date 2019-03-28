<template>
    <section class="info-wrapper df-center">
        <div class="info-box">
            <div class="avatar"></div>
            <h2 class="name">郭炯韦的个人博客</h2>
        </div>
    </section>
</template>
<style lang="scss" scoped>
/* 垂直居中 */
    .df-center {
        display:flex;
        align-items: center;
        justify-content:center;
    }
    .info-wrapper {
        width: 100%;
        background: rgba(186,164,119,0.99);
        background-image: url('https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3789107209,4022882299&fm=26&gp=0.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        height: 6rem;
        max-height: 500px;
        position: relative;
        text-align: center;
        .avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid rgba(186, 164, 119, 0.99);
            background: url("http://sowcar.com/t6/692/1553782948x986907160.png") no-repeat center center;
            background-size: 100% 100%;
            margin: 0 auto;
            &:hover {
                animation: btnGroups 1s linear;
            }
        }
        .name {
            margin: 30px 0 10px 0;
            font-size: 20px;
            color: rgba(186, 164, 119, 1)
        }
    }
</style>