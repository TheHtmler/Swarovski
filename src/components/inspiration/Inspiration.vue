<template>
    <div class="inspiration">
        <h3>This is inspiration page</h3>
    </div>
</template>

<script>
    import Swiper from 'swiper'

    export default {
        mounted() {
            new Swiper ('.swiper-container', {
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                autoplay: 1000,
            })
        }
    }
</script>

<style lang="less" scoped>
    .inspiration{
        text-align: center;
        color: #fff;
    }
</style>
