<template>
  <div id="app">
    <div class="loading" v-show="showLoading">
      <div class="logo-item logo-top">
        <img src="./assets/images/loading_logo01.png" width="105" height="auto" alt="">
      </div>
      <div class="logo-item logo-center">
        <img src="./assets/images/loading_logo03.png" width="285" height="auto" alt="">
      </div>
      <div class="logo-item theme">璀璨无限</div>
      <div class="logo-item logo-bottom">
        <img src="./assets/images/loading_logo02.png" width="147" height="auto" alt="">
      </div>
      <div class="loader">
        <div class="loader-inner pacman">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="text">Loading...</div>
      </div>
    </div>
    <div class="main-wrapper">
      <!-- <div class="container"> -->
        <!-- <Home></Home> -->
      <!-- </div> -->
      <keep-alive><router-view></router-view></keep-alive>
    </div>
  </div>
</template>

<script>
  import 'common/less/loaders.css'

  export default {
    name: 'App',
    data() {
      return {
        showLoading: true
      }
    },
    created() {
      this.getLoading()
    },
    methods: {
      getLoading() {
        setTimeout(() => {
          this.showLoading = false
        }, 3000)
      }
    }
  }
</script>

<style lang="less" scoped>
  #app{
      width: 100%;
      height: 100%;
    
    .loading, .main-wrapper{
      width: 100%;
      height: 100%;
      background: url(assets/images/loading_bg.jpg) center no-repeat;
      background-size: 100% 100%;
    }

    .loading{
      position: relative;
      left: 0;
      top: 0;
      z-index: 100;
      text-align: center;

      .logo-item{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        
        &.logo-top{
          top: 4.5%;
        }
        &.logo-center{
          top: 38.6%;
        }
        &.theme{
          top: 50.5%;
          font-size: 32px;
          color: #fff;
        }
        &.logo-bottom{
          bottom: 8.7%;
        }
      }

      .loader{
        position: fixed;
        top: 70%;
        left: 50%;
        transform: translateX(-50%);

        .text{
          color: #fff;
          margin-top: 5px;
        }
      }
    }
    
    .main-wrapper{
      background: url(assets/images/bg.png) center no-repeat;
      background-size: 100% 100%;
    }
  }
</style>
