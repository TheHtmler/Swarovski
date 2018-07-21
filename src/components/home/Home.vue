<template>
    <div class="home">
        <div id="logo">
            <img src="../../assets/images/logo.png" width="105" height="auto" alt="">
        </div>
        <div class="tab">
            <div class="tab-item">
                <div class="tab-item-wrapper">
                    <router-link to="/heritage">
                    璀璨珍品
                    <span class="small">HERITAGE</span>
                    </router-link>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-item-wrapper">
                    <router-link to="/photobooth">
                    无限幻境
                    <span class="small">OHOTO BOOTH</span>
                    </router-link>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-item-wrapper">
                    <router-link to="/workshop">
                    手作工坊
                    <span class="small">WORKSHOP</span>  
                    </router-link>
                </div>
            </div>
            <div class="tab-item">
                <div class="tab-item-wrapper">
                    <router-link to="/inspiration">
                    灵感晶品
                    <span class="small">INSPIRATION</span>
                    </router-link>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
    .tab{
        display: flex;
        width: 100%;

        .tab-item{
          flex: 1;
          text-align: center;

          .tab-item-wrapper{
            padding: 0 10px;

            a{
              display: inline-block;
              padding-bottom: 10px;
              font-size: 14px;
              color: #fff;

              .small{
                margin-top: 5px;
                font-size: 8px;
              }

              &.active{
                border-bottom: 6px solid #c8b91f;
              }
            }
          }
        }
      }
</style>

