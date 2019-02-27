<template>
    <section class="info-wrapper df-center">
        <div class="info-box">
            <div class="avatar"></div>
            <h2 class="name">无忧大帝</h2>
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
        background-image: url('~assets/images/cover.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-position: center center;
        height: 6rem;
        max-height: 400px;
        position: relative;
        text-align: center;
        .avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: 2px solid rgba(186, 164, 119, 0.99);
            background: url("~assets/images/avatar.png") no-repeat center center;
            background-size: 100% 100%;
            margin: 0 auto;
            &:hover {
                animation: btnGroups 1s linear;
            }
        }
        .name {
            margin: 20px 0 10px 0;
            color: rgba(186, 164, 119, 0.99)
        }
    }
</style>