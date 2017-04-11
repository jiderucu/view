<template>
  <div class="p-praise">
    <x-header :left-options="{showBack: false}">好评有礼</x-header>
    <Swiper :list="list" auto loop >
    </Swiper>
    <router-link to="/activity">
         <x-button class="activity">活动规则</x-button>
    </router-link>
    <div class="step">step1:</div>
      <div class="box">
      <span class="left">淘宝订单号</span>
      <input type="text" placeholder="淘宝订单号" class="input-box">
      </div>
    <div class="step" >step2:</div>
    <grid :rows="3" style="margin-top:20px" class>
      <grid-item v-for="item in list1" :key="item.id">
        <img :src="item.img" class="item-img">
        <button class="item-text">{{item.text}}</button>
      </grid-item>
    </grid>
    <div class="submit">
      <x-button type="primary" @click.native="showMsg">立即提交,好评有礼</x-button>
      <router-link to="/opinionrecord" class="text-bar">
        <p style="margin-top: 10px">我的好评记录</p>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import {
    Swiper,
    Grid,
    GridItem,
    AlertPlugin,
    XHeader,
    Group,
    XInput,
    XButton
  } from 'vux'
  Vue.use(AlertPlugin)
  // let router = global.router
  export default {
    data () {
      return {
        list: [{
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }, {
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }, {
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg'
        }],
        list1: [{
          id: 1,
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
          text: '好评截图'
        }, {
          id: 2,
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
          text: '买家秀1'
        }, {
          id: 3,
          img: 'http://pics.sc.chinaz.com/files/pic/pic9/201508/apic14052.jpg',
          text: '买家秀2'
        }]
      }
    },
    methods: {
      showMsg () {
        this.$vux.alert.show({
          title: '提示',
          content: '提交成功，审核专员审核通过后，系统会自动发送红包至您的微信。',
          onShow () {
            console.log('弹窗正常显示!')
          },
          onHide () {
            // console.log(global.router)
            global.router.push('/opinionrecord')
          }
        })
      }
    },
    components: {
      Swiper,
      XHeader,
      XInput,
      Group,
      Grid,
      GridItem,
      XButton
    }
  }
</script>

<style lang="less">
    .p-praise{
      .activity{
        width:100px;
        height:30px;
        font-size: 14px;
        position: absolute;
        right: 8px;
        top: 185px;
      }
      .step{
        height: 30px;
        width:100%;
        border-bottom: 1px solid #bbbbbb;
        border-top: 1px solid #bbbbbb;
        background-color: #ffffff;
        text-align: left;
        line-height: 30px;
        background: #fff;
      }
      .box{
        width:375px;
        height:50px;
        line-height:50px;
      }
      .left{
        font-size: 14px;
        margin-left: 20px;
        text-align:left;
        float: left;

      }
      .input-box{
         width:70%;
         height:25px;
         border-radius: 5px;

      }
      .item-text{
        width:100%;
        height:30px;
        font-size:12px;
        text-decoration: none;
      }
      .item-img{
        width: 100%
      }
      .submit{
        margin:10px;
        text-align:center;
      }
      .text-bar{
        text-decoration:none;
      }
    }
</style>
