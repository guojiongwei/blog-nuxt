<template>
    <div class="tags-wrapper">
        <ul>
            <li v-for="(tag,index) in blogTypes" :key="index"><Tag :text="tag.name" :path="tag.name"></Tag></li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: ['blogTypes']
    }
</script>
<style lang="scss" scoped>
    .tags-wrapper {
        max-width: 7rem;
        margin: 20px auto;
        margin-bottom: 0;
    }
    .tags-box li{
        display: inline-block;
    }
</style>