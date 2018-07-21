<template>
    <div class="heritage">
        <div class="swiper-container" ref="content">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/images/heritage_banner01.jpg" width="100%" height="auto" alt="">
                    <p class="name">
                        施华洛世奇奥地利总部<br>
                        收藏级珍品首次入沪
                    </p>
                    <p class="description">
                        近二十件总部珍藏展品首次在上海亮相<br>
                        闪耀超过120多年璀璨光辉
                    </p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/heritage_banner02.jpg" width="100%" height="auto" alt="">
                    <p class="name">
                        施华洛世奇奥地利总部<br>
                        收藏级珍品首次入沪
                    </p>
                    <p class="description">
                        近二十件总部珍藏展品首次在上海亮相<br>
                        闪耀超过120多年璀璨光辉
                    </p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/heritage_banner03.jpg" width="100%" height="auto" alt="">
                    <p class="name">
                        施华洛世奇奥地利总部<br>
                        收藏级珍品首次入沪
                    </p>
                    <p class="description">
                        近二十件总部珍藏展品首次在上海亮相<br>
                        闪耀超过120多年璀璨光辉
                    </p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/heritage_banner04.jpg" width="100%" height="auto" alt="">
                    <p class="name">
                        施华洛世奇奥地利总部<br>
                        收藏级珍品首次入沪
                    </p>
                    <p class="description">
                        近二十件总部珍藏展品首次在上海亮相<br>
                        闪耀超过120多年璀璨光辉
                    </p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/heritage_banner05.jpg" width="100%" height="auto" alt="">
                    <p class="name">
                        施华洛世奇奥地利总部<br>
                        收藏级珍品首次入沪
                    </p>
                    <p class="description">
                        近二十件总部珍藏展品首次在上海亮相<br>
                        闪耀超过120多年璀璨光辉
                    </p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/heritage_banner06.jpg" width="100%" height="auto" alt="">
                    <p class="name">
                        施华洛世奇奥地利总部<br>
                        收藏级珍品首次入沪
                    </p>
                    <p class="description">
                        近二十件总部珍藏展品首次在上海亮相<br>
                        闪耀超过120多年璀璨光辉
                    </p>
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/images/heritage_banner07.jpg" width="100%" height="auto" alt="">
                    <p class="name">
                        施华洛世奇奥地利总部<br>
                        收藏级珍品首次入沪
                    </p>
                    <p class="description">
                        近二十件总部珍藏展品首次在上海亮相<br>
                        闪耀超过120多年璀璨光辉
                    </p>
                </div>
            </div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <div class="show-detail" @click="viewDetail">
            展品介绍<img src="../../assets/images/arrow.png" width="11" height="auto" alt="">
        </div>
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
            })
        },
        methods: {
            viewDetail() {
                this.$router.push('./detail')
            }
        }
    }
</script>

<style lang="less" scoped>
    .heritage{

        .swiper-container{
            .swiper-wrapper{
                .swiper-slide{
                    .name, .description{
                        padding: 0 18px;
                        text-align: center;
                        line-height: 30px;
                        font-size: 22px;
                        color: #fff;
                    }
                    .description{
                        margin-top: 32px;
                        line-height: 22px;
                        font-size: 13px;
                    }
                }
            }

            .swiper-button-next, .swiper-button-prev{
                width: 14px;
                height: 22px;
                background-size: 14px 22px;
            }
        }
    }
</style>