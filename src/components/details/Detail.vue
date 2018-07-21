<template>
    <div class="detail">
        <div class="return" @click="returnPrev"><img src="../../assets/images/return.png" width="9" height="auto" alt="">&nbsp;返回</div>
        <div id="logo">
            <img src="../../assets/images/logo.png" width="105" height="auto" alt="">
        </div>
        <div class="prod-desc">
            <p class="prod-desc-cn">展品介绍</p>
            <p class="prod-desc-en">PRODUCT INTRODUCTION</p>
        </div>
        <div class="title">
            <div class="line"></div>
            <div class="text">珠宝珍品</div>
            <div class="line"></div>
        </div>
        <div>
            <div class="list">
                <li class="list-item"></li>
                <li class="list-item"></li>
            </div>
            <div class="list">
                <li class="list-item"></li>
                <li class="list-item"></li>
            </div>
        </div>
        <div class="show-detail">
            索取门票
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            returnPrev() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .detail{
        position: relative;
        color: #fff;
        text-align: center;

        .return{
            position: absolute;
            left: 10px;
            top: 30px;
            font-size: 16px;
            color: #848894;

            img{
                vertical-align: bottom;
            }
        }
        .prod-desc{
            .prod-desc-cn{
                font-size: 16px;
                margin-bottom: 12px;
            }
            .prod-desc-en{
                font-size: 10px;
            }
        }
        .title{
            display: flex;
            width: 80%;
            margin: 28px auto 16px auto;

            .line{
                flex: 50%;
                position: relative;
                top: -6px;
                border-bottom: 1px solid #fff;
            }

            .text{
                padding: 0 12px;
                font-size: 14px; 
                
            }
        }
        .list{
            display: flex;
            padding: 0 10px;
            margin-bottom: 10px;

            .list-item{
                flex: 1;
                margin: 0 5px;
                height: 160px;
                border: 1px solid #575c70;
            }
        }
    }
</style>

